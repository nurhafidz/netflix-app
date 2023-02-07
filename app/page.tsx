"use client";
import HeroComponent from "@/components/main-page/HeroComponent";
import { Montserrat } from "@next/font/google";
import Navbar from "@/components/layout/navbar";
import { useState, useEffect, Fragment, Suspense } from "react";
import ComboboxComponents from "@/components/main-page/ComboboxComponents.jsx";
import { getManyData } from "@/data/getDataAll.js";
import MapsComponent from "@/components/main-page/MapsComponent.jsx";
import Loading from "./loading";
import PieComponent from "@/components/main-page/PieComponent.jsx";

const inter = Montserrat({ subsets: ["latin"] });

interface Porps {
    casts: any;
    types: any;
    ratings: any;
    directors: any;
    countries: any;
    genres: any;
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
        };
        setMovieData(allData);

        setSelectedData(allData.ratings[0], "rating");
        setSelectedData(allData.types[0], "type");
        setSelectedData(allData.directors[0], "director");
        setSelectedData(allData.countries[1], "country");
        setSelectedData(allData.genres[0], "genre");
        setSelectedData(allData.casts[0], "cast");

        setQueryData(allData.ratings[0], "rating");
        setQueryData(allData.types[0], "type");
        setQueryData(allData.directors[0], "director");
        setQueryData(allData.countries[0], "country");
        setQueryData(allData.genres[0], "genre");
        setQueryData(allData.casts[0], "cast");
        setLoading(false);
    };

    const [movieData, setMovieData] = useState<Porps>();
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState({
        rating: "",
        director: "",
        type: "",
        country: "",
        genre: "",
        cast: "",
    });

    const [query, setQuery] = useState({
        cast: "",
        type: "",
        rating: "",
        director: "",
        country: "",
        genre: "",
    });

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
        setSelected((currentFormData: any) => {
            const nextFormData = {
                ...currentFormData,
                [namecol]: val,
            };
            return nextFormData;
        });
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

            <div className="w-full h-screen">
                <div className="container mx-auto mt-5">
                    <div className="grid grid-cols-6 gap-5">
                        <div>
                            <div>Director Movie</div>
                            <Suspense fallback={<Loading />}>
                                {movieData?.directors && (
                                    <ComboboxComponents
                                        selectedArr={selected.director}
                                        setSelectedArr={(val: any) =>
                                            setSelectedData(val, "director")
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
                        <div>
                            <div>Country Movie</div>
                            <Suspense fallback={<Loading />}>
                                {movieData?.directors && (
                                    <ComboboxComponents
                                        selectedArr={selected.country}
                                        setSelectedArr={(val: any) =>
                                            setSelectedData(val, "country")
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
                        <div>
                            <div>Genre Movie</div>
                            <ComboboxComponents
                                selectedArr={selected.genre}
                                setSelectedArr={(val: any) =>
                                    setSelectedData(val, "genre")
                                }
                                query={query}
                                setQuery={setQueryData}
                                arrData={movieData?.genres.slice(0, 100)}
                                namecol="genre"
                            />
                        </div>
                        <div>
                            <div>Type Movie</div>
                            <ComboboxComponents
                                selectedArr={selected.type}
                                setSelectedArr={(val: any) =>
                                    setSelectedData(val, "type")
                                }
                                query={query}
                                setQuery={setQueryData}
                                arrData={movieData?.types.slice(0, 100)}
                                namecol="type"
                            />
                        </div>
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
                        <div>
                            <div>Cast Movie</div>
                            <ComboboxComponents
                                selectedArr={selected.cast}
                                setSelectedArr={(val: any) =>
                                    setSelectedData(val, "cast")
                                }
                                query={query}
                                setQuery={setQueryData}
                                arrData={movieData?.casts.slice(0, 100)}
                                namecol="cast"
                            />
                        </div>
                    </div>
                </div>

                <MapsComponent />
            </div>

            <div className="w-full h-full">
                <div className="grid grid-cols-3">
                    <div className=" h-80">
                        <PieComponent />
                    </div>
                    <div className=" h-80">
                        <PieComponent />
                    </div>
                    <div className=" h-80">
                        <PieComponent />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

