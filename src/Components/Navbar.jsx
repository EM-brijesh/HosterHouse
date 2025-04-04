import React, { useState } from 'react';
import Drawer from '../assets/drawer.svg';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import authService from '../Services/authService';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();
    const token = authService.getToken();
    const location = localStorage.getItem('location');
    const username = localStorage.getItem('username');

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleLogout = () => {
        authService.logout();
        navigate('/');
    };

    return (
        <div className='w-full bg-black'> 
            <div className='flex justify-between items-center px-4 py-2'> 
                <div className="flex items-center">
                    <img 
                        src={Drawer} 
                        alt="Drawer" 
                        className="w-10 cursor-pointer" 
                        onClick={toggleDrawer}
                    />
                    {drawerOpen && (
                        <div className="absolute left-4 top-16 bg-black border border-gray-700 shadow-lg rounded-lg p-4 z-50">
                            <div className="flex flex-col gap-2">
                                <button 
                                    className="text-white hover:text-gray-300 p-2 text-lg"
                                    onClick={() => {
                                        navigate('/');
                                        setDrawerOpen(false);
                                    }}
                                >
                                    Home
                                </button>
                                <button 
                                    className="text-white hover:text-gray-300 p-2 text-lg"
                                    onClick={() => {
                                        navigate('/about');
                                        setDrawerOpen(false);
                                    }}
                                >
                                    About
                                </button>
                                <button 
                                    className="text-white hover:text-gray-300 p-2 text-lg"
                                    onClick={() => {
                                        navigate('/privacy&terms');
                                        setDrawerOpen(false);
                                    }}
                                >
                                    Privacy & Terms
                                </button>
                                {token && (
                                    <>
                                        <button 
                                            className="text-white hover:text-gray-300 p-2 text-lg"
                                            onClick={() => {
                                                navigate('/dashboard');
                                                setDrawerOpen(false);
                                            }}
                                        >
                                            Dashboard
                                        </button>
                                        <button 
                                            className="text-white hover:text-gray-300 p-2 text-lg"
                                            onClick={() => {
                                                navigate('/profile');
                                                setDrawerOpen(false);
                                            }}
                                        >
                                            Profile
                                        </button>
                                        <button 
                                            className="text-white hover:text-gray-300 p-2 text-lg"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                {token ? (
                    <div className='flex items-center gap-4'>     
                        <div className="text-white text-lg">
                            Hi, {username}
                        </div>
                        <div className="bg-white  text-black px-2 py-1 rounded-full">
                            {location}
                        </div>
                        <img src={logo} alt="Logo" className="w-15" />
                    </div>
                ) : (
                    <div className='flex items-center gap-4'>
                        <button 
                            className="hover:underline text-white p-2 text-xl"
                            onClick={() => navigate('/')}
                        >
                            Log in
                        </button>
                        <img src={logo} alt="Logo" className="w-15" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
