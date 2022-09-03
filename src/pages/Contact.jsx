import React from 'react';

//icons
import {AiOutlineMail, AiOutlineWhatsApp, AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div className='container mx-auto mt-32 px-4 md:px-0 h-screen'>
            <div className='flex flex-col justify-center md:flex-row md:justify-between items-center md:space-x-12'>
                <div className='mx-auto'>
                    <p className='flex items-center text-base text-slate-500 md:text-xl mb-12'>
                        <a href="mailto:milad.eb6868@gmail.com">
                            <AiOutlineMail className='text-3xl inline-block mr-4 animate-bounce'/> milad.eb6868@gmail.com
                        </a>
                    </p>
                    <p className='flex items-center text-base text-slate-500 md:text-xl mb-12'>
                        <a href="https://wa.me/+989373876611/?text=urlencodedtext">
                            <AiOutlineWhatsApp className='text-3xl inline-block mr-4 text-green-500 animate-bounce'/> +989373876611
                        </a>
                    </p>
                    <p className='flex items-center text-base text-slate-500 md:text-xl mb-12'>
                        <a href="https://www.linkedin.com/in/milad-ebrahimi1996" target='_blank' rel="noreferrer">
                            <AiOutlineLinkedin className='text-3xl inline-block mr-4 text-blue-800 animate-bounce'/> /milad-ebrahimi1996
                        </a>
                    </p>
                    <p className='flex items-center text-base text-slate-500 md:text-xl mb-12'>
                        <a href="https://github.com/Miladebrahimi96" target='_blank' rel="noreferrer">
                            <AiOutlineGithub className='text-3xl inline-block mr-4 text-black animate-bounce'/> /Miladebrahimi96
                        </a>
                    </p>
                </div>
                <ContactForm/>
            </div>
        </div>
    );
};

export default Contact;