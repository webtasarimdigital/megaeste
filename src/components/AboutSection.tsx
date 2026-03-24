'use client';

import React from 'react';
import { FaPlay } from 'react-icons/fa';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AboutSection({ dict }: { dict?: any }) {
  const content = dict?.about || {
    title: 'HAKKIMIZDA',
    subtitle: 'Sağlığınız ve Güzelliğiniz İçin Uzmanı Dokunuşu',
    description: 'Megaeste olarak, uzman kadromuz ve en son teknoloji cihazlarımızla sağlık ve medikal estetik alanlarında profesyonel hizmet sunuyoruz. Yenilikçi yaklaşımlarımız ve hasta memnuniyeti odaklı vizyonumuzla güzelliğinize değer katmak için her zaman yanınızdayız.',
    button: 'Daha Fazla Bilgi'
  };

  return (
    <section className="w-full relative z-10 py-16 xl:py-24 px-4 lg:px-10 xl:px-24 overflow-hidden bg-gray-50">
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
        
        {/* Left Side: Image Composition */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl h-[400px] xl:h-[500px] w-[90%] border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=800"
              alt="Megaeste Clinic"
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          
          {/* Floating Aesthetic Element */}
          <div className="absolute bottom-10 right-0 w-48 h-48 xl:w-64 xl:h-64 rounded-full border-[12px] border-white shadow-xl overflow-hidden z-20 translate-x-4 translate-y-8">
            <img 
              src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=400"
              alt="Details"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative Pattern / Blur */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#efc34c]/20 rounded-full blur-3xl -z-10"></div>
          
          {/* Play Button Overlay - optional aesthetic */}
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-white/30 backdrop-blur-md w-20 h-20 rounded-full flex items-center justify-center text-white border border-white/50 hover:scale-110 transition-transform shadow-[0_0_30px_rgba(0,0,0,0.2)]">
            <FaPlay className="text-2xl ml-1" />
          </button>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start pt-8 lg:pt-0">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-[#efc34c]"></div>
            <h3 className="text-[#efc34c] font-black tracking-widest text-sm uppercase">{content.title}</h3>
          </div>
          
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#363f46] leading-tight mb-8">
            {content.subtitle}
          </h2>
          
          <p className="text-gray-500 text-[15px] xl:text-[16px] leading-relaxed mb-10 font-medium">
            {content.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <button className="bg-gradient-to-r from-[#363f46] to-[#4B5357] text-white px-10 py-4 rounded-xl font-bold tracking-wide hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {content.button}
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100">
                <span className="text-[#efc34c] font-black text-xl">15+</span>
              </div>
              <span className="font-bold text-gray-700 text-sm leading-tight">Yıllık<br/>Tecrübe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
