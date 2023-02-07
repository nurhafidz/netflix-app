const backend_url = "http://103.179.254.94:5000";

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
const getDataCast = async () => {
    const res = await fetch(`${backend_url}/casts`);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};

const getManyData = async () => {
    let datas;
    await Promise.all([
        fetch(`${backend_url}/types`).then((value) => value.json()),
        fetch(`${backend_url}/ratings`).then((value) => value.json()),
        fetch(`${backend_url}/directors`).then((value) => value.json()),
        fetch(`${backend_url}/countries`).then((value) => value.json()),
        fetch(`${backend_url}/gendres`).then((value) => value.json()),
        fetch(`${backend_url}/casts`).then((value) => value.json()),
    ])
        .then((response) => {
            datas = response;
        })

        .catch((err) => {
            console.log(err);
        });
    return datas;
};

export {
    getDataCast,
    getDataTypes,
    getDataRatings,
    getDataDirectors,
    getDataCountries,
    getDataGenres,
    getManyData,
};
