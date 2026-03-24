'use client';

import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Header({ dict, lang = 'tr' }: { dict?: any, lang?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLang: string) => {
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = newLang; // since path starts with /, index 1 is lang
    router.push(segments.join('/') || '/');
  };

  const navData = dict?.nav ? [
    { title: dict.nav.corporate, items: [] },
    { title: dict.nav.hairTransplant?.title || '', items: dict.nav.hairTransplant?.items || [] },
    { title: dict.nav.plasticSurgery?.title || '', items: dict.nav.plasticSurgery?.items || [] },
    { title: dict.nav.medicalAesthetics?.title || '', items: dict.nav.medicalAesthetics?.items || [] },
    { title: dict.nav.epilation?.title || '', items: dict.nav.epilation?.items || [] }
  ] : [];

  return (
    <header className="w-full bg-white relative z-50">
      {/* Desktop Header */}
      <div className="hidden lg:flex w-full max-w-[1920px] mx-auto px-10 xl:px-24 py-6 justify-between items-center shadow-sm">
        {/* Logo Section */}
        <Link href={`/${lang}`} className="flex-shrink-0 mr-8 mt-1 block">
          <Image 
            src="/images/logo.png" 
            alt="Megaeste Logo" 
            width={280} 
            height={90} 
            priority 
            className="w-[200px] xl:w-[260px] h-auto object-contain"
          />
        </Link>

        {/* Right Section */}
        <div className="flex flex-col flex-grow items-end ml-10 space-y-6 mt-1">
          {/* Top Bar */}
          <div className="flex items-center text-[14px] font-medium text-gray-500 divide-x divide-gray-300">
            <div className="bg-[#C6A87E] text-white px-10 py-2.5 mr-6 font-bold text-[15px] hover:bg-[#b09367] cursor-pointer transition-colors">
              {dict?.getAppointment || "Randevu Al"}
            </div>
            <a href="#" className="px-5 hover:text-gray-900 transition-colors">{dict?.feedbackAndSuggestions || "Görüş ve Önerileriniz"}</a>
            <a href="#" className="px-5 hover:text-gray-900 transition-colors">{dict?.ourDoctors || "Doktorlarımız"}</a>
            <a href="#" className="px-5 hover:text-gray-900 transition-colors">{dict?.contactUs || "Bize Ulaşın"}</a>
            
            {/* Language Switcher */}
            <div className="px-5 flex items-center space-x-2 font-bold">
              <button 
                onClick={() => switchLanguage('tr')} 
                className={`hover:text-gray-900 transition-colors ${lang === 'tr' ? 'text-gray-900' : 'text-gray-400'}`}
              >
                TR
              </button>
              <span className="text-gray-300">/</span>
              <button 
                onClick={() => switchLanguage('en')} 
                className={`hover:text-gray-900 transition-colors ${lang === 'en' ? 'text-gray-900' : 'text-gray-400'}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="flex items-center text-[13px] xl:text-[14px] font-bold text-[#4B5357] uppercase tracking-wide">
            {navData.map((category, index) => (
              <div key={index} className="relative group mx-3 xl:mx-4 py-4">
                <a href="#" className="flex items-center hover:text-[#C6A87E] transition-colors cursor-pointer">
                  {category.title}
                  {category.items.length > 0 && <span className="ml-1.5 text-[10px] text-gray-400 group-hover:rotate-180 transition-transform">▼</span>}
                </a>

                {/* Dropdown Menu */}
                {category.items.length > 0 && (
                  <div className="absolute top-[100%] mt-[-4px] left-0 bg-white shadow-xl rounded-b-lg border-t-2 border-[#C6A87E] min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <ul className="py-2 flex flex-col">
                      {category.items.map((subItem: string, subIdx: number) => (
                        <li key={subIdx}>
                          <a href="#" className="block px-6 py-3 text-[13px] text-gray-600 hover:text-[#C6A87E] hover:bg-gray-50 capitalize font-medium transition-colors border-b border-gray-50 last:border-none">
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
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
          
          <Link href={`/${lang}`} className="block">
            <Image 
              src="/images/logo.png" 
              alt="Megaeste Logo" 
              width={180} 
              height={58} 
              priority 
              className="w-[150px] sm:w-[170px] h-auto object-contain"
            />
          </Link>
        </div>
        
        {/* Mobile Randevu Al Bar */}
        <div className="w-full bg-[#C6A87E] text-white text-center py-3.5 text-[15px] font-bold uppercase tracking-wider relative">
          {dict?.getAppointment || "Randevu Al"}
          
          <div className="absolute right-5 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 text-sm font-bold">
              <button 
                onClick={() => switchLanguage('tr')} 
                className={`hover:text-white transition-colors ${lang === 'tr' ? 'text-white' : 'text-[#e6cba3]'}`}
              >
                TR
              </button>
              <span className="text-[#d4ba96]">/</span>
              <button 
                onClick={() => switchLanguage('en')} 
                className={`hover:text-white transition-colors ${lang === 'en' ? 'text-white' : 'text-[#e6cba3]'}`}
              >
                EN
              </button>
            </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-2 flex flex-col z-50 max-h-[70vh] overflow-y-auto">
             {navData.map((category, index) => (
               <div key={index} className="flex flex-col border-b border-gray-50">
                 <a href="#" className="flex items-center justify-between px-5 py-3.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                   {category.title}
                   {category.items.length > 0 && <span className="text-gray-400 text-xs">▼</span>}
                 </a>
                 {category.items.length > 0 && (
                   <div className="flex flex-col bg-gray-50/50">
                     {category.items.map((subItem: string, subIdx: number) => (
                       <a key={subIdx} href="#" className="px-8 py-3 text-[13px] text-gray-600 border-b border-gray-50/20 last:border-none capitalize font-medium">
                         {subItem}
                       </a>
                     ))}
                   </div>
                 )}
               </div>
             ))}
          </div>
        )}
      </div>
    </header>
  );
}
