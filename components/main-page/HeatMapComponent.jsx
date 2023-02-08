import { ResponsiveHeatMap } from "@nivo/heatmap";
const data = [
    {
        data: [
            {
                x: "Dramas",
                y: 827,
            },
            {
                x: "Comedies",
                y: 667,
            },
            {
                x: "Action Adventure",
                y: 401,
            },
            {
                x: "Independent Movies",
                y: 389,
            },
            {
                x: "Children Family Movies",
                y: 369,
            },
            {
                x: "Thrillers",
                y: 292,
            },
        ],
        id: "United States",
    },
    {
        data: [
            {
                x: "International Movies",
                y: 840,
            },
            {
                x: "Dramas",
                y: 657,
            },
            {
                x: "Comedies",
                y: 319,
            },
            {
                x: "Independent Movies",
                y: 165,
            },
            {
                x: "Action Adventure",
                y: 137,
            },
            {
                x: "Romantic Movies",
                y: 117,
            },
        ],
        id: "India",
    },
    {
        data: [
            {
                x: "Dramas",
                y: 194,
            },
            {
                x: "International Movies",
                y: 138,
            },
            {
                x: "Comedies",
                y: 89,
            },
            {
                x: "Action Adventure",
                y: 82,
            },
            {
                x: "Independent Movies",
                y: 73,
            },
            {
                x: "Documentaries",
                y: 69,
            },
        ],
        id: "United Kingdom",
    },
    {
        data: [
            {
                x: "International Movies",
                y: 191,
            },
            {
                x: "Dramas",
                y: 167,
            },
            {
                x: "Independent Movies",
                y: 73,
            },
            {
                x: "Comedies",
                y: 51,
            },
            {
                x: "Thrillers",
                y: 44,
            },
            {
                x: "Action Adventure",
                y: 37,
            },
        ],
        id: "France",
    },
    {
        data: [
            {
                x: "Comedies",
                y: 94,
            },
            {
                x: "Dramas",
                y: 81,
            },
            {
                x: "Children Family Movies",
                y: 74,
            },
            {
                x: "Thrillers",
                y: 49,
            },
            {
                x: "International Movies",
                y: 48,
            },
            {
                x: "Independent Movies",
                y: 44,
            },
        ],
        id: "Canada",
    },
    {
        data: [
            {
                x: "International Movies",
                y: 124,
            },
            {
                x: "Dramas",
                y: 76,
            },
            {
                x: "Comedies",
                y: 46,
            },
            {
                x: "Thrillers",
                y: 38,
            },
            {
                x: "Independent Movies",
                y: 20,
            },
            {
                x: "Sci-Fi Fantasy",
                y: 11,
            },
        ],
        id: "Spain",
    },
    {
        data: [
            {
                x: "International Movies",
                y: 83,
            },
            {
                x: "Dramas",
                y: 79,
            },
            {
                x: "Comedies",
                y: 41,
            },
            {
                x: "Independent Movies",
                y: 31,
            },
            {
                x: "Action Adventure",
                y: 31,
            },
            {
                x: "Thrillers",
                y: 28,
            },
        ],
        id: "Germany",
    },
    {
        data: [
            {
                x: "International Movies",
                y: 66,
            },
            {
                x: "Anime Features",
                y: 60,
            },
            {
                x: "Action Adventure",
                y: 56,
            },
            {
                x: "Dramas",
                y: 23,
            },
            {
                x: "Children Family Movies",
                y: 19,
            },
            {
                x: "Comedies",
                y: 9,
            },
        ],
        id: "Japan",
    },
    {
        data: [
            {
                x: "International Movies",
                y: 69,
            },
            {
                x: "Action Adventure",
                y: 62,
            },
            {
                x: "Dramas",
                y: 31,
            },
            {
                x: "Comedies",
                y: 30,
            },
            {
                x: "Children Family Movies",
                y: 15,
            },
            {
                x: "Sci-Fi Fantasy",
                y: 13,
            },
        ],
        id: "China",
    },
    {
        data: [
            {
                x: "International Movies",
                y: 86,
            },
            {
                x: "Dramas",
                y: 64,
            },
            {
                x: "Comedies",
                y: 40,
            },
            {
                x: "Romantic Movies",
                y: 19,
            },
            {
                x: "Thrillers",
                y: 16,
            },
            {
                x: "Independent Movies",
                y: 7,
            },
        ],
        id: "Nigeria",
    },
];

const findDiferrnt = () => {
    let different = [];
    data.map((itemData) => {
        itemData.data.map((genre) => {
            if (!different.includes(genre.x)) {
                different.push(genre.x);
            }
        });
    });
    console.log(different);
};

const HeatMapComponent = () => {
    findDiferrnt();
    // console.log(data);
    return (
        <ResponsiveHeatMap
            data={data}
            margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
            valueFormat=">-.2s"
            axisTop={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -90,
                legend: "",
                legendOffset: 46,
            }}
            axisRight={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "country",
                legendPosition: "middle",
                legendOffset: 70,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "country",
                legendPosition: "middle",
                legendOffset: -72,
            }}
            colors={{
                type: "diverging",
                scheme: "red_yellow_green",
                minValue: 0,
                maxValue: 840,
                divergeAt: 0.5,
            }}
            emptyColor="#555555"
            legends={[
                {
                    anchor: "bottom",
                    translateX: 0,
                    translateY: 30,
                    length: 400,
                    thickness: 8,
                    direction: "row",
                    tickPosition: "after",
                    tickSize: 3,
                    tickSpacing: 4,
                    tickOverlap: false,
                    tickFormat: ">-.2s",
                    title: "Value →",
                    titleAlign: "start",
                    titleOffset: 4,
                },
            ]}
        />
    );
};

export default HeatMapComponent;
