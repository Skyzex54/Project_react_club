import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Home, About, Members, Events , Login , Register } from './pages'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react'

export const NavbarItems = [
    { title : "Menu", path: "/" },
    { title : "About", path: "/about" },
    { title : "Members", path: "/members" },
    { title : "Events", path: "/events" },
  ]
function App() {
 const [HomeOpen,setHomeOpen] = useState(false)

  return (
    
    <>
    <div className="min-h-screen flex flex-col">
      <Router>
        <Navbar onHomeToggle = {() => {
          setHomeOpen(s => !s)
        }} navbarr={NavbarItems} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home HomeOpen = {HomeOpen} />} />
            <Route path="/about" element={<About />} />
            <Route path="/members" element={<Members />} />
            <Route path="/events" element={<Events />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </main>

       
      </Router>
       <Footer />
    </div>
    </>
  )
}

export default App
