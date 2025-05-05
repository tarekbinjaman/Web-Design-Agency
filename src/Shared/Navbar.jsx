import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import "../index.css"
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from 'react-icons/io';
import { GoArrowUpRight, GoChevronDown } from 'react-icons/go';


const Navbar = () => {
    const navLinkClass = ({ isActive }) => isActive ? 'text-blue-500 bg-slate-200' : '';
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // underline effect stored
    const underlineEffect = 'after:block after:h-[2px] after:bg-amber-200 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100';

    // nav links
    const links = <>
        <nav className=" p-4">
            <ul className="flex items-center space-x-8 text-black text-xl font-normal">
            <li className='relative group inline-block cursor-pointer transition-all duration-200 z-50'>
                    <span className={`border-b-2 border-amber-200 flex gap-2 items-center`}>Home <GoChevronDown /></span>
                    {/* Dropdown Items */}
                    <ul className="absolute z-50 left-0 mt-2 rounded-md overflow-hidden 
                         opacity-0 invisible 
                         group-hover:visible group-hover:opacity-100 
                         group-hover:translate-x-[-20px] -translate-x-2 
                         transition-all duration-300 ease-in-out shadow-lg text-[14px] bg-white">
                        <li className={`pl-4 pr-32 py-6   cursor-pointer border-b border-black/30 whitespace-nowrap`}> <span className='border-b-2 border-amber-200'>Home Light</span></li>
                        <li className={`pl-4 pr-32 py-6 border-b border-black/30 whitespace-nowrap`}>Home Dark</li>
                        <li className={`pl-4 pr-32 py-6 cursor-pointer whitespace-nowrap`}>Home Rtl</li>
                    </ul>
                </li>
                <li className='group cursor-pointer flex gap-2 items-center'>
                    <span className={`${underlineEffect} `}>About us </span><GoChevronDown />
                </li>
                <li className="relative group border-blue-400 flex gap-2 items-center">
                    <span className={`cursor-pointer ${underlineEffect}`}>Services</span><GoChevronDown />

                </li>

                {/* More nav items if you want */}
                <li className='group cursor-pointer flex gap-2 items-center'>
                    <span className={`cursor-pointer ${underlineEffect}`}>Blog </span><GoChevronDown />
                </li>
                <li className={`group cursor-pointer flex gap-2 items-center`}>
                    <span className={`cursor-pointer ${underlineEffect}`}> Let's talk </span><GoChevronDown />
                </li>
            </ul>
        </nav>
    </>


    return (

        <div className="navbar w-full bg-base-100 py-4 lg:py-9 px-4 sm:px-8 lg:px-[78px] ">
            <div className="flex justify-between w-full items-center">
                <div className="flex items-center gap-8">
                    {/* Logo and Navlinks */}
                    <img src="/src/assets/icon/logo-light.png" className="lg:w-[182px] w-[120px] block" alt="" />
                    <div className="ml-12 hidden lg:block">
                        {/* Navlinks */}
                        {
                            links
                        }
                    </div>
                </div>

                {/* Sidebar / Hamburger */}
                <div>
                    <button onClick={toggleSidebar} className="text-3xl lg:hidden">
                        <FaBars />
                    </button>

                    {/* test */}
                    <button className="group hidden lg:block relative h-12 bg-transparent px-4 text-neutral-950 " style={{backgroundColor: "rgb(227, 255, 117)"}}><span className="relative inline-flex overflow-hidden"><div className=" transition duration-1000 group-hover:-translate-y-[120%] group-hover:skew-y-10 flex items-center gap-2 font-semibold">Discuss the project <GoArrowUpRight className='font-bold' /></div><div className="absolute translate-y-[110%] skew-y-6 transition duration-1000 group-hover:translate-y-0 group-hover:skew-y-0 flex items-center gap-2 font-semibold">Discuss the project <GoArrowUpRight className='font-bold' /></div></span></button>
                </div>
            </div>
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
                {/* Cross Icon */}
                <button onClick={toggleSidebar} className="text-3xl mb-8">
                    <FaTimes />
                </button>

                {/* Sidebar Content */}
                <ul className="space-y-6 mt-10">
                    <li className="hover:text-gray-400">Home</li>
                    <li className="hover:text-gray-400">About</li>
                    <li className="hover:text-gray-400">Services</li>
                    <li className="hover:text-gray-400">Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;