'use client'
import React, { useState, useEffect } from 'react';
import MarketStories from './marketStories';
import Disscusion from './disscusionForum';
import Sidebar from './sidebar';
import BottomNavbar from './bottomNavbar';


function Main() {
  const [isMobile, setIsMobile] = useState(false);

  const [activeSectionMobile, setActiveSectionMobile] = useState('discussionForum');


  const handleSectionMobileClick = (section: string) => {
    setActiveSectionMobile(section);
    console.log(section);
  };

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

  let sectionContent;
  if (isMobile) {
    if (activeSectionMobile === 'discussionForum') {
      sectionContent = (
        <Disscusion />
      );
    } else if (activeSectionMobile === 'marketStory') {
      sectionContent = (
        <MarketStories />
      );
    }
  } else {
    sectionContent = (
      <>
        <div className="w-1/2">
          <Disscusion />
        </div>
        <div className="w-1/2" >
          <MarketStories />
        </div>
      </>
    );
  }

  return (

    <div className="text-gray-600 text-xs lg:text-lg body-font h-screen w-screen bg-slate-100 flex flex-col overflow-x-hidden">
      <div className={isMobile ? "hidden" : "main-body flex"}>
        <div className="flex">
          <Sidebar />
        </div>
        <div className='w-full'>
          <Disscusion />
        </div>
        <div className='w-full'>
          <MarketStories />
        </div>

      </div>

      <div className={isMobile ? "flex" : "hidden"}>
        <div className="flex flex-col text-white">
          <div className="sec-selection absolute flex w-full z-10 bg-blue-950 md:hidden">
            <div className="sec p-3 hover:cursor-pointer hover:border-b-2 hover:border-red-700 hover:bg-gray-900 flex flex-1 text-center" onClick={() => handleSectionMobileClick('discussionForum')}>
              <h1 className='w-full text-center font-bold'>Discussion Forum</h1>
            </div>
            <div className="sec p-3 hover:cursor-pointer hover:border-b-2 hover:border-red-700 hover:bg-gray-900 flex w-full flex-1" onClick={() => handleSectionMobileClick('marketStory')}>
              <h1 className='w-full text-center font-bold'>Market Stories</h1>
            </div>
          </div>
          <div className="body-cont pb-10 my-10">
            <div className='absolute h-screen z-10'>
              <Sidebar />
            </div>
            <div className="mx-5 my-10">
              {sectionContent}
            </div>
            
          </div>
          <div className="bottomBar">
          <BottomNavbar />
           </div>
        </div>
      </div>

    </div>

  );
}

export default Main;
