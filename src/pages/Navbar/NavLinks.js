import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
const links =[
    {name:'Portfolio', link:'/portfolio'},
    {name:'About', link:'/about'},
    {name:'Blog', link:'/blog'},
    {name:'Contact', link:'/contact'},
]

    return (
        <>
        {
            links.map(link=>(
                <div>
                    <div className='px-3 text-left md:cursor-pointer'>
                        <h1 className='py-5'>
                            <Link to={link.link}> {link.name}</Link>
                            </h1>
                    </div>
                </div>
            ))
        }
         
        </>
    );
};

export default NavLinks;