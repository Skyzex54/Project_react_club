import './App.css'
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
