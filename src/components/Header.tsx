'use client';
/* eslint-disable @next/next/no-img-element */

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Header({ dict, lang = 'tr' }: { dict?: any, lang?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
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
    <header className="w-full sticky top-0 lg:top-[-52px] z-50 flex flex-col bg-white">
      {/* Desktop Top Bar - Full width, scrolls away */}
      <div className="hidden lg:flex w-full bg-gradient-to-l from-[#427bdf]/20 via-[#427bdf]/5 to-transparent border-b border-gray-100/50 h-[52px]">
        <div className="w-full max-w-[1280px] mx-auto flex justify-end items-center h-full px-4 lg:px-8 text-[13px] font-medium text-gray-500 divide-x divide-gray-200">
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

      {/* Desktop Main Bar - Sticky Portion */}
      <div className="hidden lg:flex bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-b-[3px] border-[#427bdf]/10 w-full h-[90px] transition-shadow duration-300">
        <div className="w-full max-w-[1280px] mx-auto flex items-stretch justify-between h-full px-4 lg:px-8">
          
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
            
            <div className="flex items-center pl-6 xl:pl-8 border-l border-gray-200 gap-4 xl:gap-5 ml-6 xl:ml-8 relative z-40 h-[40px]">
              <a href="https://www.instagram.com/mega.estetik" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] hover:text-[#cca66b] transition-transform hover:scale-110 flex items-center justify-center">
                <FaInstagram className="text-[22px] xl:text-[25px]" />
              </a>
              <a href="https://wa.me/905000000000" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:text-[#cca66b] transition-transform hover:scale-110 flex items-center justify-center">
                <FaWhatsapp className="text-[22px] xl:text-[25px]" />
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-[#EA4335] hover:text-[#cca66b] transition-transform hover:scale-110 flex items-center justify-center">
                <FaMapMarkerAlt className="text-[22px] xl:text-[25px]" />
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden w-full flex flex-col bg-white shadow-sm border-b-[3px] border-[#427bdf]/10">
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
            {/* Language Switcher Dropdown (Esteworld style) */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1.5 text-[#1e3a5f] font-bold text-[11px] lg:text-xs"
              >
                <img src={`https://hatscripts.github.io/circle-flags/flags/${lang === 'tr' ? 'tr' : 'gb'}.svg`} alt="Lang" className="w-[18px] h-[18px]" />
                <span className="uppercase">{lang === 'tr' ? 'TÜRKÇE' : 'ENGLISH'}</span>
                <span className="text-[10px]">▼</span>
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -5 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -5 }} 
                    className="absolute top-full right-0 mt-3 bg-white shadow-xl rounded-md border border-gray-100 overflow-hidden flex flex-col w-[130px] z-50"
                  >
                    <button 
                      onClick={() => { switchLanguage('tr'); setIsLangOpen(false); }} 
                      className={`flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 text-xs font-bold w-full text-left transition-colors ${lang === 'tr' ? 'text-[#cca66b]' : 'text-gray-700'}`}
                    >
                      <img src="https://hatscripts.github.io/circle-flags/flags/tr.svg" alt="TR" className="w-[18px] h-[18px]" />
                      <span>TÜRKÇE</span>
                    </button>
                    <div className="h-[1px] bg-gray-100 w-full" />
                    <button 
                      onClick={() => { switchLanguage('en'); setIsLangOpen(false); }} 
                      className={`flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 text-xs font-bold w-full text-left transition-colors ${lang === 'en' ? 'text-[#cca66b]' : 'text-gray-700'}`}
                    >
                      <img src="https://hatscripts.github.io/circle-flags/flags/gb.svg" alt="EN" className="w-[18px] h-[18px]" />
                      <span>ENGLISH</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
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

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 bg-[#3a4352] z-[100] flex flex-col pt-2"
            >
              {/* Header inside drawer */}
              <div className="flex justify-between items-center px-6 py-5 border-b border-gray-600/50">
                <Image 
                  src="/images/logo.png" 
                  alt="Megaeste Logo" 
                  width={140} 
                  height={45} 
                  className="w-[130px] object-contain brightness-0 invert" 
                />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-500 text-gray-300 text-2xl hover:bg-white/10 hover:text-white transition-colors"
                >
                  <FiX />
                </button>
              </div>

              {/* Scrollable menu */}
              <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col no-scrollbar">
                
                {navData.map((category, index) => {
                  const hasItems = category.items.length > 0;
                  return (
                    <div key={index} className="flex flex-col border-b border-gray-600/50">
                      <button 
                        onClick={() => {
                          if (hasItems) {
                            setOpenAccordion(openAccordion === index ? null : index);
                          } else {
                            if (category.href) {
                              router.push(category.href);
                              setIsMobileMenuOpen(false);
                            }
                          }
                        }}
                        className={`flex items-center justify-between py-5 text-[14px] font-black tracking-widest uppercase transition-colors ${openAccordion === index ? 'text-[#f8b931]' : 'text-gray-200 hover:text-white'}`}
                      >
                        {category.title}
                      </button>
                      
                      <AnimatePresence>
                        {hasItems && openAccordion === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col border-l-2 border-gray-600 ml-2 mb-4">
                              {category.items.map((subItem: { label: string; href: string }, subIdx: number) => (
                                <Link 
                                  key={subIdx} 
                                  href={subItem.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="py-3.5 px-5 text-[13px] font-medium tracking-wide text-gray-400 hover:text-white transition-colors uppercase"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
                
                {/* Social media links inside mobile menu */}
                <div className="flex items-center gap-6 mt-8 mb-4">
                  <a href="https://www.instagram.com/mega.estetik" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#cca66b] transition-colors">
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a href="https://wa.me/905000000000" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#cca66b] transition-colors">
                    <FaWhatsapp className="text-2xl" />
                  </a>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#cca66b] transition-colors">
                    <FaMapMarkerAlt className="text-2xl" />
                  </a>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="p-6 bg-[#2a313d] mt-auto">
                <Link 
                  href={`${prefix}/${lang === 'tr' ? 'iletisim' : 'contact'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full h-14 bg-[#f8b931] hover:bg-[#e0a62c] text-[#333] font-black tracking-widest text-[14px] flex items-center justify-center rounded-xl gap-3 transition-all shadow-lg"
                >
                  {dict?.getAppointment?.toUpperCase() || "RANDEVU AL"} <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
