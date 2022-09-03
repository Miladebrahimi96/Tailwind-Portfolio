import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

//images
import hero from '../assets/images/hero.jpg';

const Hero = () => {

    const initHandler = text => {
        text.typeString()
            .pauseFor(2000)
            .deleteAll()
            .start()
    }

    return (
        <div className=' flex justify-center items-center h-screen px-16'>
            <div className='flex flex-col-reverse md:flex-row md:justify-between gap-12 items-center'>
                <div className='text-center md:text-left'>
                    <h1 className='text-4xl md:text-5xl text-slate-700 font-medium tracking-wider mb-6 first-letter:text-blue-600 first-letter:text-5xl md:first-letter:text-7xl'>
                        Milad Ebrahimi
                    </h1>
                    <div className='text-5xl  text-slate-500 mb-12 z-0'>
                        <Typewriter 
                            onInit={initHandler} 
                            options={{
                                strings: ['Junior', 'Front-End', 'Developer'],
                                autoStart: true,
                                loop: true,
                            }} 
                        />
                    </div>
                    <Link to='/contact' className='text-white text-lg font-medium bg-green-500 px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-150'>
                        Contact Me
                    </Link>
                </div>
                <img className='w-1/2 rounded-lg md:rounded-tl-full shadow-xl shadow-slate-400' src={hero} alt="hero" />
            </div>
        </div>
    );
};

export default Hero;