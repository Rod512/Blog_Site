import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navItems = [
        {path: "/", link:"Home"},
        {path: "/Services", link:"Services"},
        {path: "/About", link:"About"},
        {path: "/Contact", link:"Contact"},
        {path: "/Blogs", link:"Blogs"}
    ]
    return (
        <header className='bg-black'>
            <nav className='px-4 py-4'>
                <a href="/" className='text-xl font-bold text-white'>TWIT<span className='text-orange-500'>Blog</span></a>

                <ul className='flex gap-12 text-lg'>
                    {
                        navItems.map(({path, link})=> <li className='text-white' key={path}>
                            <NavLink to={path}>{link}</NavLink>
                        </li>)
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;