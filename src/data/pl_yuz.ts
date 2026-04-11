import { Service } from './services';

export const yuzServices: Service[] = [
  {
    id: 'kapali-burun-ameliyati',
    image: '/images/megaeste-burun-gorsel.webp',
    tr: {
      title: 'Kapalı Burun Estetiği',
      slug: 'kapali-burun-ameliyati',
      category: 'Burun Estetiği',
      categorySlug: 'burun-estetigi',
      heroDescription: 'Burun dışından herhangi bir kesi yapılmadan, burun içi anatomik yapıların yeniden şekillendirildiği rinoplasti yöntemidir.',
      longDescription: `<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#729788] rounded-full"></span> Kapalı Burun Estetiği (Kapalı Rinoplasti) Yaklaşımı
</h2>
<p class="mb-8 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Geleneksel açık burun estetiğinden farklı olarak, cerrahi kesilerin tamamen burun deliklerinin (nostril) iç kısmından yapıldığı tıbbi bir prosedürdür. Bu yöntemde burun ucundaki bağlar ve yumuşak dokular büyük ölçüde korunarak, kemik ve kıkırdak yapıların anatomik olarak yeniden düzenlenmesi amaçlanır. Dışarıdan görünen bir dikiş izi olmaması, kapalı tekniğin temel özelliklerinden biridir.</p>

<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#729788] rounded-full"></span> İyileşme Süreci
</h2>
<p class="mb-6 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Damar ve sinir ağları büyük oranda korunduğu için operasyon sonrası oluşabilecek morluk ve şişlikler (ödem) nispeten daha kontrollü seyredebilmekte, hastaların günlük yaşantılarına dönüş süreci desteklenmektedir.</p>`,
      process: [
        { step: 1, title: 'Klinik Değerlendirme', description: 'Burun içi yapılar ve genel yüz oranları tıbbi açıdan değerlendirilir.' },
        { step: 2, title: 'Cerrahi İşlem', description: 'Ameliyat tamamen burun delikleri içinden girilerek gerçekleştirilir.' },
        { step: 3, title: 'Şekillendirme', description: 'Gerekli durumlarda kemer (dorsal hump) törpülenir veya kıkırdak destekleri yerleştirilir.' },
        { step: 4, title: 'İyileşme Dönemi', description: 'Gelişmiş atel sistemleri kullanılarak erken dönem doku iyileşmesi takip edilir.' }
      ],
      faq: [
        { q: 'Kapalı yöntem herkese uygulanabilir mi?', a: 'Genellikle primer (ilk kez ameliyat olacak) hastalarda tercih edilmekle birlikte, hastanın fizyolojik uygunluğuna cerrah muayenesi sonrasında karar verilir.' },
        { q: 'Açık yöntemle arasındaki temel medikal fark nedir?', a: 'Dış kolumella adı verilen bölgede kesi yapılmaması ve burun ucu bağlarının korunması anatomik açıdan temel farklılıktır.' },
        { q: 'Burun ucunda his kaybı olur mu?', a: 'Cerrahi sonrası erken dönemde hissedilen uyuşukluk beklenen bir durumdur; dokuların iyileşmesiyle birlikte his genellikle haftalar içinde geri döner.' }
      ],
      seoTitle: 'Kapalı Burun Estetiği (Kapalı Rinoplasti) | Megaeste Klinik',
      seoDescription: 'Burun dışında kesi yapılmaksızın uygulanan kapalı burun ameliyatı (kapalı rinoplasti) süreci ve teknik detayları.',
      relatedSlugs: ['yuz-germe', 'goz-kapagi-estetigi']
    },
    en: {
      title: 'Closed Rhinoplasty',
      slug: 'closed-rhinoplasty',
      category: 'Nose Aesthetics',
      categorySlug: 'nose-aesthetics',
      heroDescription: 'A rhinoplasty technique where the internal nasal structures are reshaped without any external incisions.',
      longDescription: `Unlike traditional open rhinoplasty, closed rhinoplasty is a medical procedure performed strictly through incisions made internally within the nostrils. This approach aims to preserve the soft tissues and nasal tip ligaments while anatomically reorganizing the bone and cartilage structures. The absence of visible external scarring is one of the primary characteristics of the closed technique.`,
      process: [
        { step: 1, title: 'Clinical Evaluation', description: 'Internal nasal structures and facial proportions are medically assessed.' },
        { step: 2, title: 'Surgical Procedure', description: 'The operation is performed entirely via internal nostril incisions.' },
        { step: 3, title: 'Structural Reshaping', description: 'Dorsal humps are addressed and cartilage supports are positioned when necessary.' },
        { step: 4, title: 'Recovery Period', description: 'Early-stage tissue recovery is monitored utilizing advanced splinting systems.' }
      ],
      faq: [
        { q: 'Can the closed method be applied to all patients?', a: 'While typically preferred for primary procedures, suitability is determined exclusively post-examination by the operating surgeon based on anatomical findings.' },
        { q: 'What is the primary medical difference from an open rhinoplasty?', a: 'The fundamental difference lies in avoiding the external trans-columellar incision and preserving structural nasal tip ligaments.' },
        { q: 'Is temporary loss of sensation normal at the nasal tip?', a: 'Numbness during the early postoperative period is an anticipated physiological response; sensation generally returns progressively as tissues heal.' }
      ],
      seoTitle: 'Closed Rhinoplasty Procedures | Megaeste Clinic',
      seoDescription: 'Technical details and treatment process for closed rhinoplasty surgeries performed without external incisions.',
      relatedSlugs: ['face-lift', 'blepharoplasty']
    }
  },
  {
    id: 'yuz-germe',
    image: '/images/services/yuz-germe.webp',
    tr: {
      title: 'Yüz Germe (Face Lift)',
      slug: 'yuz-germe',
      category: 'Yüz Estetiği',
      categorySlug: 'yuz-estetigi',
      heroDescription: 'Yılların etkisiyle elastikiyetini kaybeden yüz ve boyun dokularının anatomik olarak toparlandığı estetik cerrahi müdahale.',
      longDescription: `<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#729788] rounded-full"></span> Yüz Germe (Facelift) Ameliyatı Nedir?
</h2>
<p class="mb-8 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Yaşlanma süreci, kolajen kaybı ve yerçekiminin etkisiyle ciltte sarkmalar, derinleşen mimik çizgileri ve çene hattında belirsizlikler (jowl formasyonu) meydana gelir. Yüz germe operasyonu, yalnızca yüzeysel cilt dokusunu değil; cildin altında yer alan ve sarkmanın temel nedeni olan kas ve bağ dokusu tabakasını (SMAS - Superficial Musculoaponeurotic System) yukarı taşıyarak daha dengeli ve doğal bir profil elde edilmesini hedefler.</p>

<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#729788] rounded-full"></span> Kalıcılık Süreci
</h2>
<p class="mb-6 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Modern germe teknikleri cilt yapısının alt desteklerini güçlendirdiği için elde edilen toparlanma uzun yıllar korunabilmektedir; ancak yaşlanma döngüsünün fizyolojik olarak devam ettiği unutulmamalıdır.</p>`,
      process: [
        { step: 1, title: 'Fiziksel Muayene', description: 'Yüzdeki sarkma alanları incelenir, hastanın beklentileri doğrultusunda mini veya standart (full) teknik belirlenir.' },
        { step: 2, title: 'Kesi Planlaması', description: 'Kulak önünden başlayıp saçlı deriye uzanan gizlenebilir cerrahi hatlar oluşturulur.' },
        { step: 3, title: 'SMAS Müdahalesi', description: 'Deri kaldırılarak alt kas dokusu onarılır ve orijinal anatomik pozisyonuna asılır.' },
        { step: 4, title: 'Kontrol', description: 'Ödemin atılması için medikal bandajlar kullanılır, dikiş izlerinin iyileşmesi klinik takibe alınır.' }
      ],
      faq: [
        { q: 'Ameliyat sonrası izler ne derece belirgindir?', a: 'Kesi hatları kulak kıvrımlarına ve saçlı doku içerisine saklandığı için, iyileşme tamamlandığında genellikle belirginliğini yitirerek doğal ten rengine uyum sağlar.' },
        { q: 'Mimiklerimde donukluk oluşur mu?', a: 'Doğrudan deriyi aşırı germek yerine alt kas tabakası onarıldığı için (SMAS tekniği), kişi mimik yeteneğini doğal sınırları içerisinde sürdürebilmektedir.' },
        { q: 'Mini Yüz Germe ile Tam Yüz Germe arasındaki fark nedir?', a: 'Mini germe sadece orta yüz ve yanak kısmını hedeflerken; tam germe operasyonu çene ucu, jawline ve bazen boyun bölgesini de kapsayan lokalize bir onarımdır.' }
      ],
      seoTitle: 'Yüz Germe (Face Lift) Operasyonu | Megaeste Klinik',
      seoDescription: 'SMAS tekniğiyle uygulanan yüz germe (facelift) cerrahisiyle ilgili tıbbi bilgiler ve iyileşme süreci.',
      relatedSlugs: ['boyun-germe', 'alin-germe-kas-kaldirma']
    },
    en: {
      title: 'Face Lift (Rhytidectomy)',
      slug: 'face-lift',
      category: 'Facial Aesthetics',
      categorySlug: 'facial-aesthetics',
      heroDescription: 'An aesthetic surgical intervention that anatomically repositions facial and neck tissues that have lost elasticity over time.',
      longDescription: `Due to the natural aging process, volume loss, and to the effect of gravity, the skin develops sagging, deepened expression lines, and a loss of contour along the jawline (jowl formation). A facelift operation aims to restore a more balanced natural profile by suspending not just the superficial skin but the underlying muscle and connective tissue layer (SMAS), which represents the structural foundation of the face.`,
      process: [
        { step: 1, title: 'Physical Examination', description: 'Assessments evaluate the degree of laxity to decide strategically between a mini or standard lift procedure.' },
        { step: 2, title: 'Incision Mapping', description: 'Incisions are carefully planned from the front of the ear extending into the hairline to conceal eventual scarring.' },
        { step: 3, title: 'SMAS Intervention', description: 'The deeper muscle and tissue layers are repaired and repositioned to their standard anatomical posture.' },
        { step: 4, title: 'Clinical Follow-up', description: 'Medical wraps are applied to mitigate edema, and incision healing is closely tracked.' }
      ],
      faq: [
        { q: 'How visible are the postoperative scars?', a: 'Because the incisions follow natural ear contours and are hidden within the scalp, they generally fade and blend into natural skin tones after the prolonged healing phase.' },
        { q: 'Will my facial expressions look unnatural or frozen?', a: 'By reinforcing the underlying SMAS layer rather than simply pulling the skin tightly, individuals maintain normal dynamic facial expressions post-recovery.' },
        { q: 'What is the distinct difference between Mini and Full Facelifts?', a: 'A mini-lift primarily focuses on the midface and cheeks, whereas a full facelift comprehensively addresses the jawline, chin, and often lower neck components.' }
      ],
      seoTitle: 'Face Lift Operation (Rhytidectomy) | Megaeste Clinic',
      seoDescription: 'Detailed medical insights regarding Face Lift (Rhytidectomy) procedures utilizing the modern SMAS approach.',
      relatedSlugs: ['neck-lift', 'brow-forehead-lift']
    }
  },
  {
    id: 'boyun-germe',
    image: '/images/services/boyun-germe.webp',
    tr: {
      title: 'Boyun Germe',
      slug: 'boyun-germe',
      category: 'Yüz Estetiği',
      categorySlug: 'yuz-estetigi',
      heroDescription: 'Yaşa veya genetik faktörlere bağlı gelişen çene altı sarkmalarının hedeflendiği rekonstrüktif toparlama prosedürü.',
      longDescription: `<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#729788] rounded-full"></span> Boyun Sarkması ve Tedavisi
</h2>
<p class="mb-8 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Boyun bölgesindeki cildin ince olması ve altındaki "Platysma" kasının zamanla zayıflaması, çene altı (gıdı) bölgesinde yağ birikimiyle birleşerek katmanlı bir sarkmaya sebep olabilir. Boyun germe operasyonu, gevşemiş deri bölümlerini almayı ve boyun anatomisini çene hattı (jawline) ölçeğinde yeniden yapılandırmayı planlar.</p>`,
      process: [
        { step: 1, title: 'Medikal Analiz', description: 'Deri esnekliği, biriken yağ miktarı ve kas zayıflığı objektif olarak değerlendirilir.' },
        { step: 2, title: 'Cerrahi Yaklaşım', description: 'Çene altından (submental) veya kulak gerisindeki doğal hatlardan kesi uygulanır.' },
        { step: 3, title: 'Kas Onarımı', description: 'Ayrılmış platysma kasları orta hattan onarılarak boyna yapısal destek sağlanır.' },
        { step: 4, title: 'Korunma ve Takip', description: 'Belirli bir süre boyun destekli korseler kullanılarak dokuların uyumlanması beklenir.' }
      ],
      faq: [
        { q: 'Gıdı liposuction operasyonundan farkı nedir?', a: 'Liposuction deri altındaki yağı tahliye ederken; boyun germe gevşek deriyi onarır ve deforme olmuş kas dokusunu toparlar.' },
        { q: 'Diğer estetik operasyonlarla kombine edilir mi?', a: 'Yüz oranlarının bütünlüğü açısından sıklıkla Yüz Germe (Face Lift) prosedürüyle aynı seans kapsamında hekime danışılarak uygulanabilir.' },
        { q: 'Cerrahi süreç solunumu etkiler mi?', a: 'Rutin ve deneyimli ellerde uygulanan estetik boyun cerrahisinin solunum yollarına direkt veya kalıcı bir olumsuz etkisi bulunmamaktadır.' }
      ],
      seoTitle: 'Boyun Germe Operasyonu (Neck Lift) | Megaeste Klinik',
      seoDescription: 'Çene altı sarkmaları ve kas gevşemeleri için boyun germe ameliyatları hakkında detaylı bilgilendirme.',
      relatedSlugs: ['yuz-germe', 'liposuction']
    },
    en: {
      title: 'Neck Lift',
      slug: 'neck-lift',
      category: 'Facial Aesthetics',
      categorySlug: 'facial-aesthetics',
      heroDescription: 'A reconstructive lifting procedure targeting submental sagging caused mainly by aging, gravity, or genetic structure.',
      longDescription: `The natural thinness of neck skin and the gradual weakening of the underlying "Platysma" muscle, combined with submental fat deposits, frequently contribute to layered sagging below the jaw. A neck lift aims to responsibly excise this excess skin and therapeutically reconstruct neck anatomy in proportion to the jawline framework.`,
      process: [
        { step: 1, title: 'Medical Assessment', description: 'Skin elasticity, fat composition, and muscle laxity parameters are objectively measured.' },
        { step: 2, title: 'Surgical Route', description: 'Precise incisions are placed submentally (under the chin) or tracing the posterior ear contours.' },
        { step: 3, title: 'Muscle Repair', description: 'Separated platysmal bands are typically tightened along the midline for reinforced structural support.' },
        { step: 4, title: 'Post-Op Monitoring', description: 'Targeted supportive neck garments are utilized to assist proper tissue adherence during recovery.' }
      ],
      faq: [
        { q: 'How does it fundamentally differ from submental liposuction?', a: 'While liposuction solely manages accumulated fat tissues, a neck lift surgically removes excessive dermal layers and repairs separated musculature.' },
        { q: 'Can it be safely combined with related procedures?', a: 'To optimize the general facial aesthetic balance, it is frequently and securely combined simultaneously with an encompassing Face Lift by the operating surgeon.' },
        { q: 'Does the operation negatively affect respiratory functions?', a: 'Duly executed standard aesthetic neck operations target superficial layers without imposing structural compromises on critical airway tracks.' }
      ],
      seoTitle: 'Neck Lift Surgery (Platysmaplasty) | Megaeste Clinic',
      seoDescription: 'Insights into neck lift procedures managing submental sagging and muscular banding clinically.',
      relatedSlugs: ['face-lift', 'liposuction']
    }
  },
  {
    id: 'kulak-estetigi',
    image: '/images/services/kulak-estetigi.webp',
    tr: {
      title: 'Kulak Estetiği (Otoplasti)',
      slug: 'kulak-estetigi',
      category: 'Yüz Estetiği',
      categorySlug: 'yuz-estetigi',
      heroDescription: 'Kulak kıkırdaklarının anatomik oranlara uygun hale getirildiği düzeltici medikal cerrahi işlemi.',
      longDescription: `<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#729788] rounded-full"></span> Otoplasti Operasyonunun Kapsamı
</h2>
<p class="mb-8 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Halk arasında "kepçe kulak" olarak bilinen durum, kulak kepçesi (aurikula) ile kafatası arasındaki açının standart olandan daha geniş olması halidir. Çoğunlukla antihelikal kıvrımın yeterince gelişmemesinden kaynaklanır. Otoplasti cerrahisinde lokal anestezi altında kıkırdak dokuya destekleyici iç dikişler uygulanarak kulağın yüz oranlarına daha uyumlu anatomik pozisyonuna ulaşması hedeflenir.</p>`,
      process: [
        { step: 1, title: 'Değerlendirme', description: 'Tıbbi muayene ile kafatası-kulak açısı ve kıkırdak yapısı ölçümlenir.' },
        { step: 2, title: 'Uygulama Alanı', description: 'Görünürlüğü asgari düzeyde tutmak amacıyla müdahale kulak arkasından gerçekleştirilir.' },
        { step: 3, title: 'Şekillendirme', description: 'Yetersiz kıkırdak kıvrımı katlanarak medikal sütürler yardımıyla uygun açıya sabitlenir.' },
        { step: 4, title: 'Bandajlama Süreci', description: 'Dikişlerin fizyolojik direncini artırmak adına iyileşme periyodunda elastik bandaj kullanılır.' }
      ],
      faq: [
        { q: 'Cerrahi sonrası kıkırdaklarda eski haline dönme riski var mıdır?', a: 'Doku onarımı prensiplerine uygun, medikal standart sütürlerle yapıldığında kulağın tekrar açılma ihtimali klinik olarak oldukça nadirdir.' },
        { q: 'İşlem için yaş sınırı nedir?', a: 'Kulak anatomisi çoğunlukla 6 yaş civarı büyük ölçüde tamamlandığından, psiko-sosyal etkiler göz önüne alınarak çocukluk çağında da hekim kontrolünde rahatlıkla uygulanabilir.' },
        { q: 'İyileşme sonrası spor faaliyetleri engellenir mi?', a: 'Dokuların iyileştiği ilk haftalardan sonra doğrudan temas (darbe) içermeyen fiziksel rutinlere klinikteki onayın ardından dönülebilir.' }
      ],
      seoTitle: 'Kulak Estetiği (Otoplasti) Kepçe Düzeltmesi | Megaeste',
      seoDescription: 'Kepçe kulak düzeltmesi için uygulanan Otoplasti cerrahisi hakkında medikal süreç ve genel bilgiler.',
      relatedSlugs: ['kapali-burun-ameliyati', 'alin-germe-kas-kaldirma']
    },
    en: {
      title: 'Ear Aesthetics (Otoplasty)',
      slug: 'ear-aesthetics',
      category: 'Facial Aesthetics',
      categorySlug: 'facial-aesthetics',
      heroDescription: 'Corrective medical surgical procedure aimed at restructuring ear cartilages to correlate better with standard skull proportions.',
      longDescription: `The condition commonly perceived as "prominent ears" occurs when the architectural angle constructed between the ear (auricle) and the skull falls wider than the average parameters. It is predominantly sourced from underdevelopment of the antihelical fold. Otoplasty intervenes gently under localized anesthesia, establishing structural inner suturing into cartilage to reposition the ear anatomically toward the head structure respectfully.`,
      process: [
        { step: 1, title: 'Clinical Assessment', description: 'A thorough medical review measuring the skull-ear projection gap and cartilage robustness.' },
        { step: 2, title: 'Target Area', description: 'Surgical steps are strictly confined to the posterior (back) segment of the ears.' },
        { step: 3, title: 'Architectural Remodeling', description: 'Elongated or unfurled cartilage lines are respectfully folded and supported using specialized medical sutures.' },
        { step: 4, title: 'Compression Healing', description: 'Implementing an elastic protective headband is standard medical protocol for initial tissue adjustment securing.' }
      ],
      faq: [
        { q: 'Does the cartilage risk reverting backward to its baseline state?', a: 'When the restructuring fulfills clinical protocols utilizing modern suturing anchoring layers, the probability of structural relapse remains exceedingly marginal.' },
        { q: 'Are there age thresholds determining eligibility?', a: 'Given that the external ear reaches broad physical maturity typically around age 6, early supervised pediatric execution is widely endorsed to bypass psychosocial adversities.' },
        { q: 'How does it influence participation in athletic routines post-recovery?', a: 'Following the fundamental weeks ensuring suture stabilization, cleared individuals safely return to normal exercise regimes excluding rigid contact sports.' }
      ],
      seoTitle: 'Otoplasty Ear Pinning Surgery | Megaeste',
      seoDescription: 'Insights dealing with medical ear aesthetics processing (Otoplasty) applicable for diverse age demographics respectfully.',
      relatedSlugs: ['closed-rhinoplasty', 'brow-forehead-lift']
    }
  },
  {
    id: 'goz-kapagi-estetigi',
    image: '/images/services/goz-kapagi-klinik.webp',
    tr: {
      title: 'Göz Kapağı Estetiği (Blefaroplasti)',
      slug: 'goz-kapagi-estetigi',
      category: 'Yüz Estetiği',
      categorySlug: 'yuz-estetigi',
      heroDescription: 'Göz kapaklarında biriken fazla cilt dokusu ve yağ fıtıklaşmasını tıbbi çerçevede gideren rekonstrüktif işlem.',
      longDescription: `<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#729788] rounded-full"></span> Blefaroplasti (Göz Kapağı) Uygulaması
</h2>
<p class="mb-8 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Göz çevresindeki cilt, yüz anatomisinin en ince dokularından biridir ve dolayısıyla yaşlanma ya da yerçekimi belirtilerini en erken gösteren alandır. Üst göz kapağında deri bolluğu kırışıklıklara neden olup görüş alanını etkileyebilmekteyken; alt kapaktaki yağ pedlerinin zayıflayan bağ dokusunu itmesi fıtıklaşmalara (torbalanma) yol açar. Göz kapağı cerrahisi, bu yapısal bozulmaları stabilize ederek yüzünüzdeki daha canlı ve dinlenmiş bir ifadenin geri kazanılmasını hedefler.</p>`,
      process: [
        { step: 1, title: 'Optik ve Anatomik Analiz', description: 'Göz kapağı cilt fazlalığı, yağ fıtıklaşma lokalizasyonu ve görüş açısı hekim tarafından incelenir.' },
        { step: 2, title: 'Lokal Cerrahi Çizim', description: 'Ciltte bırakılacak asgari doku ve çıkartılacak alan simetrik biçimde haritalanır.' },
        { step: 3, title: 'Doku Uygulaması', description: 'Üst veya alt kapakta belirlenen alanlardan sarkık deri/yağ eksizyonu gerçekleştirilir.' },
        { step: 4, title: 'İyileşme Formasyonu', description: 'Zarar görmeyen doğal kapak çizgilerine gizlenen tıbbi dikişlerin kaynaması sağlanır.' }
      ],
      faq: [
        { q: 'İşlem sırasında genel anestezi şart mıdır?', a: 'Birçok vakada operasyon, hasta ve hekimin değerlendirmesiyle klinik ortamında sadece lokal anestezi desteğiyle rahatlıkla uygulanabilmektedir.' },
        { q: 'Morluk oluşumu beklenen bir komplikasyon mu?', a: 'Göz bölgesi kılcal damar açısından yoğundur. Operasyon sonrası göz çevresinde geçici morluk/ödem görülebilir; bu durum ortalama bir haftada kendiliğinden azalır.' },
        { q: 'Görme keskinliğini etkiler mi?', a: 'Alt veya üst kapaktan doku eksizyonu direkt olarak göz içi organına (küreye) etki etmediği için görme kabiliyetlerinde düşüş yapmaz. Hatta aşırı sarkık kapak vakalarında görme kalitesine olumlu yönde destek verir.' }
      ],
      seoTitle: 'Göz Kapağı Estetiği (Blefaroplasti) Süreci | Megaeste',
      seoDescription: 'Blefaroplasti operasyonu ile göz kapağı sarkmaları ve torbalanma tedavilerindeki klinik aşamalar.',
      relatedSlugs: ['kapali-burun-ameliyati', 'alin-germe-kas-kaldirma']
    },
    en: {
      title: 'Eyelid Surgery (Blepharoplasty)',
      slug: 'blepharoplasty',
      category: 'Facial Aesthetics',
      categorySlug: 'facial-aesthetics',
      heroDescription: 'A reconstructive operation medically eliminating superfluous tissue and fat herniation localized upon the eyelids.',
      longDescription: `The dermal tissue encompassing the periorbital zone remains among the thinnest across facial anatomies, generally showcasing aging and gravitation responses first. Skin laxity upon the upper eyelid yields substantial creasing potentially limiting visual horizons. Conversely, weakening connective compartments beneath push periorbital fat pads outwardly inciting lower eyelid bagging. Eyelid surgery structurally stabilizes these changes striving medically to reinstate a refreshed and less fatigued visual composure.`,
      process: [
        { step: 1, title: 'Optical & Anatomic Analysis', description: 'Skin surplus, fat herniation regions, alongside visual clearance parameters are medically assessed.' },
        { step: 2, title: 'Clinical Mapping', description: 'Deliberate outlining calculates precise tissues to remain versus excisional ratios enforcing anatomical symmetry.' },
        { step: 3, title: 'Tissue Protocols', description: 'Execution of precise skin or encapsulated adipose extractions across identified upper/lower zones.' },
        { step: 4, title: 'Incision Integration', description: 'In-line dermal sutures concealed effectively amongst natural eyelid creases ensure normalized healing tracks.' }
      ],
      faq: [
        { q: 'Is comprehensive general anesthesia an obligatory hurdle?', a: 'Extensively depending upon operative evaluation, myriad isolated cases proceed pleasantly under secure local anesthesias within appropriately outfitted clinical surroundings.' },
        { q: 'Are ecchymosis (bruising) episodes expected normally?', a: 'The periorbital arena possesses intense capillary networks. Brief ecchymosis and generalized postoperative edema naturally transpire; largely degrading independently across a one-week span.' },
        { q: 'Does this directly manipulate underlying visual acuities?', a: 'Skin/fat tissue excisions remain restricted externally avoiding internal ocular bulbs intrinsically, posing zero detriments towards sight itself. Relieving extreme ptosis often mechanically broadens obstructed viewing.' }
      ],
      seoTitle: 'Eyelid Aesthetics (Blepharoplasty) Treatment | Megaeste',
      seoDescription: 'Clinical processes associated with Blepharoplasty addressing upper drooping and lower fat bagging manifestations reliably.',
      relatedSlugs: ['closed-rhinoplasty', 'brow-forehead-lift']
    }
  },
  {
    id: 'alin-germe-kas-kaldirma',
    image: '/images/services/alin-germe-kas-kaldirma.webp',
    tr: {
      title: 'Alın Germe - Kaş Kaldırma',
      slug: 'alin-germe-kas-kaldirma',
      category: 'Yüz Estetiği',
      categorySlug: 'yuz-estetigi',
      heroDescription: 'Alın bölgesindeki sarkmaların onarıldığı ve kaşların anatomik pozisyonuna desteklendiği üst yüz cerrahisi.',
      longDescription: `<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#729788] rounded-full"></span> Alın Bölgesi Dinamiği
</h2>
<p class="mb-8 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Yaşlanma süreciyle birlikte alın bölgesini yukarıda tutan bağlar zayıflarken, kaş dokusu aşağı doğru deplase olabilir. Kaş yığılmaları zamanla göz kapağına ek fiziksel yük bindirerek hastada yapısal kaynaklı bir yorgun veya çatık kaş görünümüne sebep teşkil eder. Endoskopik medikal görüntüleme eşliğinde yapılan alın germe cerrahisi, sınırlı kesilerle bölgedeki kas dokusunu onararak kaş anatomisini ideal fonksiyonel ve estetik açılarına sabitlemeyi amaçlar.</p>`,
      process: [
        { step: 1, title: 'Klinik Açı Değerlendirmesi', description: 'Yüz orantılarına göre kaşın ideal konumlanma seviyesi tıbbi açıdan belirlenir.' },
        { step: 2, title: 'Endoskopik Girişim', description: 'Saçlı deri içerisinden küçük kesiler aracılığıyla özel kamera uçlarıyla alana girilir.' },
        { step: 3, title: 'Serbestleştirme ve Asma', description: 'Gevşemiş dokuya elastikiyet kazandırılarak uygun noktalardan yukarı askılanır.' },
        { step: 4, title: 'Doku İyileşmesi', description: 'Cerrahi fiksasyon süreç sonrası kafa tasına uyum gösteren biyolojik yapı taşlarıyla desteklenir.' }
      ],
      faq: [
        { q: 'Cerrahi süreç geri dönüşümsüz saç kaybına (alopesi) neden olur mu?', a: 'Endoskopik cerrahi protokollerinde ciltteki kesiler asgari milimetrik çaplarda olduğu için köklere zarar verme ihtimali oldukça düşüktür, kalıcı saç dökülmesi beklenmez.' },
        { q: 'Botulinum Toksin (Botoks) uygulaması yerine cerrahi neden tercih edilir?', a: 'Toksin enjeksiyonları kasları geçici (3-6 ay) felç ederek illüzyon sağlar. Cerrahi ise alttaki sarkan dokuya kalıcı anatomik fiksasyon sağlar.' },
        { q: 'Ameliyat sonrası kullanılan vidalar dışarıdan hissedilir mi?', a: 'Dokuların kafatasına sabitlenmesinde destek alınan tıbbi tespit öğeleri (vida, askı) kısa vadede hastanın hassasiyet göstermeyeceği, zamanla biyouyum sağlayan eriyebilir erbabiyelerdir.' }
      ],
      seoTitle: 'Alın Germe & Kaş Kaldırma Cerrahisi | Megaeste',
      seoDescription: 'Alın kırışıklıkları ve deformasyonlarına yönelik uygulanan endoskopik üst yüz germe operasyonu.',
      relatedSlugs: ['goz-kapagi-estetigi', 'yuz-germe']
    },
    en: {
      title: 'Brow & Forehead Lift',
      slug: 'brow-forehead-lift',
      category: 'Facial Aesthetics',
      categorySlug: 'facial-aesthetics',
      heroDescription: 'An upper facial surgical approach designed to repair forehead ptosis and anatomically re-support lowering brows.',
      longDescription: `Driven by intrinsic aging timelines, ligaments tethering the superficial forehead diminish severely causing eventual pronounced downward migration of the eyebrow structural pad. This substantial hooding physically burdens the eyelids fostering inherently fatigued or unintentionally furrowed resting expressions. Executed alongside modern endoscopic imaging formats, a surgical brow lift seeks to alleviate underlying muscular constrictions utilizing restricted incision scales positioning brow complexes back into improved functional and normalized inclinations.`,
      process: [
        { step: 1, title: 'Clinical Vector Assessment', description: 'The physiological target projection anchoring for the brows aligns with patient specific bone outlines safely.' },
        { step: 2, title: 'Endoscopic Integration', description: 'Medical entries engage minor internal ports precisely disguised backwards beyond normal scalp timelines.' },
        { step: 3, title: 'Liberation and Suspension', description: 'Lax tissues release tension prior to organized elevation into resilient upper anatomical anchoring.' },
        { step: 4, title: 'Tissue Consolidation', description: 'Surgical foundations receive reinforced structural conformity utilizing highly assimilable biological fixation components.' }
      ],
      faq: [
        { q: 'Will this invariably provoke permanent alopecia (hair loss)?', a: 'Since robust endoscopic procedures mandate extremely minimal footprint penetrations dodging the widespread follicle layers, enduring hair destruction remains profoundly contrary to expectations.' },
        { q: 'Why select a surgical maneuver over standard Botulinum Toxin?', a: 'Injections enforce localized paralytic states generating strict temporary alterations (varying widely 3-6 months). Surgical methodology enacts anatomical structural relocation resolving underlying redundancies structurally.' },
        { q: 'Do supporting operative screws retain noticeable exterior profiles?', a: 'Restraint elements anchoring tissue beds to bone structures are profoundly miniaturized implementing specialized compositions that merge biochemically within months completely erasing manual detectability.' }
      ],
      seoTitle: 'Endoscopic Forehead & Brow Lifting | Megaeste',
      seoDescription: 'Medical parameters governing upper facial contour rejuvenation mapping forehead and eyebrow anatomy carefully.',
      relatedSlugs: ['blepharoplasty', 'face-lift']
    }
  }
];
