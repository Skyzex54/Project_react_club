import React from 'react'
import Home_Image from '../assets/home_photo.jpeg'
function Home() {
  return (
    <>
    <div className='relative w-full h-[80vh] overflow-hidden  '>
      <img src= {Home_Image} alt='AI DEV PHOTO' className="w-full h-full object-cover" ></img>
      <div className="absolute inset-0 bg-emerald-600/30"></div>
      <div className="absolute inset-0 z-50 grid items-center justify-center grid-cols-2 grid-rows-2 px-15">
        <h1 className="text-white text-4xl font-bold col-start-1 row-start-1">Welcome to AI Dev Community</h1>
      </div>
      
    </div>
    <div className='h-[12vh] grid grid-rows-2 bg-emerald-100'><p className='row-start-1 text-center'>Our Objective</p></div>
    <div className='h-[12vh] grid grid-rows-2 bg-linear-to-r from-emerald-600 to-emerald-300'><p className='row-start-1 text-center'>Our Objective</p></div>
    </>
    
  )
}

export default Home