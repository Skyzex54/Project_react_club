import React from 'react'
import { useState } from 'react'
import { options } from './Consts/dropdown_options'
import { useEffect } from 'react'
const Custom_listbox = () => {
    const [Selected,setSelected] = useState(false)
    const [Selectedoption,setSelectedOption] = useState([])

    const selectOption = option => {
            setSelectedOption(prev => [option]);
    }

  return (
   
    <div>
      <div onClick={() =>{
        setSelected(prev =>!prev)
      }} className={Selected ?"flex items-center border transition-colors border-cyan-400 duration-200 delay-75 rounded-xl px-4 py-3 gap-3 translate" : "flex items-center border border-slate-200 rounded-xl px-4 py-3 gap-3" }>
         <p className='select-none text-gray-400'>{Selectedoption.length === 0 ? 'Chose ur study' : Selectedoption[0] }</p>
        </div>
        <div className={`w-full overflow-hidden rounded-2xl border border-white/20 bg-white/20 backdrop-blur-md shadow-lg transition-all duration-200 ease-in-out ${Selected ? 'max-h-60 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none' }`}>
            {options.map((option,index) => {
               return <div onClick={() =>selectOption(option) } className=' p-1.5 cursor-pointer hover:bg-gray-300' key ={index}>{option}</div>
            })}
        </div>
        <div className=' flex justify-center m-4  ' ><button className='bg-linear-to-r to-cyan-400 from-cyan-500 text-white rounded p-2 hover:bg-gray-700 cursor-pointer w-md  ' >Register</button></div>
        <div className='flex justify-center'><p>Already have an account? <span className='text-cyan-700 cursor-pointer'>Login</span></p></div>
    </div>
  )
}

export default Custom_listbox
