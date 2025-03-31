import React from 'react'
import Drawer from '../assets/drawer.svg'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
    return (
        <div className='flex justify-between pt-4 ml-8'> 
            <img src={Drawer} alt="Drawer" className="w-10" />
            
            <div className='flex m-4 px-4 gap-4'>
              <button className=" hover:underline text-white p-2 text-xl"
              onClick={() => navigate('/')}>Log in</button>
              <img src={logo} alt="Drawer" className="w-15 "  />
            </div>
            
        </div>
  )
}

export default Navbar
