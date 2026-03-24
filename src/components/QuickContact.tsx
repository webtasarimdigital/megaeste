import React from 'react';
import { FaMapMarkerAlt, FaEnvelopeOpenText, FaRegClock, FaRoute } from 'react-icons/fa';

export default function QuickContact() {
  return (
    <div className="w-full bg-transparent relative z-20 pb-16">
      {/* Container restricted to match the exact alignment in screenshot */}
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
        
        {/* White Card overlapping the columns below */}
        <div className="bg-white rounded-lg shadow-[0_5px_30px_rgba(0,0,0,0.08)] p-6 lg:p-10 relative z-10 mb-[-70px]">
          <h2 className="text-[20px] font-bold text-gray-800 border-b border-gray-200 pb-3 mb-6 uppercase tracking-wide">
            HIZLI RANDEVU <span className="text-[#F2B328]">FORMU</span>
          </h2>
          
          <form className="flex flex-col space-y-5">
            <div className="flex flex-col md:flex-row gap-6">
              <input 
                type="text" 
                placeholder="Adınız Soyadınız" 
                className="w-full border border-gray-200 rounded-[4px] px-4 py-3.5 outline-none focus:border-[#F2B328] transition-colors text-sm text-gray-700"
              />
              <div className="w-full flex items-center border border-gray-200 rounded-[4px] px-4 py-3.5 bg-white focus-within:border-[#F2B328] transition-colors relative">
                <div className="flex items-center space-x-2 mr-3 border-r border-gray-200 pr-3">
                   {/* Fake Turkish Flag Icon */}
                   <div className="w-5 h-3.5 bg-[#E30A17] relative flex justify-center items-center overflow-hidden">
                     <span className="text-white text-[8px] leading-none absolute left-0.5">☪</span>
                   </div>
                   <span className="text-gray-500 text-sm font-medium">▼ +90</span>
                </div>
                <input 
                  type="tel" 
                  placeholder="Telefon" 
                  className="w-full outline-none bg-transparent text-sm text-gray-700 hover:border-transparent focus:border-transparent focus:ring-0"
                  style={{ border: 'none', boxShadow: 'none' }}
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2 pt-1">
              <input type="checkbox" id="kvkk" className="w-4 h-4 text-[#F2B328] border-gray-300 rounded focus:ring-[#F2B328]" />
              <label htmlFor="kvkk" className="text-sm text-gray-500 cursor-pointer select-none">
                <span className="text-[#F2B328] font-bold hover:underline">KVKK metnini</span> okudum, kabul ediyorum.
              </label>
            </div>
            
            <div className="pt-2">
              <button 
                type="button" 
                className="bg-[#F2B328] text-white font-bold py-3 px-12 rounded-[4px] hover:bg-[#d89f23] transition-colors text-[15px] tracking-wide"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>

        {/* 3 Columns Section */}
        <div className="w-full flex flex-col lg:flex-row shadow-lg pt-[70px] rounded-b-lg overflow-hidden">
          
          {/* Column 1: Konum */}
          <div className="flex-1 bg-[#363f46] text-white p-10 lg:p-14 flex flex-col relative overflow-hidden group">
            <FaMapMarkerAlt className="absolute -right-8 -bottom-12 text-[180px] text-white opacity-[0.03] -rotate-12 group-hover:scale-110 transition-transform duration-500" />
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl opacity-90"><FaMapMarkerAlt /></div>
                <h3 className="text-xl font-bold tracking-wide">Konum</h3>
              </div>
              <p className="text-[13px] text-gray-300 mb-8 leading-relaxed h-12 pr-4 font-light">
                İstiklal, Gamsız Sk. No:3 Ümraniye/İstanbul
              </p>
              <button className="flex items-center justify-center space-x-3 border border-white/30 hover:bg-white hover:text-[#363f46] transition-colors py-2.5 px-6 rounded-[2px] w-max mt-auto">
                <FaMapMarkerAlt className="text-sm" />
                <span className="font-semibold text-[13px] tracking-wider">Yol Tarifi</span>
              </button>
            </div>
          </div>

          {/* Column 2: Bize Yazın */}
          <div className="flex-1 bg-[#6a7989] text-white p-10 lg:p-14 flex flex-col relative overflow-hidden group border-y lg:border-y-0 lg:border-x border-white/5">
            <FaEnvelopeOpenText className="absolute -right-6 -bottom-6 text-[160px] text-white opacity-[0.03] -rotate-12 group-hover:scale-110 transition-transform duration-500" />
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl opacity-90"><FaEnvelopeOpenText /></div>
                <h3 className="text-xl font-bold tracking-wide">Bize Yazın</h3>
              </div>
              <p className="text-[13px] text-gray-100 mb-8 leading-relaxed h-12 font-light">
                Bizimle İletişime Geçin Temsilcimiz En Kısa Sürede Tarafınıza Dönüş Sağlayacaktır
              </p>
              <button className="flex items-center justify-center space-x-2 border border-white/30 hover:bg-white hover:text-[#6a7989] transition-colors py-2.5 px-8 rounded-[2px] w-max mt-auto">
                <span className="font-semibold text-[13px] tracking-wider">İletişim</span>
              </button>
            </div>
          </div>

          {/* Column 3: Çalışma Saatleri */}
          <div className="flex-1 bg-[#f4b329] text-white p-10 lg:p-14 flex flex-col relative overflow-hidden group">
            <FaRegClock className="absolute -right-8 -bottom-10 text-[180px] text-white opacity-[0.05] -rotate-12 group-hover:scale-110 transition-transform duration-500" />
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl opacity-90"><FaRegClock /></div>
                <h3 className="text-xl font-bold tracking-wide">Çalışma Saatleri</h3>
              </div>
              <div className="text-[13px] text-white mb-8 leading-relaxed h-12 font-medium tracking-wide">
                <p>Pzt - Cum: 09:00 - 18:00</p>
                <p className="mt-1">Cmt: 09:00 - 14:00</p>
              </div>
              <button className="flex items-center justify-center space-x-2 border border-white/40 hover:bg-white hover:text-[#f4b329] transition-colors py-2.5 px-8 rounded-[2px] w-max mt-auto">
                <span className="font-bold text-[13px] tracking-wider">Şimdi Ara</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
