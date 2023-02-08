"use client";
import React, { useEffect } from "react";
import HeatMapComponent from "@/components/main-page/HeatMapComponent.jsx";
import BarChartComponent from "@/components/main-page/BarChartComponent.jsx";
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
            <HeatMapComponent />
            {/* <BarChartComponent /> */}
        </div>
    );
};

export default page;
