import React from 'react';
import project1 from '../../image/project1.png'
import project2 from '../../image/project2.png'
import project3 from '../../image/project3.png'

const Projects = () => {
    return (
        <div className='md:mx-28 p-2'>
            <h1 className='text-[#6FFFE9] text-3xl underline underline-offset-8 mb-10'>Projects</h1>
           {/* <div className='grid lg:grid-cols-3 md:grid-cols-3  sm:grid-cols-1 justify-items-center gap-10 mb-20'> */}
           <div className='flex flex-col md:flex-row gap-4 '>
                <div className='border rounded-lg p-3 shadow-2xl w-full'>
                    <div>
                        <img className='h-[180px]' src={project1}></img>
                    </div>
                   
                        <div>
                            <p className='text-white text-justify'>
                            It is a warehouse management system website , that can store products.
                             Users can sign up and log in to this website using google and also can log in if users register by email
                            </p>
                            <div className='md:flex md:mt-8 mt-3 '>
                                <button className='bg-teal-500 px-2 text-white m-1'>ReactJS</button>
                                <button className='bg-teal-500 px-2 text-white m-1'>ExpressJS</button>
                                <button className='bg-teal-500 px-2 text-white m-1'>NodeJS</button>
                                <button className='bg-teal-500 px-2 text-white m-1'>MongoDB</button>
                            </div>
                        </div>
                        <div className='flex justify-evenly md:mt-8 mt-3'>
                            <button className='bg-teal-900 px-5 text-white' > <a target='_blank' href="https://electronics-87081.web.app/">Live</a></button>
                            <button className='bg-teal-900 px-5 text-white' ><a target='_blank' href="https://github.com/52atiq/store-house-client">Github</a></button>
                        </div>
                </div>

                <div className='border rounded-lg p-3 shadow-2xl w-full'>
                    <div>
                        <img className='h-[180px]' src={project2}></img>
                    </div>
                   
                        <div>
                            <p className='text-white text-justify'>
                    It is a laptop parts product selling website, users can buy products and see their orders.
                   Users and admin can sign up and log in to this website using google or email password.
                   Admin can add products, delete products, manage products and see all given orders by users.
                                            </p>
                            <div className='md:flex  mt-3  '>
                                <button className='bg-teal-500 px-2 text-white m-1'>ReactJS</button>
                                <button className='bg-teal-500 px-2 text-white m-1 '>ExpressJS</button>
                                <button className='bg-teal-500 px-2 text-white m-1 '>NodeJS</button>
                                <button className='bg-teal-500 px-2 text-white m-1 '>MongoDB</button>
                            </div>
                        </div>
                        <div className='flex justify-evenly mt-3'>
                            <button className='bg-teal-900 px-5 text-white' > <a target='_blank' href="https://p-shop-28336.web.app/">Live</a></button>
                            <button className='bg-teal-900 px-5 text-white' ><a target='_blank' href="https://github.com/52atiq/parts-shop-client">Github</a></button>
                        </div>
                </div>

                <div className='border rounded-lg p-3 shadow-2xl w-full'>
                    <div >
                        <img className='h-[180px]' src={project3}></img>
                    </div>
                   
                        <div>
                            <p className='text-white text-justify'>
                            It is a photography services website that serves some services.
                             Users who can book their orders.
                             Users can sign up and log in to this website using google, github and also can log in if users
                            register by email.
                            </p>
                            <div className='md:flex md:mt-8 mt-3  '>
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