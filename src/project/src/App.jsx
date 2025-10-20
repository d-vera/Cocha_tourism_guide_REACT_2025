import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CustomNavbar from './components/CustomNavbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

import Index from './pages/Index';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path="/servicios" element={<Servicios />} />
        <Route path="/impacto" element={<Impacto />} />
        <Route path="/contacto" element={<Contacto />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
