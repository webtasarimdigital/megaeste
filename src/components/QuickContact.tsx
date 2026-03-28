import React from 'react';


export default function QuickContact() {
  return (
    <div className="w-full bg-transparent relative z-10 pb-16 px-4 lg:px-10 xl:px-24 mt-6 lg:mt-8">
      {/* Container aligned with CategoryButtons */}
      <div className="w-full mx-auto">
        
        {/* User requested form layout from image2.png */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-12 relative z-10 w-full max-w-4xl mx-auto">
          <div className="mb-10">
            <h2 className="text-[28px] md:text-[34px] font-black text-[#2c4c7c] tracking-tight mb-3">
              Bize Yazın
            </h2>
            <p className="text-[#6a7989] text-[15px] font-medium leading-relaxed max-w-2xl">
              Size daha hızlı yardımcı olabilmemiz için iletişim bilgilerimizden bize ulaşabilir veya sizi arayabilmemiz için formu doldurabilirsiniz.
            </p>
          </div>
          
          <form className="flex flex-col xl:flex-row xl:items-end gap-3 xl:gap-4 w-full">
            <div className="w-full xl:w-1/5 flex flex-col space-y-1.5">
              <label className="text-[10px] font-bold text-[#8fa0b3] uppercase tracking-wider pl-1">AD SOYAD</label>
              <input 
                type="text" 
                placeholder="İsminiz" 
                className="w-full border-2 border-[#eef2f6] rounded-[12px] px-4 py-3 outline-none focus:border-[#427bdf] transition-colors text-[13px] text-[#2c4c7c] bg-[#f8fafc] focus:bg-white placeholder-[#aab8c5]"
              />
            </div>
            
            <div className="w-full xl:w-1/5 flex flex-col space-y-1.5">
              <label className="text-[10px] font-bold text-[#8fa0b3] uppercase tracking-wider pl-1">E-POSTA</label>
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="w-full border-2 border-[#eef2f6] rounded-[12px] px-4 py-3 outline-none focus:border-[#427bdf] transition-colors text-[13px] text-[#2c4c7c] bg-[#f8fafc] focus:bg-white placeholder-[#aab8c5]"
              />
            </div>

            <div className="w-full xl:w-1/5 flex flex-col space-y-1.5">
              <label className="text-[10px] font-bold text-[#8fa0b3] uppercase tracking-wider pl-1">TELEFON</label>
              <input 
                type="tel" 
                placeholder="Telefon numaranız" 
                className="w-full border-2 border-[#eef2f6] rounded-[12px] px-4 py-3 outline-none focus:border-[#427bdf] transition-colors text-[13px] text-[#2c4c7c] bg-[#f8fafc] focus:bg-white placeholder-[#aab8c5]"
              />
            </div>

            <div className="w-full xl:w-[25%] flex flex-col space-y-1.5">
              <label className="text-[10px] font-bold text-[#8fa0b3] uppercase tracking-wider pl-1">MESAJINIZ</label>
              <input 
                type="text"
                placeholder="Kısa mesajınız..." 
                className="w-full border-2 border-[#eef2f6] rounded-[12px] px-4 py-3 outline-none focus:border-[#427bdf] transition-colors text-[13px] text-[#2c4c7c] bg-[#f8fafc] focus:bg-white placeholder-[#aab8c5]"
              />
            </div>
            
            <div className="w-full xl:w-auto flex justify-center xl:justify-start">
              <button 
                type="button" 
                className="w-full xl:w-auto bg-[#2c4c7c] text-white font-bold py-3 px-8 rounded-[12px] hover:bg-[#1e3a5f] transition-colors text-[13px] tracking-wide whitespace-nowrap h-[46px]"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>


      </div>
    </div>
  );
}
