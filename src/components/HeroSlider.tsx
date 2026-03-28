'use client';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const slides = [
  {
    id: 1,
    desktopImg: '/images/slider_desktop_1.png',
    mobileImg: '/images/slider_mobile_1.png',
    badge: 'SAÇ EKİMİ VE ESTETİK',
    titleLine1: 'İTALYAN ÇİZGİSİ',
    titleLine2: 'ESTETİĞİ İLE',
    titleLine3: 'DOĞAL SAÇLAR',
    desc: 'Daha sık, doğal görünüm ve kalıcı sonuçlarla estetiğinizi yeniden keşfedin.',
  },
  {
    id: 2,
    desktopImg: '/images/slider_desktop_2.png',
    mobileImg: '/images/slider_mobile_2.png',
    badge: 'MEGAESTE KALİTESİ',
    titleLine1: 'MODERN TEKNOLOJİ',
    titleLine2: 'VE UZMAN EKİPLE',
    titleLine3: 'KUSURSUZ GÜLÜŞ',
    desc: 'Kişiye özel planlanan modern estetik uygulamalarıyla kendinizi özel hissedin.',
  }
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HeroSlider({ dict }: { dict?: any }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 6000 })]);

  const activeSlides = dict || slides;

  return (
    <div className="relative w-full overflow-hidden bg-gray-100" ref={emblaRef}>
      <div className="flex">
        {activeSlides.map((slide: any) => (
          <div key={slide.id} className="relative flex-[0_0_100%] min-w-0">
            {/* Desktop Image */}
            <img 
              src={slide.desktopImg} 
              alt={`Desktop Slider ${slide.id}`} 
              className="hidden lg:block w-full h-[600px] xl:h-[700px] object-cover" 
            />
            {/* Mobile Image */}
            <img 
              src={slide.mobileImg} 
              alt={`Mobile Slider ${slide.id}`} 
              className="block lg:hidden w-full h-[70vh] object-cover object-center" 
            />
            
            {/* Desktop Overlay Text - Premium Nivdis Style */}
            <div className="hidden lg:flex absolute inset-0 flex-col justify-center items-start px-20 xl:px-32 text-white pb-10 bg-gradient-to-r from-[#0d2244]/85 via-[#0d2244]/40 to-transparent">
              
              <div className="bg-[#cca66b] text-[#1e3a5f] px-5 py-2 rounded-full text-[13px] font-black tracking-[0.2em] mb-7 inline-flex items-center shadow-lg">
                <span className="mr-2 opacity-60">#</span> {slide.badge}
              </div>

              <h1 className="text-[3.5rem] xl:text-[5rem] font-black tracking-tighter mb-6 leading-[1.05] drop-shadow-2xl uppercase">
                <span className="text-white block">{slide.titleLine1}</span>
                <span className="text-white block">{slide.titleLine2}</span>
                <div className="flex flex-wrap gap-x-4">
                  <span className="text-[#cca66b]">{slide.titleHighlight1}</span>
                  <span className="text-white">{slide.titleLine3}</span>
                </div>
                {(slide.titleHighlight2 || slide.titleLine4) && (
                  <div className="flex flex-wrap gap-x-4">
                    <span className="text-[#cca66b]">{slide.titleHighlight2}</span>
                    <span className="text-white">{slide.titleLine4}</span>
                  </div>
                )}
              </h1>
              
              <p className="text-lg xl:text-xl font-medium max-w-xl leading-relaxed text-white drop-shadow-md mb-10 relative after:content-[''] after:absolute after:-bottom-4 after:left-0 after:w-16 after:h-1 after:bg-[#cca66b] after:rounded-full">
                {slide.desc}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-5 mt-4">
                <a href="/iletisim" className="bg-[#cca66b] text-[#1e3a5f] px-9 py-4 rounded-full font-black text-sm tracking-widest flex items-center transition-transform hover:scale-105 shadow-xl hover:shadow-2xl">
                  {slide.contactBtn || 'İLETİŞİM'} <span className="ml-3 text-lg leading-none">→</span>
                </a>
                <a href="/kurumsal/hakkimizda" className="bg-[#cca66b] text-[#1e3a5f] px-9 py-4 rounded-full font-black text-sm tracking-widest flex items-center transition-transform hover:scale-105 shadow-xl hover:shadow-2xl">
                  {slide.aboutBtn || 'HAKKIMIZDA'} <span className="ml-3 text-lg leading-none">→</span>
                </a>
              </div>
            </div>

            {/* Mobile Overlay Text - Premium Nivdis Style */}
            <div className="flex lg:hidden absolute inset-0 flex-col justify-end items-start pb-[4.5rem] text-white px-6 xl:px-10 bg-gradient-to-t from-[#0d2244]/95 via-[#0d2244]/50 to-transparent">
              
              <div className="bg-[#cca66b] text-[#1e3a5f] px-4 py-2 rounded-full text-[11px] font-black tracking-[0.2em] mb-4 inline-flex items-center shadow-lg">
                <span className="mr-1.5 opacity-60">#</span> {slide.badge}
              </div>

              <h1 className="text-[2.6rem] sm:text-5xl font-black tracking-tighter mb-4 leading-[1.05] drop-shadow-2xl uppercase">
                <span className="text-white block">{slide.titleLine1}</span>
                <span className="text-white block">{slide.titleLine2}</span>
                <div className="flex flex-wrap gap-x-3">
                  <span className="text-[#cca66b]">{slide.titleHighlight1}</span>
                  <span className="text-white">{slide.titleLine3}</span>
                </div>
                {(slide.titleHighlight2 || slide.titleLine4) && (
                  <div className="flex flex-wrap gap-x-3">
                    <span className="text-[#cca66b]">{slide.titleHighlight2}</span>
                    <span className="text-white">{slide.titleLine4}</span>
                  </div>
                )}
              </h1>
              
              <p className="text-[14px] sm:text-base font-medium max-w-[95%] leading-relaxed text-white/95 drop-shadow-md pb-6 mb-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-[#cca66b] after:rounded-full">
                {slide.desc}
              </p>

              {/* Action Buttons (Mobile) */}
              <div className="flex items-center gap-3 w-full">
                <a href="/iletisim" className="flex-1 justify-center bg-[#cca66b] text-[#1e3a5f] px-4 py-3.5 rounded-full font-black text-[11px] sm:text-[12px] tracking-widest flex items-center active:scale-95 transition-transform shadow-lg">
                  {slide.contactBtn || 'İLETİŞİM'} <span className="ml-2 text-base leading-none">→</span>
                </a>
                <a href="/kurumsal/hakkimizda" className="flex-1 justify-center bg-[#cca66b] text-[#1e3a5f] px-4 py-3.5 rounded-full font-black text-[11px] sm:text-[12px] tracking-widest flex items-center active:scale-95 transition-transform shadow-lg">
                  {slide.aboutBtn || 'HAKKIMIZDA'} <span className="ml-2 text-base leading-none">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-12 lg:bottom-16 left-0 right-0 flex justify-center space-x-3 z-30">
        {activeSlides.map((_: any, index: number) => (
          <button 
            key={index} 
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors border border-gray-300"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
