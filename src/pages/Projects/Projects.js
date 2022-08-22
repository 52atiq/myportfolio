import React from 'react';
import project1 from '../../image/project1.png'
import project2 from '../../image/project2.png'
import project3 from '../../image/project3.png'
import project4 from '../../image/project4.png'
import project5 from '../../image/project5.png'
import project6 from '../../image/project6.png'

const Projects = () => {
    return (
        <div className='md:mx-28 p-2'  data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <h1 className='text-[#6FFFE9] text-3xl underline underline-offset-8 mb-10 font-mono'>Projects</h1>
           {/* <div className='grid lg:grid-cols-3 md:grid-cols-3  sm:grid-cols-1 justify-items-center gap-10 mb-20'> */}
           {/* <div className='flex flex-col md:flex-row gap-4 '> */}
           <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 '>

           <div className='border rounded-lg p-1 shadow-2xl w-full'>
                    <div>
                        <img className='h-[180px] w-full' src={project4}></img>
                    </div>
                   
                        <div>
                            <p className='text-white text-justify'>
                            {/* It is a Products selling website. */}
                            </p>
                            <div className='flex md:mt-8 mt-3 w-full items-center justify-center'>
                                <button className='bg-teal-500 px-2 text-white m-1'>ReactJS</button>
                                <button className='bg-teal-500 px-2 text-white m-1'>TailwindCSS</button>
                                {/* <button className='bg-teal-500 px-2 text-white m-1'>NodeJS</button> */}
                                <button className='bg-teal-500 px-2 text-white m-1'>Firebase</button>
                            </div>
                        </div>
                        <div className='flex justify-evenly md:mt-8 mt-3'>
                            <button className='bg-teal-900 px-5 text-white' > <a target='_blank' href="https://motion-view-1521e.web.app/">Live</a></button>
                            <button className='bg-teal-900 px-5 text-white' ><a target='_blank' href="https://github.com/52atiq/motion-view">Github</a></button>
                        </div>
                </div>


           <div className='border rounded-lg p-1 shadow-2xl w-full'>
                    <div>
                        <img className='h-[180px] w-full' src={project5}></img>
                    </div>
                   
                        <div>
                            <p className='text-white text-justify'>
                            {/* It is a Products selling website. */}
                            </p>
                            <div className='flex md:mt-8 mt-3 w-full items-center justify-center'>
                                <button className='bg-teal-500 px-2 text-white m-1'>ReactJS</button>
                                <button className='bg-teal-500 px-2 text-white m-1'>TailwindCSS</button>
                               
                            </div>
                        </div>
                        <div className='flex justify-evenly md:mt-8 mt-3'>
                            <button className='bg-teal-900 px-5 text-white' > <a target='_blank' href="https://shopping-cart-phone.netlify.app/">Live</a></button>
                            <button className='bg-teal-900 px-5 text-white' ><a target='_blank' href="https://github.com/52atiq/shopping-cart-phone">Github</a></button>
                        </div>
                </div>



        
                <div className='border rounded-lg p-1 shadow-2xl w-full'>
                    <div>
                        <img className='h-[180px] w-full' src={project1}></img>
                    </div>
                   
                        <div>
                            <p className='text-white text-justify'>
                            {/* It is a warehouse management system website. */}
                            </p>
                            <div className='flex md:mt-8 mt-3 w-full items-center justify-center'>
                                <button className='bg-teal-500 px-2 text-white m-1'>ReactJS</button>
                                <button className='bg-teal-500 px-2 text-white m-1'>ExpressJS</button>
                                {/* <button className='bg-teal-500 px-2 text-white m-1'>NodeJS</button> */}
                                <button className='bg-teal-500 px-2 text-white m-1'>MongoDB</button>
                            </div>
                        </div>
                        <div className='flex justify-evenly md:mt-8 mt-3'>
                            <button className='bg-teal-900 px-5 text-white' > <a target='_blank' href="https://electronics-87081.web.app/">Live</a></button>
                            <button className='bg-teal-900 px-5 text-white' ><a target='_blank' href="https://github.com/52atiq/store-house-client">Github</a></button>
                        </div>
                </div>

                <div className='border rounded-lg p-1 shadow-2xl w-full'>
                    <div>
                        <img className='h-[180px] w-full' src={project6}></img>
                    </div>
                   
                        <div>
                            <p className='text-white text-justify'>
                            {/* It is a warehouse management system website. */}
                            </p>
                            <div className='flex md:mt-8 mt-3 w-full items-center justify-center'>
                                <button className='bg-teal-500 px-2 text-white m-1'>HTML</button>
                                <button className='bg-teal-500 px-2 text-white m-1'>CSS</button>
                                {/* <button className='bg-teal-500 px-2 text-white m-1'>NodeJS</button> */}
                                <button className='bg-teal-500 px-2 text-white m-1'>Javascript</button>
                            </div>
                        </div>
                        <div className='flex justify-evenly md:mt-8 mt-3'>
                            <button className='bg-teal-900 px-5 text-white' > <a target='_blank' href="https://usocial.netlify.app/">Live</a></button>
                            <button className='bg-teal-900 px-5 text-white' ><a target='_blank' href="https://github.com/52atiq/social-web">Github</a></button>
                        </div>
                </div>




                <div className='border rounded-lg p-1 shadow-2xl w-full'>
                    <div>
                        <img className='h-[180px] w-full' src={project2}></img>
                    </div>
                   
                        <div>
                            <p className='text-white text-justify'>
                    {/* It is a laptop parts product selling website */}
                                            </p>
                            <div className='flex  md:mt-8 w-full items-center justify-center '>
                                <button className='bg-teal-500 px-2 text-white m-1'>ReactJS</button>
                                <button className='bg-teal-500 px-2 text-white m-1 '>ExpressJS</button>
                                {/* <button className='bg-teal-500 px-2 text-white m-1 '>NodeJS</button> */}
                                <button className='bg-teal-500 px-2 text-white m-1 '>MongoDB</button>
                            </div>
                        </div>
                        <div className='flex justify-evenly md:mt-8 mt-3'>
                            <button className='bg-teal-900 px-5 text-white' > <a target='_blank' href="https://p-shop-28336.web.app/">Live</a></button>
                            <button className='bg-teal-900 px-5 text-white' ><a target='_blank' href="https://github.com/52atiq/parts-shop-client">Github</a></button>
                        </div>
                </div>

                <div className='border rounded-lg p-1 shadow-2xl w-full'>
                    <div >
                        <img className='h-[180px] w-full' src={project3}></img>
                    </div>
                   
                        <div>
                            <p className='text-white text-justify'>
                            {/* It is a photography services website. */}
                            </p>
                            <div className='flex  md:mt-8 w-full items-center justify-center  '>
                                <button className='bg-teal-500 px-2 text-white m-1'>ReactJS</button>
                                <button className='bg-teal-500 px-2 text-white m-1'>TailwindCSS</button>
                                <button className='bg-teal-500 px-2 text-white m-1'>Firebase</button>
                            
                            </div>
                        </div>

                        <div className='flex justify-evenly md:mt-8 mt-3'>
                            <button className='bg-teal-900 px-5 text-white' > <a target='_blank' href="https://photographer-d5ce8.firebaseapp.com/">Live</a></button>
                            <button className='bg-teal-900 px-5 text-white' ><a target='_blank' href="https://github.com/52atiq/i-photo">Github</a></button>
                        </div>
                </div>

           </div>
        </div>
    );
};

export default Projects;