import React, { useState } from 'react';
import logo from '../assets/logo.png';
import authService from '../Services/authService';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
   username: '',
    password: '',
    location: ''
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSignUp = async () => {
    try {
      const response = await authService.signup(data.username, data.password, data.location);
      console.log("Signup Successful:", response);
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
    }
  };

  const handleSignin = async () => {
    try {
      const response = await authService.login(data.username, data.password);
      console.log("Login Successful:", response);
      navigate('/dashboard');

    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
      <div className="flex justify-center items-center flex-grow w-full">
        {/* Left Side - Logo Only */}
        <div className="hidden md:flex w-2/5 justify-center">
          <img src={logo} alt="ClubHouse Logo" className="w-100" />
        </div>

        {/* Right Side - Sign In / Sign Up Form */}
        <div className="flex flex-col items-center p-8 rounded-lg shadow-md w-96 border border-white">
          {isSignUp ? (
            <>
              <h1 className="text-3xl font-bold font-mono mb-6 bg-gradient-to-r from-gray-400 to-gray-800 text-transparent bg-clip-text">
                hosterHouse Join Now!
              </h1>
              <input type="text" placeholder="Username" className="w-full p-2 mb-4 bg-black text-white border border-gray-700 rounded" name="username" value={data.username} onChange={handleChange} />
              <input type="password" placeholder="Password" className="w-full p-2 mb-4 bg-black text-white border border-gray-700 rounded" name="password" value={data.password} onChange={handleChange} />
              <input type="text" placeholder="Location" className="w-full p-2 mb-4 bg-black text-white border border-gray-700 rounded" name="location" value={data.location} onChange={handleChange} />
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded" onClick={handleSignUp}>Sign Up</button>
              <div className="mt-4 text-sm">
                Already have an account? <span className="text-blue-400 cursor-pointer" onClick={() => setIsSignUp(false)}>Sign in</span>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold font-mono mb-6 bg-gradient-to-r from-gray-400 to-gray-800 text-transparent bg-clip-text">
                hosterHouse Happening Now!
              </h1>
              <input type="text" placeholder="Phone number, username, or username" className="w-full p-2 mb-4 bg-black text-white border border-gray-700 rounded" name="username" value={data.username} onChange={handleChange} />
              <input type="password" placeholder="Password" className="w-full p-2 mb-4 bg-black text-white border border-gray-700 rounded" name="password" value={data.password} onChange={handleChange} />
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded" onClick={handleSignin}>Log in</button>
              <div className="text-gray-400 text-sm mt-4">------------ OR -----------</div>
              <button className="w-full text-white p-2 mt-4 flex items-center justify-center">
                <span className="ml-2">Log in with Google</span>
              </button>
              <a href="#" className="text-blue-400 mt-4 text-sm">Forgot password?</a>
              <div className="mt-4 text-sm">
                Don't have an account? <span className="text-blue-400 cursor-pointer" onClick={() => setIsSignUp(true)}>Sign up</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full text-center p-4 text-gray-500 text-sm">
        <a href="/about">About</a> &bull; <a href="/privacy&terms">Privacy & Terms</a>
        <p>&copy; {new Date().getFullYear()} hosterHouse</p>
      </footer>
    </div>
  );
};

export default Home;
