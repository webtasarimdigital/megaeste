'use client';
/* eslint-disable @next/next/no-img-element */

import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Header({ dict, lang = 'tr' }: { dict?: any, lang?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const switchLanguage = (newLang: string) => {
    if (typeof window === 'undefined') return;

    // Dictionary of all known translated slugs
    const trToEnSlugs: Record<string, string> = {
      'hizmetler': 'treatments',
      'hekimlerimiz': 'doctors',
      'iletisim': 'contact',
      'dhi-sac-ekimi': 'dhi-hair-transplant',
      'safir-sac-ekimi': 'sapphire-hair-transplant',
      'sac-mezoterapisi': 'hair-mesotherapy',
      'burun-estetigi': 'rhinoplasty',
      'goz-kapagi-estetigi': 'blepharoplasty',
      'meme-estetigi': 'breast-aesthetics',
      'medikal-cilt-bakimi': 'medical-skin-care',
      'yuz-mezoterapi': 'facial-mesotherapy',
      'lazer-epilasyon': 'laser-hair-removal',
      'igneli-lazer-epilasyonu': 'needle-laser-epilation',
      // Blog Slugs added to fix 404 language switching
      'sac-ekimi-sonrasi-bakim-rehberi': 'post-hair-transplant-care-guide',
      'dhi-ve-fue-farklari': 'dhi-vs-fue-differences',
      'sac-dokulmesi-nedenleri': 'hair-loss-causes',
      'medikal-cilt-bakimi-rehberi': 'medical-skin-care-guide'
    };
    
    const enToTrSlugs: Record<string, string> = Object.fromEntries(
      Object.entries(trToEnSlugs).map(([tr, en]) => [en, tr])
    );

    let path = window.location.pathname;

    // Remove /en prefix for processing
    if (path.startsWith('/en/')) {
      path = path.replace('/en/', '/');
    } else if (path === '/en') {
      path = '/';
    }

    const segments = path.split('/').filter(Boolean);

    if (newLang === 'en') {
      const translatedSegments = segments.map(seg => trToEnSlugs[seg] || seg);
      router.push('/en' + (translatedSegments.length > 0 ? '/' + translatedSegments.join('/') : ''));
    } else {
      const translatedSegments = segments.map(seg => enToTrSlugs[seg] || seg);
      router.push('/' + translatedSegments.join('/'));
    }
  };

  const prefix = lang === 'tr' ? '' : `/${lang}`;

  const navData = dict?.nav ? [
    { title: lang === 'tr' ? 'ANA SAYFA' : 'HOME', href: lang === 'tr' ? '/' : `/${lang}`, items: [] },
    { title: dict.nav.corporate, href: `${prefix}/${lang === 'tr' ? 'hekimlerimiz' : 'doctors'}`, items: [
      { label: lang === 'tr' ? 'Hakkımızda' : 'About Us', href: '#' },
      { label: lang === 'tr' ? 'Hekimlerimiz' : 'Our Doctors', href: `${prefix}/${lang === 'tr' ? 'hekimlerimiz' : 'doctors'}` },
      { label: 'Blog', href: `${prefix}/blog` },
    ]},
    { title: dict.nav.hairTransplant?.title || '', href: '#', items: (dict.nav.hairTransplant?.items || []).map((item: string, i: number) => ({
      label: item,
      href: `${prefix}/${lang === 'tr' ? 'hizmetler' : 'treatments'}/${lang === 'tr' ? ['dhi-sac-ekimi', 'safir-sac-ekimi', 'sac-mezoterapisi'][i] : ['dhi-hair-transplant', 'sapphire-hair-transplant', 'hair-mesotherapy'][i]}`,
    }))},
    { title: dict.nav.plasticSurgery?.title || '', href: '#', items: (dict.nav.plasticSurgery?.items || []).map((item: string, i: number) => ({
      label: item,
      href: `${prefix}/${lang === 'tr' ? 'hizmetler' : 'treatments'}/${lang === 'tr' ? ['burun-estetigi', 'goz-kapagi-estetigi', 'meme-estetigi'][i] : ['rhinoplasty', 'blepharoplasty', 'breast-aesthetics'][i]}`,
    }))},
    { title: dict.nav.medicalAesthetics?.title || '', href: '#', items: (dict.nav.medicalAesthetics?.items || []).map((item: string, i: number) => ({
      label: item,
      href: `${prefix}/${lang === 'tr' ? 'hizmetler' : 'treatments'}/${lang === 'tr' ? ['medikal-cilt-bakimi', 'yuz-mezoterapi'][i] : ['medical-skin-care', 'facial-mesotherapy'][i]}`,
    }))},
    { title: dict.nav.epilation?.title || '', href: '#', items: (dict.nav.epilation?.items || []).map((item: string, i: number) => ({
      label: item,
      href: `${prefix}/${lang === 'tr' ? 'hizmetler' : 'treatments'}/${lang === 'tr' ? ['lazer-epilasyon', 'igneli-lazer-epilasyonu'][i] : ['laser-hair-removal', 'needle-laser-epilation'][i]}`,
    }))},
    { title: dict.nav.blog?.title || '', href: `${prefix}/blog`, items: [] },
  ] : [];

  return (
    <header className="w-full relative z-50 flex flex-col">
      {/* Desktop Top Bar - Full width, scrolls away */}
      <div className="hidden lg:flex w-full bg-gradient-to-r from-[#427bdf]/10 via-[#427bdf]/5 to-transparent border-b border-gray-100/50">
        <div className="w-full max-w-[1280px] mx-auto flex justify-end items-center h-[52px] px-4 lg:px-8 text-[13px] font-medium text-gray-500 divide-x divide-gray-200">
          <Link 
            href={`${prefix}/${lang === 'tr' ? 'iletisim' : 'contact'}`}
            className="bg-[#cca66b] text-white px-8 flex items-center justify-center font-bold text-[14px] hover:bg-[#b58f53] transition-colors h-full"
          >
            {dict?.getAppointment || "Randevu Al"}
          </Link>
          <Link href={`${prefix}/blog`} className="px-5 flex items-center h-full hover:text-[#427bdf] transition-colors">{dict?.feedbackAndSuggestions || "Görüş ve Önerileriniz"}</Link>
          <Link href={`${prefix}/${lang === 'tr' ? 'hekimlerimiz' : 'doctors'}`} className="px-5 flex items-center h-full hover:text-[#427bdf] transition-colors">{dict?.ourDoctors || "Doktorlarımız"}</Link>
          <Link href={`${prefix}/${lang === 'tr' ? 'iletisim' : 'contact'}`} className="px-5 flex items-center h-full hover:text-[#427bdf] transition-colors">{dict?.contactUs || "Bize Ulaşın"}</Link>
          
          {/* Language Switcher */}
          <div className="pl-5 flex items-center h-full justify-center space-x-3 font-bold">
            <button 
              onClick={() => switchLanguage('tr')} 
              className={`relative flex items-center justify-center w-[22px] h-[22px] rounded-full overflow-hidden transition-all ${lang === 'tr' ? 'ring-2 ring-offset-1 ring-[#cca66b] opacity-100' : 'opacity-50 hover:opacity-100 shadow-sm'}`}
              title="Türkçe"
            >
              <img src="https://hatscripts.github.io/circle-flags/flags/tr.svg" alt="TR" className="w-full h-full object-cover" />
            </button>
            <button 
              onClick={() => switchLanguage('en')} 
              className={`relative flex items-center justify-center w-[22px] h-[22px] rounded-full overflow-hidden transition-all ${lang === 'en' ? 'ring-2 ring-offset-1 ring-[#cca66b] opacity-100' : 'opacity-50 hover:opacity-100 shadow-sm'}`}
              title="English"
            >
              <img src="https://hatscripts.github.io/circle-flags/flags/gb.svg" alt="EN" className="w-full h-full object-cover" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Main Bar - Sticky */}
      <div className="hidden lg:flex sticky top-0 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-b-[3px] border-[#427bdf]/10 z-50 w-full transition-shadow duration-300">
        <div className="w-full max-w-[1280px] mx-auto flex items-stretch justify-between h-[90px] px-4 lg:px-8">
          
          {/* Logo Section */}
          <Link href={lang === 'tr' ? '/' : `/${lang}`} className="flex-shrink-0 flex items-center pr-8">
            <Image 
              src="/images/logo.png" 
              alt="Megaeste Logo" 
              width={320} 
              height={100} 
              priority 
              className="w-[200px] xl:w-[240px] h-auto object-contain"
            />
          </Link>

          {/* Main Navigation */}
          <nav className={`flex flex-grow items-center justify-end font-bold text-[#2c4c7c] uppercase tracking-wide relative z-30 ${lang === 'en' ? 'text-[10.5px] xl:text-[11.5px]' : 'text-[12px] xl:text-[13.5px]'}`}>
            <div className={`flex items-center justify-end ${lang === 'en' ? 'space-x-3 xl:space-x-4' : 'space-x-3 xl:space-x-6'}`}>
              {navData.map((category, index) => (
                <div key={index} className="relative group flex items-center h-full">
                  <Link href={category.href || '#'} className="flex items-center h-[90px] hover:text-[#427bdf] transition-colors cursor-pointer relative z-40 whitespace-nowrap">
                    {category.title}
                    {category.items.length > 0 && <span className="ml-1.5 text-[10px] text-gray-400 group-hover:rotate-180 transition-transform">▼</span>}
                  </Link>

                  {/* Dropdown Menu */}
                  {category.items.length > 0 && (
                    <div className="absolute top-[80px] mt-[2px] left-0 bg-white shadow-xl rounded-b-lg border-t-2 border-[#cca66b] min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[100]">
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
            
            <div className="flex items-center pl-6 xl:pl-8 border-l border-gray-200 space-x-4 text-[18px] text-[#427bdf]/80 ml-6 xl:ml-8 relative z-40 h-[40px]">
              <a href="https://www.instagram.com/mega.estetik" target="_blank" rel="noopener noreferrer" className="hover:text-[#cca66b] transition-transform hover:scale-110 inline-block p-1">
                <FaInstagram />
              </a>
              <a href="https://wa.me/905000000000" target="_blank" rel="noopener noreferrer" className="hover:text-[#cca66b] transition-transform hover:scale-110 inline-block p-1">
                <FaWhatsapp />
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#cca66b] transition-transform hover:scale-110 inline-block p-1">
                <FaMapMarkerAlt />
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Header (Sticky to ensure it doesn't break mobile flow) */}
      <div className="lg:hidden w-full flex flex-col bg-white shadow-sm border-b-[3px] border-[#427bdf]/10 sticky top-0 z-50">
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100">
          
          {/* Logo on Left */}
          <Link href={lang === 'tr' ? '/' : `/${lang}`} className="block flex-shrink-0">
            <Image 
              src="/images/logo.png" 
              alt="Megaeste Logo" 
              width={160} 
              height={50} 
              priority 
              className="w-[140px] sm:w-[150px] h-auto object-contain"
            />
          </Link>
          
          <div className="flex items-center gap-4">
            {/* Language Switcher moved next to menu */}
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => switchLanguage('tr')} 
                className={`relative flex items-center justify-center w-5 h-5 rounded-full overflow-hidden transition-all ${lang === 'tr' ? 'ring-2 ring-offset-1 ring-[#1e3a5f] opacity-100' : 'opacity-40'}`}
              >
                <img src="https://hatscripts.github.io/circle-flags/flags/tr.svg" alt="TR" className="w-full h-full object-cover" />
              </button>
              <button 
                onClick={() => switchLanguage('en')} 
                className={`relative flex items-center justify-center w-5 h-5 rounded-full overflow-hidden transition-all ${lang === 'en' ? 'ring-2 ring-offset-1 ring-[#1e3a5f] opacity-100' : 'opacity-40'}`}
              >
                <img src="https://hatscripts.github.io/circle-flags/flags/gb.svg" alt="EN" className="w-full h-full object-cover" />
              </button>
            </div>
            
            {/* Menu Icon on Right */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-3xl text-[#1e3a5f] hover:text-[#cca66b] transition-colors"
            >
              <FiMenu />
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
                     {category.items.map((subItem: { label: string; href: string }, subIdx: number) => (
                       <Link key={subIdx} href={subItem.href} className="px-8 py-3 text-[13px] text-gray-600 hover:text-[#427bdf] hover:bg-[#427bdf]/5 border-b border-gray-50/20 last:border-none capitalize font-medium transition-colors">
                         {subItem.label}
                       </Link>
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
