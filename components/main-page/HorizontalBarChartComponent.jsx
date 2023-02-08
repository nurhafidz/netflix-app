import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const HorizontalBarChartComponent = ({ data }) => {
    const sortedData = data.sort((a, b) => b.value - a.value);
    const topFive = sortedData.slice(0, 7);
    return (
        <>
            <ResponsiveBar
                data={topFive}
                margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
                padding={0.3}
                colors={{ scheme: "dark2" }}
                layout="horizontal"
                enableGridY={false}
                enableGridX={true}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 1.6]],
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "many genre",
                    legendPosition: "middle",
                    legendOffset: 32,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "",
                    legendPosition: "middle",
                    legendOffset: -40,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: "color",
                    modifiers: [["darker", 1.6]],
                }}
                role="application"
                barAriaLabel={function (e) {
                    return e.id + " :" + e.indexValue;
                }}
                legends={[
                    {
                        anchor: "top",
                        direction: "row",
                        justify: false,
                        translateX: 0,
                        translateY: -30,
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

export default HorizontalBarChartComponent;
