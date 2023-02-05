const backend_url = "https://movie-app2.coandbox.com";
const getDataCast = async () => {
    const res = await fetch(`${backend_url}/casts`);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};
const getDataTypes = async () => {
    const res = await fetch(`${backend_url}/types`);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};
const getDataRatings = async () => {
    const res = await fetch(`${backend_url}/ratings`);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};
const getDataDirectors = async () => {
    const res = await fetch(`${backend_url}/directors`);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};
const getDataCountries = async () => {
    const res = await fetch(`${backend_url}/countries`);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};
const getDataGenres = async () => {
    const res = await fetch(`${backend_url}/gendres`);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};

export {
    getDataCast,
    getDataTypes,
    getDataRatings,
    getDataDirectors,
    getDataCountries,
    getDataGenres,
};
