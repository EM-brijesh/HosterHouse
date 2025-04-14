import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import About from './Pages/About'
import Privacy from './Pages/Privacy';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './Pages/Dashboard';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import EventDetails from './Pages/EventDetails';
import Footer from './Components/Footer';
import authService from './Services/authService';
import CreateEventForm from './Pages/Creator';

function App() {
  const token = authService.getToken();

  return (
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route 
                path="/" 
                element={token ? <Navigate to="/dashboard" replace /> : <Login />} 
              />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
               <Route 
                path="/hoster" 
                element={
                  <ProtectedRoute>
                    <CreateEventForm />
                  </ProtectedRoute>
                } 
              />
              <Route path="/about" element={<About />} />
              <Route path="/privacy&terms" element={<Privacy />} />
              <Route path="/event/:id" element={<EventDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
