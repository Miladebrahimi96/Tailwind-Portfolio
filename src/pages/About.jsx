import React from 'react';
import Skills from '../components/Skills';

const About = () => {
    return (
        <div className='container mx-auto mt-28  px-6 md:px-0'>
            <div className='mb-14'>
                <h2 className='text-slate-800 text-3xl text-left'>
                    Personal Info
                </h2>
                <p className='mt-4 text-lg text-slate-500 text-justify'>
                    My name is Milad and I am a 25 years old junior front-end developer
                </p>
            </div>
            <div className='mb-14'>
                <h2 className='text-slate-800 text-3xl text-left'>
                    Goal
                </h2>
                <p className='mt-4 text-lg text-slate-500 text-justify'>
                    My goal is to obtain a job position and work as a front-end (react.js) developer in a company and help the company on the road of success, also gain some exprience from team members.
                </p>
            </div>
            <div className='mb-14'>
                <h2 className='text-slate-800 text-3xl text-left mb-6'>
                    Skills and Exprience
                </h2>
                <Skills/>
            </div>
            <div className='mb-14'>
                <h2 className='text-slate-800 text-3xl text-left'>
                    Interests & Activities
                </h2>
                <ul className='mt-4 text-lg text-slate-500 list-disc ml-10'>
                   <li>Problem Solving</li>
                   <li>Team Work</li>
                   <li>Hard Working & Responsible</li>
                   <li>Learning New Technologies</li>
                   <li>Language Learning</li>
                </ul>
            </div>
            <div className='mb-14'>
                <h2 className='text-slate-800 text-3xl text-left'>
                    Education
                </h2>
                <p className='mt-4 text-lg text-slate-500 text-justify'>
                    Bachelor of Science in Electrical Engineering | Kermanshah University of Technology,    Kermanshah, Iran, 2015-2019.
                </p>
            </div>
            
        </div>
    );
};

export default About;