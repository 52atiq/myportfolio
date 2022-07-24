import React from 'react';

const Skills = () => {
    return (
        <div className='p-10'>
            <h1 className='text-[#6FFFE9] text-3xl underline underline-offset-8 mb-10'>Skills</h1>
            <div className='mb-7'>
            <h3 className='text-xl text-white text-justify text-center text-left md:text-center'>Here are my skills and contain all the technologies, programming languages, and tools that I have learned until now. still, I am constantly 
                learning and trying to keep learning new technology therefore I may update this section more often</h3>
            </div>
            <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 text-white md:justify-items-center '>
                
                <div>
                    <h1 className='text-2xl text-amber-500 mb-2'>Expert</h1>
                    <div className=' '>

                     <div className='flex items-center gap-2'>
                      <ion-icon name="stop-outline"></ion-icon>
                        <p> JavaScript </p>
                     </div>
                     <div className='flex items-center gap-2'>
                      <ion-icon name="stop-outline"></ion-icon>
                        <p> ES6 </p>
                     </div>
                     <div className='flex items-center gap-2'>
                      <ion-icon name="stop-outline"></ion-icon>
                        <p> ReactJS </p>
                     </div>
                     <div className='flex items-center gap-2'>
                      <ion-icon name="stop-outline"></ion-icon>
                        <p> HTML5 </p>
                     </div>
                     <div className='flex items-center gap-2'>
                      <ion-icon name="stop-outline"></ion-icon>
                        <p> CSS3 </p>
                     </div>
                     <div className='flex items-center gap-2'>
                      <ion-icon name="stop-outline"></ion-icon>
                        <p>Bootstrap  </p>
                     </div>
                     <div className='flex items-center gap-2'>
                      <ion-icon name="stop-outline"></ion-icon>
                        <p> TailwindCSS </p>
                     </div>
                    </div>
                </div>




                <div>
                    <h1 className='text-2xl text-amber-500 mb-2'>Comfortable</h1>
                    <div className=' '>

                     <div className='flex items-center gap-2'>
                      <ion-icon name="stop-outline"></ion-icon>
                        <p> NodeJS </p>
                     </div>
                     <div className='flex items-center gap-2'>
                      <ion-icon name="stop-outline"></ion-icon>
                        <p> ExpressJS </p>
                     </div>
                     <div className='flex items-center gap-2'>
                      <ion-icon name="stop-outline"></ion-icon>
                        <p> MongoDB </p>
                     </div>
                     <div className='flex items-center gap-2'>
                      <ion-icon name="stop-outline"></ion-icon>
                        <p> REST API </p>
                     </div>
                     <div className='flex items-center gap-2'>
                      <ion-icon name="stop-outline"></ion-icon>
                        <p>Firebase Authentication</p>
                     </div>
                     
                    

                    </div>
                </div>


                <div>
                    <h1 className='text-2xl text-amber-500 mb-2'>Familiar</h1>
                    <div className=' '>

                     <div className='flex items-center gap-2'>
                      <ion-icon name="stop-outline"></ion-icon>
                        <p> NextJS </p>
                     </div>
                     <div className='flex items-center gap-2'>
                      <ion-icon name="stop-outline"></ion-icon>
                        <p> React Hook Form </p>
                     </div>
                     <div className='flex items-center gap-2'>
                      <ion-icon name="stop-outline"></ion-icon>
                        <p> React Query </p>
                     </div>
                    </div>
                </div>

                <div>
                    <h1 className='text-2xl text-amber-500 mb-2'>Tools</h1>
                    <div className=' '>

                     <div className='flex items-center gap-2'>
                      <ion-icon name="stop-outline"></ion-icon>
                        <p> Figma </p>
                     </div>
                     <div className='flex items-center gap-2'>
                      <ion-icon name="stop-outline"></ion-icon>
                        <p> Git </p>
                     </div>
                     <div className='flex items-center gap-2'>
                      <ion-icon name="stop-outline"></ion-icon>
                        <p> Github </p>
                     </div>
                     <div className='flex items-center gap-2'>
                      <ion-icon name="stop-outline"></ion-icon>
                        <p> Chrome Dev Tool </p>
                     </div>
                     <div className='flex items-center gap-2'>
                      <ion-icon name="stop-outline"></ion-icon>
                        <p> Netlify </p>
                     </div>
                     <div className='flex items-center gap-2'>
                      <ion-icon name="stop-outline"></ion-icon>
                        <p> Heroku</p>
                     </div>
                    

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;