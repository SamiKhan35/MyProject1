// Navbar.jsx
import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import HeroSection from '../HeroSection/HeroSection.jsx';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white text-sm p-6 ">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700 h-16 text-lg">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <FaEnvelope className="text-yellow-500" />
            <span>info@grandeurchauffeurs.com</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaWhatsapp className="text-green-500" />
            <span>+44 7766 557716</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaPhoneAlt className="text-yellow-500" />
            <span>+44 203 6171 114</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <span>Follow us</span>
          <FaTwitter className="hover:text-yellow-500 cursor-pointer" />
          <FaFacebook className="hover:text-yellow-500 cursor-pointer" />
          <FaInstagram className="hover:text-yellow-500 cursor-pointer" />
          <FaYoutube className="hover:text-yellow-500 cursor-pointer" />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 py-3 ">
        {/* Logo */}
        <div className="flex  items-center space-x-2">
          <img src={logo} alt="Grandeur Chauffeurs" className="h-16 w-auto" />
          {/* <span className="text-yellow-500 font-bold text-lg">Grandeur Chauffeurs</span> */}
        </div>

        {/* Links */}
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#Home" className="hover:text-yellow-500">Home</a>
          <a href="#About Us" className="hover:text-yellow-500">About Us</a>
          <a href="#Testimonials" className="hover:text-yellow-500">Testimonials</a>
          <a href="#Contact Us" className="hover:text-yellow-500">Contact Us</a>
          <a href="#FAQ" className="hover:text-yellow-500">FAQ</a>
          <a href="#Gallery" className="hover:text-yellow-500">Gallery</a>
        </nav>

        {/* Call to Book */}
        <div className="flex items-center space-x-2 text-yellow-500 font-semibold">
          <FaWhatsapp className="text-xl" />
          <p>call to book order</p>
          <span>+44 7766 557716</span>
        </div>
      </div>
      <div>
        <HeroSection/>
      </div>
    </header>
  );
};

export default Navbar;
