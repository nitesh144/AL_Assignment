import React from 'react';
import Logo from '../assets/ALogo.jpeg' 

const Navbar = ({ onServicesClick }) => (
  <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6 shadow-md">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <img src={Logo} alt="Logo" className="mr-2 rounded-full w-8" />
      <span className="font-semibold text-xl tracking-tight">Apply Legal</span>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-xl lg:flex-grow text-center">
        <button onClick={onServicesClick} className="block font-semibold mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4">
          Services
        </button>
      </div>
      <div>
        <a href="#" className="inline-block text-sm px-4 py-2 leading-none rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 mr-2">About Us</a>
        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">Sign Up</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
