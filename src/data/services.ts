import { memeServices } from './pl_meme';
import { yuzServices } from './pl_yuz';
import { vucutServices } from './pl_vucut';

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceContent {
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  heroDescription: string;
  longDescription: string;
  process: ServiceProcess[];
  faq: ServiceFAQ[];
  seoTitle: string;
  seoDescription: string;
  relatedSlugs: string[];
}

export interface Service {
  id: string;
  image: string;
  tr: ServiceContent;
  en: ServiceContent;
}

export const services: Service[] = [
  {
    id: 'dhi-sac-ekimi',
    image: '/images/services/dhi-sac-klinik.webp',
    tr: {
      title: 'DHI Saç Ekimi',
      slug: 'dhi-sac-ekimi',
      category: 'Saç Ekimi Tedavileri',
      categorySlug: 'sac-ekimi',
      heroDescription: 'Kanal açmadan, doğrudan implantasyon (Choi Pen) yöntemiyle gerçekleştirilen, en sık ve en doğal görünümü sunan premium saç ekimi tekniği.',
      longDescription: `<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#4f6f8f] rounded-full"></span> DHI Saç Ekimi Nedir?
</h2>
<p class="mb-8 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">DHI (Direct Hair Implantation - Doğrudan Saç Ekimi), günümüzde uygulanabilen en gelişmiş ve en konforlu saç ekimi yöntemidir. Geleneksel yöntemlerde kafa derisinde önce bistüri ile kesiler (kanallar) açılırken, DHI tekniğinde özel medikal kalemler <strong class="text-[#4f6f8f]">"Choi Pen"</strong> kullanılır. Kökler kalemin içine yerleştirilir ve tek bir hamlede hem kanal açılır hem de saç kökü deriye yerleştirilir.</p>

<div class="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden my-10 shadow-xl group">
  <img src="/images/gorselsac.webp" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1500ms]" alt="DHI Saç Ekimi Choi Pen" />
  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
    <span class="text-white font-bold text-lg tracking-wide uppercase">Tıraşsız Saç Ektirme Konforu</span>
  </div>
</div>

<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#4f6f8f] rounded-full"></span> Neden DHI Yöntemini Tercih Etmelisiniz?
</h2>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
  <div class="group bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
    <div class="w-12 h-12 bg-[#4f6f8f]/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
      <span class="text-[#4f6f8f] text-2xl">🌱</span>
    </div>
    <h3 class="font-bold text-[#1e3a5f] mb-2">Maksimum Sıklık</h3>
    <p class="text-xs text-gray-600">Santimetrekareye çok daha fazla kök ekilebilir. Gür bir görünüm elde edilir.</p>
  </div>
  <div class="group bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
    <div class="w-12 h-12 bg-[#4f6f8f]/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
      <span class="text-[#4f6f8f] text-2xl">✂️</span>
    </div>
    <h3 class="font-bold text-[#1e3a5f] mb-2">Tıraşsız İmkan</h3>
    <p class="text-xs text-gray-600">Özellikle kadınlarda ve uzun saçlı erkeklerde, saçları tamamen kazıtmaya gerek kalmaz.</p>
  </div>
  <div class="group bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
    <div class="w-12 h-12 bg-[#4f6f8f]/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
      <span class="text-[#4f6f8f] text-2xl">⚡</span>
    </div>
    <h3 class="font-bold text-[#1e3a5f] mb-2">Hızlı İyileşme</h3>
    <p class="text-xs text-gray-600">Kesi olmadığı için kanama yok denecek kadar azdır. Kabuklanma hızla dökülür.</p>
  </div>
  <div class="group bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
    <div class="w-12 h-12 bg-[#4f6f8f]/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
      <span class="text-[#4f6f8f] text-2xl">📏</span>
    </div>
    <h3 class="font-bold text-[#1e3a5f] mb-2">Kusursuz Açı</h3>
    <p class="text-xs text-gray-600">Kalem sayesinde her bir saç teline, kendi doğal çıkış yönü (açısı) %100 oranında verilebilir.</p>
  </div>
</div>

<div class="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] p-6 lg:p-8 rounded-2xl border-l-[6px] border-[#4f6f8f] shadow-sm hover:shadow-xl transition-shadow duration-500 my-8 overflow-hidden relative">
  <div class="absolute -right-10 -top-10 text-[150px] opacity-5">💉</div>
  <p class="font-black text-[#1e3a5f] text-xl mb-3 flex items-center gap-2">Painless (İğnesiz) Anestezi Konforu</p>
  <p class="text-gray-600 leading-relaxed font-medium">Megaeste'de klasik şırınga iğneli lokal anesteziyi kullanmıyoruz. DHI işleminizde lokal anestezi, "Basınçlı Püskürtme" teknolojisiyle cilt altına iğnesiz şekilde verilir. Böylece iğne fobisi olan hastalarımız bile sıfır acı ve maksimum konforla işlemini tamamlar.</p>
</div>`,
      process: [
        { step: 1, title: 'Konsültasyon ve Analiz', description: 'Uzman hekimimiz tarafından saç ve saçlı deri analizi yapılır. Donör alan kapasitesi değerlendirilir.' },
        { step: 2, title: 'Ön Saç Çizgisi Tasarımı', description: 'Yüz yapınıza ve beklentilerinize uygun doğal ön saç çizgisi belirlenir.' },
        { step: 3, title: 'Lokal Anestezi', description: 'Konfor odaklı lokal anestezi uygulaması ile ağrısız bir işlem süreci sağlanır.' },
        { step: 4, title: 'Greft Toplama', description: 'Donör bölgeden mikro motor ile greftler tek tek ve hassas şekilde çıkarılır.' },
        { step: 5, title: 'DHI İmplantasyon', description: 'Choi Pen ile greftler doğal açı ve yönde doğrudan ekilir.' },
        { step: 6, title: 'Kontrol ve Bakım', description: 'İşlem sonrası bakım protokolü uygulanır ve düzenli kontroller planlanır.' },
      ],
      faq: [
        { q: 'DHI saç ekimi işlemi ne kadar sürer?', a: 'İşlem hacmine göre ortalama 6-8 saat arasında tamamlanmaktadır.' },
        { q: 'DHI tekniğinde tıraş olmak zorunlu mudur?', a: 'DHI tekniği, tıraşsız saç ekimi seçeneği de sunmakla birlikte, ön muayene ve analiz sonrasında hekiminizle birlikte karar verilmektedir.' },
        { q: 'Uygulama sırasında ağrı hissedilir mi?', a: 'İşlem öncesinde lokal anestezi uygulandığından dolayı prosedür genel olarak hasta açısından konforlu geçmektedir.' },
        { q: 'Günlük yaşantıma ne zaman dönebilirim?', a: 'Uygulamadan birkaç gün sonra klinik istirahat tamamlanarak normal yaşantınıza dönebilirsiniz, ancak ağır fiziksel aktivitelerden hekiminizin belirttiği süre boyunca kaçınılmalıdır.' },
        { q: 'Ekilen saçların çıkış süreci nasıldır?', a: 'Yaklaşık 3. aydan itibaren saç gelişimi gözlenmeye başlar, fiziksel iyileşme sürecinin ve kalıcı formun tamamlanması ortalama 10-12 ayı bulmaktadır.' },
      ],
      seoTitle: 'DHI Saç Ekimi | Megaeste Klinik',
      seoDescription: 'DHI saç ekimi ile doğal, sık ve kalıcı sonuçlar. Choi Pen teknolojisi ile ağrısız saç ekimi uygulaması. Megaeste uzman kadrosu.',
      relatedSlugs: ['safir-sac-ekimi', 'sac-mezoterapisi'],
    },
    en: {
      title: 'DHI Hair Transplant',
      slug: 'dhi-hair-transplant',
      category: 'Hair Transplant Treatments',
      categorySlug: 'hair-transplant',
      heroDescription: 'Advanced hair transplantation with Choi Pen technology — direct implantation without canal opening.',
      longDescription: `DHI (Direct Hair Implantation) is a next-generation hair transplant technique performed using a specially designed Choi Pen (implanter pen). In this method, grafts are extracted one by one from the donor area and implanted directly without the need for canal opening.

This technique minimizes the time grafts spend outside the body, preserving stem cell viability. The DHI method allows for denser planting, especially achieving natural and aesthetic results in the front hairline design.

At Megaeste clinic, DHI hair transplant is performed by our experienced specialist team in a sterile environment with advanced technology equipment. A personalized transplant plan is prepared for each patient, and implantation is carried out at natural hair angles.`,
      process: [
        { step: 1, title: 'Consultation & Analysis', description: 'Hair and scalp analysis by our specialist physician. Donor area capacity is evaluated.' },
        { step: 2, title: 'Hairline Design', description: 'A natural front hairline is determined according to your facial structure and expectations.' },
        { step: 3, title: 'Local Anesthesia', description: 'Comfort-focused local anesthesia ensures a painless procedure.' },
        { step: 4, title: 'Graft Extraction', description: 'Grafts are extracted one by one from the donor area with a micro motor.' },
        { step: 5, title: 'DHI Implantation', description: 'Grafts are directly implanted at natural angle and direction with the Choi Pen.' },
        { step: 6, title: 'Follow-up & Care', description: 'Post-procedure care protocol is applied and regular check-ups are scheduled.' },
      ],
      faq: [
        { q: 'How long does the DHI hair transplant take?', a: 'The procedure typically takes between 6 to 8 hours depending on the required graft volume.' },
        { q: 'Is shaving mandatory in the DHI technique?', a: 'DHI allows for unshaven hair transplant options, though this is determined after a professional examination and analysis.' },
        { q: 'Will I feel pain during the procedure?', a: 'Local anesthesia is administered prior to the procedure to ensure a comfortable experience for the patient.' },
        { q: 'When can I return to my daily life?', a: 'You can return to normal routines a few days after clinical rest, but heavy physical activities should be avoided for the duration advised by your physician.' },
        { q: 'What is the growth process of transplanted hair?', a: 'Hair progression is usually observed starting from the 3rd month, with full stabilization and growth taking an average of 10 to 12 months.' },
      ],
      seoTitle: 'DHI Hair Transplant | Megaeste Clinic',
      seoDescription: 'Natural, dense and permanent results with DHI hair transplant. Painless hair transplant with Choi Pen technology.',
      relatedSlugs: ['sapphire-hair-transplant', 'hair-mesotherapy'],
    },
  },
  {
    id: 'safir-sac-ekimi',
    image: '/images/services/safir-sac-klinik.webp',
    tr: {
      title: 'Safir Saç Ekimi',
      slug: 'safir-sac-ekimi',
      category: 'Saç Ekimi Tedavileri',
      categorySlug: 'sac-ekimi',
      heroDescription: 'Klasik metal uçlar yerine gerçek safir taşından üretilmiş uçlarla kanama olmadan gerçekleşen hızlı iyileşmeli saç ekim tekniği.',
      longDescription: `<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#4f6f8f] rounded-full"></span> Safir FUE Nedir?
</h2>
<p class="mb-8 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Safir FUE saç ekimi, dünyaca kabul görmüş FUE tekniğinin inovasyonla buluşmuş en teknolojik halidir. Klasik FUE yönteminde saç köklerinin yerleştirileceği delikler (kanallar) çelik 'slayt' bistürilerle açılırken; Safir FUE'de bu işlem değerli bir maden olan <strong class="text-[#4f6f8f]">Safir Taşından</strong> elde edilen, pürüzsüz ve antibakteriyel uçlarla yapılır.</p>

<div class="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden my-10 shadow-xl group">
  <img src="/images/services/safir-sac-ekimi.webp" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1500ms]" alt="Safir Uçlu Saç Ekimi" />
  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
    <span class="text-white font-bold text-lg tracking-wide uppercase">Dokulara Saygılı Teknoloji</span>
  </div>
</div>

<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#4f6f8f] rounded-full"></span> Neden Çelik Yerine Safir?
</h2>
<div class="space-y-4 mb-10">
  <div class="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div class="w-10 h-10 shrink-0 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mt-1">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
    </div>
    <div>
      <h3 class="font-bold text-[#1e3a5f] mb-1">Daha Az Doku Tahribatı (Sıfır İltihap)</h3>
      <p class="text-sm text-gray-600 leading-relaxed">Safir uçlar V şeklindedir ve yüzeyleri mikroskobik düzeyde bile pürüzsüzdür. Kesi yaparken dokuyu yırtmaz, hücreleri zedelemez. Antibakteriyel yapısı enfeksiyon riskini tamamen ortadan kaldırır.</p>
    </div>
  </div>
  <div class="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div class="w-10 h-10 shrink-0 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mt-1">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
    </div>
    <div>
      <h3 class="font-bold text-[#1e3a5f] mb-1">Daha Yüksek Greft Kapasitesi</h3>
      <p class="text-sm text-gray-600 leading-relaxed">İnce uçlar sayesinde birbirine çok daha yakın, mikro kanallar açılabilir. Bu sayede geniş açıklığı olan kellik vakalarında (Megalift), tek seansta 5000+ grefte kadar devasa ekimler yapılabilir.</p>
    </div>
  </div>
  <div class="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div class="w-10 h-10 shrink-0 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mt-1">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
    </div>
    <div>
      <h3 class="font-bold text-[#1e3a5f] mb-1">Mükemmel Tutunma ve Şişlik</h3>
      <p class="text-sm text-gray-600 leading-relaxed">Açılan kanallar, kök boyutuna birebir eşit olduğu için ekilen saç teli o kanala tam tabiriyle 'cuk' oturur, açısı bozulmaz. Ödem ve yüzde oluşacak inatçı şişlikler klasik yönteme göre %80 daha azdır.</p>
    </div>
  </div>
</div>

<div class="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] p-6 lg:p-8 rounded-2xl border-l-[6px] border-[#4f6f8f] shadow-sm hover:shadow-xl transition-shadow duration-500 my-8 overflow-hidden relative">
  <div class="absolute -right-10 -top-10 text-[150px] opacity-5">🏆</div>
  <p class="font-black text-[#1e3a5f] text-xl mb-3 flex items-center gap-2">Doğal Ön Çizgi Tasarımı</p>
  <p class="text-gray-600 leading-relaxed font-medium">Megaeste hekimleri, altın oran (Golden Ratio) kumpas cetvelleri ve lazer hizalama ekipmanlarıyla sadece dökülen alanları değil, yaşınıza, yüz hatlarınıza ve mimiklerinize birebir uyumlu <strong class="text-[#4f6f8f]">Sanatsal Ön Saç Çizgisi</strong> tasarlar.</p>
</div>`,
      process: [
        { step: 1, title: 'Konsültasyon', description: 'Detaylı saç analizi ve kişiye özel tedavi planı oluşturulur.' },
        { step: 2, title: 'Saç Çizgisi Belirleme', description: 'Doğal görünüm için optimum ön saç çizgisi tasarlanır.' },
        { step: 3, title: 'Anestezi', description: 'Lokal anestezi ile ağrısız işlem ortamı sağlanır.' },
        { step: 4, title: 'Greft Çıkarma', description: 'Mikro motor ile greftler hassasiyetle toplanır.' },
        { step: 5, title: 'Safir Kanal Açma', description: 'Safir uçlu bıçaklarla mikro kanallar açılır.' },
        { step: 6, title: 'Yerleştirme ve Bakım', description: 'Greftler yerleştirilir, bakım protokolü uygulanır.' },
      ],
      faq: [
        { q: 'Safir FUE tekniği nedir?', a: 'Klasik çelik bistüriler yerine özel safir madeninden üretilen uçların kullanıldığı, doku uyumu yüksek bir saç ekimi prosedürüdür.' },
        { q: 'İşlem ne kadar sürer?', a: 'Planlanan greft sayısına bağlı olarak tıbbi işlem ortalama 6-8 saat sürmektedir.' },
        { q: 'Uygulama sonrasında iz kalır mı?', a: 'Safir uçların yapısal inceliği sayesinde hedef bölgede minimum doku tahribatı oluşur ve görünür bir iz kalması beklenmez.' },
        { q: 'Ne zaman iş başı yapabilirim?', a: 'Klinik istirahat süreniz tamamlandıktan ortalama 3-4 gün sonra gündelik ve ofis rutininize dönebilirsiniz.' },
        { q: 'Saçlarım ne zaman uzamaya başlar?', a: 'Ekim sonrası ilk 1 ayda "şok dökülme" yaşanır, kalıcı saçların çıkması ise 3. ayla başlayıp 1 yıla yayılan bir süreçtir.' },
      ],
      seoTitle: 'Safir Saç Ekimi (FUE) | Megaeste Klinik',
      seoDescription: 'Safir FUE saç ekimi ile hızlı iyileşme, doğal sonuçlar. Safir uçlu bıçaklarla mikro kanal tekniği. Megaeste klinik.',
      relatedSlugs: ['dhi-sac-ekimi', 'sac-mezoterapisi'],
    },
    en: {
      title: 'Sapphire Hair Transplant',
      slug: 'sapphire-hair-transplant',
      category: 'Hair Transplant Treatments',
      categorySlug: 'hair-transplant',
      heroDescription: 'Hair transplant technique offering faster healing and natural results with micro channels opened by sapphire-tipped blades.',
      longDescription: `Sapphire FUE hair transplant is a method performed using special micro blades made from sapphire stone instead of traditional steel blades. Thanks to the sharp and smooth surface of sapphire blades, finer channels are opened, which accelerates the healing process.

Sapphire-tipped blades allow for denser planting by causing minimum damage to tissue. This results in denser and more natural-looking outcomes. The crusting process is shorter and the risk of scarring in the transplant area is reduced.

At Megaeste clinic, sapphire hair transplant is performed with FDA-approved equipment by our expert team.`,
      process: [
        { step: 1, title: 'Consultation', description: 'Detailed hair analysis and personalized treatment plan.' },
        { step: 2, title: 'Hairline Design', description: 'Optimal front hairline designed for a natural look.' },
        { step: 3, title: 'Anesthesia', description: 'Painless procedure environment with local anesthesia.' },
        { step: 4, title: 'Graft Extraction', description: 'Grafts collected precisely with micro motor.' },
        { step: 5, title: 'Sapphire Channel Opening', description: 'Micro channels opened with sapphire-tipped blades.' },
        { step: 6, title: 'Placement & Care', description: 'Grafts are placed, care protocol applied.' },
      ],
      faq: [
        { q: 'What is the Sapphire FUE technique?', a: 'It is a hair transplantation procedure with high tissue compatibility that uses blades made from special sapphire stone instead of classic steel bistouries.' },
        { q: 'How long does the operation take?', a: 'Depending on the planned number of grafts, the medical procedure usually takes an average of 6-8 hours.' },
        { q: 'Does it leave scars after application?', a: 'Due to the structural thinness of sapphire blades, minimal tissue alteration occurs, and visible scarring is not expected.' },
        { q: 'When can I return to work?', a: 'You can return to your daily or office routine approximately 3-4 days after your clinical rest period.' },
        { q: 'When will my hair start to grow?', a: 'A standard shedding phase occurs within the first month. The growth of permanent hair begins around the 3rd month and continues up to a year.' },
      ],
      seoTitle: 'Sapphire Hair Transplant (FUE) | Megaeste Clinic',
      seoDescription: 'Fast healing, natural results with Sapphire FUE hair transplant. Micro channel technique with sapphire-tipped blades.',
      relatedSlugs: ['dhi-hair-transplant', 'hair-mesotherapy'],
    },
  },
  {
    id: 'sac-mezoterapisi',
    image: '/images/services/sac-mezoterapisi-klinik.webp',
    tr: {
      title: 'Saç Mezoterapisi',
      slug: 'sac-mezoterapisi',
      category: 'Saç Ekimi Tedavileri',
      categorySlug: 'sac-ekimi',
      heroDescription: 'Saç dökülmesini anında durduran ve uyuyan saç köklerini canlandıran saç aşısı (mezoterapi) ve PRP uygulaması.',
      longDescription: `<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#4f6f8f] rounded-full"></span> Saç Mezoterapisi Ne İşe Yarar?
</h2>
<p class="mb-8 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Saç dökülmesinin en büyük sebebi kafa derisinin altındaki kan dolaşımının yavaşlaması ve köklerin vitaminsiz kalıp "uyku evresine" geçmesidir. Saç mezoterapisi, tamamen FDA onaylı; Biotin, Çinko, B vitamini kompleksi, Kalsiyum, Magnezyum, Büyüme Faktörleri (Growth Factor) ve amino asitlerden oluşan sihirli bir kokteylin mikro iğnelerle doğrudan saç folikülünün kalbine enjekte edilmesidir.</p>

<div class="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden my-10 shadow-xl group">
  <img src="/images/services/sac-mezoterapisi.webp" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1500ms]" alt="Saç Mezoterapisi Uygulaması" />
  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
    <span class="text-white font-bold text-lg tracking-wide uppercase">Cansız Saçlarınız Yeniden Dirilecek</span>
  </div>
</div>

<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#4f6f8f] rounded-full"></span> Mezoterapi ve PRP Hangi Durumlarda Yapılır?
</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
    <div class="w-12 h-12 bg-[#4f6f8f]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <span class="text-[#4f6f8f] text-2xl">🛑</span>
    </div>
    <h3 class="font-bold text-[#1e3a5f] mb-2 text-lg">Dökülmeyi Durdurmak İçin</h3>
    <p class="text-gray-600 text-sm leading-relaxed">Erkek tipi (Androgenetik) veya kadınlardaki stres/hormonal kaynaklı dökülmelerin %90'ını ilk 3 seansta bıçak gibi keser.</p>
  </div>
  <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
    <div class="w-12 h-12 bg-[#4f6f8f]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <span class="text-[#4f6f8f] text-2xl">🧱</span>
    </div>
    <h3 class="font-bold text-[#1e3a5f] mb-2 text-lg">Kalınlık ve Hacim Artışı İçin</h3>
    <p class="text-gray-600 text-sm leading-relaxed">İncelen, tüy formuna dönen ve cansız görünen saç tellerinin çapını genişleterek eskisinden daha parlak olmasını sağlar.</p>
  </div>
  <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
    <div class="w-12 h-12 bg-[#4f6f8f]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <span class="text-[#4f6f8f] text-2xl">🌱</span>
    </div>
    <h3 class="font-bold text-[#1e3a5f] mb-2 text-lg">Yeni Saç (Bebek Saçı) Çıkışı</h3>
    <p class="text-gray-600 text-sm leading-relaxed">Ölmeyen ancak uykuya dalan inaktif kökleri uyandırarak, şakaklardan veya zayıf bölgelerden yeni "bebek saçları" fışkırtır.</p>
  </div>
  <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
    <div class="w-12 h-12 bg-[#4f6f8f]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <span class="text-[#4f6f8f] text-2xl">🛡️</span>
    </div>
    <h3 class="font-bold text-[#1e3a5f] mb-2 text-lg">Saç Ekimi Sonrası Besleme</h3>
    <p class="text-gray-600 text-sm leading-relaxed">Ekimden çıkan hastaların en büyük destekçisidir. Ekim sonucunu 2 kat hızlandırır ve ekilen şok köklerin sağlıklı beslenmesini sağlar.</p>
  </div>
</div>

<div class="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] p-6 lg:p-8 rounded-2xl border-l-[6px] border-[#4f6f8f] shadow-sm hover:shadow-xl transition-shadow duration-500 my-8 overflow-hidden relative">
  <div class="absolute -right-10 -top-10 text-[150px] opacity-5">💉</div>
  <p class="font-black text-[#1e3a5f] text-xl mb-3 flex items-center gap-2">Minimal Acı, Maksimum Gençlik</p>
  <p class="text-gray-600 leading-relaxed font-medium">Megaeste kliniğinde mezoterapi seansları ağrısız enjeksiyon kalemleri veya minimal iğnelerle yapılır. Ortalama 10 dakika sürer. Hastalarımız öğle molasında gelip tedavisini yaptırıp hemen işine devam edebilmektedir. Etkisi 2. seanstan sonra saçtaki parlamayla direkt olarak fark edilir.</p>
</div>`,
      process: [
        { step: 1, title: 'Saç Analizi', description: 'Trikoskopik analiz ile saç ve saçlı deri durumu değerlendirilir.' },
        { step: 2, title: 'Kokteyl Hazırlama', description: 'Kişiye özel vitamin ve mineral kokteyli hazırlanır.' },
        { step: 3, title: 'Uygulama', description: 'Mikroenjeksiyonlar ile kokteyl saç derisine uygulanır.' },
        { step: 4, title: 'Bakım Önerileri', description: 'İşlem sonrası bakım ve beslenme önerileri verilir.' },
      ],
      faq: [
        { q: 'Saç mezoterapisi kaç seans uygulanmalıdır?', a: 'Bireysel analizlere göre değişmekle birlikte, hedeflenen kalitede tüy kazanımı ve güçlendirme için 4-6 seanslık protokoller önerilmektedir.' },
        { q: 'İşlem sırasında ağrı veya acı hissedilir mi?', a: 'Mezoterapi uygulamaları çok ince uçlu iğneler veya iğnesiz tekniklerle yapıldığı için işlem klinik ortamında oldukça konforlu geçmektedir.' },
        { q: 'Mezoterapi sonrası saç yıkama ne zaman yapılabilir?', a: 'Uygulanan vitamin kompleksinin deriye tam olarak etki etmesi ve emilimi için ilk 24 saat saçların yıkanmaması önemlidir.' },
        { q: 'Elde edilen faydalar ne kadar süreyle kalıcıdır?', a: 'Düzenli beslenme rutini ve uzmanlarımızın önereceği destekleyici idame seanslarıyla hücresel saç kazanımları uzun soluklu olarak korunabilmektedir.' },
        { q: 'Kimler saç mezoterapisi için uygun adaydır?', a: 'Dökülme yaşayan, saç tellerini kalınlaştırmak isteyen veya ekim sonrası kök iyileşmesini hızlandırmak isteyen kadın/erkek her birey profesyonelce değerlendirilmektedir.' },
      ],
      seoTitle: 'Saç Mezoterapisi | Megaeste Klinik',
      seoDescription: 'Saç mezoterapisi ile saç dökülmesini durdurun. Vitamin ve mineral destekli mezoterapi uygulaması. Megaeste klinik.',
      relatedSlugs: ['dhi-sac-ekimi', 'safir-sac-ekimi'],
    },
    en: {
      title: 'Hair Mesotherapy',
      slug: 'hair-mesotherapy',
      category: 'Hair Transplant Treatments',
      categorySlug: 'hair-transplant',
      heroDescription: 'Mesotherapy treatment with vitamins, minerals and peptides that stops hair loss and strengthens existing hair.',
      longDescription: `Hair mesotherapy is the application of special cocktails containing vitamins, minerals, amino acids and growth factors to the scalp through micro-injections. This treatment method supports hair strengthening and renewal by nourishing hair follicles.

Hair mesotherapy can be applied as a preventive treatment in the early stages of hair loss. It is also preferred to accelerate the healing process after hair transplant and to increase the retention rate of transplanted hair.

The hair mesotherapy protocol applied at Megaeste clinic is carried out with cocktails specially prepared according to the patient's needs.`,
      process: [
        { step: 1, title: 'Hair Analysis', description: 'Trichoscopic analysis evaluates hair and scalp condition.' },
        { step: 2, title: 'Cocktail Preparation', description: 'Personalized vitamin and mineral cocktail is prepared.' },
        { step: 3, title: 'Application', description: 'Cocktail is applied to the scalp through micro-injections.' },
        { step: 4, title: 'Care Advice', description: 'Post-treatment care and nutrition recommendations.' },
      ],
      faq: [
        { q: 'How many sessions of hair mesotherapy should be applied?', a: 'Depending on clinical analysis, protocols of 4-6 sessions are generally recommended to achieve the targeted strengthening of hair follicles.' },
        { q: 'Is there any pain or discomfort during the procedure?', a: 'Mesotherapy is applied with very fine needles or needle-free advanced techniques, making the procedure quite comfortable for our patients.' },
        { q: 'When can I wash my hair after mesotherapy?', a: 'It is highly important not to wash the hair for the first 24 hours to ensure the vitamin complex and growth factors fully penetrate the scalp.' },
        { q: 'How long are the obtained benefits maintained?', a: 'With a proper nutrition routine and supportive maintenance sessions prescribed by our specialists, cellular hair growth can be preserved long-term.' },
        { q: 'Who is a suitable candidate for this treatment?', a: 'Both men and women experiencing hair loss, desiring thicker strands, or seeking to accelerate post-transplant recovery are professionally evaluated.' },
      ],
      seoTitle: 'Hair Mesotherapy | Megaeste Clinic',
      seoDescription: 'Stop hair loss with hair mesotherapy. Vitamin and mineral supported mesotherapy application.',
      relatedSlugs: ['dhi-hair-transplant', 'sapphire-hair-transplant'],
    },
  },
    ...memeServices,
  ...yuzServices,
  ...vucutServices,
  {
    id: 'medikal-cilt-bakimi',
    image: '/images/services/medikal-cilt-bakimi-klinik.webp',
    tr: {
      title: 'Medikal Cilt Bakımı',
      slug: 'medikal-cilt-bakimi',
      category: 'Medikal Estetik',
      categorySlug: 'medikal-estetik',
      heroDescription: 'Profesyonel Hydrafacial ve Derin Temizleme protokolleriyle sağlıkla parlayan, bebeksi ve pürüzsüz cilde kavuşun.',
      longDescription: `<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#ad6778] rounded-full"></span> Medikal Cilt Bakımı Nedir?
</h2>
<p class="mb-8 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Medikal cilt bakımı, evde uygulanan günlük rutinlerin çok ötesinde, dermokozmetik ürünler ve ileri teknoloji cihazlar kullanılarak cildin en derin katmanlarına kadar inen profesyonel bir tedavi sistemidir. Ciltteki ölü hücrelerin arındırılması, tıkanmış gözeneklerin temizlenmesi, akne ve siyah noktaların tedavisi, nem oranının ve kolajen üretiminin artırılması hedeflenir.</p>

<div class="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden my-10 shadow-xl group">
  <img src="/images/services/medikal-cilt-bakimi.webp" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1500ms]" alt="Medikal Cilt Bakımı" />
  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
    <span class="text-white font-bold text-lg tracking-wide uppercase">Cildinizin Işıltısını Geri Kazanın</span>
  </div>
</div>

<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#ad6778] rounded-full"></span> Kimler Tercih Etmelidir?
</h2>
<p class="mb-6 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Zamanla ciltte biriken toksinler, makyaj kalıntıları, stres ve güneşin zararlı etkileri cildin canlılığını yok eder. Medikal cilt bakımı, bu hasarları onarmak isteyen herkes için uygundur.</p>
<ul class="space-y-4 mb-10 pl-2">
  <li class="flex items-start gap-4 group">
    <div class="mt-2 w-2 h-2 rounded-full bg-[#ad6778] group-hover:scale-[2] transition-transform duration-300"></div>
    <span class="text-gray-700 font-medium leading-relaxed">Siyah nokta, geniş gözenek, aktif sivilce (akne) ve yağlı cilt problemi yaşayanlar.</span>
  </li>
  <li class="flex items-start gap-4 group">
    <div class="mt-2 w-2 h-2 rounded-full bg-[#ad6778] group-hover:scale-[2] transition-transform duration-300"></div>
    <span class="text-gray-700 font-medium leading-relaxed">Cildi mat, cansız, nemsiz ve pul pul dökülen (kuru cilt) yapıya sahip kişiler.</span>
  </li>
  <li class="flex items-start gap-4 group">
    <div class="mt-2 w-2 h-2 rounded-full bg-[#ad6778] group-hover:scale-[2] transition-transform duration-300"></div>
    <span class="text-gray-700 font-medium leading-relaxed">Erken yaşlanma belirtileri, yüzeysel lekeler ve renk eşitsizliği (hiperpigmentasyon) gözlemleyenler.</span>
  </li>
</ul>

<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#ad6778] rounded-full"></span> Medikal Bakım Aşamaları
</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
    <div class="w-12 h-12 bg-[#ad6778]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <span class="text-[#ad6778] font-bold text-xl">1</span>
    </div>
    <h3 class="font-bold text-[#1e3a5f] mb-2 text-lg">Analiz ve Temizlik</h3>
    <p class="text-gray-600 text-sm leading-relaxed">Bilgisayarlı cilt analizi sonrası cildinize en uygun temizleyicilerle makyaj, yağ ve kir derinlemesine arındırılır.</p>
  </div>
  <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
    <div class="w-12 h-12 bg-[#ad6778]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <span class="text-[#ad6778] font-bold text-xl">2</span>
    </div>
    <h3 class="font-bold text-[#1e3a5f] mb-2 text-lg">Peeling ve Buhar</h3>
    <p class="text-gray-600 text-sm leading-relaxed">Enzimatik peeling ve ozon buharı uygulanarak gözenekler açılır, cilt siyah nokta (komedon) sıkımına hazır hale getirilir.</p>
  </div>
  <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
    <div class="w-12 h-12 bg-[#ad6778]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <span class="text-[#ad6778] font-bold text-xl">3</span>
    </div>
    <h3 class="font-bold text-[#1e3a5f] mb-2 text-lg">Vakum ve Serum</h3>
    <p class="text-gray-600 text-sm leading-relaxed">Ağrısız Hydrafacial vakumu ile gözenekler emilerek temizlenir. Ardından hyalüronik asit ve antioksidan serumlar cilt altına itilir.</p>
  </div>
  <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
    <div class="w-12 h-12 bg-[#ad6778]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <span class="text-[#ad6778] font-bold text-xl">4</span>
    </div>
    <h3 class="font-bold text-[#1e3a5f] mb-2 text-lg">Maske ve Terapi</h3>
    <p class="text-gray-600 text-sm leading-relaxed">Cilt ihtiyacına özel maske bekleme sürecinden sonra LED Işık Terapisi (Foton) veya Yüksek Frekans cihazıyla cilt yatıştırılır.</p>
  </div>
</div>`,
      process: [
        { step: 1, title: 'Cilt Analizi', description: 'Cilt analiz cihazları ile detaylı cilt değerlendirmesi yapılır.' },
        { step: 2, title: 'Protokol Belirleme', description: 'Cilt tipine uygun bakım protokolü oluşturulur.' },
        { step: 3, title: 'Uygulama', description: 'Seçilen prosedürler uygulanır.' },
        { step: 4, title: 'Bakım Planı', description: 'Evde bakım önerileri ve takip seansları planlanır.' },
      ],
      faq: [
        { q: 'Medikal cilt bakımı ne sıklıkla yaptırılmalıdır?', a: 'Cildin yağ, nem ve deformasyon durumuna göre temel tedavi sürecinde 2-4 hafta aralıklarla, klinik idame sürecinde ise ayda bir kez önerilmektedir.' },
        { q: 'İşlem sonrası günlük hayata hemen dönülebilir mi?', a: 'Herhangi bir tahriş veya soyulma yaratmayan ileri teknoloji cihazlı bakımlar sonrasında hastalarımız anında sosyal yaşantılarına dönebilir.' },
        { q: 'Medikal cilt bakımı aktif sivilce tedavisinde etkili midir?', a: 'Cilt altı sebum dengesini sağlayıp tıkalı gözenekleri (komedonları) derinlemesine temizlediği için akne tedavisini ciddi oranda destekleyen bir medikal protokoldür.' },
        { q: 'Cilt bakımının klasik kuaför bakımlarından farkı nedir?', a: 'Kanıtlanmış dermokozmetik ürünler ve vakum/ultrasonik teknolojiler kullanılarak sadece cildin en üst yüzeyi değil, daha alt dermis tabakaları da tedavi edilir.' },
        { q: 'Hangi mevsimlerde uygulanması daha doğrudur?', a: 'UV hassasiyeti yaratmayan (örneğin Hydrafacial gibi) cihazlarla yapıldığından bu protokol dört mevsim boyunca kliniğimizde güvenle uygulanabilmektedir.' },
      ],
      seoTitle: 'Medikal Cilt Bakımı | Megaeste Klinik',
      seoDescription: 'Medikal cilt bakımı ile sağlıklı ve ışıltılı cilt. Kişiye özel protokoller. Megaeste klinik.',
      relatedSlugs: ['yuz-mezoterapi', 'lazer-epilasyon'],
    },
    en: {
      title: 'Medical Skin Care',
      slug: 'medical-skin-care',
      category: 'Medical Aesthetics',
      categorySlug: 'medical-aesthetics',
      heroDescription: 'Achieve healthy and radiant skin with medical skin care applied with protocols specific to your skin type.',
      longDescription: `Medical skin care is a professional care process applied with personalized protocols by analyzing your skin dermatologically and aesthetically. Advanced technology applications such as chemical peeling, hydrafacial, PRP, carbon peeling are evaluated in this scope.

Your skin's moisture level, elasticity, pore structure and pigmentation status are examined in detail with skin analysis devices. An individual care plan is created based on the results.

At Megaeste clinic, medical skin care is applied under the supervision of expert dermatologists and medical aesthetics specialists.`,
      process: [
        { step: 1, title: 'Skin Analysis', description: 'Detailed skin evaluation with skin analysis devices.' },
        { step: 2, title: 'Protocol Determination', description: 'Care protocol suitable for skin type is created.' },
        { step: 3, title: 'Application', description: 'Selected procedures are applied.' },
        { step: 4, title: 'Care Plan', description: 'Home care recommendations and follow-up sessions are planned.' },
      ],
      faq: [
        { q: 'How often should medical skin care be performed?', a: 'Based on the skin’s oil, moisture, and deformation conditions, it is recommended at 2-4 week intervals during basic treatment and once a month for clinical maintenance.' },
        { q: 'Can one return to daily life immediately after the procedure?', a: 'Following advanced device-based treatments that do not cause irritation or peeling, our patients can instantly resume their social lives.' },
        { q: 'Is medical skin care effective in active acne treatment?', a: 'By establishing subcutaneous sebum balance and deeply cleansing clogged pores (comedones), it is a medical protocol that highly supports acne treatment.' },
        { q: 'What is the difference between medical skin care and classic salon facials?', a: 'By utilizing proven dermocosmetic products and vacuum/ultrasonic technologies, it aims to treat not just the outermost surface but also deeper dermis layers.' },
        { q: 'In which seasons is it more appropriate to apply?', a: 'Since it is executed with tools that do not cause UV sensitivity (like Hydrafacial), this protocol can be safely applied at our clinic across all four seasons.' },
      ],
      seoTitle: 'Medical Skin Care | Megaeste Clinic',
      seoDescription: 'Healthy and radiant skin with medical skin care. Personalized protocols at Megaeste clinic.',
      relatedSlugs: ['facial-mesotherapy', 'laser-hair-removal'],
    },
  },
  {
    id: 'yuz-mezoterapi',
    image: '/images/services/yuz-mezoterapi-klinik.webp',
    tr: {
      title: 'Yüz Mezoterapi',
      slug: 'yuz-mezoterapi',
      category: 'Medikal Estetik',
      categorySlug: 'medikal-estetik',
      heroDescription: 'Cilt altı dokulara direkt enjekte edilen zengin vitamin, mineral ve hyalüronik asit kokteylleriyle gençliğinizi geri çağırın.',
      longDescription: `<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#ad6778] rounded-full"></span> Yüz Mezoterapisi Ne İşe Yarar?
</h2>
<p class="mb-8 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Kullandığınız en pahalı kremler bile cilt bariyerini aşıp alt tabakalara (dermise) ulaşamaz. Yüz mezoterapisi (Mezolifting), cildin ihtiyaç duyduğu A, C, E vitaminleri, amino asitler, somon DNA, antioksidanlar ve saf hyalüronik asitten oluşan mucizevi kokteyllerin mikro çok ince iğnelerle doğrudan cilt altına enjekte edilmesi işlemidir. Bu sayede dokular derinlemesine uyarılır ve kolajen sentezi patlaması yaşanır.</p>

<div class="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden my-10 shadow-xl group">
  <img src="/images/services/yuz-mezoterapi.webp" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1500ms]" alt="Yüz Mezoterapisi" />
  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
    <span class="text-white font-bold text-lg tracking-wide uppercase">Cildinizdeki Yıllara Meydan Okuyun</span>
  </div>
</div>

<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#ad6778] rounded-full"></span> Mezoterapinin Cildinize 4 Muazzam Katkısı
</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <div class="group flex p-4 rounded-xl border border-gray-100 bg-[#f8fafc] hover:bg-white hover:shadow-lg transition-all duration-300">
    <div class="w-2 h-16 bg-[#ad6778] rounded-full group-hover:h-full transition-all duration-500"></div>
    <div class="ml-4">
      <h3 class="font-bold text-[#1e3a5f] mb-1">Anti-Aging ve Sıkılaşma</h3>
      <p class="text-sm text-gray-600 leading-relaxed">Elastin lifleri anında toparlanarak ince kırışıklıklar silinir, sarkan bölgelerde lifting etkisi oluşur.</p>
    </div>
  </div>
  <div class="group flex p-4 rounded-xl border border-gray-100 bg-[#f8fafc] hover:bg-white hover:shadow-lg transition-all duration-300">
    <div class="w-2 h-16 bg-[#ad6778] rounded-full group-hover:h-full transition-all duration-500"></div>
    <div class="ml-4">
      <h3 class="font-bold text-[#1e3a5f] mb-1">Nem Bombası Etkisi</h3>
      <p class="text-sm text-gray-600 leading-relaxed">İçerikteki çapraz bağsız hyalüronik asit yüzün su tutma kapasitesini fırlatıp dehidrasyonu anında durdurur.</p>
    </div>
  </div>
  <div class="group flex p-4 rounded-xl border border-gray-100 bg-[#f8fafc] hover:bg-white hover:shadow-lg transition-all duration-300">
    <div class="w-2 h-16 bg-[#ad6778] rounded-full group-hover:h-full transition-all duration-500"></div>
    <div class="ml-4">
      <h3 class="font-bold text-[#1e3a5f] mb-1">Renk Eşitleme (Aydınlanma)</h3>
      <p class="text-sm text-gray-600 leading-relaxed">Güneş lekeleri, sivilce izleri ve matlaşan cilt dokusu glupatyon ve C vitamini ile aydınlatılıp canlandırılır.</p>
    </div>
  </div>
  <div class="group flex p-4 rounded-xl border border-gray-100 bg-[#f8fafc] hover:bg-white hover:shadow-lg transition-all duration-300">
    <div class="w-2 h-16 bg-[#ad6778] rounded-full group-hover:h-full transition-all duration-500"></div>
    <div class="ml-4">
      <h3 class="font-bold text-[#1e3a5f] mb-1">Göz Altı Yenilemesi</h3>
      <p class="text-sm text-gray-600 leading-relaxed">Göz çevresindeki morluk, torbalanma ve yorgunluk izleri özel 'ışık dolgusu' karışımlarıyla silinir.</p>
    </div>
  </div>
</div>

<div class="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] p-6 lg:p-8 rounded-2xl border-l-[6px] border-[#ad6778] shadow-sm hover:shadow-xl transition-shadow duration-500 my-8 overflow-hidden relative">
  <div class="absolute -right-10 -top-10 text-[150px] opacity-5">💉</div>
  <p class="font-black text-[#1e3a5f] text-xl mb-3 flex items-center gap-2">Minimal Acı, Maksimum Gençlik</p>
  <p class="text-gray-600 leading-relaxed font-medium">İşlemden 20 dakika önce lokal anestezik kremler (uyuşturucu) sürülerek cildiniz hissizleştirilir. Fransız mezoterapi iğnesi (en ince uçlu iğne tipi) ile yapıldığı için ağrı minimumdur. Ortalama 15 dakika sürer ve sosyal hayatınıza o gün içerisinde direkt dönebilirsiniz.</p>
</div>`,
      process: [
        { step: 1, title: 'Cilt Değerlendirmesi', description: 'Cildin ihtiyaçları ve tedavi hedefleri belirlenir.' },
        { step: 2, title: 'Kokteyl Seçimi', description: 'Cilt tipine uygun mezoterapi kokteyli hazırlanır.' },
        { step: 3, title: 'Uygulama', description: 'Mikroenjeksiyonlar ile aktif maddeler cilt altına verilir.' },
        { step: 4, title: 'Kontrol', description: 'Takip seansları ile sonuçlar değerlendirilir.' },
      ],
      faq: [
        { q: 'Yüz mezoterapisi ağrılı mıdır?', a: 'İşlemde kullanılan iğneler çok ince uçlu olduğu ve öncesinde anestezik krem uygulandığı için ağrı neredeyse hissedilmez.' },
        { q: 'Kaç seans yüz mezoterapisi önerilir?', a: 'Cildin ihtiyacına bağlı olarak genellikle 1-2 hafta aralıklarla 4-6 seanslık bir kür uygulanması klinik olarak tavsiye edilmektedir.' },
        { q: 'Mezoterapi sonrası yüzümde ne gibi değişiklikler olur?', a: 'İlk seanslardan itibaren ciltte artan nem kapasitesi, parlaklık ve ince kırışıklıklarda gözle görülür bir toparlanma (anti-aging etkisi) gözlemlenir.' },
        { q: 'Uygulama sonrasında nelere dikkat etmeliyim?', a: 'İşlem sonrası ilk 24 saat bölgeye makyaj yapılmamalı, ılık/soğuk suyla yıkanmalı ve aşırı güneşten, sıcak duştan kaçınılmalıdır.' },
        { q: 'Yüz mezoterapisini hangi yaş grupları yaptırabilir?', a: 'Ciltte kolajen azalmasının başladığı 25-30 yaşlarından itibaren hem koruyucu hem onarıcı medikal bir bakım olarak her yaş grubuna uygulanabilir.' },
      ],
      seoTitle: 'Yüz Mezoterapi | Megaeste Klinik',
      seoDescription: 'Yüz mezoterapisi ile cilt yenileme ve gençleştirme. Vitamin ve hyalüronik asit destekli mezoterapi. Megaeste.',
      relatedSlugs: ['medikal-cilt-bakimi', 'lazer-epilasyon'],
    },
    en: {
      title: 'Facial Mesotherapy',
      slug: 'facial-mesotherapy',
      category: 'Medical Aesthetics',
      categorySlug: 'medical-aesthetics',
      heroDescription: 'Mesotherapy application providing deep nourishment to the skin with hyaluronic acid, vitamins and antioxidants.',
      longDescription: `Facial mesotherapy is the delivery of active substances such as vitamins, minerals, hyaluronic acid and amino acids to the lower layers of the skin through micro-injections. This way, the skin is nourished and renewed from within.

Facial mesotherapy is applied for wrinkle reduction, skin tone equalization, spot treatment, moisture balance and general skin rejuvenation purposes.

At Megaeste clinic, facial mesotherapy is applied with FDA-approved products by our experienced specialists.`,
      process: [
        { step: 1, title: 'Skin Assessment', description: 'Skin needs and treatment goals are determined.' },
        { step: 2, title: 'Cocktail Selection', description: 'Mesotherapy cocktail suitable for skin type is prepared.' },
        { step: 3, title: 'Application', description: 'Active ingredients are delivered under the skin with micro-injections.' },
        { step: 4, title: 'Follow-up', description: 'Results are evaluated with follow-up sessions.' },
      ],
      faq: [
        { q: 'Is facial mesotherapy painful?', a: 'Because the needles used are ultra-fine and an anesthetic cream is applied beforehand, pain is hardly felt by the patient.' },
        { q: 'How many sessions of facial mesotherapy are recommended?', a: 'Depending on the skin’s specific needs, a planned cure of 4-6 sessions at 1-2 week intervals is generally advised.' },
        { q: 'What changes occur on my face after mesotherapy?', a: 'Starting from the first sessions, increased moisture capacity, radiance, and a reduction in fine lines (anti-aging effect) are structurally observed.' },
        { q: 'What should I pay attention to after the application?', a: 'For the first 24 hours post-procedure, makeup should be avoided, the face should be washed with lukewarm water, and excessive sun exposure is heavily discouraged.' },
        { q: 'Which age groups can undergo facial mesotherapy?', a: 'It can be applied as both preventive and restorative care starting from ages 25-30, when collagen loss typically begins.' },
      ],
      seoTitle: 'Facial Mesotherapy | Megaeste Clinic',
      seoDescription: 'Skin renewal and rejuvenation with facial mesotherapy. Vitamin and hyaluronic acid supported.',
      relatedSlugs: ['medical-skin-care', 'laser-hair-removal'],
    },
  },
  {
    id: 'lazer-epilasyon',
    image: '/images/services/lazer-epilasyon-klinik.webp',
    tr: {
      title: 'Lazer Epilasyon',
      slug: 'lazer-epilasyon',
      category: 'Epilasyon',
      categorySlug: 'epilasyon',
      heroDescription: 'Alexandrite ve Buz Lazer gibi son teknoloji cihazlarla, acısız, güvenli ve pürüzsüz kalıcı tüy azaltma uygulaması.',
      longDescription: `<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#9f8eab] rounded-full"></span> Lazer Epilasyon Nedir?
</h2>
<p class="mb-8 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Lazer epilasyon, istenmeyen tüylerden kalıcı olarak kurtulmayı sağlayan, FDA onaylı en güvenilir medikal estetik prosedürlerinden biridir. Yoğunlaştırılmış ışık demetleri (lazer), kıl köklerindeki melanin (renk veren madde) tarafından emilir. Emilen bu ışık enerjisi ısı enerjisine dönüşerek kıl folikülünü (kökünü) yapısal olarak tahrip eder ve o kökten bir daha tüy çıkmasını engeller.</p>

<div class="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden my-10 shadow-xl group">
  <img src="/images/services/lazer-epilasyon.webp" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1500ms]" alt="Lazer Epilasyon Nedir" />
  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
    <span class="text-white font-bold text-lg tracking-wide uppercase">Pürüzsüz Bir Cilde Adım Atın</span>
  </div>
</div>

<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#9f8eab] rounded-full"></span> Kimler Lazer Epilasyon Yaptırmalıdır?
</h2>
<p class="mb-6 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Lazer epilasyon genel olarak ergenlik dönemini tamamlamış, tüy yapısı ve cilt rengi işleme uygun olan tüm kadın ve erkeklere uygulanabilir. Ağda, tıraş bıçağı, epilatör gibi geleneksel yöntemlerden kaynaklanan kıl dönmesi, batık, cilt kararması (özellikle koltuk altı ve genital bölgelerde) ve tahriş gibi sorunlar yaşayan kişiler için kesin tıbbi çözümdür.</p>
<ul class="space-y-4 mb-10 pl-2">
  <li class="flex items-start gap-4 group">
    <div class="mt-2 w-2 h-2 rounded-full bg-[#9f8eab] group-hover:scale-[2] transition-transform duration-300"></div>
    <span class="text-gray-700 font-medium leading-relaxed">İleri düzey hormonal bir rahatsızlığı bulunmayan veya aktif tedavisi tamamlanmış kişiler.</span>
  </li>
  <li class="flex items-start gap-4 group">
    <div class="mt-2 w-2 h-2 rounded-full bg-[#9f8eab] group-hover:scale-[2] transition-transform duration-300"></div>
    <span class="text-gray-700 font-medium leading-relaxed">Jilet ve ağda batıklarına, çilek bacak görünümüne kesin son vermek isteyenler.</span>
  </li>
  <li class="flex items-start gap-4 group">
    <div class="mt-2 w-2 h-2 rounded-full bg-[#9f8eab] group-hover:scale-[2] transition-transform duration-300"></div>
    <span class="text-gray-700 font-medium leading-relaxed">Hayat boyu tüy kalabalığından kurtulup pürüzsüz kalmak isteyen hem kadın hem erkek danışanlar.</span>
  </li>
</ul>

<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#9f8eab] rounded-full"></span> Lazer Epilasyon Süreci Nasıl İlerler?
</h2>
<p class="mb-6 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Megaeste Kliniklerinde lazer epilasyon süreci, sıradan güzellik merkezlerinin aksine tamamen klinik testlerden geçerek başlar. Öncelikle vücut bölgeniz, cilt fototipiniz (açık ten, buğday ten veya esmer ten) ve kıl kalınlığınız ücretsiz bilgisayarlı kıl analiz cihazlarımızla taranır.</p>

<div class="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] p-6 lg:p-8 rounded-2xl border-l-[6px] border-[#9f8eab] shadow-sm hover:shadow-xl transition-shadow duration-500 my-8 overflow-hidden relative">
  <div class="absolute -right-10 -top-10 text-[150px] opacity-5">💎</div>
  <p class="font-black text-[#1e3a5f] text-xl mb-3 flex items-center gap-2">Megaeste Buz Lazer Farkı</p>
  <p class="text-gray-600 leading-relaxed font-medium">Kliniğimizde kullanılan son nesil <strong>Safir Uçlu Buz Lazer</strong> teknolojisi sayesinde, lazer atışları esnasında hedeflenen bölge anında -3 dereceye kadar soğutulur. Bu olağanüstü soğutma mekanizması, cilt üzerindeki acı ve yanma hissini %100'e yakın bloke ederek işlemin tamamen ağrısız ve yanık risksiz olmasını garantiler.</p>
</div>`,
      process: [
        { step: 1, title: 'Cilt ve Tüy Analizi', description: 'Cilt tipi ve tüy yapısı değerlendirilerek uygun lazer parametreleri belirlenir.' },
        { step: 2, title: 'Test Atışı', description: 'Küçük bir bölgede test uygulaması yapılır.' },
        { step: 3, title: 'Uygulama', description: 'Belirlenen bölgeye lazer seansı uygulanır.' },
        { step: 4, title: 'Bakım', description: 'İşlem sonrası cilt bakım önerileri verilir.' },
      ],
      faq: [
        { q: 'Lazer epilasyon için kaç seans gerekir?', a: 'Vücut bölgesine ve tüy yapısına göre değişmekle birlikte, yapısal tahribat ve kalıcı sonuçlar için genellikle 6-8 seans ortalama kabul edilir.' },
        { q: 'Tüm cilt tiplerine lazer uygulanabilir mi?', a: 'Evet, kliniğimizdeki yeni nesil Buz Lazer sistemleri sayesinde en açık tenden en koyu tene kadar güvenli ve lekesiz uygulama yapılmaktadır.' },
        { q: 'Sonuçlar yüzde yüz kalıcı mıdır?', a: 'Lazer epilasyon kalıcı tüy azaltma yöntemidir; kökü tahrip edilen tüyler geri gelmez, ince tüyler için yılda bir hatırlatma bakımı yapılabilir.' },
        { q: 'Lazer epilasyon yaz aylarında yapılır mı?', a: 'Dört mevsim uygulanabilen teknolojik başlıklar sayesinde cilt korunduğu sürece yaz aylarında ve bronzlaşma sonrası da epilasyon yapılabilmektedir.' },
        { q: 'İşlem sırasında yanma veya acı hissedilir mi?', a: 'Safir soğutma başlıkları, cilde temas eden yüzeyi eksi derecelere kadar soğuttuğundan ciltte yanık riski veya yoğun bir acı hissi oluşmaz.' },
      ],
      seoTitle: 'Lazer Epilasyon | Megaeste Klinik',
      seoDescription: 'Lazer epilasyon ile kalıcı tüy azaltma. Son teknoloji lazer cihazları. Megaeste klinik.',
      relatedSlugs: ['igneli-lazer-epilasyonu', 'medikal-cilt-bakimi'],
    },
    en: {
      title: 'Laser Hair Removal',
      slug: 'laser-hair-removal',
      category: 'Epilation',
      categorySlug: 'epilation',
      heroDescription: 'Safe, effective, and permanent hair reduction with painless Ice Laser technology and Alexandrite devices.',
      longDescription: `<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#9f8eab] rounded-full"></span> What is Laser Hair Removal?
</h2>
<p class="mb-8 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Laser hair removal is one of the most reliable FDA-approved medical aesthetic procedures for getting rid of unwanted hair permanently. Concentrated light beams (lasers) are absorbed by melanin (the pigment) in the hair roots. The absorbed light energy turns to heat, structurally destroying the hair follicle and preventing future hair growth from that root.</p>

<div class="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden my-10 shadow-xl group">
  <img src="/images/services/lazer-epilasyon.webp" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1500ms]" alt="Laser Hair Removal" />
  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
    <span class="text-white font-bold text-lg tracking-wide uppercase">Step Into Smooth Skin</span>
  </div>
</div>

<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#9f8eab] rounded-full"></span> Who is Suitable for Laser Hair Removal?
</h2>
<p class="mb-6 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Laser hair removal can generally be applied to all men and women who have completed puberty and have suitable hair and skin types. It is the definitive medical solution for individuals experiencing ingrown hairs, strawberry legs, skin darkening, and irritation caused by traditional methods like waxing and shaving.</p>

<div class="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] p-6 lg:p-8 rounded-2xl border-l-[6px] border-[#9f8eab] shadow-sm hover:shadow-xl transition-shadow duration-500 my-8 overflow-hidden relative">
  <div class="absolute -right-10 -top-10 text-[150px] opacity-5">💎</div>
  <p class="font-black text-[#1e3a5f] text-xl mb-3 flex items-center gap-2">The Megaeste Ice Laser Difference</p>
  <p class="text-gray-600 leading-relaxed font-medium">Thanks to the latest generation <strong>Sapphire Tip Ice Laser</strong> technology used in our clinic, the targeted area is instantly cooled down to -3 degrees during laser shots. This extraordinary cooling mechanism blocks the sensation of pain and burning on the skin by nearly 100%, guaranteeing a completely painless, burn-free procedure.</p>
</div>`,
      process: [
        { step: 1, title: 'Skin & Hair Analysis', description: 'Skin type and hair structure are evaluated and appropriate laser parameters are determined.' },
        { step: 2, title: 'Test Shot', description: 'Test application is performed on a small area.' },
        { step: 3, title: 'Application', description: 'Laser session is applied to the determined area.' },
        { step: 4, title: 'Care', description: 'Post-procedure skin care recommendations are given.' },
      ],
      faq: [
        { q: 'How many sessions are required for laser hair removal?', a: 'While it varies by physiological body area and hair structure, an average of 6-8 sessions is generally optimal for permanent reduction.' },
        { q: 'Can laser be applied to all skin types?', a: 'Yes, thanks to the latest generation Ice Laser systems in our clinic, safe and spotless applications are performed on all skin types.' },
        { q: 'Are the results 100% permanent?', a: 'Laser hair removal is a permanent reduction method; destroyed roots do not reproduce, though a yearly touch-up may be suggested for fine hairs.' },
        { q: 'Is laser hair removal performed in summer months?', a: 'Thanks to advanced technology that protects the epidermis, epilation can be safely continued throughout all four seasons, even after tanning.' },
        { q: 'Is burning or pain felt during the procedure?', a: 'Sapphire cooling mechanisms constantly chill the targeted area to minus degrees, effectively eliminating the risk of burns and significantly diminishing any pain sensation.' },
      ],
      seoTitle: 'Laser Hair Removal | Megaeste Clinic',
      seoDescription: 'Permanent hair reduction with laser hair removal. Latest technology laser devices at Megaeste clinic.',
      relatedSlugs: ['needle-laser-epilation', 'medical-skin-care'],
    },
  },
  {
    id: 'igneli-lazer-epilasyonu',
    image: '/images/services/igneli-lazer-klinik.webp',
    tr: {
      title: 'İğneli Lazer Epilasyonu',
      slug: 'igneli-lazer-epilasyonu',
      category: 'Epilasyon',
      categorySlug: 'epilasyon',
      heroDescription: 'İnce telli, açık renkli (sarı, beyaz) veya dirençli tüyler için kesin kalıcılık sunan tıbbi epilasyon yöntemi.',
      longDescription: `<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#9f8eab] rounded-full"></span> İğneli Lazer Epilasyon Nedir?
</h2>
<p class="mb-8 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">İğneli epilasyon, 100 yılı aşkın süredir uygulanan ve Amerikan Gıda ve İlaç Dairesi (FDA) tarafından "%100 Kalıcı Tüy Yok Etme" sertifikasına sahip tek epilasyon yöntemidir. İşlemde saç teli kadar ince, tek kullanımlık steril altın yalıtkanlı iğnelerle kıl köküne girilir ve köke hafif bir elektrik/radyofrekans akımı verilerek kıl hücresi tamamen tahrip edilir.</p>

<div class="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden my-10 shadow-xl group">
  <img src="/images/services/igneli-lazer-epilasyon.webp" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1500ms]" alt="İğneli Lazer Epilasyon" />
  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
    <span class="text-white font-bold text-lg tracking-wide uppercase">Beyaz ve Sarı Tüylere Kesin Çözüm</span>
  </div>
</div>

<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#9f8eab] rounded-full"></span> İğneli Epilasyon Hangi Durumlarda Tercih Edilir?
</h2>
<p class="mb-6 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Buz Lazer veya Alexandrite gibi optik cihazlar genellikle içindeki melanin (renk) yüksek olan koyu tüyleri görürler. Ancak tüy yapınız açık renkliyse lazer cihazları işe yaramayacaktır. İşte bu noktada iğneli epilasyon hayat kurtarıcıdır.</p>
<ul class="space-y-4 mb-10 pl-2">
  <li class="flex items-start gap-4 group">
    <div class="mt-2 w-2 h-2 rounded-full bg-[#9f8eab] group-hover:scale-[2] transition-transform duration-300"></div>
    <span class="text-gray-700 font-medium leading-relaxed"><strong>Sarı, Kumral, Kızıl ve Beyaz Tüyler:</strong> Lazerin göremediği pigmentsiz ince tüyler için tek çözümdür.</span>
  </li>
  <li class="flex items-start gap-4 group">
    <div class="mt-2 w-2 h-2 rounded-full bg-[#9f8eab] group-hover:scale-[2] transition-transform duration-300"></div>
    <span class="text-gray-700 font-medium leading-relaxed"><strong>Yüz ve Kaş Orantılaması:</strong> Yanak üstündeki ayva tüyleri veya kaş ortası gibi alanlardaki ince detaylarda en güvenilir müdahaledir. Yüz bölgesinde lazerin tetikleyebileceği "kıl çoğalması" riskini sıfıra indirir.</span>
  </li>
  <li class="flex items-start gap-4 group">
    <div class="mt-2 w-2 h-2 rounded-full bg-[#9f8eab] group-hover:scale-[2] transition-transform duration-300"></div>
    <span class="text-gray-700 font-medium leading-relaxed"><strong>Lazer Epilasyonu Bitirenler:</strong> Lazer epilasyon paketi bittikten sonra vücutta tek tük kalan o son inatçı tüyleri sıfırlamak için rutinin son adımında iğneliye başvurulur.</span>
  </li>
</ul>

<div class="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] p-6 lg:p-8 rounded-2xl border-l-[6px] border-[#9f8eab] shadow-sm hover:shadow-xl transition-shadow duration-500 my-8 overflow-hidden relative">
  <div class="absolute -right-10 -top-10 text-[150px] opacity-5">⚡</div>
  <p class="font-black text-[#1e3a5f] text-xl mb-3 flex items-center gap-2">Megaeste Altın İğne Epilasyon Süreci</p>
  <p class="text-gray-600 leading-relaxed font-medium">Uzman Megaeste estetisyenlerimiz tarafından hijyenin tam sağlandığı odalarda tek kullanımlık altın kaplama yalıtımlı iğneler kullanılır. Akım sadece kök ucuna verilir, böylece üst cilt yüzeyindeki tahriş minimuma iner. Uygulama öncesinde bölgeye anestezik krem sürülerek işlemin yüksek konforla geçmesi sağlanır.</p>
</div>`,
      process: [
        { step: 1, title: 'Değerlendirme', description: 'Tüy yapısı ve uygulama bölgesi incelenir.' },
        { step: 2, title: 'Uygulama', description: 'İğne ile kıl folikülüne enerji iletilir.' },
        { step: 3, title: 'Bakım', description: 'İşlem sonrası bakım ve kontrol planlanır.' },
      ],
      faq: [
        { q: 'İğneli epilasyon hangi bölgelere uygulanır?', a: 'Yüz, kaş ortası, boyun, kulak ve hassas bölgeler dahil, istenmeyen tüylerin bulunduğu tüm ince detaylı bölgelere güvenle uygulanabilir.' },
        { q: 'Lazer epilasyondan farkı nedir?', a: 'Normal lazer cihazlarının optik olarak göremediği, pigment içermeyen sarı, beyaz, kızıl ve ince ayva tüylerinde kesin sonuç veren medikal yöntemdir.' },
        { q: 'İşlem sırasında cildim zarar görür mü?', a: 'Özel mikroskobik altın iğneler kullanılarak akım doğrudan foliküle (kıl köküne) iletildiğinden, çevre deri dokusu korunur ve iz kalma riski çok düşüktür.' },
        { q: 'Kaç seansta kalıcı sonuç elde edilir?', a: 'Kılların farklı büyüme evreleri olduğu için, hedef bölgedeki tüm köklerin tahrip edilmesi ve sıfırlanması birkaç seanslık periyotlar gerektirir.' },
        { q: 'Uygulama sonrası iyileşme süreci nasıldır?', a: 'İşlem sonrası ilk günlerde kıl köklerinde hafif kızarıklık ve noktasal kabuklanmalar olması olağandır; antibakteriyel kapatıcı kremlerle kısa sürede geçer.' },
      ],
      seoTitle: 'İğneli Lazer Epilasyonu | Megaeste Klinik',
      seoDescription: 'İğneli lazer epilasyonu ile dirençli tüylerden kurtulun. Hassas bölgeler için ideal çözüm. Megaeste klinik.',
      relatedSlugs: ['lazer-epilasyon', 'medikal-cilt-bakimi'],
    },
    en: {
      title: 'Needle Laser Epilation',
      slug: 'needle-laser-epilation',
      category: 'Epilation',
      categorySlug: 'epilation',
      heroDescription: 'Needle laser epilation offering effective solutions for sensitive areas and resistant hair.',
      longDescription: `Needle laser epilation is a special method applied to remove hair in sensitive areas or hair resistant to conventional laser epilation.

Energy is transmitted directly to the hair follicle through a thin needle, disabling the hair root. This method is especially preferred for light-colored hair and small areas.

At Megaeste clinic, needle epilation is applied by our experienced specialists in sterile conditions.`,
      process: [
        { step: 1, title: 'Assessment', description: 'Hair structure and application area are examined.' },
        { step: 2, title: 'Application', description: 'Energy is transmitted to the hair follicle with a needle.' },
        { step: 3, title: 'Care', description: 'Post-procedure care and follow-up are planned.' },
      ],
      faq: [
        { q: 'Which areas can needle epilation be applied to?', a: 'It can be safely and meticulously applied to all body areas with unwanted hair, including the face, glabella, neck, inner ears, and sensitive regions.' },
        { q: 'What is the main difference from laser hair removal?', a: 'It is the exclusive method generating absolute results on yellow, white, red, and fine vellus hairs that lack melanin and are invisible to standard optic lasers.' },
        { q: 'Will my skin sustain damage during the procedure?', a: 'Since microscopic gold-insulated needles deliver the precise current solely to the follicle, surrounding tissue is preserved, highly minimizing any risk of scarring.' },
        { q: 'How many sessions are needed for permanent clearance?', a: 'Due to the differing growth cycles of human hair, thoroughly eliminating all follicles in a specific area mandates a structured series of sessions.' },
        { q: 'What is the recovery process like after application?', a: 'Mild redness and pinpoint micro-crusting around the follicle are perfectly expected in the initial days, healing rapidly with proper antibacterial soothing creams.' },
      ],
      seoTitle: 'Needle Laser Epilation | Megaeste Clinic',
      seoDescription: 'Get rid of resistant hair with needle laser epilation. Ideal solution for sensitive areas.',
      relatedSlugs: ['laser-hair-removal', 'medical-skin-care'],
    },
  },
];

export function getServiceBySlug(slug: string, lang: 'tr' | 'en'): Service | undefined {
  return services.find(s => s[lang].slug === slug);
}

export function getRelatedServices(slugs: string[], lang: 'tr' | 'en'): Service[] {
  return services.filter(s => slugs.includes(s[lang].slug));
}

export function getAllServiceSlugs(lang: 'tr' | 'en'): string[] {
  return services.map(s => s[lang].slug);
}
