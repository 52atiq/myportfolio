import React from 'react';
import wait from '../../image/wait.png'

const Blog = () => {
    return (
        <div className='grid lg:grid-cols-2 h-screen mx-4' data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" >
            <div className='flex justify-center items-center'>
                <h1 className='text-white text-2xl'>Comming soon.....</h1>
            </div>
            <div className='flex justify-center items-center'>
          <img  src={wait} />
            </div>
        </div>
    );
};

export default Blog;