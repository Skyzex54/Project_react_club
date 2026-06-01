import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Home, About, Members, Contact, Login, Register } from './pages'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
export const NavbarItems = [
    { title : "Home", path: "/" },
    { title : "About", path: "/about" },
    { title : "Members", path: "/members" },
    { title : "Contact", path: "/contact" },
  ]
function App() {

  
  return (
    
    <>
    <div className="min-h-screen flex flex-col">
      <Router>
        <Navbar navbarr={NavbarItems} />

        <main className="flex-1">
          <Routes>
            
            <Route path="/" element={<><Home /> <Footer /></>} />
            <Route path="/about" element={<><About /> <Footer /></>} />
            <Route path="/members" element={<><Members /><Footer /></>} />
            <Route path="/contact" element={<><Contact /> <Footer /></>} />
            <Route path="/Login" element={<><Login /> <Footer /></>} />
            <Route path="/Register" element={<><Register /></>} />
          </Routes>
        </main>

       
      </Router>
      
    </div>
    </>
  )
}

export default App
