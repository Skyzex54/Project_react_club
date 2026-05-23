import './App.css'
import { useState } from 'react'
import Navbar from './Components/Navbar'
function App() {
  const [count,setCount] = useState(0)
  const NavbarItems = [
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
