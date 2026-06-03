import React, { useState } from 'react'
import Costume_list from './Custom_listbox'
const Forumulaire_Register = () => {
    const [name, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [send, setEnvoye] = useState(false);
    const [Selectedoption,setSelectedOption] = useState([])
    const [Selected,setSelected] = useState(false)
    const [senderror,setSenderror] = useState(false) 
    const Handler = () => {
      if (name === "" || email === "" || password === "" || Selectedoption === [] ) {
        setSenderror(true)
        setTimeout(() => {
          setSenderror(false)
        },3000)
        return
      }
        setEnvoye(true);
        setTimeout(() => {
          setEnvoye(false)
        },3000)
        setNom("");
        setEmail("");
        setPassword("");
        setSelectedOption([]);
        setSelected(false);
    }
  return (
        
    <div className=' bg-white h-auto p-10 border border-gray-600/20 shadow-md rounded-2xl m-4 w-full max-w-2xl mx-auto'>
      {send && (
            <div className="mb-6 bg-teal-50 border border-teal-200 text-cyan-700 text-sm rounded-xl px-4 py-3 text-center">
                DONE
            </div>
        )}

      {senderror && (
        <div className='mb-6 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 text-center'>
            3amr awldi 3mr myt3mr
        </div>
      )}
      <label className="block text-sm font-semibold text-slate-700 mb-2">
          Full Name
        </label>
        <div className="flex items-center border border-slate-200 rounded-xl px-4 py-3 gap-3 focus-within:border-teal-400 transition-colors">
           <input
           value={name}
            type="text"
            onChange={(e)=>{setNom(e.target.value)}}
            placeholder="Enter your full name"
            className="w-full text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent"
          />
        </div>
       <label className="block text-sm font-semibold text-slate-700 mb-2">
         Email
        </label>
        <div className="flex items-center border border-slate-200 rounded-xl px-4 py-3 gap-3 focus-within:border-teal-400 transition-colors">
           <input
           value={email}
           onChange={(e) => {setEmail(e.target.value)}}
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
           value={password}
           onChange={(e) => {(setPassword(e.target.value))}}
            type="password"
            placeholder="Enter your full password"
            className="w-full text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent"
          />
         
        </div>
         <p className=' text-sm text-gray-400'>Must be at least 6 characters long</p>
         <label className="block text-sm font-semibold text-slate-700 mt-3 mb-2">
         Study Level
        </label>
        <Costume_list setSelectedOption={setSelectedOption} Selectedoption={Selectedoption} setSelected={setSelected} Selected ={Selected}  />
        <div className=' flex justify-center m-4  ' >
          <button onClick={Handler} className='bg-linear-to-r to-cyan-400 from-cyan-500 text-white rounded p-2 hover:bg-gray-700 cursor-pointer w-md' >Register</button>
        </div>
        <div className='flex justify-center'><p>Already have an account? <span className='text-cyan-700 cursor-pointer'>Login</span></p></div>
    </div>
  )
}

export default Forumulaire_Register
