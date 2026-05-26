import './App.css'
import { useState } from 'react'
import Navbar from './Components/Navbar'
export const NavbarItems = [
  { title: 'Menu' },
  { title: 'About' },
  { title: 'Members' },
  { title: 'Events' },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar navbarr={NavbarItems} />
    </>
  )
}

export default App
