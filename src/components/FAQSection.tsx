'use client';

import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FAQSection({ dict, lang = 'tr' }: { dict?: any, lang?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isEn = lang === 'en';

  const content = dict?.faq || {
    title: isEn ? 'FREQUENTLY ASKED QUESTIONS' : 'SIKÇA SORULAN SORULAR',
    subtitle: isEn ? 'What You Wonder' : 'Merak Ettikleriniz'
  };

  const trFaqs = [
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

  const enFaqs = [
    {
      q: 'Is the hair transplant procedure painful?',
      a: 'Thanks to the application of local anesthesia, no pain is felt during the hair transplant procedure. Slight sensitivity may occur after the procedure, but it is easily controlled with the medication provided.'
    },
    {
      q: 'How long does it take to get results after the procedure?',
      a: 'Transplanted hair falls out within 2-3 weeks, which is completely normal. New hair starts to grow from the 3rd month and full results are obtained within 8-12 months.'
    },
    {
      q: 'Is hair transplant permanent?',
      a: 'Yes, because the hair taken from the donor area is genetically resistant to shedding, the transplanted hair is permanent for life.'
    },
    {
      q: 'How many times do I need to come to the clinic for the procedure?',
      a: 'Hair transplantation is completed in a single session. A pre-procedure consultation and 1-2 post-procedure control appointments are sufficient.'
    },
    {
      q: 'How many sessions does laser epilation take?',
      a: 'Although it varies according to the region and skin type, desired results are generally achieved between 6-8 sessions. It takes 4-6 weeks between sessions.'
    },
    {
      q: 'What are the payment options?',
      a: 'We have cash, credit card and installment payment options. For detailed information, you can contact us.'
    },
  ];

  const faqs = isEn ? enFaqs : trFaqs;

  return (
    <section className="w-full relative pt-20 xl:pt-28 pb-10 xl:pb-16 px-4 lg:px-10 xl:px-24 bg-[#f4f7fa] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#427bdf]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#cca66b]/5 rounded-full blur-3xl"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #0d2244 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 xl:gap-20 relative z-10">
        
        {/* Left Side - Title Area */}
        <div className="lg:w-[35%] flex flex-col justify-start pt-4">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-[3px] bg-[#cca66b] rounded-full"></div>
            <span className="text-[#cca66b] font-black tracking-widest text-xs uppercase">{content.title}</span>
          </div>
          <h2 className="text-3xl md:text-4xl xl:text-[2.8rem] font-black text-[#1e3a5f] leading-tight mb-6 drop-shadow-sm">
            {content.subtitle}
          </h2>
          <p className="text-gray-500 text-[14.5px] leading-relaxed mb-8 font-medium">
            {isEn 
              ? 'By browsing our frequently asked questions, you can get detailed information about our treatment processes and procedures. Reach the results you want with confidence.' 
              : 'Sık sorulan sorularımıza göz atarak tedavi süreçlerimiz ve işlemlerimiz hakkında detaylı bilgi edinebilirsiniz. İstediğiniz sonuçlara güvenle ulaşın.'}
          </p>
          
          <div className="hidden lg:flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center border border-gray-100">
                <span className="text-[#1e3a5f] text-2xl font-black">4</span>
              </div>
              <span className="text-[#1e3a5f] font-bold text-sm">{isEn ? 'Popular Question' : 'Popüler Soru'}</span>
            </div>
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div className="lg:w-[65%] flex flex-col gap-4">
          {faqs.slice(0, 4).map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isOpen 
                    ? 'bg-white border-[#cca66b]/30 shadow-[0_10px_30px_rgba(0,0,0,0.05)]' 
                    : 'bg-white border-transparent shadow-sm hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-[13px] font-black flex-shrink-0 transition-colors duration-300 ${
                      isOpen ? 'bg-[#1e3a5f] text-white' : 'bg-[#f4f7fa] text-[#1e3a5f] group-hover:bg-[#1e3a5f] group-hover:text-white'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`font-bold text-[15px] transition-colors duration-300 ${
                      isOpen ? 'text-[#1e3a5f]' : 'text-gray-700 group-hover:text-[#1e3a5f]'
                    }`}>
                      {faq.q}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 ${
                    isOpen ? 'bg-[#cca66b] text-white rotate-180 shadow-md' : 'bg-[#f4f7fa] text-[#1e3a5f]'
                  }`}>
                    {isOpen ? <FiMinus className="text-sm" /> : <FiPlus className="text-sm" />}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-7 pb-6 pl-[5.5rem]">
                    <p className="text-gray-500 text-[14.5px] leading-relaxed font-medium font-sans">
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
