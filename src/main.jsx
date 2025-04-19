import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToletProvider } from './Services/Context/ToletContext.jsx'


createRoot(document.getElementById('root')).render(
  <ToletProvider>
    <App />
  </ToletProvider>
)
