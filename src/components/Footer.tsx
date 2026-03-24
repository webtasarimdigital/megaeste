'use client';

import React from 'react';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#fcfaf8] border-t border-gray-200 pt-16 pb-8 mt-12 mb-20 lg:mb-0">
      <div className="max-w-[1920px] mx-auto px-10 xl:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-gray-300 pb-10">
          
          {/* Logo Section */}
          <div className="flex flex-col mb-10 lg:mb-0">
            <div className="text-5xl font-black tracking-tighter text-gray-900 leading-none">megaeste</div>
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#4B5357] mt-1.5 uppercase">Estetik ve Plastik Cerrahi</div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-x-6 gap-y-4 xl:gap-x-10 text-[13px] xl:text-[14px] font-bold text-[#4B5357] uppercase tracking-wide">
            {['Kurumsal', 'Saç Ekimi', 'Plastik Cerrahi', 'Medikal Estetik', 'Diş Estetiği', 'Bize Ulaşın'].map((item, index) => (
              <a key={index} href="#" className="hover:text-[#C6A87E] transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-6 mt-10 lg:mt-0">
            <a href="#" className="text-2xl text-gray-500 hover:text-[#C6A87E] transition-colors"><FaInstagram /></a>
            <a href="#" className="text-2xl text-gray-500 hover:text-[#C6A87E] transition-colors"><FaYoutube /></a>
            <a href="#" className="text-2xl text-gray-500 hover:text-[#C6A87E] transition-colors"><FaTiktok /></a>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium tracking-wider">
          <p>© {new Date().getFullYear()} Megaeste. Tüm Hakları Saklıdır.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900 transition-colors hover:underline">KVKK Aydınlatma Metni</a>
            <a href="#" className="hover:text-gray-900 transition-colors hover:underline">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
