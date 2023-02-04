import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <>
            <div className="h-screen flex justify-center items-center bg-[#5F7161]">
                <div className="w-full relative bg-[#5F7161] m-auto">
                    <motion.div
                        className=""
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                    >
                        <div className="flex flex-row justify-center items-center text-white">
                            <div className="p-5 font-semibold font-serif text-3xl">
                                Produce
                            </div>
                            <div className="px-5 font-semibold font-serif border-b">
                                Your
                            </div>
                            <div className="p-5 font-semibold font-serif text-3xl">
                                Movie
                            </div>
                        </div>
                    </motion.div>
                    <div className="">
                        <div className="grid grid-cols-3 w-full">
                            <div className=" w-40 h-full flex items-start w-full">
                                <motion.div
                                    animate={{ x: 100 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <Image
                                        className=" overflow-hidden"
                                        src="/image/hero/camera.png"
                                        alt="camera"
                                        width={854}
                                        height={1008}
                                        priority
                                    />
                                </motion.div>
                            </div>
                            <div className="  mt-36 flex justify-center">
                                <div className="w-72">
                                    <motion.div
                                        animate={{ y: -100 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <Image
                                            className=" overflow-hidden"
                                            src="/image/hero/man-with-cat.png"
                                            alt="man-with-cat"
                                            width={854}
                                            height={1008}
                                            quality={100}
                                            priority
                                        />
                                    </motion.div>
                                </div>
                            </div>
                            <div className="w-full flex justify-end">
                                <div className=" w-24">
                                    <motion.div
                                        animate={{ x: -100 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <Image
                                            className=" overflow-hidden"
                                            src="/image/hero/lighting.png"
                                            alt="lighting"
                                            width={854}
                                            height={1008}
                                            quality={100}
                                            priority
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
