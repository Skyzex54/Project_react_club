import './Comp.css'
import { Link , useLocation } from 'react-router-dom'
import Ai_dev_favicom from "../assets/favicon.ico"
const Navbar = ({navbarr}) => {
  return (
    <div className="flex flex-wrap items-center justify-between w-full bg-linear-to-r from-slate-100 to-gray-200 p-2 shadow-md h-20 sticky top-0 z-50 md:flex ">
      <img src={Ai_dev_favicom} alt="AI Dev favicon" className="h-4 w-4 md:h-10 md:w-10 shrink-0" />
      <p className='md:px-1 font-bold text-cyan-300 md:text-2xl'>AI DEV COMMUNITY</p>
      <div className="ml-auto inline-flex items-center text-sm md:text-base md:gap-15 md:pr-45">
        {navbarr.map((item, index) => (
          <h3 key={index}>
        <Link
          to={item.path}
          className=" inline-flex md:py-1 md:px-3 text-black transition  duration-200 hover:-translate-y-1 hover:scale-110 hover:bg-linear-to-r from-gray-400 to-cyan-300 hover:bg-clip-text hover:text-transparent "
        >
        {item.title}
          </Link>
          </h3>
        ))}
      </div>
       <Link to="/Login" className='inline-flex md:w-17.75 md:h-9 transition duration-200 items-center justify-center px-1.5 py-0.5 mr-1 shrink-0 hover:-translate-y-1 hover:scale-110 hover:bg-linear-to-r from-gray-400 to-cyan-300 hover:bg-clip-text hover:text-transparent'>
        Login
      </Link>
      <Link to="/Register" className='inline-flex md:w-17.75 md:h-9 transition duration-200 items-center justify-center leading-none shrink-0 hover:-translate-y-1 hover:scale-110 hover:bg-linear-to-r from-gray-400 to-cyan-300 hover:bg-clip-text hover:text-transparent'>
        Register
      </Link>
    </div>
  )
}
export default Navbar
