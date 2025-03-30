import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Loading from './Pages/Loading'
import About from './Pages/About'
import Privacy from './Pages/Privacy';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy&terms" element={<Privacy />} />
      </Routes>
    </Router>
   
    
    </>
  )
}

export default App
