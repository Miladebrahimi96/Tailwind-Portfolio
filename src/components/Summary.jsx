import React from 'react';

const Summary = () => {
    return (
        <div className='container mx-auto px-6'>
            <div className='flex flex-col justify-center md:flex-row items-center md:items-start md:justify-between space-y-12 md:space-y-0'>
                <h2 className='text-2xl text-center md:text-left font-bold w-full text-slate-900'>
                    <span className='animate-spin-slow inline-block text-4xl text-red-600 mr-3 font-bold duration-200'>?</span>
                    Why did I approach Front-End
                </h2>
                <p className='md:w-1/2 text-lg text-slate-500 text-justify'>
                    Thanks to a dear friend, I became familiar with this career. After a while working with basic technologies like HTML and CSS, I found myself in a deep joy while working and right at that moment, I realized this is my dream profession.
                </p>
            </div>
        </div>
    );
};

export default Summary;