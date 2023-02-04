import React from "react";
import Image from "next/image";

function Navbar() {
    return (
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
    );
}

export default Navbar;
