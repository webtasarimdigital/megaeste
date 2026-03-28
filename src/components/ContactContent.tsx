'use client';
/* eslint-disable @next/next/no-img-element */

import React from 'react';
import QuickContact from './QuickContact';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export default function ContactContent({ dict, lang }: { dict?: any, lang: string }) {
  const isTr = lang === 'tr';
  const title = isTr ? 'İletişim' : 'Contact Us';
  const subtitle = isTr ? 'BİZE ULAŞIN' : 'GET IN TOUCH';
  const desc = isTr 
    ? 'Uzman hekimlerimizden randevu almak veya aklınıza takılan soruları sormak için aşağıdaki iletişim kanallarından bize rahatlıkla ulaşabilirsiniz.'
    : 'You can easily reach us through the contact channels below to book an appointment with our expert physicians or ask any questions you have.';

  return (
    <div className="w-full bg-[#f8fafc] pb-10">
      
      {/* Adjusted Compact Hero Section */}
      <section className="relative w-full h-[280px] lg:h-[35vh] min-h-[260px] bg-[#0d2244] flex items-center justify-center overflow-hidden">
        
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0d2244]/80 z-10 mix-blend-multiply"></div>
          {/* We use a gradient to make text stand out */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0d2244] to-transparent z-20"></div>
          
          <img 
            src="/images/megaeste-hero.jfif" 
            alt="Megaeste İletişim" 
            className="w-full h-full object-cover object-top opacity-50 blur-[2px] transform scale-105"
          />
        </div>

        {/* Content */}
        <div className="relative z-30 flex flex-col items-center justify-center text-center px-4 mt-8">
          <div className="flex items-center space-x-3 mb-3 md:mb-5">
            <div className="w-5 h-[2px] bg-[#ffb6cf]"></div>
            <span className="text-[#ffb6cf] text-[11px] md:text-xs font-black tracking-[0.3em] uppercase drop-shadow-md">
              {subtitle}
            </span>
            <div className="w-5 h-[2px] bg-[#ffb6cf]"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-none mb-4 drop-shadow-xl">
            {title}
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-medium max-w-xl leading-relaxed drop-shadow-sm">
            {desc}
          </p>
        </div>

      </section>

      {/* Contact Info Cards (Moved Up to overlap Hero) */}
      <div className="relative z-40 -mt-20 sm:-mt-24 xl:-mt-28 w-full max-w-[1440px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 justify-center items-stretch">
          
          {/* Email Card */}
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-24 h-24 bg-[#427bdf]/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
            <div className="w-16 h-16 bg-[#0d2244]/5 text-[#427bdf] rounded-full flex items-center justify-center mb-6">
              <FiMail className="text-[28px]" />
            </div>
            <h3 className="text-[#1e3a5f] font-bold text-lg mb-2">{isTr ? 'E-Posta' : 'Email'}</h3>
            <p className="text-gray-500 text-[14px] leading-relaxed mb-6 font-medium">{isTr ? 'Her türlü soru ve görüşünüz için bize e-posta yoluyla ulaşabilirsiniz.' : 'You can reach us via email for any questions or feedback.'}</p>
            <a href="mailto:info@megaeste.com" className="text-[#cca66b] font-bold text-[15px] hover:text-[#b58f53] transition-colors mt-auto">
              info@megaeste.com
            </a>
          </div>

          {/* WhatsApp / Phone Card */}
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-24 h-24 bg-[#427bdf]/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
            <div className="w-16 h-16 bg-[#0d2244]/5 text-[#427bdf] rounded-full flex items-center justify-center mb-6">
              <FiPhone className="text-[28px]" />
            </div>
            <h3 className="text-[#1e3a5f] font-bold text-lg mb-2">{isTr ? 'Telefon & WhatsApp' : 'Phone & WhatsApp'}</h3>
            <p className="text-gray-500 text-[14px] leading-relaxed mb-6 font-medium">{isTr ? 'Randevu almak veya anında destek almak için bizi arayabilir ya da yazabilirsiniz.' : 'You can call or text us to book an appointment or get instant support.'}</p>
            <a href="https://wa.me/905334814098?text=Merhaba" target="_blank" rel="noopener noreferrer" className="text-[#cca66b] font-bold text-[15px] hover:text-[#b58f53] transition-colors mt-auto">
              +90 533 481 40 98
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-24 h-24 bg-[#427bdf]/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
            <div className="w-16 h-16 bg-[#0d2244]/5 text-[#427bdf] rounded-full flex items-center justify-center mb-6">
              <FiMapPin className="text-[28px]" />
            </div>
            <h3 className="text-[#1e3a5f] font-bold text-lg mb-2">{isTr ? 'Konum' : 'Location'}</h3>
            <p className="text-gray-500 text-[14px] leading-relaxed mb-6 flex-grow font-medium">
              İstiklal Mah. Gamsız Sk. No:3<br />Ümraniye / İstanbul
            </p>
            <a href="https://maps.app.goo.gl/j5kTpopsUyhxsjqd9" target="_blank" rel="noopener noreferrer" className="text-[#cca66b] font-bold text-[15px] hover:text-[#b58f53] transition-colors mt-auto">
              {isTr ? 'Yol Tarifi Al' : 'Get Directions'}
            </a>
          </div>

        </div>
      </div>

      {/* Quick Contact Block (Pushed Down) */}
      <div className="relative z-30 w-full max-w-[1440px] mx-auto px-4 mt-8 md:mt-16">
        <QuickContact />
      </div>

      {/* Full Width Google Map */}
      <div className="w-full h-[350px] md:h-[450px] mt-16 md:mt-24 relative z-10 border-t-8 border-[#427bdf]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1505.5786884610996!2d29.110287114660724!3d41.020524949502906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac9aa1b35b6df%3A0x6b4457223b37807c!2sMegaeste%20Estetik%20%26%20Plastik%20Cerrahi!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>

    </div>
  );
}
