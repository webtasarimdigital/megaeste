'use client';
/* eslint-disable @next/next/no-img-element */

import React from 'react';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export default function FeedbackContent({ dict, lang }: { dict?: any, lang: string }) {
  const isTr = lang === 'tr';
  const title = isTr ? 'Görüş ve Önerileriniz' : 'Feedback & Suggestions';
  const subtitle = isTr ? 'SİZİN İÇİN DEĞİŞİYORUZ' : 'WE EVOLVE FOR YOU';
  const desc = isTr 
    ? 'Hizmet kalitemizi daha da artırmak için düşünceleriniz bizim için çok değerli. Lütfen kliniklerimizle ilgili soru, görüş ve önerilerinizi bizimle paylaşın.'
    : 'Your thoughts are very valuable to us in order to further increase our service quality. Please share your feedback and suggestions about our clinics with us.';

  const formTitle = isTr ? 'Bize Yazın' : 'Write to Us';
  const formDesc = isTr 
    ? 'Dilek, şikayet, öneri veya teşekkür mesajlarınızı aşağıdaki form aracılığıyla ilgili departmanımıza anında iletebilirsiniz. En kısa sürede dönüş sağlanacaktır.'
    : 'You can instantly forward your wishes, complaints, suggestions or thank you messages to our relevant department via the form below. We will get back to you as soon as possible.';

  return (
    <div className="w-full bg-[#f8fafc] pb-24">
      
      {/* Hero (Taller for Overlap) */}
      <section className="relative w-full h-[380px] lg:h-[45vh] min-h-[380px] bg-[url('/images/services/medikal-cilt-bakimi.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
        <div className="absolute inset-0 bg-[#0d2244]/80 backdrop-blur-[2px]"></div>
        <div className="relative z-30 w-full h-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-24 flex flex-col items-center justify-center text-center -mt-12 md:-mt-16">
          <nav className="flex items-center text-xs md:text-sm text-white/50 mb-6 font-medium tracking-wide">
            <Link href={lang === 'tr' ? '/' : `/${lang}`} className="hover:text-white transition-colors">
              {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
            </Link>
            <FaChevronRight className="mx-3 text-[10px]" />
            <Link href={lang === 'tr' ? '/kurumsal/hakkimizda' : `/${lang}/corporate/about-us`} className="hover:text-white transition-colors">
              {lang === 'tr' ? 'Kurumsal' : 'Corporate'}
            </Link>
            <FaChevronRight className="mx-3 text-[10px]" />
            <span className="text-white font-semibold">{title}</span>
          </nav>
          
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-5 rounded-full bg-white/10 border border-white/20 text-[#cca66b] text-xs font-bold tracking-widest uppercase">
            {subtitle}
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-5 tracking-tight">
            {title}
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl font-light">
            {desc}
          </p>
        </div>
      </section>

      {/* Form Section (Deep Overlap) */}
      <div className="relative z-40 -mt-24 md:-mt-32 lg:-mt-40 px-4 w-full max-w-[1440px] mx-auto">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 md:p-10 lg:p-14 relative z-10 w-full mx-auto border border-gray-100 flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column: Form */}
          <div className="w-full lg:w-1/2">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-[28px] md:text-[34px] font-black text-[#1e3a5f] tracking-tight mb-3">
                {formTitle}
              </h2>
              <p className="text-[#6a7989] text-[15px] font-medium leading-relaxed">
                {formDesc}
              </p>
            </div>
          
          <form className="flex flex-col space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full flex flex-col space-y-2">
                <label className="text-[11px] font-bold text-[#8fa0b3] uppercase tracking-wider pl-1">{isTr ? 'AD SOYAD' : 'FULL NAME'}</label>
                <input 
                  type="text" 
                  placeholder={isTr ? 'İsminiz' : 'Your name'} 
                  className="w-full border-2 border-[#eef2f6] rounded-[14px] px-5 py-4 outline-none focus:border-[#427bdf] transition-colors text-[15px] text-[#2c4c7c] bg-[#f8fafc] focus:bg-white placeholder-[#aab8c5]"
                />
              </div>
              <div className="w-full flex flex-col space-y-2">
                <label className="text-[11px] font-bold text-[#8fa0b3] uppercase tracking-wider pl-1">{isTr ? 'E-POSTA' : 'EMAIL'}</label>
                <input 
                  type="email" 
                  placeholder={isTr ? 'E-posta adresiniz' : 'Your email address'} 
                  className="w-full border-2 border-[#eef2f6] rounded-[14px] px-5 py-4 outline-none focus:border-[#427bdf] transition-colors text-[15px] text-[#2c4c7c] bg-[#f8fafc] focus:bg-white placeholder-[#aab8c5]"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2 flex flex-col space-y-2">
                <label className="text-[11px] font-bold text-[#8fa0b3] uppercase tracking-wider pl-1">{isTr ? 'TELEFON' : 'PHONE'}</label>
                <input 
                  type="tel" 
                  placeholder={isTr ? 'Telefon numaranız' : 'Your phone number'} 
                  className="w-full border-2 border-[#eef2f6] rounded-[14px] px-5 py-4 outline-none focus:border-[#427bdf] transition-colors text-[15px] text-[#2c4c7c] bg-[#f8fafc] focus:bg-white placeholder-[#aab8c5]"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col space-y-2">
                <label className="text-[11px] font-bold text-[#8fa0b3] uppercase tracking-wider pl-1">{isTr ? 'KONU' : 'SUBJECT'}</label>
                <select className="w-full border-2 border-[#eef2f6] rounded-[14px] px-5 py-4 outline-none focus:border-[#427bdf] transition-colors text-[15px] text-[#2c4c7c] bg-[#f8fafc] focus:bg-white appearance-none cursor-pointer">
                  <option value="gorus">{isTr ? 'Görüş & Öneri' : 'Feedback & Suggestion'}</option>
                  <option value="sikayet">{isTr ? 'Şikayet' : 'Complaint'}</option>
                  <option value="tesekkur">{isTr ? 'Teşekkür' : 'Thank You'}</option>
                  <option value="diger">{isTr ? 'Diğer' : 'Other'}</option>
                </select>
              </div>
            </div>

            <div className="w-full flex flex-col space-y-2">
              <label className="text-[11px] font-bold text-[#8fa0b3] uppercase tracking-wider pl-1">{isTr ? 'MESAJINIZ' : 'YOUR MESSAGE'}</label>
              <textarea 
                placeholder={isTr ? 'Lütfen düşüncelerinizi detaylıca belirtin...' : 'Please specify your thoughts in detail...'} 
                rows={5}
                className="w-full border-2 border-[#eef2f6] rounded-[14px] px-5 py-4 outline-none focus:border-[#427bdf] transition-colors text-[15px] text-[#2c4c7c] bg-[#f8fafc] focus:bg-white placeholder-[#aab8c5] resize-y"
              ></textarea>
            </div>
            
            <div className="pt-4 flex justify-center lg:justify-start">
              <button 
                type="button" 
                className="bg-[#cca66b] text-[#0d2244] font-black py-4 px-14 rounded-[12px] hover:bg-[#b58f53] hover:text-white transition-all duration-300 text-[16px] tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {isTr ? 'MESAJE GÖNDER' : 'SEND MESSAGE'}
              </button>
            </div>
          </form>
          </div>

          {/* Right Column: Embedded Map */}
          <div className="w-full lg:w-1/2 h-full min-h-[350px] lg:min-h-full rounded-[14px] overflow-hidden shadow-sm border-2 border-[#eef2f6] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1505.5786884610996!2d29.110287114660724!3d41.020524949502906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac9aa1b35b6df%3A0x6b4457223b37807c!2sMegaeste%20Estetik%20%26%20Plastik%20Cerrahi!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
