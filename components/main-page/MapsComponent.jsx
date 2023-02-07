import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import data from "@/data/data.json";
import countries from "@/data/world_countries.json";
const MapsComponent = () => {
    return (
        <>
            <ResponsiveChoropleth
                data={data}
                features={countries.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="nivo"
                domain={[0, 2500]}
                unknownColor="#666666"
                label="properties.name"
                valueFormat=".2s"
                projectionTranslation={[0.5, 0.5]}
                projectionRotation={[0, 0, 0]}
                enableGraticule={false}
                graticuleLineColor="#dddddd"
                borderWidth={0.5}
                borderColor="#152538"
                legends={[
                    {
                        anchor: "bottom-left",
                        direction: "column",
                        justify: true,
                        translateX: 200,
                        translateY: -150,
                        itemsSpacing: 0,
                        itemWidth: 94,
                        itemHeight: 18,
                        itemDirection: "left-to-right",
                        itemTextColor: "#444444",
                        itemOpacity: 0.85,
                        symbolSize: 18,
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemTextColor: "#000000",
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
            />
        </>
    );
};

export default MapsComponent;
