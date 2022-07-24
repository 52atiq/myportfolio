import React from 'react';
import { Cursor, Typewriter } from 'react-simple-typewriter'
import { useTypewriter } from 'react-simple-typewriter'

const Hero = () => {
  const words = ["Frontend Web Developer", "Programmer", " Creative Web Designer", " Self Believer 🤍", ];
  const { text } = useTypewriter({
      words,
      loop: 0, // Infinit
  });
 
  return (
    <div className='mt-40'>
         
         <div className=''>
          <div className='flex items-center flex-col'>
             <h1 className='text-3xl text-slate-300 '> Hello, I'm Atiqur Rahman </h1>
             <p className="text-[#6FFFE9] text-3xl">
                    <span>{text}</span>
                    <Cursor />
                </p>
          </div>
          <div className='flex justify-center gap-4 text-white text-2xl mt-5'>
              <a href="https://www.facebook.com/atiqislambd" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
              <a href="https://www.linkedin.com/in/atiqurrahman5/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
              <a href="https://github.com/52atiq" target="_blank"><ion-icon name="logo-github"></ion-icon> </a>
              <a href="https://github.com/52atiq" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
            </div>
         </div>
    </div>
  );
};

export default Hero;