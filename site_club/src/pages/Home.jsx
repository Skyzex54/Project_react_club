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
    <div className='grid min-h-[12vh] grid-rows-[auto_1fr] bg-emerald-100'>
      <p className='row-start-1 text-center font-bold p-2'>Our Objective</p>
      <div className='row-start-2 grid grid-cols-3 p-2'>
        <div className='col-start-1 '>
          <p className='text-center font-bold'>Regular Events</p>
          <p>hhhhhhhhhh</p>
        </div>
        <div className='col-start-2'>
          <p className='text-center font-bold'>Vibrant Community</p>
        </div>
        <div className='col-start-3'>
          <p className='text-center font-bold'>Learn & Grow</p>
        </div>
      </div>
    </div>
    <div className='h-auto grid grid-cols-2 bg-linear-to-r from-emerald-600 to-emerald-300'>
      <div className ='inline-flex col-start-2 justify-center'>
        <button className='px-2'>press</button>
        <button className='px-2'>press2</button>
      </div>
      <p className='row-start-1 col-start-1 text-center'>hhhhh</p>
    </div>
    </>
    
  )
}

export default Home