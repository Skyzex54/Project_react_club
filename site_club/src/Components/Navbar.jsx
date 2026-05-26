import './Comp.css'
import { Link } from 'react-router-dom'
const Navbar = ({navbarr}) => {
  return (
    <div className ="flex justify-end gap-6 pr-8 bg-gray-200 p-2 shadow-md opacity-90 " >
       {navbarr.map((item,index) => (
       <h3 key = {index}> 
       <Link to={item.path} className="text-black hover:bg-gray-300 rounded-xl py-1 px-3">
      {item.title}
    </Link> 
  </h3>
))}
</div>
)
}
export default Navbar
