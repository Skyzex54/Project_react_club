import Formulaire from "../Components/Forumulaire_Register"
function Register() {
  return (
    <>
   <div className="min-h-screen bg-slate-50 grid grid-cols-2">
    <div className=" min-h-screen col-start-1 bg-linear-to-br from-cyan-600 to-teal-500 h-30 shadow-md "></div>
    <div className="flex flex-col items-center">
      <p className=" col-start-2 pt-16 pb-2 font-bold text-3xl">Create Account</p>
      <p className=" text-gray-600">Start your tech journey with us</p>
      <Formulaire/>
    </div>
    
    </div>
    </>
  )
}

export default Register
