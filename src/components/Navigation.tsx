import React from 'react';
import { NavLink } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="text-xl font-bold" style={{ color: '#0077b5' }}>
            Marketing Mavericks
          </NavLink>
          <div className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-gray-700 hover:text-[#0077b5] transition-colors ${isActive ? 'text-[#0077b5]' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-gray-700 hover:text-[#0077b5] transition-colors ${isActive ? 'text-[#0077b5]' : ''}`
              }
            >
              About Us
            </NavLink>
            <NavLink 
              to="/consultation" 
              className={({ isActive }) => 
                `text-gray-700 hover:text-[#0077b5] transition-colors ${isActive ? 'text-[#0077b5]' : ''}`
              }
            >
              Book Consultation
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}