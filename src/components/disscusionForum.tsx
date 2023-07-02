import React from 'react'
import Image from 'next/image'
import img1 from '../assets/MarketStories/img1.jpeg'
import img2 from '../assets/DisscusionForum/download.png'
function Disscusion() {
  return (
    <div className='disscusionForum w-full md:flex md:flex-col  lg:m-2 lg:p-2  hover:overflow-scroll duration-500'>
      <div className="disscusion-title">
        <span className='capitalize font-bold text-red-500 py-1 px-3'>Disscusion Forum</span>
      </div>
      <div className="disscusion-filter p-1">
        <div className="disscusion-filter-title">
          <span className='capitalize font-bold text-gray-800 py-1 px-3'>Filters</span>
        </div>
        <div className="disscusion-filter-body flex shadow-lg px-6 py-3 rounded-xl m-1 bg-white items-center">
          <div className=" flex-1"><button className='bg-red-700 text-xs lg:text-lg whitespace-nowrap text-white px-3 py-1 rounded-2xl'>Sector 1</button></div>
          <div className=" flex-1"><button className='bg-blue-700 text-xs lg:text-lg  whitespace-nowrap text-white px-3 py-1 rounded-2xl'>Sector 2</button></div>
          <div className=" flex-1"><button className='bg-yellow-500 text-xs lg:text-lg  whitespace-nowrap text-white px-3 py-1 rounded-2xl'>Sector 3</button></div>
          <div className=" flex-1 relative">            
          <div className="absolute inset-y-0 left-0 flex items-center md:pl-2 pointer-events-none">
              <svg aria-hidden="true" className="w-2 h-2  lg:w-4 lg:h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>                        
            <input type="search" id="default-search" className="block shadow-inner text-center rounded-3xl w-full lg:py-1.5 px-2 text-sm text-gray-700 border border-gray-500  bg-gray-200  " placeholder="Search Here" required />
          </div>
        </div>
      </div>
      <div className="disscusion-body ">
        <div className="p-1 m-1flex flex-wrap w-full items-center justify-items-center flex-col justify-center">
          <div className="forum-post my-3 shadow-lg shadow-lg p-2 m-2 text-black bg-white border-gray-200  rounded-xl ">
            <div className="flex justify-between">
              <div className="flex items-center">
                <Image width={200} height={200} alt='image' className="h-11 w-11 rounded-full" src={img1} />
                <div className="m-1 p-1 text-sm leading-tight">
                  <span className="text-black font-bold  ">Lorem ipsum</span>
                </div>
                <div className="m-1 p-1 text-sm leading-tight">
                  <button className='bg-red-700 text-white px-3 py-1 rounded-2xl'>Sector 1</button>
                </div>
              </div>
              <span className='text-blue-500'>2 min ago</span>
            </div>
            <div className="postBody px-3 flex flex-col w-full items-center ">
              <div className="postImage px-2">
                <Image height={200} className="rounded-2xl " src={img2} alt='image' />
              </div>
              <div className="postText mb-2 px-2">
                <p className="text-black block leading-snug my-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, maxime architecto.</p>
              </div>


              <div className="text-gray-700 flex w-full px-3 items-center justify-items-between">
                <div className="flex mx-1 w-full items-center justify-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>

                  <span className="mx-1">615</span>
                </div>
                <div className="flex mx-1 w-full justify-items-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>

                  <span className="whitespace-nowrap mx-1">2k comments</span>
                </div>
                <div className="flex mx-1  w-full items-center justify-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>

                </div>
                <div className="flex mx-1 w-full items-center justify-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
          <div className="forum-post my-3 shadow-lg p-2 m-2 text-black bg-white border-gray-200  rounded-xl ">
            <div className="flex justify-between">
              <div className="flex items-center">
                <Image width={200} height={200} alt='image' className="h-11 w-11 rounded-full" src={img1} />
                <div className="m-1 p-1 text-sm leading-tight">
                  <span className="text-black font-bold  ">Lorem ipsum</span>
                </div>
                <div className="m-1 p-1 text-sm leading-tight">
                  <button className='bg-blue-700 text-white px-3 py-1 rounded-2xl'>Sector 2</button>
                </div>
              </div>
              <span className='text-blue-500'>2 min ago</span>
            </div>
            <div className="postBody px-3 flex flex-col w-full items-center ">
              <div className="postImage px-2">

              </div>
              <div className="postText mb-2 px-2">
                <p className="text-black block leading-snug my-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, maxime architecto.</p>
              </div>


              <div className="text-gray-700 flex w-full px-3 items-center justify-items-between">
                <div className="flex mx-1 w-full items-center justify-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>

                  <span className="mx-1">615</span>
                </div>
                <div className="flex mx-1 w-full justify-items-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>

                  <span className="whitespace-nowrap mx-1">2k comments</span>
                </div>
                <div className="flex mx-1  w-full items-center justify-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>

                </div>
                <div className="flex mx-1 w-full items-center justify-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
          <div className="forum-post my-3 shadow-lg p-2 m-2 text-black bg-white border-gray-200  rounded-xl ">
            <div className="flex justify-between">
              <div className="flex items-center">
                <Image width={200} height={200} alt='image' className="h-11 w-11 rounded-full" src={img1} />
                <div className="m-1 p-1 text-sm leading-tight">
                  <span className="text-black font-bold  ">Lorem ipsum</span>
                </div>
                <div className="m-1 p-1 text-sm leading-tight">
                  <button className='bg-yellow-500 text-white px-3 py-1 rounded-2xl'>Sector 3</button>
                </div>
              </div>
              <span className='text-blue-500'>2 min ago</span>
            </div>
            <div className="postBody px-3 flex flex-col w-full items-center ">
              <div className="postImage px-2">

              </div>
              <div className="postText mb-2 px-2">
                <p className="text-black block leading-snug my-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, maxime architecto.</p>
              </div>


              <div className="text-gray-700 flex w-full px-3 items-center justify-items-between">
                <div className="flex mx-1 w-full items-center justify-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>

                  <span className="mx-1">615</span>
                </div>
                <div className="flex mx-1 w-full justify-items-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>

                  <span className="whitespace-nowrap mx-1">2k comments</span>
                </div>
                <div className="flex mx-1  w-full items-center justify-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>

                </div>
                <div className="flex mx-1 w-full items-center justify-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
          <div className="forum-post my-3 shadow-lg p-2 m-2 text-black bg-white border-gray-200  rounded-xl ">
            <div className="flex justify-between">
              <div className="flex items-center">
                <Image width={200} height={200} alt='image' className="h-11 w-11 rounded-full" src={img1} />
                <div className="m-1 p-1 text-sm leading-tight">
                  <span className="text-black font-bold  ">Lorem ipsum</span>
                </div>
                <div className="m-1 p-1 text-sm leading-tight">
                  <button className='bg-blue-700 text-white px-3 py-1 rounded-2xl'>Sector 2</button>
                </div>
              </div>
              <span className='text-blue-500'>2 min ago</span>
            </div>
            <div className="postBody px-3 flex flex-col w-full items-center ">
              <div className="postImage px-2">

              </div>
              <div className="postText mb-2 px-2">
                <p className="text-black block leading-snug my-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, maxime architecto.</p>
              </div>


              <div className="text-gray-700 flex w-full px-3 items-center justify-items-between">
                <div className="flex mx-1 w-full items-center justify-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>

                  <span className="mx-1">615</span>
                </div>
                <div className="flex mx-1 w-full justify-items-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>

                  <span className="whitespace-nowrap mx-1">2k comments</span>
                </div>
                <div className="flex mx-1  w-full items-center justify-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>

                </div>
                <div className="flex mx-1 w-full items-center justify-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
          <div className="forum-post my-3 shadow-lg p-2 m-2 text-black bg-white border-gray-200  rounded-xl ">
            <div className="flex justify-between">
              <div className="flex items-center">
                <Image width={200} height={200} alt='image' className="h-11 w-11 rounded-full" src={img1} />
                <div className="m-1 p-1 text-sm leading-tight">
                  <span className="text-black font-bold  ">Lorem ipsum</span>
                </div>
                <div className="m-1 p-1 text-sm leading-tight">
                  <button className='bg-blue-700 text-white px-3 py-1 rounded-2xl'>Sector 2</button>
                </div>
              </div>
              <span className='text-blue-500'>2 min ago</span>
            </div>
            <div className="postBody px-3 flex flex-col w-full items-center ">
              <div className="postImage px-2">

              </div>
              <div className="postText mb-2 px-2">
                <p className="text-black block leading-snug my-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, maxime architecto.</p>
              </div>


              <div className="text-gray-700 flex w-full px-3 items-center justify-items-between">
                <div className="flex mx-1 w-full items-center justify-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>

                  <span className="mx-1">615</span>
                </div>
                <div className="flex mx-1 w-full justify-items-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>

                  <span className="whitespace-nowrap mx-1">2k comments</span>
                </div>
                <div className="flex mx-1  w-full items-center justify-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>

                </div>
                <div className="flex mx-1 w-full items-center justify-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>





        </div>
      </div>
    </div>
  )
}

export default Disscusion
