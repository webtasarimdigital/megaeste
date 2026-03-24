import React from 'react';
import { FaMapMarkerAlt, FaEnvelopeOpenText, FaRegClock } from 'react-icons/fa';

export default function QuickContact() {
  return (
    <div className="w-full bg-transparent relative z-10 pb-16 px-4 lg:px-10 xl:px-24 mt-6 lg:mt-8">
      {/* Container aligned with CategoryButtons */}
      <div className="w-full mx-auto">
        
        {/* White Card overlapping the columns below */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-12 relative z-10 mb-[-60px] border-[4px] border-white">
          <h2 className="text-[20px] font-black text-gray-800 border-b-2 border-gray-100 pb-4 mb-8 uppercase tracking-wider flex items-center">
            HIZLI RANDEVU <span className="text-[#427bdf] ml-2">FORMU</span>
          </h2>
          
          <form className="flex flex-col space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <input 
                type="text" 
                placeholder="Adınız Soyadınız" 
                className="w-full border-2 border-gray-100 rounded-xl px-5 py-4 outline-none focus:border-[#427bdf] transition-all text-[15px] text-gray-700 bg-gray-50/50 focus:bg-white shadow-sm"
              />
              <div className="w-full flex items-center border-2 border-gray-100 rounded-xl px-4 py-4 bg-gray-50/50 focus-within:bg-white focus-within:border-[#427bdf] transition-all relative shadow-sm">
                <div className="flex items-center space-x-2 mr-3 border-r-2 border-gray-200 pr-3">
                   {/* Fake Turkish Flag Icon */}
                   <div className="w-6 h-4 bg-[#E30A17] relative flex justify-center items-center rounded-[2px] overflow-hidden shadow-sm">
                     <span className="text-white text-[9px] leading-none absolute left-0.5">☪</span>
                   </div>
                   <span className="text-gray-600 text-[15px] font-bold">▼ +90</span>
                </div>
                <input 
                  type="tel" 
                  placeholder="Telefon" 
                  className="w-full outline-none bg-transparent text-[15px] text-gray-700 hover:border-transparent focus:border-transparent focus:ring-0 font-medium tracking-wide"
                  style={{ border: 'none', boxShadow: 'none' }}
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-3 pt-2">
              <div className="relative flex items-center">
                <input type="checkbox" id="kvkk" className="peer w-5 h-5 text-[#427bdf] border-2 border-gray-300 rounded-[4px] focus:ring-[#427bdf] cursor-pointer transition-colors checked:border-[#427bdf]" />
              </div>
              <label htmlFor="kvkk" className="text-[14px] text-gray-500 cursor-pointer select-none">
                <span className="text-[#427bdf] font-bold hover:underline transition-colors">KVKK metnini</span> okudum, kabul ediyorum.
              </label>
            </div>
            
            <div className="pt-2 flex justify-start">
              <button 
                type="button" 
                className="bg-gradient-to-r from-[#427bdf] to-[#2b5ebf] text-white font-bold py-4 px-14 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all text-[16px] tracking-wide shadow-md"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>

        {/* 3 Columns Section */}
        <div className="w-full flex flex-col lg:flex-row shadow-2xl pt-[80px] rounded-b-3xl overflow-hidden border-2 border-white bg-white">
          
          {/* Column 1: Konum */}
          <div className="flex-1 bg-gradient-to-br from-[#2c4c7c] to-[#1e3a5f] text-white p-10 lg:p-12 flex flex-col relative overflow-hidden group">
            <FaMapMarkerAlt className="absolute -right-8 -bottom-12 text-[180px] text-white opacity-[0.03] -rotate-12 group-hover:scale-110 group-hover:opacity-[0.05] transition-all duration-700" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-[22px] font-black tracking-wide drop-shadow-sm">Konum</h3>
                <div className="text-4xl opacity-80 group-hover:scale-110 transition-transform duration-500 drop-shadow-md"><FaMapMarkerAlt /></div>
              </div>
              <p className="text-[14px] text-gray-300 mb-10 leading-relaxed font-light drop-shadow-sm pr-4">
                İstiklal, Gamsız Sk. No:3 Ümraniye/İstanbul
              </p>
              <button className="flex items-center justify-center space-x-3 bg-white/10 border border-white/20 hover:bg-white hover:text-[#1e3a5f] transition-all duration-300 py-3 px-8 rounded-lg w-auto mt-auto backdrop-blur-sm group-hover:shadow-lg self-start">
                <FaMapMarkerAlt className="text-sm" />
                <span className="font-bold text-[14px] tracking-wider">Yol Tarifi</span>
              </button>
            </div>
          </div>

          {/* Column 2: Bize Yazın */}
          <div className="flex-1 bg-gradient-to-br from-[#7c8d9b] to-[#6a7989] text-white p-10 lg:p-12 flex flex-col relative overflow-hidden group lg:border-x border-white/10">
            <FaEnvelopeOpenText className="absolute -right-6 -bottom-6 text-[160px] text-white opacity-[0.03] -rotate-12 group-hover:scale-110 group-hover:opacity-[0.05] transition-all duration-700" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-[22px] font-black tracking-wide drop-shadow-sm">Bize Yazın</h3>
                <div className="text-4xl opacity-80 group-hover:scale-110 transition-transform duration-500 drop-shadow-md"><FaEnvelopeOpenText /></div>
              </div>
              <p className="text-[14px] text-gray-100 mb-10 leading-relaxed font-light drop-shadow-sm">
                Bizimle iletişime geçin, temsilcimiz en kısa sürede tarafınıza dönüş sağlayacaktır.
              </p>
              <button className="flex items-center justify-center space-x-3 bg-white/10 border border-white/20 hover:bg-white hover:text-[#6a7989] transition-all duration-300 py-3 px-8 rounded-lg w-max mt-auto backdrop-blur-sm group-hover:shadow-lg self-start">
                <span className="font-bold text-[14px] tracking-wider">İletişim Formu</span>
              </button>
            </div>
          </div>

          {/* Column 3: Çalışma Saatleri */}
          <div className="flex-1 bg-gradient-to-br from-[#f4b329] to-[#dfa120] text-white p-10 lg:p-12 flex flex-col relative overflow-hidden group">
            <FaRegClock className="absolute -right-8 -bottom-10 text-[180px] text-white opacity-[0.05] -rotate-12 group-hover:scale-110 group-hover:opacity-[0.08] transition-all duration-700" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-[22px] font-black tracking-wide drop-shadow-sm">Çalışma Saatleri</h3>
                <div className="text-4xl opacity-80 group-hover:scale-110 transition-transform duration-500 drop-shadow-md"><FaRegClock /></div>
              </div>
              <div className="text-[14px] text-white mb-10 leading-relaxed font-medium tracking-wide drop-shadow-sm space-y-3">
                <p className="flex justify-between border-b border-white/20 pb-3"><span>Pzt - Cum:</span> <span>09:00 - 18:00</span></p>
                <p className="flex justify-between pt-1"><span>Cmt:</span> <span>09:00 - 14:00</span></p>
              </div>
              <button className="flex items-center justify-center space-x-3 bg-white/10 border border-white/20 hover:bg-white hover:text-[#dfa120] transition-all duration-300 py-3 px-8 rounded-lg w-max mt-auto backdrop-blur-sm group-hover:shadow-lg self-start">
                <span className="font-bold text-[14px] tracking-wider">Şimdi Ara</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
