import './Comp.css'
const Navbar = ({sahbk}) => {
  return (
    <div className ="flex">
       {sahbk.map((item,index) => (<h2 key = {index}>{item.title}</h2>))}
    </div>
  )
}
export default Navbar
