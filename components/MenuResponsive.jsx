import React from 'react'
import NavLink from './NavLink';

function MenuResponsive({ links }) {
    return (
        <ul className='sticky flex flex-col py-4 items-center bg-black backdrop-blur-md bg-opacity-80 border-red-900 border-y-2'>
            {
                links.map((link, index) => (
                    <li key={index}>
                        <NavLink href={link.href} title={link.title} />
                    </li>
                ))
            }
        </ul>
    );
}

export default MenuResponsive;