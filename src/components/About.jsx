import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion"

const About = () => {
    return (
        <motion.div
            initial={{opacity: 0, x: 200}}
            transition={{duration: 2.5}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}} 
            className="flex flex-col items-center justify-center 
        container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id="About">
            <h1 className="font-bold text-2xl sm:text-4xl mb-2">About <span className="underline underline-offset-4 decoration-1 font-light">Our Brand</span></h1>
            <p className="text-gray-500 max-w-80 text-center mb-8">Passionate architectural design, turn your dreams into a reality</p>
            <div className="flex flex-col items-center md:flex-row md:items-start md:gap-20">
                <img src={assets.brand_img} alt="" className="w-full sm:w-1/2 max-w-lg" />
                <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
                    <div className="grid grid-cols-2 gap-18 md:gap-10 w-full 2xl pr-28">
                        <div>
                            <p className="text-4xl font-medium text-gray-800">10+</p>
                            <p>Years of Experience</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-800">12+</p>
                            <p>Projects Completed</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-800">20+</p>
                            <p>Mn. Sq. Ft. Delivered</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-800">25+</p>
                            <p>Ongoing Projects</p>
                        </div>
                    </div>
                    <p className="my-10 max-w-screen">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat, nisl et convallis mollis, libero odio auctor elit, in dictum nibh erat vel lectus. Sed bibendum, purus ac malesuada egestas, neque ex ullamcorper libero, non pharetra dui elit congue elit. Mauris ut efficitur ante, pharetra elementum augue. Nulla placerat ultricies lorem quis mollis. Nulla cursus consequat efficitur. Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                    <button className="bg-blue-600 text-white px-8 py-2 rounded-full">Learn more</button>
                </div>
            </div>
        </motion.div> 
    )
}

export default About;