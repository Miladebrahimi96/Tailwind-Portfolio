import React from 'react';
import Hero from '../components/Hero';
import ProjectSlider from '../components/ProjectSlider';
import Summary from '../components/Summary';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Summary/>
            <ProjectSlider/>
        </div>
    );
};

export default Home;