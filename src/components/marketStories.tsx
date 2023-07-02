import React from 'react'
import Image from 'next/image'
import img1 from '../assets/MarketStories/img1.jpeg'
import img2 from '../assets/MarketStories/img2.jpeg'
function MarketStories() {

    return (
        <div className='marketSection  flex-auto shrink w-full lg:m-2 lg:p-2  hover:overflow-scroll'>
            <div className="md:flex text-xs  flex-wrap w-full  flex-col justify-center ">
                <div className="market-title">
                    <span className='capitalize font-bold text-red-500 py-2 px-5 lg:text-lg'>market stories</span>
                </div>
                <div className="market-body w-fit p-1 flex flex-auto items-center justify-around">
                    <div className='postbox flex flex-wrap postbox-1 justify-stretch p-1'>
                        <div className="relative lg:m-3 m-1  flex-auto max-w-[280px]">
                            <Image src={img1} alt='image' className='rounded-xl h-full ' />
                            <div className="absolute bottom-0 rounded-b-xl left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                                <p className="whitespace-normal mt-2 text-xs text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nulla.</p>
                            </div>
                        </div>
                        <div className="relative lg:m-3 m-1 flex-auto max-w-[280px]">
                            <Image src={img1} alt='image' className='rounded-xl h-full ' />
                            <div className="absolute bottom-0 rounded-b-xl left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                                <p className="whitespace-normal mt-2 text-xs text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nulla.</p>
                            </div>
                        </div>                        <div className="relative lg:m-3 m-1 flex-auto max-w-[280px]">
                            <Image src={img1} alt='image' className='rounded-xl h-full ' />
                            <div className="absolute bottom-0 rounded-b-xl left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                                <p className="whitespace-normal mt-2 text-xs text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nulla.</p>
                            </div>
                        </div>                        <div className="relative lg:m-3 m-1 flex-auto max-w-[280px]">
                            <Image src={img1} alt='image' className='rounded-xl h-full ' />
                            <div className="absolute bottom-0 rounded-b-xl left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                                <p className="whitespace-normal mt-2 text-xs text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nulla.</p>
                            </div>
                        </div>                        <div className="relative lg:m-3 m-1 flex-auto max-w-[280px]">
                            <Image src={img1} alt='image' className='rounded-xl h-full ' />
                            <div className="absolute bottom-0 rounded-b-xl left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                                <p className="whitespace-normal mt-2 text-xs text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nulla.</p>
                            </div>
                        </div>                        <div className="relative lg:m-3 m-1 flex-auto max-w-[280px]">
                            <Image src={img1} alt='image' className='rounded-xl h-full ' />
                            <div className="absolute bottom-0 rounded-b-xl left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                                <p className="whitespace-normal mt-2 text-xs text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nulla.</p>
                            </div>
                        </div>                        <div className="relative  lg:m-3 m-1 flex-auto max-w-[280px]">
                            <Image src={img1} alt='image' className='rounded-xl h-full ' />
                            <div className="absolute bottom-0 rounded-b-xl left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                                <p className="whitespace-normal mt-2 text-xs text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nulla.</p>
                            </div>
                        </div>                        <div className="relative lg:m-3 m-1 flex-auto max-w-[280px]">
                            <Image src={img1} alt='image' className='rounded-xl h-full ' />
                            <div className="absolute bottom-0 rounded-b-xl left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                                <p className="whitespace-normal mt-2 text-xs text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nulla.</p>
                            </div>
                        </div>                        <div className="relative lg:m-3 m-1 flex-auto max-w-[280px]">
                            <Image src={img1} alt='image' className='rounded-xl h-full ' />
                            <div className="absolute bottom-0 rounded-b-xl left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                                <p className="whitespace-normal mt-2 text-xs text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nulla.</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )

}

export default MarketStories
