import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Privacy from './Pages/Privacy';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './Pages/Dashboard';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
        <main className="container mx-auto px-4 py-8">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="/about" element={<About />} />
            <Route path="/privacy&terms" element={<Privacy />} />
          </Routes>
        </main>
    </Router>
  );
}

export default App;
