
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, title}) => {
    const pathname = usePathname(); 
    return (
        <>
            <Link href={href} className={`block py-2 pl-3 pr-4 ${ pathname==href ? "text-red-500" : "text-gray-400"} sm:text-xl rounded md:p-0 hover:text-white font-semibold`}>{title}</Link>
        </>
        
    );
}

export default NavLink;