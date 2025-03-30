import React from 'react';
import logo from '../assets/logo.png';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
      <div className="flex justify-center items-center flex-grow w-full">
        {/* Left Side - Logo Only */}
        <div className="hidden md:flex w-2/5 justify-center">
          <img src={logo} alt="ClubHouse Logo" className="w-100" />
        </div>
        
        {/* Right Side - Login Form */}
        <div className="flex flex-col items-center  p-8 rounded-lg shadow-md w-96 border border-white">
        <h1 className="text-3xl font-bold font-mono mb-6 bg-gradient-to-r from-gray-400 to-gray-800 text-transparent bg-clip-text">hosterHouse Happening Now!</h1>
          <input type="text" placeholder="Phone number, username, or email" className="w-full p-2 mb-4 bg-black text-white border border-gray-700 rounded" />
          <input type="password" placeholder="Password" className="w-full p-2 mb-4 bg-black text-white border border-gray-700 rounded" />
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">Log in</button>
          <div className="text-gray-400 text-sm mt-4">------------ OR -----------</div>
          <button className="w-full  text-white p-2  mt-4 flex items-center justify-center">
            <span className="ml-2">Log in with Google</span>
          </button>
          <a href="#" className="text-blue-400 mt-4 text-sm">Forgot password?</a>
          <div className="mt-4 text-sm">
            Don't have an account? <a href="#" className="text-blue-400">Sign up</a>
          </div>
        </div>
      </div>
      
      {/* Footer Section */}
      <footer className="w-full text-center p-4 text-gray-500 text-sm">
        <footer className="w-full text-center p-4 text-gray-500 text-sm">
          <a href="/about">About</a> &bull; <a href="/privacy&terms">Privacy & Terms</a>
          <p>&copy; {new Date().getFullYear()} hosterHouse</p>
        </footer>
        
      </footer>
    </div>
  );
};

export default Home;
