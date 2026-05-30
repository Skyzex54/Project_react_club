import React from 'react'
import { useState } from 'react'
// focus-within:border-teal-400 transition-colors
const Custom_listbox = () => {
    const [Selected,setSelected] = useState(false)
  return (
   
    <div>
      <div onClick={() =>{
        setSelected(prev =>!prev)

      }} className={Selected ?"flex items-center border transition-colors border-cyan-400 duration-200 delay-150 rounded-xl px-4 py-3 gap-3 translate" : "flex items-center border border-slate-200 rounded-xl px-4 py-3 gap-3" }>
         <p className='select-none text-gray-400'>Select you're study level</p>
        </div>
    </div>
  )
}

export default Custom_listbox
