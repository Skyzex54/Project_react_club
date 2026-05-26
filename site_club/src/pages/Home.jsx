import React from 'react'
import Home_Image from '../assets/home_photo.jpeg'
function Home() {
  return (
    <>
    <div className='relative w-full h-[80vh] overflow-hidden '>
      <img src= {Home_Image} alt='AI DEV PHOTO' className="w-full h-full object-cover" ></img>
      <div className="absolute inset-0 bg-emerald-600/30"></div>
      <div className="absolute inset-0 z-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Welcome to AI Dev Community</h1>
      </div>
    </div>
    
    </>
    
  )
}

export default Home