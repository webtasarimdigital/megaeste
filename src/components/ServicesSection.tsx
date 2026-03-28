'use client';
/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ServicesSection({ dict }: { dict?: any }) {
  const content = dict?.services || {
    title: 'HİZMETLERİMİZ',
    subtitle: 'Size Özel Gelişmiş Tedavi Yöntemleri'
  };

  const nav = dict?.nav || {
    hairTransplant: { title: "Saç Ekimi Tedavileri", items: ["DHI Saç Ekimi", "Safir Saç Ekimi"] },
    plasticSurgery: { title: "Plastik Cerrahi", items: ["Burun Estetiği", "Meme Estetiği"] },
    medicalAesthetics: { title: "Medikal Estetik", items: ["Cilt Bakımı", "Mezoterapi"] },
    epilation: { title: "Epilasyon", items: ["Lazer Epilasyon", "İğneli Lazer"] }
  };

  // Maps dictionary nav structure to visual cards
  const servicesData = [
    {
      id: 1,
      title: nav.hairTransplant.title,
      items: nav.hairTransplant.items,
      image: "/images/services/dhi-sac-ekimi.png",
      delay: "300"
    },
    {
      id: 2,
      title: nav.plasticSurgery.title,
      items: nav.plasticSurgery.items,
      image: "/images/services/burun-estetigi.png",
      delay: "400"
    },
    {
      id: 3,
      title: nav.medicalAesthetics.title,
      items: nav.medicalAesthetics.items,
      image: "/images/services/medikal-cilt-bakimi.png",
      delay: "500"
    },
    {
      id: 4,
      title: nav.epilation.title,
      items: nav.epilation.items,
      image: "/images/services/lazer-epilasyon.png",
      delay: "600"
    }
  ];

  return (
    <section className="w-full relative z-10 py-16 xl:py-24 px-4 lg:px-10 xl:px-24 bg-gradient-to-b from-white via-[#f8fafd] to-[#f0f5fa]">
      {/* Header Area */}
      <div className="w-full mx-auto flex flex-col items-center text-center mb-16">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-0.5 bg-[#427bdf]"></div>
          <h3 className="text-[#427bdf] font-black tracking-widest text-sm uppercase">{content.title}</h3>
          <div className="w-8 h-0.5 bg-[#427bdf]"></div>
        </div>
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#1e3a5f] leading-tight">
          {content.subtitle}
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
        {servicesData.map((service) => (
          <div 
            key={service.id} 
            className="group relative h-[450px] xl:h-[500px] rounded-3xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
               <img 
                 src={service.image} 
                 alt={service.title} 
                 className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
               />
               {/* Darker Gradient Overlay for default state */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-700 group-hover:opacity-70"></div>
               {/* Accent Gradient Overlay that fades in on hover */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#427bdf]/90 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
            </div>

            {/* Content Container */}
            <div className="absolute inset-x-0 bottom-0 p-8 pt-20 flex flex-col justify-end h-full">
               
               {/* Title Area */}
               <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                 <h4 className="text-white font-extrabold text-2xl xl:text-3xl mb-2 drop-shadow-md">
                   {service.title}
                 </h4>
                 <div className="w-12 h-1 bg-[#427bdf] group-hover:w-full transition-all duration-700"></div>
               </div>
               
               {/* Hidden List that slides up */}
               <div className="overflow-hidden absolute bottom-8 left-8 right-8">
                 <ul className="flex flex-col space-y-2 opacity-0 transform translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                    {service.items.slice(0, 4).map((sub: string, idx: number) => (
                      <li key={idx} className="text-white/90 text-[14px] font-medium flex items-center drop-shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-white mr-3 shadow-sm"></span>
                        {sub}
                      </li>
                    ))}
                    {service.items.length > 4 && (
                      <li className="text-white/70 text-[13px] italic mt-2">ve fazlası...</li>
                    )}
                 </ul>
               </div>

               {/* Hover Icon Indicator */}
               <div className="absolute right-8 bottom-8 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 flex items-center justify-center text-white transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-200 shadow-xl">
                 <FaArrowRight className="-rotate-45" />
               </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
