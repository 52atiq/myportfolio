import emailjs from 'emailjs-com'
import React from 'react';
import './Contact.css'

const Contact = () => {
    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_8vb4suj','template_ffzlpoa', e.target, '3YLQ6eHKr5bY2ymnK').then(res =>{console.log(res);}).catch(err => console.log(err));
    }
    return (
        <section className="contact-me-area relative rounded-full" id="contact-me_area" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="text-center text-4xl text-bold pt-5 pb-9" >
                            <h3 className='text-amber-600 underline underline-offset-2'>Contact Me</h3>
                        </div>


                        <div className="contact-area bg-white h-[550px] ml-[25%] py-44 mb-5">
                            <form onSubmit={sendEmail}>
                               
                                <div className="contact-input mb-5">
                                    <input name='fullName' id="con-name" className="px-3 py-3 mb-3" type="text" required placeholder="Enter Your Full Name" />

                                    <input name='email' id="con-mail" className="px-3 py-3 mb-3" type="email" required placeholder="Enter Your E-mail" />
                                </div>
                                {/* <div className="contact-msg mb-5 md:ml-64"> */}
                                <div className="contact-msg">
                                    {/* <input name='message' id="con-msg" className="px-3 py-5 mb-3" type="text" required placeholder="Write your massage here..." /> */}
                                    <textarea 
                                      className='mb-5 ml-[5%] w-3/50 block'
                                     name='message' id="con-msg"  type="text" required placeholder="Write your massage here..." />
                                </div>

                                <input type='submit' id="con-btn" className=" bg-slate-900  md:ml-60 ml-24 px-20 py-2 w-[90px] text-white mb-5 text-center flex justify-center text-xl " value='Send' />

                            </form>

                        </div>

                        <div className="contact-top-area rounded bg-slate-900 flex flex-col justify-center" >
                            
                            <div className="contact-address ml-5 pt-4 text-white" >
                                <div className='flex gap-3 items-center' >
                                <ion-icon name="call"></ion-icon>
                                <p>+8801738450678</p>
                                </div>
                            </div>
                            <div className="contact-address ml-5 pt-4 text-white" >
                               <div className='flex gap-3 items-center' >
                               <ion-icon name="mail"></ion-icon>
                               <p>atiqur.rahman.web@gmail.com</p>
                               </div>
                            </div>
                            <div className="contact-mail ml-5 pt-4 text-white" >
                               <div className='flex gap-3 items-center' >
                               <ion-icon name="location"></ion-icon>
                               <p>Basabo, Dhaka-1214, Bangladesh</p>
                               </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;