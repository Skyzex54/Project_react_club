import './Comp.css'
const Navbar = ({navbarr}) => {
  return (
    <div className ="flex">
       {navbarr.map((item,index) => <h3 key = {index} > <a href = "#"  className="Nav-items">{item.title}</a> </h3>)}
    </div>
  )
}
export default Navbar
