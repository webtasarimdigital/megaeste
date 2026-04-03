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
      // Category Route Slugs
      'kategori': 'services',
      'sac-ekimi': 'hair-transplant',
      'plastik-cerrahi': 'plastic-surgery',
      'medikal-estetik': 'medical-aesthetics',
      'epilasyon': 'epilation',
      // New Plastics Slugs
      'meme-asimetrisi-duzeltme': 'breast-asymmetry-correction',
      'meme-onarimi': 'breast-reconstruction',
      'meme-kucultme': 'breast-reduction',
      'kapali-burun-ameliyati': 'closed-rhinoplasty',
      'yuz-germe': 'face-lift',
      'boyun-germe': 'neck-lift',
      'kulak-estetigi': 'ear-aesthetics',
      'alin-germe-kas-kaldirma': 'brow-forehead-lift',
      'karin-germe': 'tummy-tuck',
      'kol-bacak-germe': 'arm-leg-lift',
      'liposuction': 'liposuction',
      'yag-enjeksiyonu': 'fat-injection',
      // Corporate Slugs
      'kurumsal': 'corporate',
      'hakkimizda': 'about-us',
      'gorus-ve-onerileriniz': 'feedback',
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navData: any[] = dict?.nav ? [
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
    { title: dict.nav.plasticSurgery?.title || '', href: '#', subcategories: [
      {
        title: lang === 'tr' ? 'Meme Estetiği' : 'Breast Aesthetics',
        items: [
          { label: lang === 'tr' ? 'Meme Asimetrisi Düzeltme' : 'Breast Asymmetry Correction', href: `${prefix}/${lang === 'tr' ? 'hizmetler' : 'treatments'}/${lang === 'tr' ? 'meme-asimetrisi-duzeltme' : 'breast-asymmetry-correction'}` },
          { label: lang === 'tr' ? 'Meme Onarımı' : 'Breast Reconstruction', href: `${prefix}/${lang === 'tr' ? 'hizmetler' : 'treatments'}/${lang === 'tr' ? 'meme-onarimi' : 'breast-reconstruction'}` },
          { label: lang === 'tr' ? 'Meme Küçültme' : 'Breast Reduction', href: `${prefix}/${lang === 'tr' ? 'hizmetler' : 'treatments'}/${lang === 'tr' ? 'meme-kucultme' : 'breast-reduction'}` }
        ]
      },
      {
        title: lang === 'tr' ? 'Burun Estetiği' : 'Nose Aesthetics',
        items: [
          { label: lang === 'tr' ? 'Kapalı Burun Ameliyatı' : 'Closed Rhinoplasty', href: `${prefix}/${lang === 'tr' ? 'hizmetler' : 'treatments'}/${lang === 'tr' ? 'kapali-burun-ameliyati' : 'closed-rhinoplasty'}` }
        ]
      },
      {
        title: lang === 'tr' ? 'Yüz Estetiği' : 'Facial Aesthetics',
        items: [
          { label: lang === 'tr' ? 'Yüz Germe' : 'Face Lift', href: `${prefix}/${lang === 'tr' ? 'hizmetler' : 'treatments'}/${lang === 'tr' ? 'yuz-germe' : 'face-lift'}` },
          { label: lang === 'tr' ? 'Boyun Germe' : 'Neck Lift', href: `${prefix}/${lang === 'tr' ? 'hizmetler' : 'treatments'}/${lang === 'tr' ? 'boyun-germe' : 'neck-lift'}` },
          { label: lang === 'tr' ? 'Kulak Estetiği' : 'Ear Aesthetics', href: `${prefix}/${lang === 'tr' ? 'hizmetler' : 'treatments'}/${lang === 'tr' ? 'kulak-estetigi' : 'ear-aesthetics'}` },
          { label: lang === 'tr' ? 'Göz Kapağı Estetiği' : 'Eyelid Surgery', href: `${prefix}/${lang === 'tr' ? 'hizmetler' : 'treatments'}/${lang === 'tr' ? 'goz-kapagi-estetigi' : 'blepharoplasty'}` },
          { label: lang === 'tr' ? 'Alın Germe - Kaş Kaldırma' : 'Brow & Forehead Lift', href: `${prefix}/${lang === 'tr' ? 'hizmetler' : 'treatments'}/${lang === 'tr' ? 'alin-germe-kas-kaldirma' : 'brow-forehead-lift'}` }
        ]
      },
      {
        title: lang === 'tr' ? 'Vücut Estetiği' : 'Body Aesthetics',
        items: [
          { label: lang === 'tr' ? 'Karın Germe' : 'Tummy Tuck', href: `${prefix}/${lang === 'tr' ? 'hizmetler' : 'treatments'}/${lang === 'tr' ? 'karin-germe' : 'tummy-tuck'}` },
          { label: lang === 'tr' ? 'Kol ve Bacak Germe' : 'Arm & Leg Lift', href: `${prefix}/${lang === 'tr' ? 'hizmetler' : 'treatments'}/${lang === 'tr' ? 'kol-bacak-germe' : 'arm-leg-lift'}` },
          { label: lang === 'tr' ? 'Liposuction' : 'Liposuction', href: `${prefix}/${lang === 'tr' ? 'hizmetler' : 'treatments'}/${lang === 'tr' ? 'liposuction' : 'liposuction'}` },
          { label: lang === 'tr' ? 'Yağ Enjeksiyonu' : 'Fat Injection', href: `${prefix}/${lang === 'tr' ? 'hizmetler' : 'treatments'}/${lang === 'tr' ? 'yag-enjeksiyonu' : 'fat-injection'}` }
        ]
      }
    ], items: [] },
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
                    {(category.items?.length > 0 || (category.subcategories && category.subcategories.length > 0)) && <span className="ml-1.5 text-[9px] text-gray-400 group-hover:rotate-180 transition-transform">▼</span>}
                  </Link>

                  {/* Dropdown Menu */}
                  {(category.items?.length > 0 || (category.subcategories && category.subcategories.length > 0)) && (
                    <div className="absolute top-[56px] left-0 bg-white shadow-xl rounded-b-lg border-t-2 border-[#cca66b] min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[100]">
                      {!category.subcategories && (
                        <ul className="py-1 flex flex-col">
                          {category.items.map((subItem: { label: string; href: string }, subIdx: number) => (
                            <li key={subIdx}>
                              <Link href={subItem.href} className="block px-6 py-3 text-[13px] text-[#4f6f8f] hover:text-[#cca66b] hover:bg-gray-50 hover:pl-7 capitalize font-medium transition-all duration-300 border-b border-gray-50 last:border-none">
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      {category.subcategories && (
                        <ul className="py-1 flex flex-col">
                          {category.subcategories.map((subcat: { title: string; items: { label: string; href: string }[] }, catIdx: number) => (
                            <li key={catIdx} className="relative group/sub">
                              <div className="flex items-center justify-between px-6 py-3 text-[13px] text-[#4f6f8f] hover:text-[#cca66b] hover:bg-gray-50 hover:pl-7 capitalize font-medium transition-all duration-300 border-b border-gray-50 last:border-none cursor-pointer">
                                {subcat.title}
                                <span className="text-[9px] -rotate-90">▼</span>
                              </div>
                              
                              {/* 3rd Level Flyout */}
                              <div className="absolute top-0 left-full ml-0 bg-white shadow-xl rounded-lg border-t-2 border-[#cca66b] min-w-[260px] opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-3 group-hover/sub:translate-x-0 z-[110]">
                                <ul className="py-1 flex flex-col">
                                  {subcat.items.map((subItem: { label: string; href: string }, subIdx: number) => (
                                    <li key={subIdx}>
                                      <Link href={subItem.href} className="block px-6 py-3 text-[13px] text-[#4f6f8f] hover:text-[#cca66b] hover:bg-gray-50 hover:pl-7 capitalize font-medium transition-all duration-300 border-b border-gray-50 last:border-none">
                                        {subItem.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
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
      <div className="lg:hidden w-full sticky top-0 z-[100] flex flex-col bg-[#0d2244] shadow-md border-b-[3px] border-[#cca66b]/20">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 min-h-[56px] relative overflow-visible">
          
          {/* Logo on Left */}
          <Link href={lang === 'tr' ? '/' : `/${lang}`} className="flex items-center flex-shrink-0 h-full py-1 relative z-10 w-[150px] sm:w-[170px]">
            <Image 
              src="/images/megaeste-logo-png.png" 
              alt="Megaeste Logo" 
              width={180} 
              height={56} 
              priority 
              className="w-full h-auto object-contain object-left drop-shadow-md"
            />
          </Link>
          
          {/* Language Switcher Dropdown (Centered exactly between Logo and Menu) */}
          <div className="flex-1 flex justify-center items-center z-10 px-2 min-w-0">
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 text-white font-bold text-[12px] sm:text-[13px] leading-none h-full group py-3"
              >
                <img 
                  src={`/images/flags/${lang === 'tr' ? 'tr.svg' : 'gb.svg'}`} 
                  alt="Lang" 
                  className="w-[24px] sm:w-[28px] h-auto shadow-sm rounded-[3px]" 
                />
                <span className="uppercase tracking-wide">{lang === 'tr' ? 'TÜRKÇE' : 'ENGLISH'}</span>
                <span className="text-[11px] transform group-hover:translate-y-0.5 transition-transform opacity-60">▼</span>
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -5 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -5 }} 
                    className="absolute top-[110%] left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-md border border-gray-100 overflow-hidden flex flex-col w-[140px] z-[110]"
                  >
                    <button 
                      onClick={() => { switchLanguage('tr'); setIsLangOpen(false); }} 
                      className={`flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 text-[13px] font-bold w-full text-left transition-colors ${lang === 'tr' ? 'text-[#cca66b]' : 'text-gray-700'}`}
                    >
                      <img src="/images/flags/tr.svg" alt="TR" className="w-[26px] h-auto rounded-[3px] shadow-sm" />
                      <span>TÜRKÇE</span>
                    </button>
                    <div className="h-[1px] bg-gray-100 w-full" />
                    <button 
                      onClick={() => { switchLanguage('en'); setIsLangOpen(false); }} 
                      className={`flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 text-[13px] font-bold w-full text-left transition-colors ${lang === 'en' ? 'text-[#cca66b]' : 'text-gray-700'}`}
                    >
                      <img src="/images/flags/gb.svg" alt="EN" className="w-[26px] h-auto rounded-[3px] shadow-sm" />
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
              className="flex items-center justify-center text-[34px] sm:text-4xl text-white hover:text-[#cca66b] transition-colors h-full"
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
                  const hasItems = category.items?.length > 0 || (category.subcategories && category.subcategories.length > 0);
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
                              {!category.subcategories && category.items.map((subItem: { label: string; href: string }, subIdx: number) => (
                                <Link 
                                  key={subIdx} 
                                  href={subItem.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="py-2.5 px-4 text-[12px] font-semibold tracking-wide text-gray-400 hover:text-white transition-colors uppercase"
                                >
                                  {subItem.label}
                                </Link>
                              ))}

                              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                              {category.subcategories && category.subcategories.map((subcat: any, catIdx: number) => (
                                <div key={catIdx} className="mb-4 last:mb-0 mt-2">
                                  <div className="py-1.5 px-4 text-[11px] font-bold text-[#cca66b] uppercase tracking-wider opacity-80 border-b border-white/5 mb-1">
                                    {subcat.title}
                                  </div>
                                  <div className="flex flex-col pl-2">
                                    {subcat.items.map((subItem: { label: string; href: string }, subIdx: number) => (
                                      <Link 
                                        key={subIdx} 
                                        href={subItem.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="py-2 px-4 text-[12px] font-semibold tracking-wide text-gray-400 hover:text-white transition-colors"
                                      >
                                        {subItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
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
