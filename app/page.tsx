"use client";
import HeroComponent from "@/components/main-page/Hero";
import { Montserrat } from "@next/font/google";
import Navbar from "@/components/layout/navbar";
import { useState, useEffect, Fragment } from "react";
import ComboboxComponents from "@/components/main-page/ComboboxComponents.jsx";
import {
    getDataCast,
    getDataTypes,
    getDataRatings,
    getDataDirectors,
    getDataCountries,
    getDataGenres,
} from "@/data/getDataAll.js";
import MapsComponent from "@/components/main-page/maps.jsx";

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
        const castsData = await getDataCast();
        const typesData = await getDataTypes();
        const ratingsData = await getDataRatings();
        const directorsData = await getDataDirectors();
        const countriesData = await getDataCountries();
        const genresData = await getDataGenres();

        const allData = {
            casts: castsData.data,
            types: typesData.data,
            ratings: ratingsData.data,
            directors: directorsData.data,
            countries: countriesData.data,
            genres: genresData.data,
        };
        setMovieData(allData);

        setSelectedData(allData.ratings[0], "rating");
        setSelectedData(allData.types[0], "type");
        setSelectedData(allData.directors[0], "director");
        setSelectedData(allData.countries[0], "country");
        setSelectedData(allData.genres[0], "genre");
        setSelectedData(allData.casts[0], "cast");

        setQueryData(allData.ratings[0], "rating");
        setQueryData(allData.types[0], "type");
        setQueryData(allData.directors[0], "director");
        setQueryData(allData.countries[0], "country");
        setQueryData(allData.genres[0], "genre");
        setQueryData(allData.casts[0], "cast");
    };

    const [movieData, setMovieData] = useState<Porps>();
    const [selected, setSelected] = useState({
        rating: movieData?.ratings[0],
        director: movieData?.directors[0],
        type: movieData?.types[0],
        country: movieData?.countries[0],
        genre: movieData?.genres[0],
        cast: movieData?.casts[0],
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

    return (
        <>
            <Navbar />
            <HeroComponent />

            <div className="w-full h-screen">
                <div className="container mx-auto mt-5">
                    {movieData?.ratings && (
                        <div className="grid grid-cols-6 gap-5">
                            <div>
                                <div>Director Movie</div>
                                <ComboboxComponents
                                    selectedArr={selected.director}
                                    setSelectedArr={(val: any) =>
                                        setSelectedData(val, "director")
                                    }
                                    query={query}
                                    setQuery={setQueryData}
                                    arrData={movieData?.directors.slice(0, 100)}
                                    namecol="director"
                                />
                            </div>
                            <div>
                                <div>Country Movie</div>
                                <ComboboxComponents
                                    selectedArr={selected.country}
                                    setSelectedArr={(val: any) =>
                                        setSelectedData(val, "country")
                                    }
                                    query={query}
                                    setQuery={setQueryData}
                                    arrData={movieData?.countries.slice(0, 100)}
                                    namecol="country"
                                />
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
                    )}
                </div>

                <MapsComponent />
            </div>

            <div className="w-full h-screen"></div>
        </>
    );
};

export default Home;

