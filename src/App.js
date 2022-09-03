import React from 'react';
import { Routes, Route } from 'react-router-dom';

//Components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails';
import Footer from './components/Footer';

//Context
import MenuContextProvider from "./contexts/MenuContextProvider";

const App = () => {
  return (
    <div className='relative'>
      <MenuContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/projects/:id' element={<ProjectDetails/>} />
          <Route path='/aboutme' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
      </MenuContextProvider>
    </div>
  );
};

export default App;