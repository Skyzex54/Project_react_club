import './Comp.css'
const Navbar = ({navbarr}) => {
  return (
    <div className ="flex justify-end gap-15 pr-45 bg-emerald-300 p-2 shadow-md opacity-90 " >
       {navbarr.map((item,index) => <h3 key = {index} > <a href = "#" className="text-white hover:bg-emerald-700 rounded-4xl py-1 px-1 ">{item.title}</a> </h3>)}
    </div>
  )
}
export default Navbar
