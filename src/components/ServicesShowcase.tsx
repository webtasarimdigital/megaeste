'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from 'react';
import { PiFeatherThin, PiScissorsThin, PiDropThin, PiSparkleThin, PiArrowRightThin } from 'react-icons/pi';
import { services } from '@/data/services';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      bgImage: '/images/gorselsac.jfif'
    },
    { 
      id: 'plastik-cerrahi',
      enId: 'plastic-surgery',
      title: dict?.header?.nav?.plasticSurgery?.title || 'Plastik Cerrahi', 
      seoTitle: lang === 'en' ? 'Aesthetic Transformation' : 'Estetik Dönüşüm',
      icon: PiScissorsThin,
      color: '#729788', 
      bgImage: '/images/megaeste-burun-gorsel.jpg'
    },
    { 
      id: 'medikal-estetik',
      enId: 'medical-aesthetics',
      title: dict?.header?.nav?.medicalAesthetics?.title || 'Medikal Estetik', 
      seoTitle: lang === 'en' ? 'Non-Surgical Touch' : 'Ameliyatsız Dokunuş',
      icon: PiDropThin,
      color: '#ad6778', 
      bgImage: '/images/megaeste-botoks2.jpg'
    },
    { 
      id: 'epilasyon',
      enId: 'epilation',
      title: dict?.header?.nav?.epilation?.title || 'Epilasyon', 
      seoTitle: lang === 'en' ? 'Smooth Permanence' : 'Kalıcı Pürüzsüzlük',
      icon: PiFeatherThin,
      color: '#9f8eab', 
      bgImage: '/images/megaeste-estetik.jpg'
    }
  ];

  const activeCategory = categories.find((c) => c.id === activeTab) || categories[0];
  const activeCategorySlug = lang === 'en' ? activeCategory.enId : activeCategory.id;
  
  // Explicit any used here to match `services.ts` dynamic structure
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const activeServices = services.filter((s: any) => s[lang].categorySlug === activeCategorySlug);

  return (
    <section className="w-full bg-white text-[#3a4f66] py-16 md:py-24 relative overflow-hidden" id="services">
      {/* Decorative background accent */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 pointer-events-none transition-colors duration-1000"
        style={{ backgroundColor: activeCategory.color }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[11px] md:text-sm font-semibold tracking-[0.2em] text-[#cca66b] mb-3 uppercase">
            {dict?.services?.subtitle || 'SİZE ÖZEL GELİŞMİŞ TEDAVİ YÖNTEMLERİ'}
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-[#3a4f66]">
            {dict?.services?.title || 'HİZMETLERİMİZ'}
          </h3>
        </div>

        {/* Dynamic Tab Navigation - Elegant Pill Menu */}
        <div className="flex justify-center w-full px-2 mb-10 md:mb-16">
          <div className="inline-flex flex-nowrap overflow-x-auto no-scrollbar bg-gray-50/80 backdrop-blur-xl p-2 rounded-2xl md:rounded-full border border-gray-200 shadow-sm max-w-full">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative flex items-center justify-center px-5 py-3 md:px-8 md:py-4 rounded-xl md:rounded-full transition-all duration-500 flex-shrink-0 group overflow-hidden ${
                    isActive ? 'text-white shadow-md transform scale-[1.02]' : 'text-[#3a4f66] hover:bg-white'
                  }`}
                >
                  {/* Active Background Fill */}
                  <div 
                    className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} 
                    style={{ backgroundColor: isActive ? cat.color : 'transparent' }} 
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center space-x-2 md:space-x-3">
                    <cat.icon 
                      className={`text-2xl md:text-[28px] transition-transform duration-500 ${isActive ? 'scale-110 drop-shadow-sm' : 'group-hover:scale-110'}`} 
                      strokeWidth={isActive ? 1 : 0.7} 
                    />
                    <span className={`text-[13.5px] md:text-[15px] tracking-wide whitespace-nowrap transition-all ${isActive ? 'font-semibold' : 'font-medium'}`}>
                      {cat.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Active Content Area */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start mt-6 transition-all duration-500 min-h-[500px]">
          
          {/* Left Side: Category Hero Visual (Fades in on tab switch) */}
          <div className="w-full lg:w-5/12 animate-fade-in-up">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group">
              {/* Using native img for animated dynamic src without next/image caching hurdles during state change */}
              <img 
                src={activeCategory.bgImage} 
                alt={activeCategory.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10">
                <span className="text-white/80 tracking-[0.2em] text-xs font-bold uppercase mb-2">
                  Megaeste
                </span>
                <h4 className="text-3xl md:text-4xl font-light text-white leading-tight mb-4 drop-shadow-md">
                  {activeCategory.seoTitle}
                </h4>
                <div 
                  className="w-12 h-1 mb-2 transition-all duration-700 delay-300"
                  style={{ backgroundColor: activeCategory.color }}
                />
              </div>
            </div>
            {/* Quick Action underneath the main image */}
            <div className="mt-6 flex justify-center lg:justify-start">
               {/* Fixed the variable access from link -> href to match standard linking */}
               <Link 
                  href={lang === 'en' ? '/en/contact' : '/iletisim'}
                  className="inline-flex items-center space-x-3 px-8 py-4 rounded-full border border-gray-300 hover:border-[#cca66b] hover:bg-[#cca66b] text-[#3a4f66] hover:text-white transition-all duration-300 font-medium tracking-wide group"
               >
                 <span>{lang === 'en' ? 'Book Consultation' : 'Ücretsiz Danışmanlık Alın'}</span>
                 <PiArrowRightThin className="text-2xl transform group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
          </div>

          {/* Right Side: Sub-services List */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <div className="flex flex-col space-y-4 md:space-y-6">
              
              {activeServices.length > 0 ? (
                activeServices.map((service: any) => (
                  <Link 
                    key={service.id} 
                    href={`/${lang === 'en' ? 'en/' : ''}hizmetler/${service[lang].slug}`}
                    className="group flex flex-col sm:flex-row items-center sm:items-stretch bg-gray-50/50 hover:bg-white border hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden cursor-pointer"
                    style={{ borderColor: 'transparent', borderLeftColor: 'transparent' }}
                  >
                    {/* Hover colored bar using pseudo element or direct div */}
                    <div 
                      className="w-2 hidden sm:block transition-all duration-500 opacity-0 group-hover:opacity-100" 
                      style={{ backgroundColor: activeCategory.color }}
                    />

                    {/* Thumbnail Image */}
                    <div className="w-full sm:w-40 h-48 sm:h-auto shrink-0 overflow-hidden relative">
                      <img 
                        src={service.image} 
                        alt={service[lang].title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-col justify-center p-6 flex-grow pr-10 relative">
                      <h5 className="text-xl md:text-2xl font-semibold mb-2 text-[#3a4f66] group-hover:text-[#cca66b] transition-colors line-clamp-1">
                        {service[lang].title}
                      </h5>
                      <p className="text-gray-500 font-light text-[15px] leading-relaxed line-clamp-2 md:line-clamp-3">
                        {service[lang].heroDescription}
                      </p>
                      
                      {/* Interactive Arrow */}
                      <div 
                        className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 hidden sm:block"
                        style={{ color: activeCategory.color }}
                      >
                        <PiArrowRightThin className="text-4xl" />
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="p-10 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                  <p className="text-gray-500 font-light text-lg">
                    {lang === 'en' ? 'Treatments for this category are being updated.' : 'Bu kategoriye ait tedaviler güncellenmektedir.'}
                  </p>
                </div>
              )}

            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
