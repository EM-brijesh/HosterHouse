import React from 'react';
import Drawer from '../assets/drawer.svg';
import logo from '../assets/logo.png';
import Navbar from '../Components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />

      <div className="bg-black min-h-screen px-6 py-12 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-center animate__animated animate__fadeIn animate__delay-1s">
          Connect. Create. Celebrate.
        </h1>

        <p className="text-gray-300 text-lg text-center mt-4 max-w-2xl animate__animated animate__fadeIn animate__delay-2s">
          Welcome to ClubHouse, where every event is an opportunity to meet new faces, explore passions, and create unforgettable memories.  
          Whether you love sports, wild parties, cozy house gatherings, or hilarious comedy nights — we've got something for everyone.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-around mt-10 w-full">
          <div className="text-white font-mono text-4xl sm:text-5xl text-center px-4 animate__animated animate__fadeIn animate__delay-3s">
            <span className="block">Bringing You Closer</span>
            <span className="block">To People & Events</span>
          </div>
          <img src={logo} alt="ClubHouse Logo" className="w-64 h-auto mt-4 md:mt-0 animate__animated animate__fadeIn animate__delay-4s" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around mt-12 w-full animate__animated animate__fadeIn animate__delay-5s">
          <img src={logo} alt="ClubHouse Logo" className="w-64 h-auto" />
          <div className="text-white font-mono text-4xl sm:text-5xl text-center px-4">
            <span className="block">Join Events You Love</span>
            <span className="block">Or Create Your Own</span>
          </div>
        </div>

        <div className="mt-16 text-center text-gray-400 text-sm animate__animated animate__fadeIn animate__delay-6s">
          <p>Ready to make new connections? <strong>Start your journey with us today!</strong></p>
        </div>
      </div>
    </>
  );
};

export default About;
