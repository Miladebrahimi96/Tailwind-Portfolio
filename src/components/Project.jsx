import React from 'react';
import { Link } from 'react-router-dom'
const Project = ({data}) => {
    return (
        <div className='w-1/2 md:w-1/4 h-fit rounded-md overflow-hidden shadow-md'>
            <img className='h-40 w-full object-cover' src={data.image} alt={data.title} />
            <h2 className='text-center mt-2 text-slate-700 font-semibold text-lg'>
                {data.title}
            </h2>
            <Link className='text-center block mt-2 text-blue-600 font-semibold hover:text-blue-400 ' to={`/projects/${data.id}`}>
                Details
            </Link>
            <div className='flex justify-between px-2 my-2'>
                <a 
                    className='text-white  bg-purple-600 font-semibold pt-1 px-2 rounded-md hover:bg-purple-400 transition-all duration-100' 
                    href={data.github}
                    target='_blank'
                    rel="noreferrer"
                >
                    GitHub
                </a>
                <a 
                    className='text-white  bg-green-600 font-semibold pt-1 px-2 rounded-md hover:bg-green-400 transition-all duration-100' 
                    href={data.demo}
                    target='_blank'
                    rel="noreferrer"
                >
                    Demo
                </a>
            </div>
        </div>
    );
};

export default Project;