import './App.css'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
function App() {
  const [count,setCount] = useState(0)
 export const NavbarItems = [
    { title : "Menu" },
    { title : "About" },
    { title : "Members" },
    { title : "Events" },
  ]
  return (
    <>
    <Navbar navbarr={NavbarItems}/>
    </>
  )
}

export default App
