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
    image: '/images/services/dhi-sac-ekimi.png',
    tr: {
      title: 'DHI Saç Ekimi',
      slug: 'dhi-sac-ekimi',
      category: 'Saç Ekimi Tedavileri',
      categorySlug: 'sac-ekimi',
      heroDescription: 'Choi Pen teknolojisi ile kanal açmadan, doğrudan implantasyon yöntemiyle gerçekleştirilen ileri düzey saç ekimi uygulaması.',
      longDescription: `DHI (Direct Hair Implantation) saç ekimi, özel olarak tasarlanmış Choi Pen (implanter kalem) kullanılarak gerçekleştirilen yeni nesil bir saç ekimi tekniğidir. Bu yöntemde greftler donör bölgeden tek tek alınarak, kanal açma işlemine gerek kalmadan doğrudan ekim yapılır.

Bu teknik sayesinde greftlerin vücut dışında bekleme süresi minimuma iner ve kök hücrelerin canlılığı korunur. Daha sık ekim imkânı sunan DHI yöntemi, özellikle ön saç çizgisi tasarımında doğal ve estetik sonuçlar elde edilmesini sağlar.

Megaeste kliniğinde DHI saç ekimi, deneyimli uzman kadromuz tarafından steril ortamda, ileri teknoloji cihazlarla uygulanmaktadır. Her hasta için kişiye özel ekim planı hazırlanır ve doğal saç açısına uygun implantasyon gerçekleştirilir.`,
      process: [
        { step: 1, title: 'Konsültasyon ve Analiz', description: 'Uzman hekimimiz tarafından saç ve saçlı deri analizi yapılır. Donör alan kapasitesi değerlendirilir.' },
        { step: 2, title: 'Ön Saç Çizgisi Tasarımı', description: 'Yüz yapınıza ve beklentilerinize uygun doğal ön saç çizgisi belirlenir.' },
        { step: 3, title: 'Lokal Anestezi', description: 'Konfor odaklı lokal anestezi uygulaması ile ağrısız bir işlem süreci sağlanır.' },
        { step: 4, title: 'Greft Toplama', description: 'Donör bölgeden mikro motor ile greftler tek tek ve hassas şekilde çıkarılır.' },
        { step: 5, title: 'DHI İmplantasyon', description: 'Choi Pen ile greftler doğal açı ve yönde doğrudan ekilir.' },
        { step: 6, title: 'Kontrol ve Bakım', description: 'İşlem sonrası bakım protokolü uygulanır ve düzenli kontroller planlanır.' },
      ],
      faq: [
        { q: 'DHI saç ekimi ağrılı mıdır?', a: 'Lokal anestezi sayesinde işlem sırasında ağrı hissedilmez.' },
        { q: 'İşlem ne kadar sürer?', a: 'Ekilecek greft sayısına bağlı olarak 6-8 saat sürebilir.' },
        { q: 'Sonuçlar ne zaman görülür?', a: 'Ekilen saçlar 3. aydan itibaren çıkmaya başlar, tam sonuç 8-12 ayda elde edilir.' },
        { q: 'DHI ile FUE arasındaki fark nedir?', a: 'DHI yönteminde kanal açma aşaması yoktur, greftler doğrudan Choi Pen ile ekilir. Bu sayede daha sık ve doğal sonuçlar elde edilir.' },
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
        { q: 'Is DHI hair transplant painful?', a: 'No pain is felt during the procedure thanks to local anesthesia.' },
        { q: 'How long does the procedure take?', a: 'It can take 6-8 hours depending on the number of grafts.' },
        { q: 'When will results be visible?', a: 'Transplanted hair starts growing from the 3rd month, full results are achieved in 8-12 months.' },
        { q: 'What is the difference between DHI and FUE?', a: 'In DHI, there is no canal opening phase. Grafts are directly implanted with the Choi Pen, resulting in denser and more natural results.' },
      ],
      seoTitle: 'DHI Hair Transplant | Megaeste Clinic',
      seoDescription: 'Natural, dense and permanent results with DHI hair transplant. Painless hair transplant with Choi Pen technology.',
      relatedSlugs: ['sapphire-hair-transplant', 'hair-mesotherapy'],
    },
  },
  {
    id: 'safir-sac-ekimi',
    image: '/images/services/safir-sac-ekimi.png',
    tr: {
      title: 'Safir Saç Ekimi',
      slug: 'safir-sac-ekimi',
      category: 'Saç Ekimi Tedavileri',
      categorySlug: 'sac-ekimi',
      heroDescription: 'Safir uçlu bıçaklarla açılan mikro kanallar sayesinde daha hızlı iyileşme ve doğal sonuçlar sunan saç ekimi tekniği.',
      longDescription: `Safir FUE saç ekimi, geleneksel çelik bıçaklar yerine safir taşından üretilmiş özel mikro bıçaklar kullanılarak gerçekleştirilen bir yöntemdir. Safir bıçakların keskin ve pürüzsüz yüzeyi sayesinde daha ince kanallar açılır, bu da iyileşme sürecini hızlandırır.

Safir uçlu bıçaklar, dokuya minimum hasar vererek daha yoğun ekim yapılmasına olanak tanır. Bu sayede daha sık ve doğal görünümlü sonuçlar elde edilir. Kabuklanma süreci daha kısa sürer ve ekim bölgesinde iz kalma riski azalır.

Megaeste kliniğinde safir saç ekimi, FDA onaylı ekipmanlarla ve uzman ekibimiz tarafından uygulanmaktadır.`,
      process: [
        { step: 1, title: 'Konsültasyon', description: 'Detaylı saç analizi ve kişiye özel tedavi planı oluşturulur.' },
        { step: 2, title: 'Saç Çizgisi Belirleme', description: 'Doğal görünüm için optimum ön saç çizgisi tasarlanır.' },
        { step: 3, title: 'Anestezi', description: 'Lokal anestezi ile ağrısız işlem ortamı sağlanır.' },
        { step: 4, title: 'Greft Çıkarma', description: 'Mikro motor ile greftler hassasiyetle toplanır.' },
        { step: 5, title: 'Safir Kanal Açma', description: 'Safir uçlu bıçaklarla mikro kanallar açılır.' },
        { step: 6, title: 'Yerleştirme ve Bakım', description: 'Greftler yerleştirilir, bakım protokolü uygulanır.' },
      ],
      faq: [
        { q: 'Safir saç ekiminin avantajı nedir?', a: 'Daha ince kanallar açılması sayesinde iyileşme süreci hızlanır ve daha doğal sonuçlar elde edilir.' },
        { q: 'Kaç greft ekilebilir?', a: 'Donör alan kapasitesine göre tek seansta 4000-6000 greft ekilebilir.' },
        { q: 'İşlem sonrası iz kalır mı?', a: 'Safir bıçakların ince yapısı sayesinde iz kalma riski minimumdur.' },
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
        { q: 'What is the advantage of sapphire hair transplant?', a: 'Faster healing and more natural results due to finer channels opened by sapphire blades.' },
        { q: 'How many grafts can be transplanted?', a: '4000-6000 grafts can be transplanted in a single session depending on donor area capacity.' },
        { q: 'Will there be scarring?', a: 'The risk of scarring is minimal due to the fine structure of sapphire blades.' },
      ],
      seoTitle: 'Sapphire Hair Transplant (FUE) | Megaeste Clinic',
      seoDescription: 'Fast healing, natural results with Sapphire FUE hair transplant. Micro channel technique with sapphire-tipped blades.',
      relatedSlugs: ['dhi-hair-transplant', 'hair-mesotherapy'],
    },
  },
  {
    id: 'sac-mezoterapisi',
    image: '/images/services/sac-mezoterapisi.png',
    tr: {
      title: 'Saç Mezoterapisi',
      slug: 'sac-mezoterapisi',
      category: 'Saç Ekimi Tedavileri',
      categorySlug: 'sac-ekimi',
      heroDescription: 'Saç dökülmesini durduran ve mevcut saçları güçlendiren vitamin, mineral ve peptit içerikli mezoterapi uygulaması.',
      longDescription: `Saç mezoterapisi, saç derisine mikroenjeksiyonlar aracılığıyla vitamin, mineral, amino asit ve büyüme faktörleri içeren özel kokteyllerin uygulanmasıdır. Bu tedavi yöntemi, saç köklerini besleyerek saçların güçlenmesini ve yenilenmesini destekler.

Saç mezoterapisi, saç dökülmesinin erken evrelerinde önleyici bir tedavi olarak uygulanabilir. Ayrıca saç ekimi sonrası iyileşme sürecini hızlandırmak ve ekilen saçların tutma oranını artırmak amacıyla da tercih edilmektedir.

Megaeste kliniğinde uygulanan saç mezoterapisi protokolü, hastanın ihtiyacına göre özel olarak hazırlanan kokteyllerle gerçekleştirilir.`,
      process: [
        { step: 1, title: 'Saç Analizi', description: 'Trikoskopik analiz ile saç ve saçlı deri durumu değerlendirilir.' },
        { step: 2, title: 'Kokteyl Hazırlama', description: 'Kişiye özel vitamin ve mineral kokteyli hazırlanır.' },
        { step: 3, title: 'Uygulama', description: 'Mikroenjeksiyonlar ile kokteyl saç derisine uygulanır.' },
        { step: 4, title: 'Bakım Önerileri', description: 'İşlem sonrası bakım ve beslenme önerileri verilir.' },
      ],
      faq: [
        { q: 'Kaç seans gerekir?', a: 'Genellikle 4-6 seans önerilir, seanslar arası 2-4 hafta beklenir.' },
        { q: 'Sonuçlar kalıcı mıdır?', a: 'Düzenli bakım seanslarıyla sonuçlar uzun süre korunabilir.' },
        { q: 'Kimlere uygulanabilir?', a: 'Saç dökülmesi yaşayan veya saçlarını güçlendirmek isteyen herkes için uygundur.' },
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
        { q: 'How many sessions are needed?', a: 'Generally 4-6 sessions are recommended, with 2-4 weeks between sessions.' },
        { q: 'Are results permanent?', a: 'Results can be maintained for a long time with regular maintenance sessions.' },
        { q: 'Who can it be applied to?', a: 'Suitable for anyone experiencing hair loss or wanting to strengthen their hair.' },
      ],
      seoTitle: 'Hair Mesotherapy | Megaeste Clinic',
      seoDescription: 'Stop hair loss with hair mesotherapy. Vitamin and mineral supported mesotherapy application.',
      relatedSlugs: ['dhi-hair-transplant', 'sapphire-hair-transplant'],
    },
  },
  {
    id: 'burun-estetigi',
    image: '/images/services/burun-estetigi.png',
    tr: {
      title: 'Burun Estetiği',
      slug: 'burun-estetigi',
      category: 'Plastik Cerrahi',
      categorySlug: 'plastik-cerrahi',
      heroDescription: 'Yüz uyumunu sağlayan, nefes alma fonksiyonunu iyileştiren ve estetik görünüm kazandıran rinoplasti uygulaması.',
      longDescription: `Burun estetiği (rinoplasti), burnun şeklini ve boyutunu düzeltmek amacıyla uygulanan cerrahi bir işlemdir. Burun ucu şekillendirme, burun kemeri düzeltme, burun kanatları daraltma ve septum düzeltme gibi çeşitli düzeltmeler yapılabilir.

Modern rinoplasti teknikleri, doğal görünümle uyumlu sonuçlar elde etmeyi hedefler. Yüz oranlarına uyumlu, nefes alma fonksiyonunu bozmayan ve estetik açıdan tatmin edici sonuçlar sağlanır.

Megaeste kliniğinde burun estetiği operasyonları, deneyimli plastik cerrahlarımız tarafından ileri teknoloji ameliyathane koşullarında gerçekleştirilmektedir.`,
      process: [
        { step: 1, title: 'Detaylı Muayene', description: 'Burun yapısı, cilt kalınlığı ve yüz oranları değerlendirilir.' },
        { step: 2, title: '3D Simülasyon', description: 'Bilgisayar ortamında olası sonuçlar görselleştirilir.' },
        { step: 3, title: 'Operasyon', description: 'Genel anestezi altında cerrahi müdahale gerçekleştirilir.' },
        { step: 4, title: 'İyileşme Takibi', description: 'Düzenli kontroller ile iyileşme süreci takip edilir.' },
      ],
      faq: [
        { q: 'İyileşme süreci ne kadar sürer?', a: 'Alçı 1 hafta sonra alınır, şişlik 2-3 haftada büyük ölçüde iner. Tam sonuç 6-12 ayda ortaya çıkar.' },
        { q: 'Operasyon izi kalır mı?', a: 'Kapalı teknik ile burun içinden yapılan işlemlerde dışarıdan görünür iz kalmaz.' },
        { q: 'Nefes alma problemim de çözülür mü?', a: 'Evet, burun estetiği ile birlikte septum sapması gibi fonksiyonel sorunlar da ele alınabilir.' },
      ],
      seoTitle: 'Burun Estetiği (Rinoplasti) | Megaeste Klinik',
      seoDescription: 'Burun estetiği ile doğal ve uyumlu görünüm. Deneyimli cerrahlarla rinoplasti uygulaması. Megaeste klinik.',
      relatedSlugs: ['goz-kapagi-estetigi', 'meme-estetigi'],
    },
    en: {
      title: 'Rhinoplasty',
      slug: 'rhinoplasty',
      category: 'Plastic Surgery',
      categorySlug: 'plastic-surgery',
      heroDescription: 'Rhinoplasty application that provides facial harmony, improves breathing function and aesthetic appearance.',
      longDescription: `Rhinoplasty is a surgical procedure performed to correct the shape and size of the nose. Various corrections such as nose tip shaping, nasal bridge correction, alar base narrowing and septum correction can be made.

Modern rhinoplasty techniques aim to achieve results compatible with a natural appearance. Results that are in harmony with facial proportions, do not impair breathing function and are aesthetically satisfying are achieved.

At Megaeste clinic, rhinoplasty operations are performed by our experienced plastic surgeons in advanced technology operating room conditions.`,
      process: [
        { step: 1, title: 'Detailed Examination', description: 'Nasal structure, skin thickness and facial proportions are evaluated.' },
        { step: 2, title: '3D Simulation', description: 'Possible results are visualized in computer environment.' },
        { step: 3, title: 'Operation', description: 'Surgical intervention is performed under general anesthesia.' },
        { step: 4, title: 'Recovery Follow-up', description: 'Recovery process is monitored with regular check-ups.' },
      ],
      faq: [
        { q: 'How long is the recovery?', a: 'Cast is removed after 1 week, swelling largely subsides in 2-3 weeks. Full results appear in 6-12 months.' },
        { q: 'Will there be scars?', a: 'With closed technique performed through the nostrils, there are no visible external scars.' },
        { q: 'Will breathing problems be resolved?', a: 'Yes, functional issues like septum deviation can be addressed along with rhinoplasty.' },
      ],
      seoTitle: 'Rhinoplasty (Nose Job) | Megaeste Clinic',
      seoDescription: 'Natural and harmonious appearance with rhinoplasty. Expert surgeons at Megaeste clinic.',
      relatedSlugs: ['blepharoplasty', 'breast-aesthetics'],
    },
  },
  {
    id: 'goz-kapagi-estetigi',
    image: '/images/services/goz-kapagi-estetigi.png',
    tr: {
      title: 'Göz Kapağı Estetiği',
      slug: 'goz-kapagi-estetigi',
      category: 'Plastik Cerrahi',
      categorySlug: 'plastik-cerrahi',
      heroDescription: 'Göz çevresindeki sarkmaları gidererek genç ve dinlenmiş bir görünüm sağlayan blefaroplasti uygulaması.',
      longDescription: `Göz kapağı estetiği (blefaroplasti), üst ve/veya alt göz kapaklarındaki fazla deri, kas ve yağ dokusunun çıkarılarak göz çevresinin gençleştirilmesi işlemidir.

Yaşlanma ile birlikte göz kapaklarında sarkma, torbalanma ve kırışıklıklar oluşabilir. Bu durum yorgun ve yaşlı bir ifadeye neden olur. Blefaroplasti ile göz bölgesine genç, dinlenmiş ve canlı bir görünüm kazandırılır.

İşlem, lokal veya genel anestezi altında uygulanabilir ve günlük hayata dönüş süresi kısadır.`,
      process: [
        { step: 1, title: 'Göz Muayenesi', description: 'Göz kapağı yapısı ve çevre dokuları detaylı incelenir.' },
        { step: 2, title: 'Planlama', description: 'Alınacak doku miktarı ve kesi hatları belirlenir.' },
        { step: 3, title: 'Operasyon', description: 'Fazla doku çıkarılır ve estetik dikişler uygulanır.' },
        { step: 4, title: 'Kontrol', description: 'İyileşme süreci takip edilir, dikişler alınır.' },
      ],
      faq: [
        { q: 'İz kalır mı?', a: 'Kesi göz kapağının doğal kıvrımına yapıldığından iz neredeyse görünmez hale gelir.' },
        { q: 'İşlem sonrası ne kadar sürede iyileşirim?', a: 'Şişlik ve morluklar 7-10 gün içinde büyük ölçüde geçer.' },
      ],
      seoTitle: 'Göz Kapağı Estetiği (Blefaroplasti) | Megaeste Klinik',
      seoDescription: 'Göz kapağı estetiği ile genç ve dinlenmiş görünüm. Blefaroplasti uygulaması. Megaeste klinik.',
      relatedSlugs: ['burun-estetigi', 'medikal-cilt-bakimi'],
    },
    en: {
      title: 'Blepharoplasty',
      slug: 'blepharoplasty',
      category: 'Plastic Surgery',
      categorySlug: 'plastic-surgery',
      heroDescription: 'Blepharoplasty application that provides a youthful and rested appearance by removing sagging around the eyes.',
      longDescription: `Blepharoplasty is the procedure of rejuvenating the eye area by removing excess skin, muscle and fat tissue from the upper and/or lower eyelids.

With aging, sagging, bagging and wrinkles can form on the eyelids. This causes a tired and aged expression. Blepharoplasty gives the eye area a young, rested and vibrant appearance.

The procedure can be performed under local or general anesthesia with a short return time to daily life.`,
      process: [
        { step: 1, title: 'Eye Examination', description: 'Eyelid structure and surrounding tissues are examined in detail.' },
        { step: 2, title: 'Planning', description: 'Amount of tissue to be removed and incision lines are determined.' },
        { step: 3, title: 'Operation', description: 'Excess tissue is removed and aesthetic sutures are applied.' },
        { step: 4, title: 'Follow-up', description: 'Recovery process is monitored, sutures are removed.' },
      ],
      faq: [
        { q: 'Will there be scars?', a: 'Since the incision is made in the natural crease of the eyelid, scars become nearly invisible.' },
        { q: 'How long until recovery?', a: 'Swelling and bruising largely subside within 7-10 days.' },
      ],
      seoTitle: 'Blepharoplasty (Eyelid Surgery) | Megaeste Clinic',
      seoDescription: 'Youthful and rested appearance with blepharoplasty. Eyelid surgery at Megaeste clinic.',
      relatedSlugs: ['rhinoplasty', 'medical-skin-care'],
    },
  },
  {
    id: 'meme-estetigi',
    image: '/images/services/meme-estetigi.png',
    tr: {
      title: 'Meme Estetiği',
      slug: 'meme-estetigi',
      category: 'Plastik Cerrahi',
      categorySlug: 'plastik-cerrahi',
      heroDescription: 'Meme büyütme, küçültme ve dikleştirme operasyonları ile vücut uyumunuza uygun estetik çözümler.',
      longDescription: `Meme estetiği, meme büyütme (augmentasyon), meme küçültme (redüksiyon) ve meme dikleştirme (mastopeksi) gibi farklı cerrahi prosedürleri kapsar.

Her hasta için vücut yapısına, cilt elastikiyetine ve beklentilerine uygun bir tedavi planı oluşturulur. Modern implant teknolojileri ve cerrahi teknikler ile doğal görünümlü ve güvenli sonuçlar hedeflenir.

Megaeste kliniğinde tüm meme estetiği operasyonları, akredite ameliyathane koşullarında deneyimli plastik cerrahlarımız tarafından gerçekleştirilmektedir.`,
      process: [
        { step: 1, title: 'Konsültasyon', description: 'Detaylı muayene ve beklenti analizi yapılır.' },
        { step: 2, title: 'Planlama', description: 'Uygun teknik ve varsa implant tipi belirlenir.' },
        { step: 3, title: 'Operasyon', description: 'Genel anestezi altında cerrahi işlem gerçekleştirilir.' },
        { step: 4, title: 'Takip', description: 'Düzenli kontroller ile iyileşme süreci izlenir.' },
      ],
      faq: [
        { q: 'İyileşme süreci nasıldır?', a: 'İlk hafta dinlenme önerilir. 2-3 hafta sonra normal aktivitelere dönülebilir.' },
        { q: 'İmplant ömrü ne kadardır?', a: 'Yeni nesil implantlar uzun ömürlüdür, düzenli kontroller ile takip edilir.' },
      ],
      seoTitle: 'Meme Estetiği | Megaeste Klinik',
      seoDescription: 'Meme büyütme, küçültme ve dikleştirme operasyonları. Deneyimli cerrahlarla meme estetiği. Megaeste klinik.',
      relatedSlugs: ['burun-estetigi', 'goz-kapagi-estetigi'],
    },
    en: {
      title: 'Breast Aesthetics',
      slug: 'breast-aesthetics',
      category: 'Plastic Surgery',
      categorySlug: 'plastic-surgery',
      heroDescription: 'Aesthetic solutions with breast augmentation, reduction and lift operations.',
      longDescription: `Breast aesthetics includes different surgical procedures such as breast augmentation, breast reduction, and breast lift (mastopexy).

A treatment plan suitable for each patient's body structure, skin elasticity and expectations is created. Natural-looking and safe results are targeted with modern implant technologies and surgical techniques.

At Megaeste clinic, all breast aesthetics operations are performed by our experienced plastic surgeons in accredited operating room conditions.`,
      process: [
        { step: 1, title: 'Consultation', description: 'Detailed examination and expectation analysis.' },
        { step: 2, title: 'Planning', description: 'Appropriate technique and implant type if applicable are determined.' },
        { step: 3, title: 'Operation', description: 'Surgical procedure performed under general anesthesia.' },
        { step: 4, title: 'Follow-up', description: 'Recovery process monitored with regular check-ups.' },
      ],
      faq: [
        { q: 'How is the recovery process?', a: 'Rest is recommended for the first week. Normal activities can be resumed after 2-3 weeks.' },
        { q: 'What is the implant lifespan?', a: 'New generation implants are long-lasting and monitored with regular check-ups.' },
      ],
      seoTitle: 'Breast Aesthetics | Megaeste Clinic',
      seoDescription: 'Breast augmentation, reduction and lift operations. Expert surgeons at Megaeste clinic.',
      relatedSlugs: ['rhinoplasty', 'blepharoplasty'],
    },
  },
  {
    id: 'medikal-cilt-bakimi',
    image: '/images/services/medikal-cilt-bakimi.png',
    tr: {
      title: 'Medikal Cilt Bakımı',
      slug: 'medikal-cilt-bakimi',
      category: 'Medikal Estetik',
      categorySlug: 'medikal-estetik',
      heroDescription: 'Cilt tipinize özel protokollerle uygulanan medikal cilt bakımı ile sağlıklı ve ışıltılı bir cilde kavuşun.',
      longDescription: `Medikal cilt bakımı, dermatolojik ve estetik açıdan cildinizi analiz ederek kişiye özel protokollerle uygulanan profesyonel bir bakım sürecidir. Kimyasal peeling, hydrafacial, PRP, karbon peeling gibi ileri teknoloji uygulamalar bu kapsamda değerlendirilir.

Cilt analiz cihazları ile cildinizin nem oranı, elastikiyeti, gözenek yapısı ve pigmentasyon durumu detaylı olarak incelenir. Sonuçlara göre bireysel bakım planı oluşturulur.

Megaeste kliniğinde medikal cilt bakımı, uzman dermatologlar ve medikal estetik uzmanları gözetiminde uygulanmaktadır.`,
      process: [
        { step: 1, title: 'Cilt Analizi', description: 'Cilt analiz cihazları ile detaylı cilt değerlendirmesi yapılır.' },
        { step: 2, title: 'Protokol Belirleme', description: 'Cilt tipine uygun bakım protokolü oluşturulur.' },
        { step: 3, title: 'Uygulama', description: 'Seçilen prosedürler uygulanır.' },
        { step: 4, title: 'Bakım Planı', description: 'Evde bakım önerileri ve takip seansları planlanır.' },
      ],
      faq: [
        { q: 'Ne sıklıkla uygulanmalı?', a: 'Cilt tipine göre 2-4 hafta aralıklarla düzenli seanslar önerilir.' },
        { q: 'Sonuçlar ne zaman görülür?', a: 'İlk seanstan itibaren cilt parlaklığında artış gözlemlenir.' },
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
        { q: 'How often should it be applied?', a: 'Regular sessions at 2-4 week intervals are recommended depending on skin type.' },
        { q: 'When are results visible?', a: 'Increased skin radiance is observed from the first session.' },
      ],
      seoTitle: 'Medical Skin Care | Megaeste Clinic',
      seoDescription: 'Healthy and radiant skin with medical skin care. Personalized protocols at Megaeste clinic.',
      relatedSlugs: ['facial-mesotherapy', 'laser-hair-removal'],
    },
  },
  {
    id: 'yuz-mezoterapi',
    image: '/images/services/yuz-mezoterapi.png',
    tr: {
      title: 'Yüz Mezoterapi',
      slug: 'yuz-mezoterapi',
      category: 'Medikal Estetik',
      categorySlug: 'medikal-estetik',
      heroDescription: 'Hyalüronik asit, vitamin ve antioksidanlarla cildin derinlemesine beslenmesini sağlayan mezoterapi uygulaması.',
      longDescription: `Yüz mezoterapisi, cildin alt tabakalarına vitamin, mineral, hyalüronik asit ve amino asit gibi aktif maddelerin mikroenjeksiyonlarla verilmesidir. Bu sayede cilt içeriden beslenirve yenilenir.

Yüz mezoterapisi, kırışıklık azaltma, cilt tonunu eşitleme, leke tedavisi, nem dengesinin sağlanması ve genel cilt gençleştirme amacıyla uygulanır.

Megaeste kliniğinde yüz mezoterapisi, FDA onaylı ürünlerle ve deneyimli uzmanlarımız tarafından uygulanmaktadır.`,
      process: [
        { step: 1, title: 'Cilt Değerlendirmesi', description: 'Cildin ihtiyaçları ve tedavi hedefleri belirlenir.' },
        { step: 2, title: 'Kokteyl Seçimi', description: 'Cilt tipine uygun mezoterapi kokteyli hazırlanır.' },
        { step: 3, title: 'Uygulama', description: 'Mikroenjeksiyonlar ile aktif maddeler cilt altına verilir.' },
        { step: 4, title: 'Kontrol', description: 'Takip seansları ile sonuçlar değerlendirilir.' },
      ],
      faq: [
        { q: 'Yüz mezoterapisi ağrılı mıdır?', a: 'Kullanılan iğneler çok ince olduğundan minimal düzeyde hissedilir.' },
        { q: 'Kaç seans gerekir?', a: 'Genellikle 4-6 seans önerilir.' },
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
        { q: 'Is facial mesotherapy painful?', a: 'The needles used are very fine, so it is felt at a minimal level.' },
        { q: 'How many sessions are needed?', a: 'Generally 4-6 sessions are recommended.' },
      ],
      seoTitle: 'Facial Mesotherapy | Megaeste Clinic',
      seoDescription: 'Skin renewal and rejuvenation with facial mesotherapy. Vitamin and hyaluronic acid supported.',
      relatedSlugs: ['medical-skin-care', 'laser-hair-removal'],
    },
  },
  {
    id: 'lazer-epilasyon',
    image: '/images/services/lazer-epilasyon.png',
    tr: {
      title: 'Lazer Epilasyon',
      slug: 'lazer-epilasyon',
      category: 'Epilasyon',
      categorySlug: 'epilasyon',
      heroDescription: 'Son teknoloji lazer cihazlarıyla güvenli, etkili ve kalıcı tüy azaltma uygulaması.',
      longDescription: `Lazer epilasyon, yoğun ışık enerjisinin kıl kökündeki melanin pigmentini hedef alarak kıl foliküllerini etkisiz hale getirmesiyle gerçekleşen bir tüy azaltma yöntemidir.

Modern lazer cihazları, farklı cilt tiplerine ve bölgelere uygun ayarlarla çalışarak güvenli bir uygulama sunar. Her seansta aktif tüy köklerinin önemli bir kısmı etkisiz hale getirilir.

Megaeste kliniğinde lazer epilasyon, FDA onaylı son nesil cihazlarla tekniker ve uzman gözetiminde uygulanmaktadır.`,
      process: [
        { step: 1, title: 'Cilt ve Tüy Analizi', description: 'Cilt tipi ve tüy yapısı değerlendirilerek uygun lazer parametreleri belirlenir.' },
        { step: 2, title: 'Test Atışı', description: 'Küçük bir bölgede test uygulaması yapılır.' },
        { step: 3, title: 'Uygulama', description: 'Belirlenen bölgeye lazer seansı uygulanır.' },
        { step: 4, title: 'Bakım', description: 'İşlem sonrası cilt bakım önerileri verilir.' },
      ],
      faq: [
        { q: 'Kaç seans gerekir?', a: 'Bölgeye göre 6-8 seans önerilir, seanslar arası 4-6 hafta beklenir.' },
        { q: 'Tüm cilt tiplerine uygulanabilir mi?', a: 'Yeni nesil lazer cihazları farklı cilt tiplerine uygun modlara sahiptir.' },
        { q: 'Kalıcı mıdır?', a: 'Lazer epilasyon kalıcı tüy azaltma sağlar. Yılda 1-2 bakım seansı önerilir.' },
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
      heroDescription: 'Safe, effective and permanent hair reduction with latest technology laser devices.',
      longDescription: `Laser hair removal is a hair reduction method that works by targeting the melanin pigment in the hair root with intense light energy to disable hair follicles.

Modern laser devices offer a safe application by working with settings suitable for different skin types and areas. A significant portion of active hair roots are disabled in each session.

At Megaeste clinic, laser hair removal is applied with FDA-approved latest generation devices under technician and specialist supervision.`,
      process: [
        { step: 1, title: 'Skin & Hair Analysis', description: 'Skin type and hair structure are evaluated and appropriate laser parameters are determined.' },
        { step: 2, title: 'Test Shot', description: 'Test application is performed on a small area.' },
        { step: 3, title: 'Application', description: 'Laser session is applied to the determined area.' },
        { step: 4, title: 'Care', description: 'Post-procedure skin care recommendations are given.' },
      ],
      faq: [
        { q: 'How many sessions are needed?', a: '6-8 sessions are recommended depending on the area, with 4-6 weeks between sessions.' },
        { q: 'Is it applicable to all skin types?', a: 'New generation laser devices have modes suitable for different skin types.' },
        { q: 'Is it permanent?', a: 'Laser hair removal provides permanent hair reduction. 1-2 maintenance sessions per year are recommended.' },
      ],
      seoTitle: 'Laser Hair Removal | Megaeste Clinic',
      seoDescription: 'Permanent hair reduction with laser hair removal. Latest technology laser devices at Megaeste clinic.',
      relatedSlugs: ['needle-laser-epilation', 'medical-skin-care'],
    },
  },
  {
    id: 'igneli-lazer-epilasyonu',
    image: '/images/services/igneli-lazer-epilasyonu.png',
    tr: {
      title: 'İğneli Lazer Epilasyonu',
      slug: 'igneli-lazer-epilasyonu',
      category: 'Epilasyon',
      categorySlug: 'epilasyon',
      heroDescription: 'Hassas bölgeler ve dirençli tüyler için etkili çözüm sunan iğneli lazer epilasyon uygulaması.',
      longDescription: `İğneli lazer epilasyonu (Needle Epilation), konvansiyonel lazer epilasyona dirençli olan veya hassas bölgelerdeki tüylerin giderilmesi için uygulanan özel bir yöntemdir.

İnce bir iğne aracılığıyla doğrudan kıl folikülüne enerji iletilerek kıl kökü etkisiz hale getirilir. Bu yöntem, özellikle açık renkli tüylerde ve küçük alanlarda tercih edilir.

Megaeste kliniğinde iğneli epilasyon, deneyimli uzmanlarımız tarafından steril koşullarda uygulanmaktadır.`,
      process: [
        { step: 1, title: 'Değerlendirme', description: 'Tüy yapısı ve uygulama bölgesi incelenir.' },
        { step: 2, title: 'Uygulama', description: 'İğne ile kıl folikülüne enerji iletilir.' },
        { step: 3, title: 'Bakım', description: 'İşlem sonrası bakım ve kontrol planlanır.' },
      ],
      faq: [
        { q: 'Hangi bölgelere uygulanır?', a: 'Yüz, boyun ve hassas bölgeler dahil tüm vücut bölgelerine uygulanabilir.' },
        { q: 'Lazer epilasyondan farkı nedir?', a: 'İğneli epilasyon, lazer epilasyona dirençli olan açık renkli ve ince tüylerde etkilidir.' },
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
        { q: 'Which areas can it be applied to?', a: 'Can be applied to all body areas including face, neck and sensitive areas.' },
        { q: 'What is the difference from laser?', a: 'Needle epilation is effective on light-colored and fine hair resistant to laser.' },
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
