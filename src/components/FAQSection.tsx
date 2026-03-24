'use client';

import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FAQSection({ dict }: { dict?: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const content = dict?.faq || {
    title: 'SIKÇA SORULAN SORULAR',
    subtitle: 'Merak Ettikleriniz'
  };

  const faqs = [
    {
      q: 'Saç ekimi işlemi ağrılı mıdır?',
      a: 'Lokal anestezi uygulaması sayesinde saç ekimi işlemi sırasında ağrı hissedilmez. İşlem sonrası hafif bir hassasiyet oluşabilir, ancak verilen ilaçlarla kolayca kontrol altına alınır.'
    },
    {
      q: 'İşlem sonrası ne kadar sürede sonuç alınır?',
      a: 'Ekilen saçlar 2-3 hafta içinde dökülür, bu tamamen normaldir. Yeni saçlar 3. aydan itibaren çıkmaya başlar ve 8-12 ay içinde tam sonuç elde edilir.'
    },
    {
      q: 'Saç ekimi kalıcı mıdır?',
      a: 'Evet, donör bölgeden alınan saçlar genetik olarak dökülmeye dirençli olduğu için ekilen saçlar ömür boyu kalıcıdır.'
    },
    {
      q: 'İşlem için kliniğe kaç kez gelmem gerekiyor?',
      a: 'Saç ekimi tek seansta tamamlanır. İşlem öncesi konsültasyon ve işlem sonrası 1-2 kontrol randevusu yeterlidir.'
    },
    {
      q: 'Lazer epilasyon kaç seans sürer?',
      a: 'Bölgeye ve cilt tipine göre değişmekle birlikte, genellikle 6-8 seans arasında istenilen sonuçlara ulaşılır. Seanslar arası 4-6 hafta beklenir.'
    },
    {
      q: 'Ödeme seçenekleri nelerdir?',
      a: 'Nakit, kredi kartı ve taksitli ödeme seçeneklerimiz mevcuttur. Detaylı bilgi için bizimle iletişime geçebilirsiniz.'
    },
  ];

  return (
    <section className="w-full relative py-20 xl:py-28 px-4 lg:px-10 xl:px-24 bg-[#1e3a5f] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#427bdf]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#427bdf]/8 rounded-full blur-3xl"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 xl:gap-20 relative z-10">
        
        {/* Left Side - Title Area */}
        <div className="lg:w-[35%] flex flex-col justify-start pt-4">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-[3px] bg-[#427bdf] rounded-full"></div>
            <span className="text-[#427bdf] font-black tracking-widest text-xs uppercase">{content.title}</span>
          </div>
          <h2 className="text-3xl md:text-4xl xl:text-[2.8rem] font-bold text-white leading-tight mb-6">
            {content.subtitle}
          </h2>
          <p className="text-white/50 text-[14px] leading-relaxed mb-8">
            Sık sorulan sorularımıza göz atarak tedavi süreçlerimiz hakkında detaylı bilgi edinebilirsiniz.
          </p>
          
          <div className="hidden lg:flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#427bdf]/20 flex items-center justify-center">
                <span className="text-[#7fb3ff] text-2xl font-black">{faqs.length}</span>
              </div>
              <span className="text-white/70 font-semibold text-sm">Popüler Soru</span>
            </div>
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div className="lg:w-[65%] flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-500 border ${
                  isOpen 
                    ? 'bg-white/10 backdrop-blur-sm border-[#427bdf]/30 shadow-lg shadow-[#427bdf]/10' 
                    : 'bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/8 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-[12px] font-black flex-shrink-0 transition-colors duration-300 ${
                      isOpen ? 'bg-[#427bdf] text-white' : 'bg-white/10 text-white/50'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`font-bold text-[15px] transition-colors duration-300 ${
                      isOpen ? 'text-white' : 'text-white/80'
                    }`}>
                      {faq.q}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 ${
                    isOpen ? 'bg-[#427bdf] text-white rotate-180' : 'bg-white/10 text-white/50'
                  }`}>
                    {isOpen ? <FiMinus className="text-sm" /> : <FiPlus className="text-sm" />}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-7 pb-6 pl-[4.5rem]">
                    <p className="text-white/60 text-[14px] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
