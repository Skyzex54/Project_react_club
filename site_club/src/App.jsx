import './App.css'
import Header from './Components/Header'
import { useState } from 'react'
import Navbar from './Components/Navbar'
function App() {
  const [count,setCount] = useState(0)
  const _3indama_9ala_aitouna = [
    { title : "salkh mlakh" },
    { title : "3asid" },
    { title : "Sahbk wjhk" },
    { title : "Droz" },
    { title : "Grab" },
  ]
  return (
    <>
    <Header title = "A9wal Aitouna"/>
    <Navbar sahbk={_3indama_9ala_aitouna}/>
    <footer className='footer'><button  className = "khtna" onClick ={() => setCount(count + 1)}>wrk chhal mn mra 7lmti biha {count}</button></footer>
    
    </>
  )
}

export default App
