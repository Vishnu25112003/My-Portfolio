import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './Components/About.jsx'
import Home from './Components/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    <About/>
    <App />
  </StrictMode>,
)
