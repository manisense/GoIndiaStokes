'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import logo from '../assets/logo.png'
function Header() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Update the breakpoint as per your requirement
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial check for screen size on component mount
        handleResize();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <header className="bg-white text-sm md:text-base lg:text-lg flex w-screen p-1 lg:px-5 text-gray-900 bg-gray-900 body-font">
            <div className=" w-full  m-1 grow flex md:space-x-3 justify-items-stretch  justify-stretch p-1 items-center">
                <div className='logo min-w-max md:mx-3'>
                    <Image src={logo} alt='logo' className='' />
                </div>

                <div className='search md:min-w-max mx-auto flex grow md:px-5'>
                    <form className='w-full px-3' >
                        <div className="relative m-w-fit">
                            <input type="search" id="default-search" className="block w-full py-3 px-5 text-sm text-gray-700 border border-gray-300 rounded-lg bg-gray-100    " placeholder="" required />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-700 dark:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                        </div>
                    </form>
                </div>

                <div className='contact hidden lg:px-1 whitespace-nowrap md:flex lg:p-1 lg:pr-3 m-w-fit'>
                    <nav className=" flex flex-wrap items-center text-base justify-center">
                        <a className="mx-2 hover:font-bold hover:cursor-pointer">Contact Us</a>
                    </nav>
                    <button className="bg-transparent m-1 hover:bg-gray-700 text-gray-700 font-semibold hover:text-white py-2 px-6 border border-gray-700 hover:border-transparent rounded">
                        SIGN UP
                    </button>
                    <button className="bg-transparent m-1 hover:bg-gray-700 text-gray-700 font-semibold hover:text-white py-2 px-6 border border-gray-700 hover:border-transparent rounded">
                        SIGN IN
                    </button>
                </div>
                <div className={isMobile ? "flex" : "hidden"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                    </svg>

                </div>

            </div>
        </header>
    )
}

export default Header
