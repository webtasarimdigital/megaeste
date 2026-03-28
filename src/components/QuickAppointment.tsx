'use client';

import React from 'react';

export default function QuickAppointment({ lang = 'tr' }: { lang?: string }) {
  const isEn = lang === 'en';
  
  return (
    <section className="w-full bg-[#3a4f66] py-16 md:py-24 relative overflow-hidden" id="quick-appointment">
        {/* Background Decorative Pattern (Subtle) */}
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#cca66b] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#427bdf] opacity-10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

       <div className="w-full max-w-7xl mx-auto px-4 md:px-8 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
             
             {/* Left Text Column */}
             <div className="text-white pr-0 lg:pr-10">
                {/* Micro Header */}
                <div className="flex items-center space-x-3 mb-6">
                   <div className="w-12 h-[2px] bg-[#cca66b]"></div>
                   <span className="text-[#cca66b] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
                     {isEn ? 'Free Consultation' : 'Ücretsiz Muayene'}
                   </span>
                </div>
                
                {/* Standardized Megaeste typography from hero approach */}
                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-8 tracking-tight">
                  {isEn ? 'BOOK A FREE CONSULTATION ' : 'HEMEN ÜCRETSİZ '}
                  <span className="font-light">{isEn ? 'NOW' : 'RANDEVU AL'}</span>
                </h2>
                
                <p className="text-gray-300 text-[15px] md:text-[17px] font-light leading-relaxed mb-10 max-w-xl">
                  {isEn 
                    ? 'By booking an appointment at our clinics, you can have all your aesthetic, plastic surgery, or hair transplantation needs checked and completely plan your process for free.' 
                    : 'Kliniklerimizden randevu alarak; estetik, plastik cerrahi veya saç ekimi alanındaki tüm ihtiyaçlarınızı kontrol ettirebilir ve planlamayı tamamen ücretsiz olarak yaptırabilirsiniz.'}
                </p>
                
                {/* Shield Callout Box */}
                <div className="inline-flex items-center space-x-4 bg-white/5 px-5 py-3 md:px-6 md:py-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                   <div className="w-10 h-10 rounded-full bg-[#cca66b]/20 flex items-center justify-center shrink-0">
                     <svg className="w-5 h-5 text-[#cca66b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                     </svg>
                   </div>
                   <span className="text-[13px] md:text-[14px] font-semibold tracking-wide text-white uppercase">
                     {isEn ? 'Your Health is Our Priority Because We Are Megaeste' : "Önceliğimiz Sağlığınız Çünkü Biz Megaeste'yiz"}
                   </span>
                </div>
             </div>

             {/* Right Form Card */}
             <div className="bg-[#243447] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl relative w-full lg:max-w-[540px] lg:ml-auto border border-white/5">
                <form className="flex flex-col space-y-5">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <input 
                        type="text" 
                        placeholder={isEn ? "Full Name" : "İsim Soyisim"} 
                        className="w-full bg-[#1a2533] text-white placeholder-gray-500 border border-transparent focus:border-[#cca66b] focus:bg-[#1a2533]/90 rounded-xl px-5 py-4 outline-none transition-all text-sm font-medium"
                      />
                      <input 
                        type="tel" 
                        placeholder={isEn ? "Phone Number" : "Telefon Numarası"} 
                        className="w-full bg-[#1a2533] text-white placeholder-gray-500 border border-transparent focus:border-[#cca66b] focus:bg-[#1a2533]/90 rounded-xl px-5 py-4 outline-none transition-all text-sm font-medium"
                      />
                   </div>
                   <textarea 
                      placeholder={isEn ? "Your Message" : "Mesajınız"} 
                      rows={4}
                      className="w-full bg-[#1a2533] text-white placeholder-gray-500 border border-transparent focus:border-[#cca66b] focus:bg-[#1a2533]/90 rounded-xl px-5 py-4 outline-none transition-all text-sm font-medium resize-none"
                   ></textarea>
                   <div className="flex justify-end pt-4">
                      <button 
                        type="button" 
                        className="bg-[#cca66b] hover:bg-[#b8955d] text-white font-bold tracking-widest text-[13px] uppercase px-8 py-4 rounded-xl flex items-center transition-all duration-300 group shadow-[0_4px_20px_rgba(204,166,107,0.3)] hover:shadow-[0_4px_25px_rgba(204,166,107,0.5)] transform hover:-translate-y-1"
                      >
                         <span>{isEn ? 'Create Appointment' : 'Randevu Oluştur'}</span>
                         <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                         </svg>
                      </button>
                   </div>
                </form>
             </div>
             
          </div>
       </div>
    </section>
  );
}
