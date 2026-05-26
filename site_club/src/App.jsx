import './App.css'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Home, About, Members, Events } from './pages'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  const [count,setCount] = useState(0)
  const NavbarItems = [
    { title : "Menu", path: "/" },
    { title : "About", path: "/about" },
    { title : "Members", path: "/members" },
    { title : "Events", path: "/events" },
  ]
  return (
    <>
    <Router>    
      <Navbar navbarr={NavbarItems}/>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/about" element={<About /> } />
        <Route path="/members" element={<Members /> } />
        <Route path="/events" element={<Events /> } />
      </Routes>
    </Router>
    </>
  )
}

export default App
