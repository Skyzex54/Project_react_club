import { useState } from "react";
import { Link  } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [send, setEnvoye] = useState(false);
    const [error,setError] = useState(false);

    const Handler = () => {
      if (email ==="" || password ==="")
      {setTimeout(() => { setError(true)
        
      },2000)
    }
    else {setEnvoye(true);

        setTimeout(() => {
            setEnvoye(false);
        }, 500);
    }
    setError(false)
        setEmail("");
        setPassword("");
    }
  return (
        
    <div className=' bg-white h-auto p-10 border border-gray-600/20 shadow-md rounded-2xl m-4 w-full max-w-4xl mx-auto'>
      {send && (
            <div className="mb-6 bg-teal-50 border border-teal-200 text-cyan-700 text-sm rounded-xl px-4 py-3 text-center">
                DONE
            </div>
        )}
      {error &&(<div className="'mb-6 bg-red-50 border border-red-200 text-cyan-700 text-sm rounded-xl px-4 py-3 text-center">
        your password or your email is not confirmed
      </div>)}

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
        
        <div className=' flex justify-center m-4  ' >
          <button onClick={Handler} className='bg-linear-to-r to-cyan-400 from-cyan-500 text-white rounded p-2 hover:bg-gray-700 cursor-pointer w-md' >Login</button>
        </div>
        <div className='flex justify-center'>
        <p>Dont have account?
             <Link to="/Register" className='text-cyan-700 cursor-pointer'>Register </Link>
        </p></div>
    </div>
  )
}

export default Login;