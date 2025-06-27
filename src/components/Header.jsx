import React from "react";
import Navbar from "./Nav";
import { assets } from "../assets/assets.js";
import { motion } from "framer-motion"

const Header = () => {
    return (
        <div className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden" style={{backgroundImage: `url('${assets.header_img}')`}} id="Header">
            <Navbar />
            <motion.div 
                initial={{opacity: 0, y: 100}}
                transition={{duration: 1.5}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
                <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">Explore homes that fit your style</h2>
                <div className="space-x-6 mt-16 flex flex-wrap justify-center">  
                    <a href="#Projects" className="btn px-6 py-3 sm:px-4 sm:py-2">Projects</a>
                    <a href="#Contact" className="btn border-transparent bg-blue-500 px-6 py-3 sm:px-4 sm:py-2">Contact Us</a>
                </div>
            </motion.div>
        </div>
    );
}

export default Header;