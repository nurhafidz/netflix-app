"use client";
import HeroComponent from "@/components/main-page/HeroComponent";
import { Montserrat } from "@next/font/google";
import Navbar from "@/components/layout/navbar";
import { useState, useEffect, Suspense, useRef } from "react";
import ComboboxComponents from "@/components/main-page/ComboboxComponents.jsx";
import {
    getManyData,
    getTypeGraph,
    getRatingGraph,
    getGenreGraph,
    getCountriesGraph,
    getDirectorsGraph,
    getCastsGraph,
} from "@/data/getDataAll.js";
import MapsComponent from "@/components/main-page/MapsComponent.jsx";
import Loading from "./loading";
import PieComponent from "@/components/main-page/PieComponent.jsx";
import HorizontalBarChartComponent from "@/components/main-page/HorizontalBarChartComponent.jsx";
import BarChartComponent from "@/components/main-page/BarChartComponent.jsx";

const inter = Montserrat({ subsets: ["latin"] });

interface Porps {
    casts: any;
    types: any;
    ratings: any;
    directors: any;
    countries: any;
    genres: any;
    menus: any;
}
interface TypesGraphProps {
    data: any;
    message: any;
    status_code: any;
}
interface RatingsGraphProps {
    data: any;
    message: any;
    status_code: any;
}
interface GenresGraphProps {
    data: any;
    message: any;
    status_code: any;
}
interface CountriesGraphProps {
    data: any;
    message: any;
    status_code: any;
}
interface DirectorsGraphProps {
    data: any;
    message: any;
    status_code: any;
}
interface CastsGraphProps {
    data: any;
    message: any;
    status_code: any;
}

const dataMenu = [
    "Director Movie",
    "Country Movie",
    "Genre Movie",
    "Type Movie",
    "Rating Movie",
    "Cast Movie",
];

async function getDataWithFilter(
    url: any,
    filter: any,
    value: any,
    check: boolean
) {
    let res;
    if (check) {
        res = await fetch(`https://lutfianrhdn.me${url}/grafik`);
    } else {
        res = await fetch(
            `https://lutfianrhdn.me${url}?key=${filter}&value=${value}`
        );
    }

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}


