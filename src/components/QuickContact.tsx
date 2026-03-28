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
          
          <form className="flex flex-col space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full flex flex-col space-y-2">
                <label className="text-[11px] font-bold text-[#8fa0b3] uppercase tracking-wider pl-1">AD SOYAD</label>
                <input 
                  type="text" 
                  placeholder="İsminiz" 
                  className="w-full border-2 border-[#eef2f6] rounded-[14px] px-5 py-4 outline-none focus:border-[#427bdf] transition-colors text-[15px] text-[#2c4c7c] bg-[#f8fafc] focus:bg-white placeholder-[#aab8c5]"
                />
              </div>
              <div className="w-full flex flex-col space-y-2">
                <label className="text-[11px] font-bold text-[#8fa0b3] uppercase tracking-wider pl-1">E-POSTA</label>
                <input 
                  type="email" 
                  placeholder="E-posta adresiniz" 
                  className="w-full border-2 border-[#eef2f6] rounded-[14px] px-5 py-4 outline-none focus:border-[#427bdf] transition-colors text-[15px] text-[#2c4c7c] bg-[#f8fafc] focus:bg-white placeholder-[#aab8c5]"
                />
              </div>
            </div>

            <div className="w-full flex flex-col space-y-2">
              <label className="text-[11px] font-bold text-[#8fa0b3] uppercase tracking-wider pl-1">TELEFON</label>
              <input 
                type="tel" 
                placeholder="Telefon numaranız" 
                className="w-full border-2 border-[#eef2f6] rounded-[14px] px-5 py-4 outline-none focus:border-[#427bdf] transition-colors text-[15px] text-[#2c4c7c] bg-[#f8fafc] focus:bg-white placeholder-[#aab8c5]"
              />
            </div>

            <div className="w-full flex flex-col space-y-2">
              <label className="text-[11px] font-bold text-[#8fa0b3] uppercase tracking-wider pl-1">MESAJINIZ</label>
              <textarea 
                placeholder="Mesajınızı buraya yazın..." 
                rows={4}
                className="w-full border-2 border-[#eef2f6] rounded-[14px] px-5 py-4 outline-none focus:border-[#427bdf] transition-colors text-[15px] text-[#2c4c7c] bg-[#f8fafc] focus:bg-white placeholder-[#aab8c5] resize-y"
              ></textarea>
            </div>
            
            <div className="pt-4 flex justify-start">
              <button 
                type="button" 
                className="bg-[#2c4c7c] text-white font-bold py-4 px-12 rounded-[12px] hover:bg-[#1e3a5f] transition-colors text-[15px] tracking-wide"
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
