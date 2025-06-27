import { useState, useEffect } from "react";
import { assets } from "../assets/assets.js";

const Navbar = () => {
    const [mobMenu, setMobMenu] = useState(false);

    useEffect(() => { // page doesnt scroll down webpage when on different nav views
        if (mobMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => { document.body.style.overflow = "auto"; }
    }, [mobMenu])

    return (
        <div className="absolute top-0 left-0 w-full z-10">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
                <img src={assets.logo} alt="" />
                <ul className="hidden md:flex gap-7 text-white">
                    <li><a href="#Header" className="cursor-pointer hover:text-grey-400">Home</a></li>
                    <li><a href="#About" className="cursor-pointer hover:text-grey-400">About</a></li>
                    <li><a href="#Projects" className="cursor-pointer hover:text-grey-400">Projects</a></li>
                    <li><a href="#Testimonials" className="cursor-pointer hover:text-grey-400">Testimonials</a></li>
                </ul>
                <button className="hidden md:block bg-white px-8 py-2 rounded-full">Sign up</button>
                <img onClick={() => setMobMenu((preState) => !preState)} src={assets.menu_icon} className="md:hidden w-8 cursor-pointer" alt="menu" />
            </nav>
            {/* ---------- mobile-menu ---------- */}
            <nav className={`md:hidden ${mobMenu ? "fixed w-full" : "w-0 h-0"} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className="flex justify-end mr-8 p-7 cursor-pointer">
                    <img onClick={() => setMobMenu((preState) => !preState)} src={assets.cross_icon} className="w-8" alt="" />
                </div>
                <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                    <li><a onClick={() => setMobMenu((preState) => !preState)} href="#Header" className="px-4 py-2 rounded-full inline-block">Home</a></li>
                    <li><a onClick={() => setMobMenu((preState) => !preState)} href="#About" className="px-4 py-2 rounded-full inline-block">About</a></li>
                    <li><a onClick={() => setMobMenu((preState) => !preState)} href="#Projects" className="px-4 py-2 rounded-full inline-block">Projects</a></li>
                    <li><a onClick={() => setMobMenu((preState) => !preState)} href="#Testimonials" className="px-4 py-2 rounded-full inline-block">Testimonials</a></li>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;