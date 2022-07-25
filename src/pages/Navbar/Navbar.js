import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import NavLinks from './NavLinks';


const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='bg-[#0F172A]'>
            <div className='flex items-center font-semibold justify-around'> 
                <div className='z-50 p-5 md:w-auto w-full flex justify-between '>
                    <h1 className='text-amber-600 md:cursor-pointer uppercase md:border-b-2 hover:bg-amber-900 hover:text-white md:hover:border-t-2 px-4'
                     data-aos="fade-up"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000"
                    >Atiqur Rahman</h1>
                    <div className='md:hidden text-white text-3xl' onClick={()=> setOpen(!open)}>
                    <ion-icon name={`${open ? "close" : "menu-sharp"}`}></ion-icon>
                    </div>
                </div>
                <ul className='md:flex hidden text-white  uppercase items-center gap-8 '>
                    <li>
                        <Link to='/' className='py-7 px-3 inline-block hover:text-amber-600 hover:underline underline-offset-2'>Home</Link>
                    </li>
                    <NavLinks />
                </ul>

                <div className='md:block hidden'>
                    <Button />
                </div>
              {/* Mobile nav */}
                <ul className={`
                md:hidden bg-[#0F172A] text-white absolute w-full h-full bottom-0 py-24 pl-4
                duration-500 ${ open? "left-0": "left-[-100%]"}
                `}>
                  <li>
                        <Link to='/' className='py-7 px-3 inline-block'>Home</Link>
                  </li>
                  <NavLinks />
                  <div className='py-5'>
                  <Button />
                  </div>
                </ul>
            </div>
            
        </nav>
    );
};

export default Navbar;