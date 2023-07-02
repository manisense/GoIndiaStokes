import React from 'react'
import Image from 'next/image'
import comp1 from '../assets/featured_companies/fino.png';
import comp2 from '../assets/featured_companies/gravita.jpg';
import comp3 from '../assets/featured_companies/hginfra.jpg';
function FeatComps() {
    return (
        <div className="relative text-xs md:text-base lg:text-lg flex flex-col overflow-x-hidden bg-white text-gray-700">
            <div className="title bg-gray-200 p-3 ">
                <span className='uppercase text-red-700 font-bold m-1 pl-3'> featured companies</span>
            </div>

            <div className="px-6 bg-blue-200  whitespace-nowrap">
                <div className='animate-marquee2 p-1 flex items-center'>
                    <div className="comps comp-1 w-32 px-1 mx-1">
                        <Image src={comp1} alt='comp1' />
                    </div>
                    <div className="comps comp-2 w-32 px-1 mx-1">
                        <Image src={comp2} alt='comp2' />
                    </div>
                    <div className="comps comp-3 w-32 px-1 mx-1">
                        <Image src={comp3} alt='comp3' />
                    </div>
                    <div className="comps comp-1 w-32 px-1 mx-1">
                        <Image src={comp1} alt='comp1' />
                    </div>
                    <div className="comps comp-2 w-32 px-1 mx-1">
                        <Image src={comp2} alt='comp2' />
                    </div>
                    <div className="comps comp-3 w-32 px-1 mx-1">
                        <Image src={comp3} alt='comp3' />
                    </div>
                    <div className="comps comp-1 w-32 px-1 mx-1">
                        <Image src={comp1} alt='comp1' />
                    </div>
                    <div className="comps comp-2 w-32 px-1 mx-1">
                        <Image src={comp2} alt='comp2' />
                    </div>
                    <div className="comps comp-3 w-32 px-1 mx-1">
                        <Image src={comp3} alt='comp3' />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default FeatComps
