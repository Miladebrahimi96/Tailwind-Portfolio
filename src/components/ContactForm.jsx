import React from 'react';
import { useState } from 'react';

const ContactForm = () => {

    const [state, setState] = useState({
        name: '',
        email:'',
        message: ''
    })

    const changeHandler = e => setState({...state, [e.target.name]: e.target.value});

    const submitHandler = e => {
        e.preventDefault();
    }

    return (
        <form 
            className='md:w-1/2 flex flex-col items-center space-y-6'
            onSubmit={submitHandler}
        >
            <input 
                className='border-2 px-4 py-1 rounded-md outline-none w-64' 
                type="text" 
                placeholder='Full Name'
                name='name'
                value={state.name}
                onChange={changeHandler}
            />
            <input 
                className='border-2 px-4 py-1 rounded-md outline-none w-64' 
                type="email" 
                placeholder='Email'
                name='email'
                value={state.email}
                onChange={changeHandler}
            />
            <textarea 
                className='border-2 w-64 rounded-md px-4 py-2 outline-none'
                cols="30" 
                rows="10"
                placeholder='Enter Your Message'
                name='message'
                value={state.message}
                onChange={changeHandler}
            >
            </textarea>
            <button 
                className='bg-green-500 text-white px-4 py-1 text-lg rounded-md hover:bg-green-400 active:scale-90'
                type='submit'
            >
                    Send
            </button>
        </form>
    );
};

export default ContactForm;