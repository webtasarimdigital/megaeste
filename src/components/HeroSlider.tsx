'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const slides = [
  {
    id: 1,
    desktopImg: '/images/slider_desktop_1.png',
    mobileImg: '/images/slider_mobile_1.png',
    desktopSub: 'DOĞAL ÖN SAÇ TASARIMI',
    desktopTitle: 'İtalyan Çizgisi Estetiği',
    desktopHighlight1: 'Saç Ekiminde',
    desktopHighlight2: 'Yeni Nesil Teknoloji',
    desktopDesc: 'Daha sık, doğal görünüm ve kalıcı sonuçlarla estetiğinizi yeniden keşfedin.',
    mobileSub: '1 GÜNDE',
    mobileTitle: 'Saç & Kaş Estetiği',
    mobileDesc: 'doğal, sık ve kalıcı sonuçlar'
  },
  {
    id: 2,
    desktopImg: '/images/slider_desktop_2.png',
    mobileImg: '/images/slider_mobile_2.png',
    desktopSub: 'ÖZEL SAÇ EKİM PROTOKOLÜ',
    desktopTitle: 'megaeste Farkını Yaşayın',
    desktopHighlight1: 'Uzman Kadro İle',
    desktopHighlight2: 'Kusursuz Sonuçlar',
    desktopDesc: 'Kişiye özel planlanan modern saç ekimi uygulamalarıyla kendinizi özel hissedin.',
    mobileSub: 'MEGAESTE KALİTESİ',
    mobileTitle: 'Kusursuz Saç Ekimi',
    mobileDesc: 'kişiye özel ve doğal görünüm'
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
            
            {/* Desktop Overlay Text */}
            <div className="hidden lg:flex absolute inset-0 flex-col justify-center items-start px-20 xl:px-32 text-white pb-10 bg-gradient-to-r from-black/60 via-black/30 to-transparent">
              <h2 className="text-2xl font-light tracking-[0.2em] text-[#efc34c] mb-3 drop-shadow-md">{slide.desktopSub}</h2>
              <h1 className="text-7xl font-serif tracking-wide mb-8 drop-shadow-lg leading-tight">
                {slide.desktopTitle}
              </h1>
              
              <div className="flex items-center">
                <div>
                  <h3 className="text-[2.75rem] font-medium mb-4 leading-tight drop-shadow-lg">{slide.desktopHighlight1}<br/><span className="font-bold">{slide.desktopHighlight2}</span></h3>
                  <p className="text-lg font-light tracking-wider max-w-lg leading-relaxed text-gray-100 drop-shadow-md border-l-2 border-[#efc34c] pl-4">
                    {slide.desktopDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Overlay Text */}
            <div className="flex lg:hidden absolute inset-0 flex-col justify-end items-center pb-20 text-white text-center px-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
               <h2 className="text-2xl font-light tracking-[0.2em] text-[#efc34c] mb-2 drop-shadow-lg">{slide.mobileSub}</h2>
               <h1 className="text-[2.5rem] font-serif mb-4 drop-shadow-lg leading-tight tracking-wide">{slide.mobileTitle}</h1>
               <p className="text-xl font-light tracking-wide opacity-90 drop-shadow-md pb-6 border-b border-[#efc34c]/50">
                 {slide.mobileDesc}
               </p>
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
