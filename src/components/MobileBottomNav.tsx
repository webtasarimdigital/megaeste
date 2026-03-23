'use client';

import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';

export default function MobileBottomNav() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-50">
      {/* Background shadow/gradient for floating effect */}
      <div className="absolute inset-x-0 -top-6 h-6 bg-gradient-to-t from-gray-100/50 to-transparent pointer-events-none" />
      
      <div className="flex w-full bg-white relative">
        {/* Iletisim Button */}
        <a 
          href="tel:#" 
          className="flex-1 flex justify-center items-center py-3.5 bg-[#5D6366] text-white hover:bg-[#4C5255] transition-colors"
        >
          <FaPhoneAlt className="text-xl mr-2" />
          <span className="font-bold text-lg tracking-wide">İletişim</span>
        </a>

        {/* Center Scroll Up Button Wrapper */}
        <div 
          className={`absolute left-1/2 -top-6 transform -translate-x-1/2 transition-all duration-300 ${
            showScroll ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToTop}
            className="w-14 h-14 bg-white rounded-full flex justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] border border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <FiArrowUp className="text-2xl text-gray-500" />
          </button>
        </div>

        {/* Whatsapp Button */}
        <a 
          href="https://wa.me/#" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex justify-center items-center py-3.5 bg-[#25D366] text-white hover:bg-[#1fb855] transition-colors"
        >
          <span className="font-bold text-lg tracking-wide mr-2">Whatsapp</span>
          <FaWhatsapp className="text-2xl" />
        </a>
      </div>
    </div>
  );
}
