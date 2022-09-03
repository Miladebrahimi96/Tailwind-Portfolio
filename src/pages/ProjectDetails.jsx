import React from 'react';
import { useParams } from 'react-router-dom';

//project data
import { projects } from '../assets/projects/projects';

const ProjectDetails = () => {

    const params = useParams();
    const id = params.id;
    
    const project = projects.filter(item => item.id === +id);
    console.log(project);

    const {demo, description , title, image, techs, github} = project[0];

    return (
        <div className='container mx-auto mt-28 mb-10 px-6 md:px-0 '>
            <div className='flex flex-col-reverse md:flex-row justify-between md:space-x-16 h-screen'>
                <div>
                    <h1 className='text-3xl text-slate-800'>
                        {title}
                    </h1>
                    <p className='text-lg my-8 text-slate-500 text-justify'>
                        {description}
                    </p>
                    <h1 className='text-3xl text-slate-800'>
                       Technologies Used 
                    </h1>
                    <p className='text-lg my-8 text-slate-500'>
                        {techs.join(", ")}
                    </p>
                    <div className='flex justify-between'>
                        <a 
                            className='text-white  bg-purple-600 font-semibold pt-1 px-2 rounded-md hover:bg-purple-400 transition-all duration-100' 
                            href={github}
                            target='_blank'
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a 
                            className='text-white  bg-green-600 font-semibold pt-1 px-2 rounded-md hover:bg-green-400 transition-all duration-100' 
                            href={demo}
                            target='_blank'
                            rel="noreferrer"
                        >
                            Demo
                        </a>
                    </div>
                </div>
                <div>
                    <img className='mb-12 rounded-lg border-2' src={image} alt="project" />
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;