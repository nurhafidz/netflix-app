"use client";
import Hero from "@/components/main-page/hero";
import { Montserrat } from "@next/font/google";
import Image from "next/image";
const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <div className="bg-[#6D8B74] shadow-lg flex justify-center relative">
                <div className="h-10 w-10 p-1">
                    <Image
                        src="/image/pybrain.png"
                        alt="team-logo"
                        width={280}
                        height={311}
                    />
                </div>
            </div>
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

