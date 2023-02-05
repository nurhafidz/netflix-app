const cheerio = require("cheerio");
import axios from "axios";

import React from "react";

const index = (req, res) => {
    const getHtml = async () => {
        const response = await axios(
            "https://netflix-movies-and-tv-shows-2.vercel.app/"
        );
        const html = await response.data;
        const datas = cheerio.load(html);
        const allRows = datas("table > tbody > tr");
        const allColumn = datas("table > thead > tr > td");
        console.log("row :", allRows.length);
        console.log("column :", allColumn[0]);
    };
    getHtml();
    res.status(200).json({ name: "John Doe" });
};

export default index;
