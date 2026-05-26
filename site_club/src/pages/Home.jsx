import React from 'react'
import Home_Image from '../assets/home_photo.jpeg'
function Home() {
  return (
    <>
    <div className='relative w-full h-[80vh] overflow-hidden'>
      <img src= {Home_Image} alt='AI DEV PHOTO' className="w-full h-full object-cover" ></img>
    </div>
    
    </>
    
  )
}

export default Home