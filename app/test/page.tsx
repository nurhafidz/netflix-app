"use client";
import React, { useEffect } from "react";
import PieComponent from "@/components/main-page/PieComponent.jsx";
import data from "@/data/test.json";

// import { getManyData } from "@/data/getDataAll.js";

const page = () => {
    // const text = async () => {
    //     const data = await getManyData();
    //     console.log("data :", data);
    //     return data;
    // };

    return (
        <div className="h-screen">
            data
            <PieComponent />
        </div>
    );
};

export default page;
