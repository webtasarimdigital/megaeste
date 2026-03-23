'use client';

import React, { useState } from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white relative z-50">
      {/* Desktop Header */}
      <div className="hidden lg:flex w-full max-w-[1920px] mx-auto px-10 xl:px-24 py-6 justify-between items-center shadow-sm">
        {/* Logo Section */}
        <div className="flex flex-col flex-shrink-0 mr-8 mt-1">
          <div className="text-5xl font-black tracking-tighter text-gray-900 leading-none">megaeste</div>
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#4B5357] mt-1.5 uppercase">Estetik ve Plastik Cerrahi</div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col flex-grow items-end ml-10 space-y-6 mt-1">
          {/* Top Bar */}
          <div className="flex items-center text-[14px] font-medium text-gray-500 divide-x divide-gray-300">
            <div className="bg-[#C6A87E] text-white px-10 py-2.5 mr-6 font-bold text-[15px] hover:bg-[#b09367] cursor-pointer transition-colors">
              E-Sonuç
            </div>
            <a href="#" className="px-5 hover:text-gray-900 transition-colors">Görüş ve Önerileriniz</a>
            <a href="#" className="px-5 hover:text-gray-900 transition-colors">Doktorlarımız</a>
            <a href="#" className="px-5 hover:text-gray-900 transition-colors">Bize Ulaşın</a>
            <div className="pl-5 flex items-center">
              <FiSearch className="mr-3 text-gray-400 text-lg" />
              <input 
                type="text" 
                placeholder="Aranılacak kelimeyi giriniz..." 
                className="outline-none bg-transparent placeholder-gray-400 w-64 focus:w-80 transition-all duration-300 text-[14px]"
              />
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="flex items-center text-[13px] xl:text-[14px] font-bold text-[#4B5357] uppercase tracking-wide">
            {['Kurumsal', 'Saç Ekimi', 'Plastik Cerrahi', 'Medikal Estetik', 'Diş Estetiği', 'Longevity ve Beslenme', 'Medya'].map((item, index) => (
              <a key={index} href="#" className="flex items-center mx-3 xl:mx-4 hover:text-[#C6A87E] transition-colors group">
                {item}
                <span className="ml-1.5 text-[10px] text-gray-400 group-hover:block transition-all">▼</span>
              </a>
            ))}
            <div className="flex items-center pl-8 border-l border-gray-300 space-x-4 text-xl text-gray-500 ml-4">
              <FaInstagram className="hover:text-[#C6A87E] cursor-pointer transition-colors" />
              <FaYoutube className="hover:text-[#C6A87E] cursor-pointer transition-colors" />
              <FaTiktok className="hover:text-[#C6A87E] cursor-pointer transition-colors" />
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden w-full flex flex-col shadow-sm">
        <div className="flex justify-between items-center px-5 py-4 bg-white">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-3xl text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FiMenu />
          </button>
          
          <div className="flex flex-col items-end">
            <div className="text-4xl font-black tracking-tighter text-gray-900 leading-none">megaeste</div>
            <div className="text-[9px] font-bold tracking-[0.1em] text-gray-600 mt-1 uppercase">Estetik ve Plastik Cerrahi</div>
          </div>
        </div>
        
        {/* Mobile E-Sonuc Bar */}
        <div className="w-full bg-[#C6A87E] text-white text-center py-3.5 text-[15px] font-bold uppercase tracking-wider">
          E-Sonuç
        </div>

        {/* Mobile Menu Dropdown (Placeholder for exact functionality) */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-2 flex flex-col">
             {['Kurumsal', 'Saç Ekimi', 'Plastik Cerrahi', 'Medikal Estetik', 'Diş Estetiği', 'Longevity ve Beslenme', 'Medya'].map((item, index) => (
              <a key={index} href="#" className="px-5 py-3 border-b border-gray-50 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
