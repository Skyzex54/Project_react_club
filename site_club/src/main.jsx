import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './Components/About.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path= "/home" element ={<About />}/>
    </Routes>
  </BrowserRouter>,
  </StrictMode>,
)
