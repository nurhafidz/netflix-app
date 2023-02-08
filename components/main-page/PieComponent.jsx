import { ResponsivePie } from "@nivo/pie";

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

const PieComponent = ({ data }) => {
    let finalData;
    if (data.length > 5) {
        const sortedData = data.sort((a, b) => b.value - a.value);
        const topFive = sortedData.slice(0, 5);
        const otherData = sortedData.slice(5);

        const combinedOtherData = {
            color: "rgb(100, 100, 100)",
            id: "Other",
            label: "Other",
            value: otherData.reduce((sum, item) => sum + item.value, 0),
        };
        finalData = [...topFive, combinedOtherData];
    } else {
        finalData = data;
    }

    return (
        <>
            <ResponsivePie
                data={finalData}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.75}
                padAngle={0.7}
                cornerRadius={0}
                activeOuterRadiusOffset={8}
                colors={{ scheme: "yellow_green" }}
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
