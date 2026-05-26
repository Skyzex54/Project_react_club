import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const NavbarItems = [
    { title : "Menu" },
    { title : "About" },
    { title : "Members" },
    { title : "Events" },
  ]
  

  return (
    <>
    <Navbar navbarr={NavbarItems}/>
    <title>CLUB DEV&AI</title>
    <h1 className='text-center font-arial text-blue-500'>A propos de nous</h1>
    </>
  )
}

export default App
