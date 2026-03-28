'use client';
/* eslint-disable @next/next/no-img-element */

import React from 'react';
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
      <section className="relative w-full h-[240px] lg:h-[28vh] min-h-[240px] bg-[#0d2244] flex items-center justify-center overflow-hidden">
        
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
        <div className="relative z-30 flex flex-col items-center justify-center text-center px-4 -mt-8">
          <div className="flex items-center space-x-3 mb-3 md:mb-5">
            <div className="w-5 h-[2px] bg-[#cca66b]"></div>
            <span className="text-[#cca66b] text-[11px] md:text-xs font-black tracking-[0.3em] uppercase drop-shadow-md">
              {subtitle}
            </span>
            <div className="w-5 h-[2px] bg-[#cca66b]"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-none mb-4 drop-shadow-xl">
            {title}
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-medium max-w-xl leading-relaxed drop-shadow-sm">
            {desc}
          </p>
        </div>

      </section>

      {/* 2-Column Contact Layout (Overlap reduced) */}
      <div className="relative z-40 mt-10 lg:mt-14 w-full max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Contact Form (bize yazın) */}
          <div className="w-full lg:w-2/3 order-2 lg:order-1 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-6 md:p-10">
            <div className="mb-8">
              <h2 className="text-[28px] md:text-[34px] font-black text-[#1e3a5f] tracking-tight mb-3">
                {isTr ? 'Bize Yazın' : 'Write to Us'}
              </h2>
              <p className="text-gray-500 text-[15px] font-medium leading-relaxed max-w-2xl">
                {isTr 
                  ? 'Size daha hızlı yardımcı olabilmemiz için iletişim bilgilerimizden bize ulaşabilir veya sizi arayabilmemiz için formu doldurabilirsiniz.' 
                  : 'You can reach us using these channels or fill out the form so we can call you back and assist you faster.'}
              </p>
            </div>
            
            <form className="flex flex-col space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full flex flex-col space-y-2">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider pl-1">{isTr ? 'AD SOYAD' : 'FULL NAME'}</label>
                  <input 
                    type="text" 
                    placeholder={isTr ? "İsminiz" : "Your Name"}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#427bdf] transition-colors text-[14.5px] text-[#2c4c7c] bg-gray-50 focus:bg-white"
                  />
                </div>
                <div className="w-full flex flex-col space-y-2">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider pl-1">{isTr ? 'E-POSTA' : 'EMAIL'}</label>
                  <input 
                    type="email" 
                    placeholder={isTr ? "E-posta adresiniz" : "Email Address"}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#427bdf] transition-colors text-[14.5px] text-[#2c4c7c] bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col space-y-2">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider pl-1">{isTr ? 'TELEFON' : 'PHONE'}</label>
                <input 
                  type="tel" 
                  placeholder={isTr ? "Telefon numaranız" : "Phone Number"}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#427bdf] transition-colors text-[14.5px] text-[#2c4c7c] bg-gray-50 focus:bg-white"
                />
              </div>

              <div className="w-full flex flex-col space-y-2">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider pl-1">{isTr ? 'MESAJINIZ' : 'MESSAGE'}</label>
                <textarea 
                  rows={4}
                  placeholder={isTr ? "Size nasıl yardımcı olabiliriz?" : "How can we help you?"}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#427bdf] transition-colors text-[14.5px] text-[#2c4c7c] bg-gray-50 focus:bg-white resize-none"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full md:w-auto self-start mt-2 bg-[#cca66b] text-white font-bold py-3.5 px-8 md:px-12 rounded-xl text-[14px] hover:bg-[#b58f53] hover:shadow-lg transition-all active:scale-[0.98]"
              >
                {isTr ? 'MESAJI GÖNDER' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>

          {/* Right Column: 3 Contact Cards (Horizontal on Mobile, Vertical on Desktop) */}
          <div className="w-full lg:w-1/3 order-1 lg:order-2 grid grid-cols-3 lg:flex lg:flex-col gap-2 sm:gap-4 lg:gap-6">
            
            {/* Email Card (Clickable on Mobile) */}
            <a href="mailto:info@megaeste.com" className="bg-white rounded-2xl lg:rounded-3xl shadow-sm lg:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-3 lg:p-6 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-2 lg:gap-4 hover:shadow-xl lg:hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="hidden lg:block absolute right-0 top-0 w-24 h-24 bg-[#427bdf]/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0 bg-[#0d2244]/5 text-[#427bdf] rounded-full flex items-center justify-center">
                <FiMail className="text-[18px] lg:text-[20px]" />
              </div>
              <div className="flex flex-col flex-1 pb-1 lg:pb-0">
                <h3 className="text-[#1e3a5f] font-bold text-[10.5px] lg:text-[15px] mb-0 lg:mb-1 leading-tight">{isTr ? 'E-Posta' : 'Email'}</h3>
                <p className="hidden lg:block text-gray-500 text-[13px] leading-relaxed mb-2 font-medium">{isTr ? 'Soru ve görüşleriniz için bize yazın.' : 'Write to us for any questions.'}</p>
                <div className="hidden lg:block text-[#cca66b] font-bold text-[14px] group-hover:text-[#b58f53] transition-colors">
                  info@megaeste.com
                </div>
              </div>
            </a>

            {/* WhatsApp / Phone Card (Clickable on Mobile) */}
            <a href="https://wa.me/905334814098?text=Merhaba" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl lg:rounded-3xl shadow-sm lg:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-3 lg:p-6 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-2 lg:gap-4 hover:shadow-xl lg:hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="hidden lg:block absolute right-0 top-0 w-24 h-24 bg-[#427bdf]/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0 bg-[#0d2244]/5 text-[#427bdf] rounded-full flex items-center justify-center">
                <FiPhone className="text-[18px] lg:text-[20px]" />
              </div>
              <div className="flex flex-col flex-1 pb-1 lg:pb-0">
                <h3 className="text-[#1e3a5f] font-bold text-[10.5px] lg:text-[15px] mb-0 lg:mb-1 leading-tight">{isTr ? 'Telefon' : 'Phone'}</h3>
                <p className="hidden lg:block text-gray-500 text-[13px] leading-relaxed mb-2 font-medium">{isTr ? 'Anında destek almak için arayın.' : 'Call us for instant support.'}</p>
                <div className="hidden lg:block text-[#cca66b] font-bold text-[14px] group-hover:text-[#b58f53] transition-colors">
                  +90 533 481 40 98
                </div>
              </div>
            </a>

            {/* Location Card (Clickable on Mobile) */}
            <a href="https://maps.app.goo.gl/j5kTpopsUyhxsjqd9" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl lg:rounded-3xl shadow-sm lg:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-3 lg:p-6 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-2 lg:gap-4 hover:shadow-xl lg:hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="hidden lg:block absolute right-0 top-0 w-24 h-24 bg-[#427bdf]/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0 bg-[#0d2244]/5 text-[#427bdf] rounded-full flex items-center justify-center">
                <FiMapPin className="text-[18px] lg:text-[20px]" />
              </div>
              <div className="flex flex-col flex-1 pb-1 lg:pb-0">
                <h3 className="text-[#1e3a5f] font-bold text-[10.5px] lg:text-[15px] mb-0 lg:mb-1 leading-tight">{isTr ? 'Konum' : 'Location'}</h3>
                <p className="hidden lg:block text-gray-500 text-[13px] leading-relaxed mb-2 font-medium">
                  İstiklal Mah. Gamsız Sk. No:3<br />Ümraniye / İstanbul
                </p>
                <div className="hidden lg:block text-[#cca66b] font-bold text-[14px] group-hover:text-[#b58f53] transition-colors">
                  {isTr ? 'Yol Tarifi Al' : 'Get Directions'}
                </div>
              </div>
            </a>

          </div>
        </div>
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
