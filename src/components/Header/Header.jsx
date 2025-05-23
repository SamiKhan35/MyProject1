import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import { FaWhatsapp } from "react-icons/fa";
const Header = () => {
  return (
    <header>
      {/* Background Banner Image  */}
   {/* <img src="/Images/SLIDE_02.jpg" alt='Banner' className="h-64 w-full object-cover" /> */}
      
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img
          src="//grandeurchauffeurs.com/wp-content/uploads/2019/06/logo-1.png"
          alt="Grandeur Chauffeurs Logo"
          className="h-16 w-auto"
        />

        {/* Navigation Menu */}
        <nav>
          <ul className="flex gap-6 flex-wrap items-center">
            <li className="hover:text-yellow-300 cursor-pointer">HOME</li>
            <li className="hover:text-yellow-300 cursor-pointer">ABOUT US</li>
            <li className="hover:text-yellow-300 cursor-pointer">TESTIMONIALS</li>
            <li className="hover:text-yellow-300 cursor-pointer">CONTACT US</li>
            <li className="hover:text-yellow-300 cursor-pointer">FAQ</li>
            <li className="hover:text-yellow-300 cursor-pointer">GALLERY</li>
            <li className="hover:text-yellow-300 cursor-pointer">
              <a href="https://wa.me/447766557716" className="flex flex-col">
                <span className='mx-10 mt-4 text-yellow-300'>Call to book an order:</span>
                <FaWhatsapp  size={40} className='text-yellow-300 mx-0'/>

                <span className="font-semibold mx-10 mt-0 text-xl">+44 7766 557716</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <hr className='border-t-2 border-dashed border-lightgray my-2'/>
    <div>
        <HeroSection/>
    </div>
    </header>
   
  );
};

export default Header;
