import React from 'react';

const Button = () => {
    return (
        <button className='text-amber-600 border px-4 uppercase hover:bg-amber-900 hover:text-white '
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        >
           <a href="https://drive.google.com/file/d/1AJGtsEXd3xBBMpDz_8NOyZiJ5ESOCGyv/view" target='-blank'>resume</a>
        </button>
    );
};

export default Button;