import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import "../index.css"

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
                <li className="relative group pb-1 hover:border-b-2 border-blue-400 transition-all duration-200">
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

        <div className="navbar bg-base-100 shadow-sm lg:py-10 lg:px-18">
            <div className="flex justify-between items-center w-full p-4">
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
                    <button onClick={toggleSidebar} className="text-3xl">
                        <FaBars />
                    </button>
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