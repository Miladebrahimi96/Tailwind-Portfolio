import React from 'react';
import Project from '../components/Project';

import { projects } from '../assets/projects/projects';

const Projects = () => {
    return (
        <div className='container mt-24 mx-auto '>
            <div className='flex flex-wrap gap-10 justify-center items-center'>
                {
                    projects.map(project => <Project key={project.id} data={project}/> )
                }
            </div>
        </div>
    );
};

export default Projects;