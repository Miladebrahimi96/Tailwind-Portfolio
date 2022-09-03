import React from 'react';

import logo from "../assets/images/milad.png";
import {AiFillHeart} from 'react-icons/ai';

const Footer = () => {
    return (
        <div className=' bg-slate-500 py-6'>
            <div className='flex flex-col items-center'>
                <img src={logo} alt="logo" className='w-12 mb-6'/>
                <p className='text-lg text-white'>
                    Bulit with <AiFillHeart className='inline-block text-red-600 text-3xl'/>
                    By Milad
                </p>
            </div>
        </div>
    );
};

export default Footer;