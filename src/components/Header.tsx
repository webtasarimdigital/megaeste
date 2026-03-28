'use client';
/* eslint-disable @next/next/no-img-element */

import React, { useState } from 'react';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';
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
    { title: dict.nav.corporate, href: '#', items: [
      { label: lang === 'tr' ? 'Hakkımızda' : 'About Us', href: `${prefix}/${lang === 'tr' ? 'kurumsal/hakkimizda' : 'corporate/about-us'}` },
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
    <header className="w-full sticky top-0 z-50 flex flex-col bg-white shadow-sm">
      {/* Desktop Top Bar - Always visible */}
      <div className="hidden lg:flex w-full bg-gradient-to-l from-[#cca66b]/15 to-white border-b border-gray-100 h-[90px]">
        <div className="w-full max-w-[1280px] mx-auto flex justify-between items-center h-full px-4 lg:px-8">
          
          {/* Logo on the left */}
          <Link href={lang === 'tr' ? '/' : `/${lang}`} className="flex-shrink-0 flex items-center pr-8 hover:opacity-90 transition-opacity">
            <Image 
              src="/images/megaestelogo-web-header.png" 
              alt="Megaeste Logo" 
              width={260} 
              height={80} 
              priority 
              className="w-[180px] xl:w-[220px] h-auto object-contain"
            />
          </Link>

          {/* Quick links & Actions on the right */}
          <div className="flex items-center h-full text-[12px] xl:text-[13px] font-medium text-gray-500 divide-x divide-gray-200">
            <Link 
              href={`${prefix}/${lang === 'tr' ? 'iletisim' : 'contact'}`}
              className="bg-[#cca66b] text-white px-5 xl:px-6 flex items-center justify-center font-bold text-[13px] hover:bg-[#b58f53] shadow-md hover:shadow-lg transition-all h-[42px] rounded mr-4"
            >
              {dict?.getAppointment || "Randevu Al"}
            </Link>
            <Link href={`${prefix}/${lang === 'tr' ? 'kurumsal/gorus-ve-onerileriniz' : 'corporate/feedback'}`} className="px-3 xl:px-4 hover:text-[#427bdf] transition-colors">{lang === 'tr' ? "Görüş ve Önerileriniz" : "Feedback"}</Link>
            <Link href={`${prefix}/${lang === 'tr' ? 'hekimlerimiz' : 'doctors'}`} className="px-3 xl:px-4 hover:text-[#427bdf] transition-colors">{dict?.ourDoctors || "Doktorlarımız"}</Link>
            <Link href={`${prefix}/${lang === 'tr' ? 'iletisim' : 'contact'}`} className="px-3 xl:px-4 hover:text-[#427bdf] transition-colors">{dict?.contactUs || "Bize Ulaşın"}</Link>
            
            {/* Desktop Language Switcher (Dropdown) */}
            <div className="pl-3 xl:pl-4 relative group flex items-center h-full">
              <button className="flex items-center gap-1.5 font-black text-[#1e3a5f] hover:text-[#cca66b] transition-colors text-[11px] xl:text-[12px] uppercase">
                <img src={`/images/flags/${lang === 'tr' ? 'tr.svg' : 'gb.svg'}`} alt="Lang" className="w-[22px] h-auto rounded-[3px] shadow-sm" />
                <span>{lang === 'tr' ? 'TÜRKÇE' : 'ENGLISH'}</span>
                <span className="text-[8px] xl:text-[9px]">▼</span>
              </button>
              
              {/* Desktop Lang Dropdown Menu */}
              <div className="absolute top-full right-0 mt-0 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-b-lg border-t-2 border-[#cca66b] overflow-hidden flex flex-col w-[140px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[100]">
                 <button onClick={() => switchLanguage('tr')} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-xs font-bold w-full text-left transition-colors">
                    <img src="/images/flags/tr.svg" alt="TR" className="w-[22px] h-auto rounded-[3px] shadow-sm" />
                    <span className={lang === 'tr' ? 'text-[#cca66b]' : 'text-gray-700'}>TÜRKÇE</span>
                 </button>
                 <div className="h-[1px] bg-gray-100 w-full" />
                 <button onClick={() => switchLanguage('en')} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-xs font-bold w-full text-left transition-colors">
                    <img src="/images/flags/gb.svg" alt="EN" className="w-[22px] h-auto rounded-[3px] shadow-sm" />
                    <span className={lang === 'en' ? 'text-[#cca66b]' : 'text-gray-700'}>ENGLISH</span>
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Main Bar - Sticky Navigation Category Bar (Height 56px) */}
      <div className="hidden lg:flex bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-b border-gray-100 w-full h-[56px] transition-shadow duration-300 relative">
        <div className="w-full flex items-center h-full px-4 lg:px-8 relative">
          
          {/* Main Navigation (Centered) */}
          <nav className={`absolute left-1/2 -translate-x-1/2 flex items-center justify-center font-bold text-[#2c4c7c] uppercase tracking-wide z-30 ${lang === 'en' ? 'text-[11.5px] xl:text-[12.5px]' : 'text-[12.5px] xl:text-[13.5px]'}`}>
            <div className={`flex items-center ${lang === 'en' ? 'space-x-5 xl:space-x-7' : 'space-x-6 xl:space-x-9'}`}>
              {navData.map((category, index) => (
                <div key={index} className="relative group flex items-center h-full">
                  <Link href={category.href || '#'} className="flex items-center h-[56px] hover:text-[#427bdf] transition-colors cursor-pointer relative z-40 whitespace-nowrap">
                    {category.title}
                    {category.items.length > 0 && <span className="ml-1.5 text-[9px] text-gray-400 group-hover:rotate-180 transition-transform">▼</span>}
                  </Link>

                  {/* Dropdown Menu */}
                  {category.items.length > 0 && (
                    <div className="absolute top-[56px] left-0 bg-white shadow-xl rounded-b-lg border-t-2 border-[#cca66b] min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[100]">
                      <ul className="py-1 flex flex-col">
                        {category.items.map((subItem: { label: string; href: string }, subIdx: number) => (
                          <li key={subIdx}>
                            <Link href={subItem.href} className="block px-6 py-3 text-[13px] text-[#4f6f8f] hover:text-[#cca66b] hover:bg-gray-50 hover:pl-7 capitalize font-medium transition-all duration-300 border-b border-gray-50 last:border-none">
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
              {/* Moved Social Icons to be next to navigation items */}
              <div className="flex items-center gap-2 ml-4 relative z-40 border-l border-gray-200 pl-4 h-6">
                <a href="https://www.instagram.com/mega.estetik" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] border border-gray-200 rounded flex items-center justify-center text-gray-400 hover:text-[#E1306C] hover:border-[#E1306C] transition-colors">
                  <FaInstagram className="text-[14px]" />
                </a>
                <a href="https://wa.me/905334814098" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] border border-gray-200 rounded flex items-center justify-center text-gray-400 hover:text-[#25D366] hover:border-[#25D366] transition-colors">
                  <FaWhatsapp className="text-[14px]" />
                </a>
                <a href="https://maps.app.goo.gl/j5kTpopsUyhxsjqd9" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] border border-gray-200 rounded flex items-center justify-center text-gray-400 hover:text-[#EA4335] hover:border-[#EA4335] transition-colors">
                  <FaMapMarkerAlt className="text-[14px]" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Header - Sticky */}
      <div className="lg:hidden w-full sticky top-0 z-[100] flex flex-col bg-white shadow-md border-b-[3px] border-[#427bdf]/10">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 min-h-[56px] relative overflow-visible">
          
          {/* Logo on Left */}
          <Link href={lang === 'tr' ? '/' : `/${lang}`} className="flex items-center flex-shrink-0 h-full py-1 relative z-10 w-[145px] sm:w-[160px]">
            <Image 
              src="/images/megaeste-mobile-header.png" 
              alt="Megaeste Logo" 
              width={180} 
              height={56} 
              priority 
              className="w-full h-auto object-contain object-left"
            />
          </Link>
          
          {/* Language Switcher Dropdown (Centered exactly between Logo and Menu) */}
          <div className="flex-1 flex justify-center items-center z-10 px-2 min-w-0">
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1.5 text-[#1e3a5f] font-bold text-[10px] sm:text-[11px] leading-none h-full group py-3"
              >
                <img 
                  src={`/images/flags/${lang === 'tr' ? 'tr.svg' : 'gb.svg'}`} 
                  alt="Lang" 
                  className="w-[20px] sm:w-[24px] h-auto shadow-sm rounded-[3px]" 
                />
                <span className="uppercase tracking-wide">{lang === 'tr' ? 'TÜRKÇE' : 'ENGLISH'}</span>
                <span className="text-[10px] transform group-hover:translate-y-0.5 transition-transform opacity-60">▼</span>
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -5 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -5 }} 
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white shadow-xl rounded-md border border-gray-100 overflow-hidden flex flex-col w-[130px] z-50"
                  >
                    <button 
                      onClick={() => { switchLanguage('tr'); setIsLangOpen(false); }} 
                      className={`flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 text-xs font-bold w-full text-left transition-colors ${lang === 'tr' ? 'text-[#cca66b]' : 'text-gray-700'}`}
                    >
                      <img src="/images/flags/tr.svg" alt="TR" className="w-[22px] h-auto rounded-[3px] shadow-sm" />
                      <span>TÜRKÇE</span>
                    </button>
                    <div className="h-[1px] bg-gray-100 w-full" />
                    <button 
                      onClick={() => { switchLanguage('en'); setIsLangOpen(false); }} 
                      className={`flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 text-xs font-bold w-full text-left transition-colors ${lang === 'en' ? 'text-[#cca66b]' : 'text-gray-700'}`}
                    >
                      <img src="/images/flags/gb.svg" alt="EN" className="w-[22px] h-auto rounded-[3px] shadow-sm" />
                      <span>ENGLISH</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Menu Icon on Right */}
          <div className="flex items-center z-10">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="flex items-center justify-center text-3xl text-[#1e3a5f] hover:text-[#cca66b] transition-colors h-full"
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
              className="fixed inset-0 bg-[#0d2244] z-[100] flex flex-col pt-2"
            >
              {/* Header inside drawer */}
              <div className="flex justify-between items-center px-4 py-4 border-b border-white/10">
                <Link href={lang === 'tr' ? '/' : `/${lang}`} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center">
                  <Image 
                    src="/images/megaeste-logo-png.png" 
                    alt="Megaeste Logo" 
                    width={140} 
                    height={45} 
                    className="w-[120px] object-contain drop-shadow-md" 
                  />
                </Link>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/20 text-white text-2xl hover:bg-white/10 transition-colors"
                >
                  <FiX />
                </button>
              </div>

              {/* Scrollable menu */}
              <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-2 pb-28 flex flex-col no-scrollbar">
                
                {navData.map((category, index) => {
                  const hasItems = category.items.length > 0;
                  const isLastItem = index === navData.length - 1;
                  return (
                    <div key={index} className={`flex flex-col ${!isLastItem ? 'border-b border-white/10' : ''}`}>
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
                        className={`flex items-center justify-between py-4 text-[13px] font-black tracking-widest uppercase transition-colors px-1 ${openAccordion === index ? 'text-[#cca66b]' : 'text-gray-100 hover:text-white'}`}
                      >
                        {category.title}
                        {hasItems && (
                          <FaChevronDown className={`text-xs transition-transform duration-300 ${openAccordion === index ? 'rotate-180 text-[#cca66b]' : 'text-gray-400'}`} />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {hasItems && openAccordion === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col border-l-2 border-white/5 ml-3 mb-2 mt-1">
                              {category.items.map((subItem: { label: string; href: string }, subIdx: number) => (
                                <Link 
                                  key={subIdx} 
                                  href={subItem.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="py-2.5 px-4 text-[12px] font-semibold tracking-wide text-gray-400 hover:text-white transition-colors uppercase"
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
                
                <div className="mt-auto pt-6 flex w-full border-t border-white/10 shrink-0">
                  <div className="flex flex-row items-center w-full justify-between">
                    
                    {/* Bottom CTA on the Left (Wider) */}
                    <Link 
                      href={`${prefix}/${lang === 'tr' ? 'iletisim' : 'contact'}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="bg-[#cca66b] hover:bg-[#b8955a] text-[#1e3a5f] font-black tracking-widest text-[11px] sm:text-[12px] flex items-center justify-center rounded-xl px-8 py-3.5 transition-all shadow-lg whitespace-nowrap"
                    >
                      {dict?.getAppointment?.toUpperCase() || "RANDEVU AL"}
                    </Link>
                    
                    {/* 3 Icons on the Right, Evenly Spaced */}
                    <div className="flex items-center gap-5 sm:gap-6 flex-shrink-0">
                      <a href={`https://wa.me/905334814098?text=${lang === 'en' ? 'Hello,%20I%20would%20like%20to%20get%20information' : 'Merhaba,%20bilgi%20almak%20istiyorum'}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                        <FaWhatsapp className="text-[24px]" />
                      </a>
                      <a href="https://maps.app.goo.gl/j5kTpopsUyhxsjqd9" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                        <FaMapMarkerAlt className="text-[20px]" />
                      </a>
                      <a href="tel:+905334814098" className="text-gray-300 hover:text-white transition-colors">
                        <FiPhone className="text-[20px]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
