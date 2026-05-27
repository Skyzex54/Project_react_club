import React from 'react'

const Event_card = ({src,text,alt}) => {
  return (
    <div>
      <img src={src} alt={alt} className=" h-100 w-100 object-cover m-5 ">
      </img>

    </div>
  )
}

export default Event_card
