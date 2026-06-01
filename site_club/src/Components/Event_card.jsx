import React from 'react'

const Event_card = ({src,text,alt}) => {
  return (
   <div className="relative inline-flex transition duration-200 delay-100 m-5 h-100 w-130 rounded-3xl border shadow-xl/30 overflow-hidden hover:translate-y-1 hover:scale-110">
  <img src={src} alt={alt} className="h-full w-full " />
  <div className="absolute inset-0  bg-linear-to-b from-white/20 to-cyan-950/95"></div>
  <p className='absolute  inset-0 items-end flex justify-center text-white font-bold'>{text}</p>
</div>
  )
}

export default Event_card
