'use client';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from 'react';
import { PiFeatherThin, PiScissorsThin, PiDropThin, PiSparkleThin, PiArrowRightThin } from 'react-icons/pi';
import { services } from '@/data/services';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServicesShowcase({ dict, lang = 'tr' }: { dict: any; lang?: string }) {
  const [activeTab, setActiveTab] = useState('sac-ekimi');

  const categories = [
    { 
      id: 'sac-ekimi', 
      enId: 'hair-transplant',
      title: dict?.header?.nav?.hairTransplant?.title || 'Saç Ekimi', 
      seoTitle: lang === 'en' ? 'Natural Hair Restoration' : 'Doğal Saç Restorasyonu',
      icon: PiSparkleThin,
      color: '#4f6f8f', 
      bgImage: '/images/services/dhi-sac-ekimi.png'
    },
    { 
      id: 'plastik-cerrahi',
      enId: 'plastic-surgery',
      title: dict?.header?.nav?.plasticSurgery?.title || 'Plastik Cerrahi', 
      seoTitle: lang === 'en' ? 'Aesthetic Transformation' : 'Estetik Dönüşüm',
      icon: PiScissorsThin,
      color: '#729788', 
      bgImage: '/images/services/burun-estetigi.png'
    },
    { 
      id: 'medikal-estetik',
      enId: 'medical-aesthetics',
      title: dict?.header?.nav?.medicalAesthetics?.title || 'Medikal Estetik', 
      seoTitle: lang === 'en' ? 'Non-Surgical Touch' : 'Ameliyatsız Dokunuş',
      icon: PiDropThin,
      color: '#ad6778', 
      bgImage: '/images/services/medikal-cilt-bakimi.png'
    },
    { 
      id: 'epilasyon',
      enId: 'epilation',
      title: dict?.header?.nav?.epilation?.title || 'Epilasyon', 
      seoTitle: lang === 'en' ? 'Smooth Permanence' : 'Kalıcı Pürüzsüzlük',
      icon: PiFeatherThin,
      color: '#9f8eab', 
      bgImage: '/images/services/lazer-epilasyon.png'
    }
  ];

  const activeCategory = categories.find((c) => c.id === activeTab) || categories[0];
  const activeCategorySlug = lang === 'en' ? activeCategory.enId : activeCategory.id;
  const activeServices = services.filter((s: any) => s[lang].categorySlug === activeCategorySlug);

  return (
    <section className="w-full bg-white text-[#3a4f66] py-16 md:py-24 relative overflow-hidden" id="services">
      {/* Decorative background accent */}
      <motion.div 
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-10 pointer-events-none"
        animate={{ backgroundColor: activeCategory.color }}
        transition={{ duration: 1.5, ease: 'circOut' }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 md:w-16 h-[2px] bg-[#cca66b]/80 rounded-full"></div>
            <h2 className="text-[10px] md:text-sm font-black tracking-[0.3em] text-[#cca66b] uppercase drop-shadow-md">
              {dict?.services?.subtitle || 'SİZE ÖZEL GELİŞMİŞ TEDAVİ YÖNTEMLERİ'}
            </h2>
            <div className="w-8 md:w-16 h-[2px] bg-[#cca66b]/80 rounded-full"></div>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1e3a5f] tracking-tight leading-none drop-shadow-sm">
            {dict?.services?.title || 'HİZMETLERİMİZ'}
          </h3>
        </motion.div>

        {/* Dynamic Tab Navigation - Elegant Pill Menu */}
        <motion.div 
          className="flex justify-center w-full px-2 mb-12 md:mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.div 
            className="inline-flex flex-nowrap overflow-x-auto no-scrollbar backdrop-blur-xl p-2.5 rounded-2xl md:rounded-full border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-full"
            animate={{ backgroundColor: `${activeCategory.color}25` }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative flex items-center justify-center px-6 py-4 md:px-10 md:py-5 rounded-xl md:rounded-full transition-colors duration-300 flex-shrink-0 group overflow-hidden ${
                    isActive ? 'text-white' : 'text-[#3a4f66] hover:bg-white hover:shadow-sm'
                  }`}
                >
                  {/* Active Background Fill with Framer Motion LayoutId */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabPill"
                      className="absolute inset-0 rounded-xl md:rounded-full shadow-lg"
                      style={{ backgroundColor: cat.color }} 
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center space-x-3 md:space-x-4">
                    <cat.icon 
                      className={`text-[2rem] md:text-[2.2rem] transition-transform duration-500 ${isActive ? 'scale-110 drop-shadow-sm' : 'group-hover:scale-110 group-hover:text-[#cca66b]'}`} 
                      strokeWidth={isActive ? 1.5 : 0.7} 
                    />
                    <span className={`text-sm md:text-base tracking-wide whitespace-nowrap transition-all ${isActive ? 'font-bold' : 'font-medium'}`}>
                      {cat.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Dynamic Active Content Area */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch mt-8 min-h-[650px]">
          
          {/* Left Side: Category Hero Visual */}
          <div className="w-full lg:w-5/12 relative flex flex-col justify-end min-h-[500px] lg:min-h-0">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeCategory.id}
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)', transition: { duration: 0.4 } }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] group"
              >
                <img 
                  src={activeCategory.bgImage} 
                  alt={activeCategory.title} 
                  className="w-full h-full object-cover transition-transform duration-[20s] ease-out group-hover:scale-110"
                />
                
                {/* Animated Colorful Overlay (Bottom to Top on Hover) */}
                <div 
                  className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] opacity-40 mix-blend-multiply z-10"
                  style={{ backgroundColor: activeCategory.color }}
                />

                {/* Dark Gradient - Separated from text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2244]/90 via-[#0d2244]/20 to-transparent z-10 transition-opacity duration-700 group-hover:opacity-60" />

                {/* Text Container */}
                <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14 z-20">
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-white/80 tracking-[0.3em] text-xs font-black uppercase mb-3"
                  >
                    Megaeste
                  </motion.span>
                  <motion.h4 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-4xl md:text-5xl font-light text-white leading-tight mb-5 drop-shadow-lg"
                  >
                    {activeCategory.seoTitle}
                  </motion.h4>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: 64 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="h-1.5 rounded-full"
                    style={{ backgroundColor: activeCategory.color }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Sub-services List */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center py-6">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial="hidden"
                animate="show"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15 }
                  },
                  exit: { opacity: 0, transition: { duration: 0.3 } }
                }}
                className="flex flex-col space-y-4 md:space-y-6"
              >
                {activeServices.length > 0 ? (
                  activeServices.map((service: any) => (
                    <motion.div 
                      key={service.id}
                      variants={{
                        hidden: { opacity: 0, x: 40 },
                        show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                      }}
                    >
                      <Link 
                        href={`${lang === 'en' ? '/en/treatments' : '/hizmetler'}/${service[lang].slug}`}
                        className="group flex flex-col sm:flex-row items-center sm:items-stretch bg-white border border-gray-100 hover:border-gray-200 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 rounded-3xl overflow-hidden cursor-pointer"
                      >
                        {/* Thumbnail Image */}
                        <div className="w-full sm:w-48 h-56 sm:h-auto shrink-0 overflow-hidden relative">
                          <img 
                            src={service.image} 
                            alt={service[lang].title} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-[#0d2244]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* Content */}
                        <div className="flex-col justify-center p-8 flex-grow pr-12 relative bg-gradient-to-l from-transparent to-white via-white group-hover:to-gray-50/50 transition-colors duration-500">
                          <h5 className="text-2xl font-semibold mb-3 text-[#1e3a5f] group-hover:text-[#cca66b] transition-colors">
                            {service[lang].title}
                          </h5>
                          <p className="text-gray-500 font-medium text-[15px] leading-relaxed line-clamp-3 mb-4 md:mb-5">
                            {service[lang].heroDescription}
                          </p>

                          {/* Detaylı Bilgi Button */}
                          <div 
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white transition-all duration-300 font-bold text-[13px] tracking-wide shadow-sm group-hover:shadow-md"
                            style={{ 
                              color: activeCategory.color, 
                              border: `1.5px solid ${activeCategory.color}`
                            }}
                          >
                            {lang === 'en' ? 'Detailed Info' : 'Detaylı Bilgi'} <PiArrowRightThin className="text-lg" />
                          </div>
                          
                          {/* Hover Arrow (Desktop only) */}
                          <div 
                            className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 hidden sm:flex bg-white shadow-sm"
                            style={{ color: activeCategory.color, borderColor: activeCategory.color }}
                          >
                            <PiArrowRightThin className="text-2xl" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-16 text-center bg-gray-50 rounded-[2.5rem] border border-dashed border-gray-300"
                  >
                    <p className="text-gray-500 font-medium text-lg">
                      {lang === 'en' ? 'Treatments for this category are being updated.' : 'Bu kategoriye ait tedaviler güncellenmektedir.'}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Quick Consultation Button Under Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 hidden md:flex justify-start pl-2"
            >
              <Link 
                  href={lang === 'en' ? '/en/contact' : '/iletisim'}
                  className="inline-flex items-center space-x-3 px-8 py-4 rounded-full border border-gray-300 hover:border-[#cca66b] hover:bg-[#cca66b] text-[#3a4f66] hover:text-white transition-all duration-300 font-bold tracking-wide group shadow-sm hover:shadow-lg"
              >
                <span>{lang === 'en' ? 'Get a Free Appointment' : 'Hemen Ücretsiz Randevu Al'}</span>
                <PiArrowRightThin className="text-2xl transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
