import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaFacebook } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";


const Navbar = () => {
    const[isMenuopen , setisMenuOpen] = useState(false)

    const toogleMenu =()=>{
        setisMenuOpen(!isMenuopen)
    }

    const navItems = [
        {path: "/", link:"Home"},
        {path: "/Services", link:"Services"},
        {path: "/About", link:"About"},
        {path: "/Contact", link:"Contact"},
        {path: "/Blogs", link:"Blogs"}
    ]
    return (
        <header className='bg-black text-white fixed top-0 left-0 right-0'>
            <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
                <a href="/" className='text-xl font-bold text-white'>TWIT<span className='text-orange-500'>Blog</span></a>

                <ul className='md:flex gap-12 text-lg hidden'>
                    {
                        navItems.map(({path, link})=> <li className='text-white' key={path}>
                            <NavLink className={({ isActive , isPending})=>
                            isActive
                            ? "active" : isPending ? "pending" : ""
                        } 
                        to={path}>{link}</NavLink>
                        </li>)
                    }
                </ul>
                <div className='text-white lg:flex gap-4 items-center hidden'>
                    <a href="/" className='hover:text-orange-500'><FaFacebook/></a>
                    <a href="/" className='hover:text-orange-500'><FaDribbble/></a>
                    <a href="/" className='hover:text-orange-500'><FaTwitter/></a>
                    <button className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Log in</button>
                </div>

                {/* mobile view */}
                <div className='md:hidden'>
                    <button onClick={toogleMenu} className='cursor-pointer'>
                        {
                            isMenuopen ? <FaTimes className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>
                        }
                    </button>
                </div>
            </nav>

            <div>
                <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuopen ? "fixed top-0 left-0 w-full transition-all duration-200 ease-out" : "hidden"}`}>
                    {
                        navItems.map(({path, link})=> <li className='text-black' key={path}>
                            <NavLink onClick={toogleMenu} to={path}>{link}</NavLink>
                        </li>)
                    }
                </ul>
            </div>
        </header>
    );
};

export default Navbar;