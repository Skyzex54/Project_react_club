import './Comp.css'
const Navbar = ({navbarr}) => {
  return (
    <div className ="flex justify-end gap-15 pr-45 bg-gray-200 p-2 shadow-md opacity-90 " >
       {navbarr.map((item,index) => <h3 key = {index} > <a href = "#" className="text-black hover:bg-gray-300 rounded-4xl py-1 px-1 ">{item.title}</a> </h3>)}
    </div>
  )
}
export default Navbar
