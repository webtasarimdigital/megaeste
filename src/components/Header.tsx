'use client';

import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Header({ dict, lang = 'tr' }: { dict?: any, lang?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const switchLanguage = (newLang: string) => {
    // To avoid 404 errors when switching languages on pages with translated slugs
    // (e.g., /hizmetler/medikal-cilt-bakimi -> /en/hizmetler/medical-skin-care),
    // we safely redirect the user to the homepage of the selected language.
    if (newLang === 'tr') {
      router.push('/');
    } else {
      router.push(`/${newLang}`);
    }
  };

  const prefix = lang === 'tr' ? '' : `/${lang}`;

  const navData = dict?.nav ? [
    { title: dict.nav.corporate, href: `${prefix}/hekimlerimiz`, items: [
      { label: lang === 'tr' ? 'Hakkımızda' : 'About Us', href: '#' },
      { label: lang === 'tr' ? 'Hekimlerimiz' : 'Our Doctors', href: `${prefix}/hekimlerimiz` },
      { label: 'Blog', href: `${prefix}/blog` },
    ]},
    { title: dict.nav.hairTransplant?.title || '', href: '#', items: (dict.nav.hairTransplant?.items || []).map((item: string, i: number) => ({
      label: item,
      href: `${prefix}/hizmetler/${lang === 'tr' ? ['dhi-sac-ekimi', 'safir-sac-ekimi', 'sac-mezoterapisi'][i] : ['dhi-hair-transplant', 'sapphire-hair-transplant', 'hair-mesotherapy'][i]}`,
    }))},
    { title: dict.nav.plasticSurgery?.title || '', href: '#', items: (dict.nav.plasticSurgery?.items || []).map((item: string, i: number) => ({
      label: item,
      href: `${prefix}/hizmetler/${lang === 'tr' ? ['burun-estetigi', 'goz-kapagi-estetigi', 'meme-estetigi'][i] : ['rhinoplasty', 'blepharoplasty', 'breast-aesthetics'][i]}`,
    }))},
    { title: dict.nav.medicalAesthetics?.title || '', href: '#', items: (dict.nav.medicalAesthetics?.items || []).map((item: string, i: number) => ({
      label: item,
      href: `${prefix}/hizmetler/${lang === 'tr' ? ['medikal-cilt-bakimi', 'yuz-mezoterapi'][i] : ['medical-skin-care', 'facial-mesotherapy'][i]}`,
    }))},
    { title: dict.nav.epilation?.title || '', href: '#', items: (dict.nav.epilation?.items || []).map((item: string, i: number) => ({
      label: item,
      href: `${prefix}/hizmetler/${lang === 'tr' ? ['lazer-epilasyon', 'igneli-lazer-epilasyonu'][i] : ['laser-hair-removal', 'needle-laser-epilation'][i]}`,
    }))},
    { title: dict.nav.blog?.title || '', href: `${prefix}/blog`, items: [] },
  ] : [];

  return (
    <header className="w-full bg-white relative z-50 shadow-sm border-b-[3px] border-[#427bdf]/10">
      {/* Absolute Full-Width Gradient Background for Top Bar */}
      <div className="hidden lg:block absolute top-0 right-0 w-[60%] h-[46px] bg-gradient-to-l from-[#427bdf]/15 via-[#427bdf]/5 to-transparent z-0 pointer-events-none"></div>

      {/* Desktop Header Content Container */}
      <div className="hidden lg:flex w-full max-w-[1280px] mx-auto items-stretch relative z-10 px-4 lg:px-8">
        
        {/* Logo Section - Compact and centered */}
        <Link href={lang === 'tr' ? '/' : `/${lang}`} className="flex-shrink-0 flex items-center pr-8 py-4">
          <Image 
            src="/images/logo.png" 
            alt="Megaeste Logo" 
            width={320} 
            height={100} 
            priority 
            className="w-[200px] xl:w-[240px] h-auto object-contain"
          />
        </Link>

        {/* Right Section */}
        <div className="flex flex-col flex-grow pl-2 xl:pl-4">
          
          {/* Top Bar - No gap, touches top edge exactly covering the absolute background */}
          <div className="w-full flex justify-end items-stretch text-[13px] font-medium text-gray-500 divide-x divide-gray-200 h-[46px] border-b border-gray-100/50">
            <Link 
              href={`${prefix}/iletisim`}
              className="bg-[#cca66b] text-white px-8 flex items-center justify-center font-bold text-[14px] hover:bg-[#b58f53] transition-colors"
            >
              {dict?.getAppointment || "Randevu Al"}
            </Link>
            <Link href={`${prefix}/blog`} className="px-5 flex items-center hover:text-[#427bdf] transition-colors">{dict?.feedbackAndSuggestions || "Görüş ve Önerileriniz"}</Link>
            <Link href={`${prefix}/hekimlerimiz`} className="px-5 flex items-center hover:text-[#427bdf] transition-colors">{dict?.ourDoctors || "Doktorlarımız"}</Link>
            <Link href={`${prefix}/iletisim`} className="px-5 flex items-center hover:text-[#427bdf] transition-colors">{dict?.contactUs || "Bize Ulaşın"}</Link>
            
            {/* Language Switcher */}
            <div className="pl-5 flex items-center justify-center space-x-2 font-bold">
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

          {/* Main Navigation - Fills remaining space vertically via flex-grow */}
          <nav className="flex flex-grow items-center justify-between text-[12px] xl:text-[13.5px] font-bold text-[#2c4c7c] uppercase tracking-wide">
            <div className="flex items-center flex-grow justify-center space-x-3 xl:space-x-6">
              {navData.map((category, index) => (
                <div key={index} className="relative group py-2">
                  <Link href={category.href || '#'} className="flex items-center hover:text-[#427bdf] transition-colors cursor-pointer">
                    {category.title}
                    {category.items.length > 0 && <span className="ml-1.5 text-[10px] text-gray-400 group-hover:rotate-180 transition-transform">▼</span>}
                  </Link>

                  {/* Dropdown Menu */}
                  {category.items.length > 0 && (
                    <div className="absolute top-[100%] mt-[2px] left-0 bg-white shadow-xl rounded-b-lg border-t-2 border-[#427bdf] min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <ul className="py-2 flex flex-col">
                        {category.items.map((subItem: { label: string; href: string }, subIdx: number) => (
                          <li key={subIdx}>
                            <Link href={subItem.href} className="block px-6 py-3 text-[13px] text-gray-600 hover:text-[#427bdf] hover:bg-gray-50 capitalize font-medium transition-colors border-b border-gray-50 last:border-none">
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex items-center pl-8 border-l border-gray-300 space-x-4 text-xl text-gray-500 ml-4">
              <FaInstagram className="hover:text-[#427bdf] cursor-pointer transition-colors" />
              <FaYoutube className="hover:text-[#427bdf] cursor-pointer transition-colors" />
              <FaTiktok className="hover:text-[#427bdf] cursor-pointer transition-colors" />
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
        <div className="w-full bg-[#427bdf] text-white text-center py-3.5 text-[15px] font-bold uppercase tracking-wider relative">
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
