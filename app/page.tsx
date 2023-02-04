"use client";
import Hero from "@/components/main-page/hero";
import { Montserrat } from "@next/font/google";
import Navbar from "@/components/layout/navbar";

const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Navbar />
            {/* start hero */}
            <Hero />
            {/* end hero */}
            <div className="h-screen">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                amet in nesciunt vero debitis culpa corrupti explicabo eaque
                atque odio porro beatae quae animi dolore error nulla modi
                obcaecati quasi.
            </div>
            <div className="h-screen">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                amet in nesciunt vero debitis culpa corrupti explicabo eaque
                atque odio porro beatae quae animi dolore error nulla modi
                obcaecati quasi.
            </div>
        </>
    );
}

