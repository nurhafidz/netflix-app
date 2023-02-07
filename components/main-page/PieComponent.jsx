import { ResponsivePie } from "@nivo/pie";

const data = [
    {
        color: "rgb(241, 196, 15)",
        id: "Movie",
        label: "Movie",
        value: 5185,
    },
    {
        color: "hsl(277, 70%, 50%)",
        id: "TV Show",
        label: "TV Show",
        value: 147,
    },
];

const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
    let total = 0;
    dataWithArc.forEach((datum) => {
        total += datum.value;
    });
    return (
        <text
            x={centerX}
            y={centerY}
            textAnchor="middle"
            dominantBaseline="central"
            style={{
                fontSize: "2rem",
                fontWeight: 600,
            }}
        >
            {total}
        </text>
    );
};

const PieComponent = () => {
    return (
        <>
            <ResponsivePie
                data={data}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.75}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={{ scheme: "category10" }}
                borderWidth={1}
                arcLinkLabel={(d) => `${d.id} (${d.formattedValue})`}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 0.2]],
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                }}
                layers={[
                    "arcs",
                    "arcLabels",
                    "arcLinkLabels",
                    "legends",
                    CenteredMetric,
                ]}
                defs={[
                    {
                        id: "dots",
                        type: "patternDots",
                        background: "inherit",
                        color: "rgba(255, 255, 255, 0.3)",
                        size: 4,
                        padding: 1,
                        stagger: true,
                    },
                    {
                        id: "lines",
                        type: "patternLines",
                        background: "inherit",
                        color: "rgba(255, 255, 255, 0.3)",
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                    },
                ]}
                legends={[
                    {
                        anchor: "bottom",
                        direction: "row",
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: "#999",
                        itemDirection: "left-to-right",
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: "circle",
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemTextColor: "#000",
                                },
                            },
                        ],
                    },
                ]}
            />
        </>
    );
};
export default PieComponent;
