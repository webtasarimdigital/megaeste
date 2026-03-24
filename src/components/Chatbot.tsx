'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

const RESPONSES = [
  {
    regex: /(merhaba|selam|mrb|iyi günler|slm)/i,
    text: "Merhaba! Megaeste Kliniğine hoş geldiniz. Size nasıl yardımcı olabilirim? (Randevu, Fiyat Sorgulama, Konum vb.)"
  },
  {
    regex: /(konum|nerede|adres|yeriniz|nasıl gelirim|harita)/i,
    text: "Kliniğimiz İstanbul Ümraniye'dedir. \nAdres: İstiklal, Gamsız Sk. No:3.\nDetaylı harita ve yol tarifi için sitemizin alt kısmındaki Konum alanına tıklayabilir veya bizi arayabilirsiniz."
  },
  {
    regex: /(randevu|muayene|görüşme)/i,
    text: "Müsait gününüze randevu oluşturabilmemiz için; Adınızı, Soyadınızı ve Telefon numaranızı yazar mısınız? Uzman destek ekibimiz sizi aynı gün içinde arayarak planlama yapacaktır."
  },
  {
    regex: /(fiyat|fiyatlar|ücret|ne kadar|kaça|maliyet)/i,
    text: "Fiyatlarımız kişisel estetik analizinize ve greft / materyal oranına göre değişmektedir. Ortalama veya net bir fiyat bilgisi almak için lütfen iletişim bölümünden WhatsApp hattımıza fotoğraflarınızı gönderin."
  },
  {
    regex: /(saç ekimi|saç|ekim|greft|dökülme)/i,
    text: "megaeste olarak saç ekiminde kalıcı ve ağrısız yeni jenerasyon DHI/FUE operasyonları uyguluyoruz. Sık ve doğal bir görünüm hedeflenir. Ücretsiz donör analiziniz için lütfen iletişim numaranızı bırakın."
  },
  {
    regex: /(telefon|numara|iletişim|whatsapp|wp)/i,
    text: "Aktif İletişim Hattımız: +90 555 123 4567\nPazartesi - Cuma: 09:00 - 18:00\nCumartesi: 09:00 - 14:00 saatleri aralığında bize ulaşabilirsiniz."
  },
  {
    regex: /[0-9]{10}|05[0-9]{9}/i,
    text: "Teşekkürler, telefon numaranızı ve iletişim bilginizi sistemimize şifreli olarak kaydettim ✅. Hasta danışmanımız müsait olduğu an bu numaradan size dönüş sağlayacaktır."
  }
];

