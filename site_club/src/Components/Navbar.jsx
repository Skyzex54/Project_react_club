import './Comp.css'
import { Link } from 'react-router-dom'
import Ai_dev_favicom from "../assets/favicon.ico"
const Navbar = ({navbarr}) => {
  return (
    <div className="flex items-center w-full bg-white-200 p-2 shadow-md opacity-90 h-12  ">
      <img src={Ai_dev_favicom} alt="AI Dev favicon" className="h-8 w-8" />
      <p className='px-1 font-bold text-cyan-300'>AI DEV COMMUNITY</p>
      <div className="ml-auto flex items-center gap-15 pr-45">
        {navbarr.map((item, index) => (
          <h3 key={index}>
        <Link to={item.path} className="text-black hover:bg-gray-300 rounded-sm py-1 px-3">
        {item.title}
          </Link> 
          </h3>
        ))}
      </div>
      <button className='inline-flex h-7 w-17.75 items-center justify-center px-1.5 rounded-sm border py-0.5 mr-1 border-gray-400 shrink-0 '>Login</button>
      <button className='inline-flex h-7 w-17.75 items-center justify-center rounded-sm border border-emerald-400 bg-emerald-400 text-xs leading-none text-white shrink-0' >Register</button>
    </div>
  )
}
export default Navbar
