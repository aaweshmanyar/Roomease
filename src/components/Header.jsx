// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Hotel Lux</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#rooms" className="hover:text-gray-300">Rooms</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#explore" className="hover:text-gray-300">Explore</a>
          <a href="#footer" className="hover:text-gray-300">Contact</a>
        </nav>
        <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">Book Now</button>
      </div>
    </header>
  );
};

export default Header;