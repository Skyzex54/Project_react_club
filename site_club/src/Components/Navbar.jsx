import './Comp.css'
import { Link , useLocation } from 'react-router-dom'
import Ai_dev_favicom from "../assets/favicon.ico"
const Navbar = ({navbarr}) => {
  return (
    <div className="flex items-center w-full bg-white p-2 shadow-md h-20 sticky top-0 z-50">
      <img src={Ai_dev_favicom} alt="AI Dev favicon" className="h-10 w-10" />
      <p className='px-1 font-bold text-cyan-300 text-2xl'>AI DEV COMMUNITY</p>
      <div className="ml-auto flex items-center gap-15 pr-45">
        {navbarr.map((item, index) => (
          <h3 key={index}>
        <Link
          to={item.path}
          className="text-black hover:bg-gray-300 rounded-sm py-1 px-3"
        >
        {item.title}
          </Link>
          </h3>
        ))}
      </div>
       <Link to="/Login" className='inline-flex w-17.75 h-9 items-center justify-center px-1.5 rounded-sm border py-0.5 mr-1 border-gray-400 shrink-0'>
        Login
      </Link>
      <Link to="/Register" className='inline-flex w-17.75 h-9 items-center justify-center rounded-sm border border-emerald-400 bg-emerald-400 text-xs leading-none text-white shrink-0'>
        Register
      </Link>
    </div>
  )
}
export default Navbar
