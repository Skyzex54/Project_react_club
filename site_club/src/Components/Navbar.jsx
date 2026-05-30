import './Comp.css'
import { Link , useLocation } from 'react-router-dom'
import Ai_dev_favicom from "../assets/favicon.ico"
const Navbar = ({navbarr}) => {
  return (
    <div className="flex items-center w-full bg-linear-to-r from-slate-500 to-gray-600 p-2 shadow-md h-20 sticky top-0 z-50">
      <img src={Ai_dev_favicom} alt="AI Dev favicon" className="h-10 w-10" />
      <p className='px-1 font-bold text-cyan-300 text-2xl'>AI DEV COMMUNITY</p>
      <div className="ml-auto inline-flex items-center gap-15 pr-45">
        {navbarr.map((item, index) => (
          <h3 key={index}>
        <Link
          to={item.path}
          className=" inline-flex py-1 px-3 text-cyan-200 transition  duration-200 hover:-translate-y-1 hover:scale-110 hover:bg-linear-to-r from-gray-400 to-emerald-300 hover:bg-clip-text hover:text-transparent "
        >
        {item.title}
          </Link>
          </h3>
        ))}
      </div>
       <Link to="/Login" className='text-cyan-200 inline-flex w-17.75 h-9 transition duration-200 items-center justify-center px-1.5 py-0.5 mr-1 shrink-0 hover:-translate-y-1 hover:scale-110 hover:bg-linear-to-r from-gray-400 to-emerald-300 hover:bg-clip-text hover:text-transparent'>
        Login
      </Link>
      <Link to="/Register" className='text-cyan-200 inline-flex w-17.75 h-9 transition duration-200 items-center justify-center leading-none shrink-0 hover:-translate-y-1 hover:scale-110 hover:bg-linear-to-r from-gray-400 to-emerald-300 hover:bg-clip-text hover:text-transparent'>
        Register
      </Link>
    </div>
  )
}
export default Navbar