const Home = () => {
    const getData = async () => {
        setLoading(true);
        let manyData: any = Array() as any;
        manyData = await getManyData();
        const typesData = manyData[0] ? manyData[0] : 0;
        const ratingsData = manyData[1];
        const directorsData = manyData[2];
        const countriesData = manyData[3];
        const genresData = manyData[4];
        const castsData = manyData[5];

        const allData = {
            casts: castsData.data,
            types: typesData.data,
            ratings: ratingsData.data,
            directors: directorsData.data,
            countries: countriesData.data.map((a: any) => a.country),
            genres: genresData.data,
            menus: dataMenu,
        };
        setMovieData(allData);
        setTypesGraph(await getTypeGraph());
        setRatingGraph(await getRatingGraph());
        setGenresGraph(await getGenreGraph());
        setCountriesGraph(await getCountriesGraph());
        setDirectorsGraph(await getDirectorsGraph());
        setGenresGraphBackUp(await getGenreGraph());
        setLoading(false);
    };

    const [movieData, setMovieData] = useState<Porps>();
    const [loading, setLoading] = useState(true);
    const [typesGraph, setTypesGraph] = useState<TypesGraphProps>();
    const [ratingGraph, setRatingGraph] = useState<RatingsGraphProps>();
    const [genresGraph, setGenresGraph] = useState<GenresGraphProps>();
    const [genresGraphBackUp, setGenresGraphBackUp] =
        useState<GenresGraphProps>();
    const [countriesGraph, setCountriesGraph] = useState<CountriesGraphProps>();
    const [directorsGraph, setDirectorsGraph] = useState<DirectorsGraphProps>();
    const [castsGraph, setCastsGraph] = useState<CastsGraphProps>();
    const [activeMenu, setActiveMenu] = useState("");
    const [result, setResult] = useState("");
    const [selected, setSelected] = useState({
        rating: "",
        director: "",
        type: "",
        country: "",
        genre: "",
        cast: "",
        menu: "",
    });

    const [query, setQuery] = useState({
        cast: "",
        type: "",
        rating: "",
        director: "",
        country: "",
        genre: "",
        menu: "",
    });

    const findActiveMenu = (selectedVal: any) => {
        setActiveMenu(selectedVal.split(" ")[0].toLowerCase());
    };

    const setQueryData = (val: any, namecol: any) => {
        setQuery((currentFormData: any) => {
            const nextFormData = {
                ...currentFormData,
                [namecol]: val,
            };
            return nextFormData;
        });
    };
    const setSelectedData = (val: any, namecol: any) => {
        if (namecol == "menu") {
            findActiveMenu(val);
        }
        setSelected((currentFormData: any) => {
            const nextFormData = {
                ...currentFormData,
                [namecol]: val,
            };
            return nextFormData;
        });
    };

    const findMovie = async (
        selectedFilter: string,
        selectedValueFromFilter: any
    ) => {
        type Key = "rating" | "director" | "country" | "genre" | "cast";

        const urlData = {
            genre: "/gendres",
            rating: "/ratings",
            director: "/directors",
            type: "/types",
            country: "/countries",
            cast: "/casts",
        };
        // const excludeKeys = selectedFilter as Key[];
        // const filteredData = Object.keys(urlData)
        //     .filter((key) => !excludeKeys.includes(key as Key))
        //     .reduce((obj, key) => {
        //         obj[key as keyof typeof obj] = urlData[key as keyof typeof obj];
        //         return obj;
        //     }, {} as { [key in Key]: string });
        const check = urlData[selectedFilter as keyof typeof urlData];

        const resultDat = await Object.keys(urlData).map(async (key) => {
            if (selectedFilter == "genre") selectedFilter = "gendre";
            const catchData = await getDataWithFilter(
                urlData[key as keyof typeof urlData],
                selectedFilter,
                selectedValueFromFilter,
                check == urlData[key as keyof typeof urlData]
            );
            return {
                [key]: catchData,
            };
        });

        const arrObject = await Promise.all(resultDat);
        const dataAsObject = Object.assign({}, ...arrObject);
        console.log(dataAsObject);

        Object.keys(dataAsObject).forEach((key) => {
            if (selectedFilter != key) {
                dataAsObject[key].data.forEach((item: any) => {
                    item.id = item[key];
                    item.value = item.count;
                    item.label = item[key];
                    delete item[key];
                    delete item.count;
                });
            }
        });
        // console.log(dataAsObject);
        setRatingGraph(dataAsObject.rating);
        setTypesGraph(dataAsObject.type);
        if (selectedFilter == "genre") {
            setGenresGraph(genresGraphBackUp);
        } else {
            setGenresGraph(dataAsObject.genre);
        }
        setCountriesGraph(dataAsObject.country);
        setDirectorsGraph(dataAsObject.director);
        setCastsGraph(dataAsObject.cast);
    };

    useEffect(() => {
        getData();
    }, []);

    if (loading) {
        return <>sabar ya bang</>;
    }

    return (
        <>
            <Navbar />
            <HeroComponent />

            <div className="w-full h-full">
                <div className="container mx-auto">
                    <div className="flex w-full justify-center text-2xl font-semibold p-5">
                        Create Your Pilem
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="">
                            <div>
                                <div>Select Filter</div>
                                <Suspense fallback={<Loading />}>
                                    {movieData?.menus && (
                                        <ComboboxComponents
                                            selectedArr={selected.menu}
                                            setSelectedArr={(val: any) =>
                                                setSelectedData(val, "menu")
                                            }
                                            query={query}
                                            setQuery={setQueryData}
                                            arrData={movieData?.menus}
                                            namecol="menu"
                                        />
                                    )}
                                </Suspense>
                            </div>
                            <div className="mt-5">
                                {selected.menu == "Director Movie" && (
                                    <div>
                                        <div>Director Movie</div>
                                        <Suspense fallback={<Loading />}>
                                            {movieData?.directors && (
                                                <ComboboxComponents
                                                    selectedArr={
                                                        selected.director
                                                    }
                                                    setSelectedArr={(
                                                        val: any
                                                    ) =>
                                                        setSelectedData(
                                                            val,
                                                            "director"
                                                        )
                                                    }
                                                    query={query}
                                                    setQuery={setQueryData}
                                                    arrData={movieData?.directors.slice(
                                                        0,
                                                        100
                                                    )}
                                                    namecol="director"
                                                />
                                            )}
                                        </Suspense>
                                    </div>
                                )}
                                {selected.menu == "Country Movie" && (
                                    <div>
                                        <div>Country Movie</div>
                                        <Suspense fallback={<Loading />}>
                                            {movieData?.directors && (
                                                <ComboboxComponents
                                                    selectedArr={
                                                        selected.country
                                                    }
                                                    setSelectedArr={(
                                                        val: any
                                                    ) =>
                                                        setSelectedData(
                                                            val,
                                                            "country"
                                                        )
                                                    }
                                                    query={query}
                                                    setQuery={setQueryData}
                                                    arrData={movieData?.countries.slice(
                                                        0,
                                                        100
                                                    )}
                                                    namecol="country"
                                                />
                                            )}
                                        </Suspense>
                                    </div>
                                )}
                                {selected.menu == "Genre Movie" && (
                                    <div>
                                        <div>Genre Movie</div>
                                        <ComboboxComponents
                                            selectedArr={selected.genre}
                                            setSelectedArr={(val: any) =>
                                                setSelectedData(val, "genre")
                                            }
                                            query={query}
                                            setQuery={setQueryData}
                                            arrData={movieData?.genres.slice(
                                                0,
                                                100
                                            )}
                                            namecol="genre"
                                        />
                                    </div>
                                )}
                                {selected.menu == "Type Movie" && (
                                    <div>
                                        <div>Type Movie</div>
                                        <ComboboxComponents
                                            selectedArr={selected.type}
                                            setSelectedArr={(val: any) =>
                                                setSelectedData(val, "type")
                                            }
                                            query={query}
                                            setQuery={setQueryData}
                                            arrData={movieData?.types.slice(
                                                0,
                                                100
                                            )}
                                            namecol="type"
                                        />
                                    </div>
                                )}
                                {selected.menu == "Rating Movie" && (
                                    <div>
                                        <div>Rating Movie</div>
                                        <ComboboxComponents
                                            selectedArr={selected.rating}
                                            setSelectedArr={(val: any) =>
                                                setSelectedData(val, "rating")
                                            }
                                            query={query}
                                            setQuery={setQueryData}
                                            arrData={movieData?.ratings}
                                            namecol="rating"
                                        />
                                    </div>
                                )}
                                {selected.menu == "Cast Movie" && (
                                    <div>
                                        <div>Cast Movie</div>
                                        <ComboboxComponents
                                            selectedArr={selected.cast}
                                            setSelectedArr={(val: any) =>
                                                setSelectedData(val, "cast")
                                            }
                                            query={query}
                                            setQuery={setQueryData}
                                            arrData={movieData?.casts.slice(
                                                0,
                                                100
                                            )}
                                            namecol="cast"
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="flex w-full justify-end items-end mt-5">
                                <button
                                    type="button"
                                    className=" px-5 py-2 bg-[#6D8B74] text-white rounded"
                                    onClick={() => {
                                        findMovie(
                                            activeMenu,
                                            selected[
                                                activeMenu as keyof typeof selected
                                            ]
                                        );
                                    }}
                                >
                                    Find
                                </button>
                            </div>
                        </div>
                        <div className="h-full w-full bg-gray-200 rounded p-5">
                            result
                            <div>{result}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-5">
                <div className="text-center p-5 font-semibold text-2xl">
                    Maps Country About Movie
                </div>
                <div className="w-full h-[80vh]">
                    <MapsComponent />
                </div>
            </div>

            <div className="w-full h-full container mx-auto">
                <div className="w-full h-[50vh] grid grid-cols-3 bg-gray-200 mb-5 p-5 rounded">
                    <div className="h-full flex justify-center items-center flex-col">
                        <div className="flex-row flex items-end">
                            <div className="text-5xl font-bold">10</div>
                            <div className=" font-semibold text-m">
                                Highest in the Country
                            </div>
                        </div>
                        <div className="w-full flex justify-center font-semibold text-m">
                            is the best who made it{" "}
                        </div>
                    </div>
                    <div className="col-span-2">
                        <BarChartComponent
                            data={countriesGraph?.data}
                            xlengend="country"
                            ylegend="movie"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5 mb-5">
                    <div className="rounded border w-full h-full p-5">
                        <div className="border-b">Analysis of Type</div>
                        <div className=" h-80">
                            {typesGraph?.data != undefined && (
                                <PieComponent data={typesGraph?.data} />
                            )}
                        </div>
                    </div>
                    <div className="rounded border w-full h-full p-5">
                        <div className="border-b">Analysis of Genre</div>
                        <div>
                            some of the genres that are like it at this time
                        </div>
                        <div className=" h-80">
                            {genresGraph?.data != undefined && (
                                <HorizontalBarChartComponent
                                    data={
                                        genresGraph?.data[0].id == undefined
                                            ? genresGraphBackUp?.data
                                            : genresGraph?.data
                                    }
                                />
                            )}
                        </div>
                    </div>
                    <div className="rounded border w-full h-full p-5">
                        <div className="border-b">Analysis of Rating</div>
                        <div className=" h-80">
                            {ratingGraph?.data != undefined && (
                                <PieComponent data={ratingGraph?.data} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="w-full h-[50vh] grid grid-cols-3 bg-gray-200 mb-5 p-5 rounded">
                    <div className="h-full flex justify-center items-center flex-col">
                        <div className="flex-row flex items-end">
                            <div className=" font-semibold text-m">
                                The director who is best in production it
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        {directorsGraph?.data != undefined && (
                            <BarChartComponent
                                data={directorsGraph?.data}
                                xlengend="director"
                                ylegend="movie"
                            />
                        )}
                    </div>
                </div>
                {/* <div className="w-full h-[50vh] grid grid-cols-3 bg-gray-200 mb-5 p-5 rounded">
                    <div className="h-full flex justify-center items-center flex-col">
                        <div className="flex-row flex items-end">
                            <div className=" font-semibold text-m">
                                The director who is best in production it
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <BarChartComponent
                            data={castsGraph?.data}
                            xlengend="casts"
                            ylegend="movie"
                        />
                    </div>
                </div> */}
            </div>
            <div className="m-5 container mx-auto">
                <div className="text-center mb-5">Our Team</div>
                <div className="grid grid-cols-3 gap-5 justify-items-center">
                    {[...Array(6)].map((x, i) => (
                        <div
                            key={i}
                            className="text-sm flex justify-center flex-col items-center"
                        >
                            <div className="bg-gray-500 rounded-full h-24 w-24 flex justify-center mb-3"></div>
                            <div className="text-center">10121145</div>
                            <div>Hafizah</div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="h-full w-full p-5 bg-[#6D8B74] text-white">
                    <div className="flex justify-center justify-end">
                        Copyright, 2013
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