const DEFAULT_RESPONSE = "Bu sorduğunuz detayı şu an algılayamadım. Size net bir sağlık veya fiyat bilgisi verebilmemiz için lütfen aşağıdaki kutucuğa sadece 'iletişim', 'randevu', 'fiyat' veya 'konum' yazın ya da telefon numaranızı bırakın.";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Merhaba! Ben Megaeste Asistan 👩‍⚕️. Randevu kaydı, fiyat bilgisi, tedavi yöntemleri veya konum hakkında merak ettiklerinizi sorabilirsiniz.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText("");
    setIsTyping(true);

    // Simulate AI thinking delay based on message length roughly, but fast
    setTimeout(() => {
      let botResponse = DEFAULT_RESPONSE;
      
      // Basic smart keyword matching
      for (const responseDef of RESPONSES) {
        if (responseDef.regex.test(currentInput)) {
          botResponse = responseDef.text;
          break;
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500); // 1-1.5s typing delay simulation
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-28 lg:bottom-10 right-4 lg:right-6 z-[60] bg-[#1a202c] text-[#F2B328] p-4 lg:p-5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white/20 ${isOpen ? 'hidden' : 'flex items-center justify-center'}`}
      >
        <FaRobot className="text-3xl lg:text-4xl" />
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[11px] font-black px-2 py-0.5 rounded-full animate-bounce border-2 border-[#1a202c]">
          1
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-0 lg:bottom-10 right-0 lg:right-10 z-[70] w-full lg:w-[400px] h-[85vh] lg:h-[600px] bg-white lg:rounded-[1.5rem] shadow-[0_10px_50px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden border border-gray-100 font-sans">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#171e29] to-[#2a3441] text-white px-5 py-4 flex justify-between items-center shadow-lg z-10 relative">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex justify-center items-center relative border border-white/20">
                <FaRobot className="text-2xl text-[#F2B328]" />
                <div className="w-3 h-3 bg-green-500 rounded-full absolute bottom-0 right-0 ring-2 ring-[#2a3441]"></div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-extrabold text-[16px] tracking-wide">Megaeste Asistan</h3>
                <div className="flex items-center mt-0.5 space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-[11px] text-gray-300 font-medium tracking-wider">Çevrimiçi Yapay Zeka</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/50 hover:text-white p-2 transition-colors rounded-full hover:bg-white/10"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto px-5 py-6 bg-[#f7f8f9] flex flex-col space-y-5">
            <div className="text-center mb-2">
              <span className="text-[10px] bg-gray-200/60 text-gray-500 px-3 py-1 rounded-full font-bold uppercase tracking-wider">Bugün</span>
            </div>
            
            {messages.map((msg) => (
              <div key={msg.id} className={`flex w-full ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-[#373f47] text-[#F2B328] flex items-center justify-center mr-3 mt-1 flex-shrink-0 shadow-sm">
                    <FaRobot className="text-[13px]" />
                  </div>
                )}
                
                <div className={`max-w-[80%] px-4 py-3 text-[14px] leading-relaxed relative shadow-sm ${
                  msg.sender === 'bot' 
                    ? 'bg-white text-gray-800 rounded-2xl rounded-tl-sm border border-gray-100' 
                    : 'bg-[#C6A87E] text-white rounded-2xl rounded-tr-sm font-medium'
                }`}>
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span className={`text-[9px] mt-1.5 block text-right font-bold tracking-wider ${msg.sender === 'bot' ? 'text-gray-400' : 'text-white/80'}`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex w-full justify-start items-center">
                <div className="w-8 h-8 rounded-full bg-[#373f47] text-[#F2B328] flex items-center justify-center mr-3 flex-shrink-0 shadow-sm">
                  <FaRobot className="text-[13px]" />
                </div>
                <div className="bg-white px-4 py-3.5 rounded-2xl rounded-tl-sm border border-gray-100 flex space-x-1.5 shadow-sm">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} className="h-2" />
          </div>

          {/* Quick Reply Chips */}
          <div className="px-5 py-3 bg-[#f7f8f9] flex space-x-2.5 overflow-x-auto hide-scrollbar border-b border-gray-200/50">
             <button onClick={() => setInputText("Randevu almak istiyorum")} className="flex-shrink-0 px-4 py-1.5 bg-white border border-[#C6A87E] text-[#C6A87E] text-[12px] font-bold rounded-full shadow-sm hover:bg-[#C6A87E] hover:text-white hover:-translate-y-0.5 transition-all duration-200">Randevu Al</button>
             <button onClick={() => setInputText("Fiyat bilgisi nedir?")} className="flex-shrink-0 px-4 py-1.5 bg-white border border-[#C6A87E] text-[#C6A87E] text-[12px] font-bold rounded-full shadow-sm hover:bg-[#C6A87E] hover:text-white hover:-translate-y-0.5 transition-all duration-200">Fiyat Sor</button>
             <button onClick={() => setInputText("Adresiniz nerede?")} className="flex-shrink-0 px-4 py-1.5 bg-white border border-[#C6A87E] text-[#C6A87E] text-[12px] font-bold rounded-full shadow-sm hover:bg-[#C6A87E] hover:text-white hover:-translate-y-0.5 transition-all duration-200">Konum İste</button>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white flex items-end shadow-[0_-5px_20px_rgba(0,0,0,0.02)]">
            <form onSubmit={handleSend} className="w-full relative flex items-center bg-[#f4f6f8] rounded-[24px] border border-gray-200 focus-within:border-[#C6A87E] focus-within:ring-2 focus-within:ring-[#C6A87E]/20 transition-all overflow-hidden pl-5 pr-2 py-2">
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Mesajınızı yazın..."
                className="w-full bg-transparent outline-none text-[15px] font-medium text-gray-700 placeholder-gray-400 py-1.5"
                disabled={isTyping}
              />
              <button 
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 flex-shrink-0 shadow-sm ${inputText.trim() && !isTyping ? 'bg-[#C6A87E] text-white hover:bg-[#b09367] hover:scale-105' : 'bg-gray-200 text-gray-400 opacity-50 cursor-not-allowed'}`}
              >
                <FaPaperPlane className="text-sm ml-0.5" />
              </button>
            </form>
          </div>

        </div>
      )}
    </>
  );
}
