import './App.css'
import Header from './Components/Header'
import { useState } from 'react'
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
    {_3indama_9ala_aitouna.map((item,index) => (<h2 key = {index}>{item.title}</h2>))}
    <button onClick ={() => setCount(count + 1)}>wrk chhal mn mra 7lmti biha {count}</button>
    </>
  )
}

export default App
