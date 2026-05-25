import './Comp.css'
import Ai_dev_favicom from "../assets/favicon.ico"
const Navbar = ({navbarr}) => {
  return (
    <div className="flex items-center w-full bg-gray-200 p-2 shadow-md opacity-90 h-10">
      <img src={Ai_dev_favicom} alt="AI Dev favicon" className="h-8 w-8" />
      <p className='px-1 font-bold text-cyan-300'>AI DEV COMMUNITY</p>
      <div className="ml-auto flex items-center gap-15 pr-45">
        {navbarr.map((item, index) => (
          <h3 key={index}>
            <a href="#" className="text-black transition-colors duration-300 h-full hover:bg-gray-300/70 py-3 px-1">
              {item.title}
            </a>
          </h3>
        ))}
      </div>
    </div>
  )
}
export default Navbar
