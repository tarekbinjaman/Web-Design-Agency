import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinkClass = ({ isActive }) => isActive ? 'text-blue-500 bg-slate-200' : '';
    const links = <>
    <li className='font-semibold'>
        <NavLink className={navLinkClass} to={`/`}>Home</NavLink>
    </li>
    <li className='font-semibold'>
        <NavLink className={navLinkClass} to={`/meals`}>Meals</NavLink>
    </li>
    <li className='font-semibold'>
        <NavLink className={navLinkClass} to={`/upcomingMeals`}>Upcoming Meals</NavLink>
    </li>
</>
    
    return (

        <div className="navbar bg-base-100 shadow-sm py-10 px-18">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                <img src="/src/assets/icon/logo-light.png" className='w-[185px]' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
            {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;