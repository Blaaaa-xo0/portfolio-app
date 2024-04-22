"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import NavLink from './NavLink';
import { Menu, X } from 'lucide-react';
import MenuResponsive from './MenuResponsive';


const navLinks = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Sobre Mi",
        href: "/about",
    },
    {
        title: "Contacto",
        href: "/contact",
    },
];

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className='sticky top-0 z-50'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-7 py-5 bg-black bg-opacity-90'>
                <Link href="/" className='text-3xl font-semibold '>Port<span className='text-red-600'>Folio</span> </Link>

                {/* boton en movil */}
                <div className="block lg:hidden">
                    {
                        !navbarOpen ? (
                            <button onClick={ () => setNavbarOpen(true) } className='flex items-center py-3 px-4 text-slate-200 hover:text-red-600 border border-slate-200 hover:border-red-600 rounded-md'><Menu className='h-5 w-5'/></button>
                        ) : (
                            <button onClick={ () => setNavbarOpen(false) } className='flex items-center py-3 px-4 text-slate-200 hover:text-red-600 border border-slate-200 hover:border-red-600 rounded-md'><X className='h-5 w-5' /></button>
                        )
                    }
                </div>

                {/* menu en desktops */}
                <div className='hidden lg:block lg:w-auto' id='navbar'>
                    <ul className='flex p-4 lg:p-0 lg:flex-row lg:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.href} title={link.title} />
                            </li>
                        ))}

                    </ul>
                </div>
            </div>

            {/* menu en movil */}
            {navbarOpen ? <MenuResponsive links={navLinks}/> : null}
        </nav>
    );
}

export default Navbar;