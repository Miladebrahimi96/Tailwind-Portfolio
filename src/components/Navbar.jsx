import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

//Images
import logo from "../assets/images/milad.png";

//Icons
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

//contexts
import { MenuContext } from '../contexts/MenuContextProvider';

const Navbar = () => {

    const { menu, setMenu } = useContext(MenuContext);

    const navbar = useRef()

    useEffect(() => {
        const handleClickOutside = e => {
            if(navbar.current && !navbar.current.contains(e.target)){
                setMenu(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.addEventListener('mousedown', handleClickOutside);
        } 

    }, [navbar, setMenu]);

    return (
        <div ref={navbar} className='w-full fixed top-0 right-0 z-50'>
            <div className="flex justify-between items-center bg-white p-2 md:px-8">
                <Link to='/'><img className='w-12' src={logo} alt="logo" /></Link>
                <ul className='hidden md:flex space-x-12'>
                    <li className='text-lg font-bold text-slate-800 hover:text-slate-400 transition-all duration-200'><Link to='/'>Home</Link></li>
                    <li className='text-lg font-bold text-slate-800 hover:text-slate-400 transition-all duration-200'><Link to='aboutme'>About Me</Link></li>
                    <li className='text-lg font-bold text-slate-800 hover:text-slate-400 transition-all duration-200'><Link to='/projects'>Projects</Link></li>
                    <li className='text-lg font-bold text-slate-800 hover:text-slate-400 transition-all duration-200'><Link to='/contact'>Contact</Link></li>
                </ul>
                <div
                    onClick={() => setMenu(menu => !menu)}
                    className='md:hidden absolute right-2 text-4xl cursor-pointer  text-slate-800 hover:text-slate-400 transition-all duration-200 z-30'
                >
                    {
                        !menu ? <AiOutlineMenu/> : <AiOutlineClose/>
                    }
                </div>
                
                <ul className={`${menu ? 'flex' : 'hidden'} md:hidden flex-col space-y-12 items-center z-20 absolute right-0 top-0 bg-slate-100 h-screen w-64 pt-24`}>
                    <li className='text-lg font-bold text-slate-800 hover:text-slate-400 transition-all duration-200'><Link to='/'>Home</Link></li>
                    <li className='text-lg font-bold text-slate-800 hover:text-slate-400 transition-all duration-200'><Link to='aboutme'>About Me</Link></li>
                    <li className='text-lg font-bold text-slate-800 hover:text-slate-400 transition-all duration-200'><Link to='/projects'>Projects</Link></li>
                    <li className='text-lg font-bold text-slate-800 hover:text-slate-400 transition-all duration-200'><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;