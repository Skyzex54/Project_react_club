import React from 'react'
import Costume_list from './Custom_listbox'
const Forumulaire_Register = () => {
  return (
    <div className=' bg-white h-auto p-10 border border-black rounded-2xl m-4 w-full max-w-2xl mx-auto'>
      
      <label className="block text-sm font-semibold text-slate-700 mb-2">
          Full Name
        </label>
        <div className="flex items-center border border-slate-200 rounded-xl px-4 py-3 gap-3 focus-within:border-teal-400 transition-colors">
           <input
            type="text"
            placeholder="Enter your full name"
            className="w-full text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent"
          />
        </div>
       <label className="block text-sm font-semibold text-slate-700 mb-2">
         Email
        </label>
        <div className="flex items-center border border-slate-200 rounded-xl px-4 py-3 gap-3 focus-within:border-teal-400 transition-colors">
           <input
            type="email"
            placeholder="Enter your full email"
            className="w-full text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent"
          />
        </div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
         Password
        </label>
        <div className="flex items-center border border-slate-200 rounded-xl px-4 py-3 gap-3 focus-within:border-teal-400 transition-colors">
           <input
            type="password"
            placeholder="Enter your full password"
            className="w-full text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent"
          />
         
        </div>
         <p className=' text-sm text-gray-400'>Must be at least 6 characters long</p>
         <label className="block text-sm font-semibold text-slate-700 mt-3 mb-2">
         Study Level
        </label>
        <Costume_list/>
    </div>
  )
}

export default Forumulaire_Register
