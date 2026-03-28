'use client';
/* eslint-disable @next/next/no-img-element */

import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export default function FeedbackContent({ dict, lang }: { dict?: any, lang: string }) {
  const isTr = lang === 'tr';
  const title = isTr ? 'Görüş ve Önerileriniz' : 'Feedback & Suggestions';
  const desc = isTr 
    ? 'Hizmet kalitemizi daha da artırmak için düşünceleriniz bizim için çok değerli. Lütfen kliniklerimizle ilgili soru, görüş ve önerilerinizi bizimle paylaşın.'
    : 'Your thoughts are very valuable to us in order to further increase our service quality. Please share your feedback and suggestions about our clinics with us.';

  const formTitle = isTr ? 'Bize Yazın' : 'Write to Us';
  const formDesc = isTr 
    ? 'Dilek, şikayet, öneri veya teşekkür mesajlarınızı aşağıdaki form aracılığıyla ilgili departmanımıza anında iletebilirsiniz. En kısa sürede dönüş sağlanacaktır.'
    : 'You can instantly forward your wishes, complaints, suggestions or thank you messages to our relevant department via the form below. We will get back to you as soon as possible.';

  return (
    <div className="w-full bg-[#f8fafc] pb-24">
      {/* Hero */}
      <section className="relative w-full h-[350px] lg:h-[40vh] min-h-[350px] bg-[#0d2244] flex items-center justify-center overflow-hidden pb-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/services/medikal-cilt-bakimi.png')] bg-cover bg-center bg-no-repeat opacity-40 blur-[2px] transform scale-105"></div>
          <div className="absolute inset-0 bg-[#0d2244]/70 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0d2244] to-transparent z-20"></div>
        </div>

        <div className="relative z-30 flex flex-col items-center justify-center text-center px-4 -mt-16 md:-mt-20">
          <div className="flex items-center space-x-3 mb-3 md:mb-5">
            <div className="w-5 h-[2px] bg-[#cca66b]"></div>
            <span className="text-[#cca66b] text-[11px] md:text-xs font-black tracking-[0.3em] uppercase drop-shadow-md">
              MEGAESTE CLINIC
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

      {/* Form Section (Deep Overlap) */}
      <div className="relative z-40 -mt-12 md:-mt-16 lg:-mt-20 px-4 w-full max-w-[1440px] mx-auto">
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
                {isTr ? 'GÖNDER' : 'SEND'}
              </button>
            </div>
          </form>
          </div>

          {/* Right Column: Visual Cards */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center py-6">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[110%] bg-gradient-to-tr from-[#eef4fc] to-[#f7faff] rounded-[40px] -rotate-3 z-0"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4 w-full px-2 md:px-6">
              <div className="space-y-4 pt-12 flex flex-col justify-end">
                <div className="relative h-48 md:h-60 rounded-2xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.08)] border-[3px] border-white group">
                  <img src="/images/services/burun-estetigi.png" alt="Plastik Cerrahi" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="relative h-32 md:h-44 rounded-2xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.08)] border-[3px] border-white group">
                  <img src="/images/services/lazer-epilasyon.png" alt="Lazer Epilasyon" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
              <div className="space-y-4 flex flex-col justify-start">
                <div className="relative h-32 md:h-44 rounded-2xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.08)] border-[3px] border-white group">
                  <img src="/images/services/medikal-cilt-bakimi.png" alt="Medikal Estetik" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="relative h-48 md:h-60 rounded-2xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.08)] border-[3px] border-white group">
                  <img src="/images/services/dhi-sac-ekimi.png" alt="Saç Ekimi" className="absolute inset-0 w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
