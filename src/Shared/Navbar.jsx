import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import "../index.css"
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from 'react-icons/io';
import { GoArrowUpRight } from 'react-icons/go';


const Navbar = () => {
    const navLinkClass = ({ isActive }) => isActive ? 'text-blue-500 bg-slate-200' : '';
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // underline effect stored
    const underlineEffect = 'after:block after:h-[2px] after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100';

    // nav links
    const links = <>
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-8 text-white">
                <li className="relative group border-blue-400 transition-all duration-200">
                    <span className="cursor-pointer ">Services</span>

                    {/* Dropdown Items */}
                    <ul className="absolute left-0 mt-2 bg-gray-700 rounded-md overflow-hidden 
                         opacity-0 invisible 
                         group-hover:visible group-hover:opacity-100 
                         group-hover:translate-x-0 -translate-x-2 
                         transition-all duration-300 ease-in-out shadow-lg">
                        <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Web Design</li>
                        <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">App Development</li>
                        <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">SEO</li>
                    </ul>
                </li>

                {/* More nav items if you want */}
                <li className='group inline-block cursor-pointer'>
                    <span className={underlineEffect}>About</span>
                </li>
                <li>Contact</li>
            </ul>
        </nav>
    </>


    return (

        <div className="w-full bg-base-100 py-4 lg:py-10 px-4 sm:px-6 lg:px-8 border-4 border-blue-500">
            <div className="flex justify-between w-full border-2 border-amber-200">
                <div className="flex items-center">
                    {/* Logo and Navlinks */}
                    <img src="/src/assets/icon/logo-light.png" className="w-[185px] block" alt="" />
                    <div className="ml-4 hidden lg:block">
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
                    <button className="group hidden lg:block relative h-12 rounded-full border border-neutral-200 bg-transparent px-4 text-neutral-950"><span className="relative inline-flex overflow-hidden"><div className=" transition duration-1000 group-hover:-translate-y-[120%] group-hover:skew-y-20 flex items-center">Hover fme <GoArrowUpRight /></div><div className="absolute translate-y-[110%] skew-y-12 transition duration-1000 group-hover:translate-y-0 group-hover:skew-y-0 flex items-center">Hover me <GoArrowUpRight /></div></span></button>
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