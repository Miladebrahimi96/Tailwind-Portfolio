import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';


//slider 
import { settings } from '../assets/slider';
import { projects } from '../assets/projects/projects';

const ProjectSlider = () => {

    return (
        <div className='my-32 px-16'>
            <Link to='/projects' className='text-lg text-green-600 border border-green-600 px-4 py-2 rounded-lg hover:bg-green-100 transition-all duration-100'>
                Show All
            </Link>
            <Slider {...settings}  className='mt-10'>
                {
                    projects.map(project => (
                        <Link  key={project.id} to={`/projects/${project.id}`}>
                            <div className='flex flex-col flex-nowrap justify-center items-center border-gray-300 border-2 overflow-hidden rounded-lg hover:'>
                                <div>
                                    <img className='h-60 w-full object-cover' src={project.image} alt={project.title} />
                                </div>
                                <div className='p-2'>
                                    <h4 className='text-xl text-center mt-4 text-slate-800 font-bold'>
                                        {project.title}
                                    </h4>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </Slider>
        </div>
    );
};

export default ProjectSlider;