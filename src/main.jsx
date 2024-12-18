import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar'
import Heading from './components/Heading'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Heading />
  </StrictMode>,
)
