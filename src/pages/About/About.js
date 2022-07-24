import React from 'react';
import mypic from '../../image/seven.jpg'

const About = () => {
    return (
        <div className='md:mx-28 p-4'>
            <h1 className='text-[#6FFFE9] text-3xl  mt-20 underline underline-offset-8 mb-10'> About Me</h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap- mb-20 md:justify-items-center'>
                <div className=''>
                    <p className='w-full text-white text-xl text-justify md:mt-'>
                     <h1 className='mb-10'> Hi__</h1>
                       I am Atiqur Rahman, I have completed my graduation in Computer Science and Engineering. I am a passionate Software Developer. Mainly, I develop web applications.
                      My core skill is based on JavaScript and love to do most things using JavaScript.
                      I am Frontend Developer, as a Frontend Developer good at with ReactJS, HTML5, CSS3 . I also familiar with backend side technology with NodeJS, MongoDB, and ExpressJS.
                      I am also a hard worker and good at working in team ways.
                    </p>
                </div>
                <div className='md:mr-24 m:mt-0 mt-7 '>
                    <img className='w-[500px] h-auto md:ml-24 border rounded-lg shadow-xl' src={mypic} />

                </div>

            </div>
        </div>
    );
};

export default About;