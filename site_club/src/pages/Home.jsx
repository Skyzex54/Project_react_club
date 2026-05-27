import React from 'react'
import Home_Image from '../assets/home_photo.jpeg'
import { Link } from 'react-router-dom'
function Home({HomeOpen}) {
  return (
    <>
    <div className='relative w-full h-[80vh] overflow-hidden  '>
      <img src= {Home_Image} alt='AI DEV PHOTO' className="w-full h-full object-cover" ></img>
      <div className="absolute inset-0 bg-emerald-600/30"></div>
      <div className="absolute inset-0 z-30 grid items-center justify-center grid-cols-2 grid-rows-2 px-15">
        <h1 className={"text-white text-4xl font-bold col-start-1 row-start-1 transform transition-all duration-500 " + (HomeOpen ? 'opacity-100 translate-x-24' : 'opacity-0 -translate-x-8')} >Welcome to AI Dev Community</h1>
      </div>
     
    </div>
    <div className='grid min-h-[12vh] grid-rows-[auto_1fr] bg-emerald-100'>
      <p className='row-start-1 text-center font-bold p-2 bg-linear-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent'>Our Objective</p>
      <div className='row-start-2 grid grid-cols-3 p-2'>
        <div className='col-start-1 '>
          <p className='text-center font-bold bg-linear-to-r from-emerald-600 to-emerald-300 bg-clip-text text-transparent'>Regular Events</p>
          <p className='text-center bg-linear-to-r from-black to-emerald-300 bg-clip-text text-transparent '>Weekly workshops, hackathons, and tech talks</p>
        </div>
        <div className='col-start-2'>
          <p className='text-center font-bold bg-linear-to-r from-emerald-600 to-emerald-300 bg-clip-text text-transparent'>Vibrant Community</p>
          <p className='text-center bg-linear-to-r from-black to-emerald-300 bg-clip-text text-transparent' >Connect with passionate developers and innovators</p>
        </div>
        <div className='col-start-3'>
          <p className='text-center font-bold bg-linear-to-r from-emerald-600 to-emerald-300 bg-clip-text text-transparent'>Learn & Grow</p>
          <p className='text-center bg-linear-to-r from-black to-emerald-300 bg-clip-text text-transparent'>Skill up with hands-on projects and mentorship</p>
        </div>
      </div>
    </div>
    <div className='min-h-[12vh] grid grid-cols-2 bg-linear-to-r from-emerald-600 to-emerald-300'>
      <div className=' col-start-1  flex  flex-col items-center justify-center '>
          <p className='bg-linear-to-r from-white to-emerald-300 bg-clip-text text-transparent font-bold'>Become part of our growing community of AI and tech enthusiasts</p>
          <p className='text-sm bg-linear-to-r from-white to-emerald-300 bg-clip-text text-transparent '>Join us in exploring the future of artificial intelligence and machine learning</p>
      </div>
       <div className ='inline-flex col-start-2 justify-center'>
        <Link to="/Register" className='px-10 rounded-sm border-b-emerald-500 mt-8 mb-8 mr-4 bg-linear-to-r to-emerald-200 from-emerald-100 flex items-center  '>Register</Link>
        <Link to="/members" className=' bg-linear-to-r from-white to-emerald-300 bg-clip-text text-transparent px-10 rounded-sm border border-emerald-100/50 mt-8 mb-8 mr-2 flex items-center'>Explore Members</Link>
      </div>
    </div>
    </>
    
  )
}

export default Home