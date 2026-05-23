import './App.css'
import Header from './Components/Header'
function App() {

  const _3indama_9ala_aitouna = [
    { title : "salkh mlakh" },
    { title : "3asid" },
    { title : "Sahbk wjhk" },
    { title : "Droz" },
    { title : "Grab" },
  ]
  return (
    <>
    <Header />
    {_3indama_9ala_aitouna.map((item,index) => (<h2 key = {index}>{item.title}</h2>))}
    </>
  )
}

export default App
