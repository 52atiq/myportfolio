import React from 'react';
import { Cursor, Typewriter } from 'react-simple-typewriter'
import { useTypewriter } from 'react-simple-typewriter'

const Hero = () => {
  const words = ["Frontend Web Developer", "Programmer", " Creative Web Designer", " MERN Stack Developer", ];
  const { text } = useTypewriter({
      words,
      loop: 0, // Infinit
  });
 
  return (
    <div className='mt-40'>
         
         <div className=''>
          <div className='flex items-center flex-col'>
             <h1 className='text-4xl text-amber-600 font-mono md:ml-0 ml-5 '> Hi,I'm Atiqur Rahman </h1>
             <p className="text-[#6FFFE9] text-3xl">
                    <span>{text}</span>
                    <Cursor />
                </p>
          </div>
          <div className='flex justify-center gap-4 text-white text-2xl mt-5 '>
              <a className='hover:text-[#4267B2]' href="https://www.facebook.com/atiqislambd" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
              <a  className='hover:text-[#008fdd]' href="https://www.linkedin.com/in/atiqurrahman5/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
              <a className='hover:text-[#666666]' href="https://github.com/52atiq" target="_blank"><ion-icon name="logo-github"></ion-icon> </a>
              <a className='hover:text-[#bc2a8d]' href="https://github.com/52atiq" target="_blank"><ion-icon  name="logo-instagram"></ion-icon></a>
            </div>
         </div>
    </div>
  );
};

export default Hero;