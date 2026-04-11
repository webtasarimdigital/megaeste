import { Service } from './services';

export const vucutServices: Service[] = [
  {
    id: 'karin-germe',
    image: '/images/services/karin-germe.webp',
    tr: {
      title: 'Karın Germe (Abdominoplasti)',
      slug: 'karin-germe',
      category: 'Vücut Estetiği',
      categorySlug: 'vucut-estetigi',
      heroDescription: 'Aşırı kilo değişimleri veya hamilelik sonrasında karın bölgesinde gelişen deformasyonların tıbbi yaklaşımla onarıldığı ameliyattır.',
      longDescription: `<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#4f6f8f] rounded-full"></span> Karın Germe Müdahalesinin Amacı
</h2>
<p class="mb-8 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Kilo değişim süreçleri veya majör hamilelik kayıtları sonrasında, karın cilt dokusu geri kazanılamaz şekilde esnemekte olup; altta yatan karın duvarı kasları (rektus abdominis) birbirinden ayrılarak tıbbi olarak 'diastazis rekti' durumuna sebep olabilir. Abdominoplasti ameliyatı sayesinde sadece cilt sarkmaları tıbbi eksizyonla toplanmakla kalmaz, asıl olarak merkezkaçla genişlemiş kaslar birbirine cerrahi sütürlerle sabitlenir. Bu sayede hastalara esnek ve sağlam iç karın altyapısı tekrar tanımlanır.</p>`,
      process: [
        { step: 1, title: 'Cerrahi Alan Planlaması', description: 'Karın ön duvarının gevşeklik seviyesi ölçülere dökülür, operasyonun sınırları bikini izi formunda belirlenir.' },
        { step: 2, title: 'Kesi Boyutu', description: 'Kesi alanları sezaryen hattını andıracak biçimde yatay olarak düzenlenir.' },
        { step: 3, title: 'Kas Dokusunun Restorasyonu', description: 'Bölünmüş iç kas bağları tıbbi dikişlerle ana hatta toparlanarak karın gerginleştirilir.' },
        { step: 4, title: 'Ortopedik Destekli İyileşme', description: 'Dokuların yapışma sürecine yardımcı olabilmek adına operasyon sonrasında klinik seviye korse kullanımı şarttır.' }
      ],
      faq: [
        { q: 'Gerçekleşecek prosedür sonrasındaki gebelikler doğuma engel teşkil eder mi?', a: 'Rahim veya üreme sağlığına herhangi bir engeli yoktur, operasyon sonrası zamanla hamile kalınabilir.' },
        { q: 'İzler hangi seviyede dikkat çeker?', a: 'Operasyonun temel gayelerinden birisi iz hattını çamaşır ve bikini altına güvenle saklanabilmesini olanaklı kılacak yapıda düzenlemektir.' },
        { q: 'Liposuction (Yağ Emilimi) estetiği ile birlikte yapılabilir mi?', a: 'Doktor görüşleri doğrultusunda kombine (Lipoabdominoplasti) şekilde operasyon tek seansa sığdırılarak estetik sınırlar daha güvenli çekilebilir.' }
      ],
      seoTitle: 'Karın Germe Ameliyatı | Abdominoplasti | Megaeste Klinik',
      seoDescription: 'Kas deformasyonlarını (diastazis rekti) ve gevşeyen cilt bütünlüklerini onaran abdominoplasti hakkında tıbbi yaklaşım süreçleri.',
      relatedSlugs: ['liposuction', 'Meme-estetigi']
    },
    en: {
      title: 'Tummy Tuck (Abdominoplasty)',
      slug: 'tummy-tuck',
      category: 'Body Aesthetics',
      categorySlug: 'body-aesthetics',
      heroDescription: 'Core restorative intervention medically addressing resilient abdominal laxity and diastasis following extensive weight variations or pregnancies.',
      longDescription: `Physiological constraints linked strictly around profound massive weight reductions or recurrent extreme gestational spans inevitably loosen deep abdominal muscular walls (generating rectus diastasis). Corresponding structural skin layers fundamentally lose recoil traits entirely. Abdominoplasty effectively excises pervasive sagging dermal matrices and definitively re-sutures the compromised internal inner muscular belts medially stabilizing central torso regions effectively securely constructing tauter biological baselines securely.`,
      process: [
        { step: 1, title: 'Topographical Analysis', description: 'Establishing definitive horizontal operational boundaries tactically anchoring subsequent recovery lines safely under routine wear.' },
        { step: 2, title: 'Surgical Entry Strategy', description: 'Meticulously opening planned horizontal low-lines ensuring direct safe access towards muscular core environments.' },
        { step: 3, title: 'Dynamic Muscle Reefing', description: 'Over-stretched connective bands securely undergo surgical plication structurally bracing internal abdominal pressures optimally.' },
        { step: 4, title: 'Controlled Rehabilitation', description: 'Mandatory clinical-grade compression garments facilitate essential tissue adjustments guarding internal suturing dynamics actively.' }
      ],
      faq: [
        { q: 'Will this impede future gestations or related maternal health?', a: 'Reproductive mechanisms remain totally unaffected intrinsically. Aesthetically maintaining premier structural results advises conducting operations primarily after total family completions safely.' },
        { q: 'Do residual incision paths exhibit extreme unmanageable noticeability?', a: 'Given precise standardized geographic mappings deliberately deep towards standard swimsuit thresholds, everyday visibility generally trends essentially towards zero visibility parameters.' },
        { q: 'Are synergistic combinations including Liposuction typically endorsed?', a: 'Integrating precise circumferential liposuctioning concurrently (Lipoabdominoplasty) frequently yields superior harmonic contouring reliably when strictly evaluated intra-operatively.' }
      ],
      seoTitle: 'Abdominoplasty Medical Tummy Tuck | Megaeste',
      seoDescription: 'Expert clinical protocols reconstructing severe abdominal deformities and associated diastasis recti responsibly.',
      relatedSlugs: ['liposuction', 'breast-aesthetics']
    }
  },
  {
    id: 'kol-bacak-germe',
    image: '/images/services/kol-bacak-germe.webp',
    tr: {
      title: 'Kol ve Bacak Germe (Lifting)',
      slug: 'kol-bacak-germe',
      category: 'Vücut Estetiği',
      categorySlug: 'vucut-estetigi',
      heroDescription: 'Hızlı kilo kaybı süreçleri ardından ekstremitelerde gözlemlenen kalıcı cilt sarkıklıklarını anatomik ölçülerde düzelten ameliyattır.',
      longDescription: `<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#4f6f8f] rounded-full"></span> Ekstremitelerdeki Fizyolojik Değişimler
</h2>
<p class="mb-8 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Mide operasyonları, ciddi diyetler sonrasında kolların posterior (arka) ile bacakların iç kasık bölgelerinde sarkan, yapısı bozulmuş zayıf elastik formlar oluşur. Sarkan doku, terlemeye veya temas ve sürtünme sebepli cilt enfeksiyonlarına zemin hazırlar. İlgili germe cerrahisi, bu tıbbi sorunu düzeltmek adına fazla deriyi tahliye eder, dokuları fizyolojik orantı dahilinde sağlıklı iskelet yapısına entegre eder.</p>`,
      process: [
        { step: 1, title: 'Uzaysal Çizimler', description: 'Dokunun yerçekimiyle olan konumlandırması değerlendirilerek hangi aksisyonda eksizyon yapılacağı saptanır.' },
        { step: 2, title: 'Yağ Tabakası Düzenlemesi', description: 'Katılaşmış bölgesel pedlerin gerginliğe uygunluğunun test edilmesi.' },
        { step: 3, title: 'Aksiyonlu Cerrahi (Doku Alımı)', description: 'Kol ve kasık altlarındaki gizli katmanlar üzerinden doku bütünlüğü zedelenmeden fazlalık çıkarımı.' },
        { step: 4, title: 'Fiksasyon ve Korunma', description: 'Özel kompres bantajlarla dikiş reaksiyonu ve olası lenf dolaşım basınçlarının optimum düzeyde tutulması.' }
      ],
      faq: [
        { q: 'Cerrahi operasyon sonrası hareket kabiliyeti kalıcı olarak zayıflar mı?', a: 'Dikiş formasyonları kemik dokusuna yakın veya eklem aralıklarını sarmayan alana yapılandırdığından uzun vadede eklem hareket kapasitesini asla sınırlandırmaz.' },
        { q: 'Operasyon izleri estetik açıdan sorun yaratır mı?', a: 'Dikiş hatları (Örneğin kol germe izleri kol tabanında arka planda, bacak germeler ise kasık içine), iç alanlarda güvenle saklanır, doğal bakış açısında sıklıkla gölgelenir.' },
        { q: 'Lenfatik ödem oluşma riski var mıdır?', a: 'Sağlıklı medikal derinlik ölçülerinde kalındığı için temel lenf yapılarına baskı uygulanmaz; şişlik geçicidir.' }
      ],
      seoTitle: 'Kol & Bacak Germe Lifting Prosedürleri | Megaeste',
      seoDescription: 'Bariartrik obezite cerrahisi etkileri sonrası görülen bacak/kol sarkmalarında toparlama stratejileri, medikal prosedür detayı.',
      relatedSlugs: ['karin-germe', 'liposuction']
    },
    en: {
      title: 'Arm & Thigh Lifting (Brachioplasty)',
      slug: 'arm-leg-lift',
      category: 'Body Aesthetics',
      categorySlug: 'body-aesthetics',
      heroDescription: 'Extremity contouring surgeries targeting profound pendulous skin folds typically encountered subsequent to radical metabolic weight loss protocols.',
      longDescription: `Enduring extreme volumetric shifting significantly depletes intrinsic elasticity factors leaving localized areas, specifically tricep rears and medial inner thighs, struggling physically containing deflation. Accompanying physiological redundancies essentially trigger dermatological complaints encompassing recurrent rashes originating via chafing dynamics strictly around persistent tissue over-spillage. Corrective Brachioplasty or thigh lift interventions clinically dissect remaining compromised tissues reinforcing robust proportional dimensions.`,
      process: [
        { step: 1, title: 'Gravitational Blueprinting', description: 'Precisely evaluating hanging variants dynamically against normal resting postural gradients standardizing resection boundaries.' },
        { step: 2, title: 'Structural Modification', description: 'Assessing adipose consistency confirming essential volume extractions align safely protecting essential peripheral conduits.' },
        { step: 3, title: 'Tissue Reductions', description: 'Executing deep precise extractions camouflaging operative access points primarily within internal shadow folds securely.' },
        { step: 4, title: 'Dynamic Stability', description: 'Immediate applications enforcing therapeutic compression frameworks mitigate vascular strains reinforcing new structural tensions uniformly.' }
      ],
      faq: [
        { q: 'Does establishing new structural tension heavily obstruct intrinsic articulation mobility?', a: 'Correct implementations diligently steer clearly aside primary articulating joints protecting maximum operational flexion indefinitely without hindrance.' },
        { q: 'Will severe incision tracts project overwhelmingly into regular visibility paradigms?', a: 'By embedding principal closures discretely inwards confronting internal torso aspects or within central groin crease networks, external detection possibilities are fundamentally minimized naturally.' },
        { q: 'Is generating substantial irreversible lymphatic blockages possible?', a: 'Disciplined operative elevations maneuver accurately among exceedingly superficial stratums fundamentally safeguarding prominent deep-rooted lymphatic pathways efficiently.' }
      ],
      seoTitle: 'Definitive Arm & Leg Lifting Clinical Guidelines | Megaeste',
      seoDescription: 'Comprehensive rehabilitative lifting procedures remedying serious extreme post bariatric dermal excesses reliably.',
      relatedSlugs: ['tummy-tuck', 'liposuction']
    }
  },
  {
    id: 'liposuction',
    image: '/images/services/liposuction.webp',
    tr: {
      title: 'Liposuction (Yağ Emilimi)',
      slug: 'liposuction',
      category: 'Vücut Estetiği',
      categorySlug: 'vucut-estetigi',
      heroDescription: 'Metabolizmaya veya diyete yanıt vermeyen lokal, birikmiş yağ pedlerini cilt altından sıvılaştırma yöntemleriyle güvenle azaltan medikal müdahale.',
      longDescription: `<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#4f6f8f] rounded-full"></span> Medikal Konturleme Çerçevesi
</h2>
<p class="mb-8 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Geleneksel ağırlık kontrolü çoğu zaman basen, gıdı veya karın merkezindeki son genetik formlardaki yağ kütlelerine erişmekte yetersiz kalmaktadır. Klinik yapımız dahilinde entegre edilen odaklı ultrason dalgalı (Vaser/Lazer destekli) liposuction yöntemleri; kan damarlarına, temel sinirlere veya sağlıklı bağ dokusuna hasar ihtimalini minimalize ederek yağ hücrelerini özel spektrumlarda sıvılaştırıp uzaklaştırmayı sağlar. Bu yaklaşım medikal morluk seviyelerini hafifletirken post-operatif konfor parametrelerine destek olur.</p>`,
      process: [
        { step: 1, title: 'Vücut Harita Planı', description: 'Zorlu yağ depolarının fizyolojik odak analiziyle asimetrisi ve çıkarım limitleri tanımlanır.' },
        { step: 2, title: 'Solüsyon Transferi', description: 'İzinli minimal lokal sıvılar kanamayla ilgili tıbbi komplikasyonları minimize etmek maksadıyla dokulara verilir.' },
        { step: 3, title: 'Akustik-Emülsifikasyon Protokolü', description: 'Enerji bazlı sistemler sert yağ bloklarını hedef alarak onları mekanik travma olmaksızın sıvı fazlara döndürür.' },
        { step: 4, title: 'Aspire ve Baskı', description: 'Çözülmüş içerik dışarı çekilip, boşalan alandaki dermal reaksiyon ve sıkılaşma hekim gözetimli korselerle dengelenir.' }
      ],
      faq: [
        { q: 'İşlem morbid obezite tedavisi (zayıflama) yerine geçebilir mi?', a: 'Obezite teşhisi altındaki kişilere tedavi maksatlı sunulan bir yöntem değildir. Sadece şekil (kontur) düzeltici odaklı işlemler arasında tıbbi yerini almaktadır.' },
        { q: 'Uygulama dışı alanlarda işlem neticesi asimetrik yağlanma gelişir mi?', a: 'Liposuction hedeflenen alandaki yağ rezervuarını onarırken, operasyon genel metabolizmayı kırmaz. Gelişecek potansiyel yeni ağırlık artışlarında orantı korunur.' },
        { q: 'Epidermal düzeylerde gamzelenme (dalgalanma) gözlemlenmesi muhtemel mi?', a: 'Sıkılaştırma özellikli ileri jenerasyon sıvı teknikler dermal elastikiyeti koruma odaklı çalıştığı için, dalgalanma risk marjini klinik açıdan yüksek güvenli gruptadır.' }
      ],
      seoTitle: 'Liposuction Güvenli Yağ Alma Operasyonu | Megaeste',
      seoDescription: 'Bölgesel hacim birikimlerinin tıbbi ve kontrollü sınırlarla (Ultrasonic/Vaser destekli düzeylerde) emilimi ve şekillendirmesi rehberi.',
      relatedSlugs: ['yag-enjeksiyonu', 'karin-germe']
    },
    en: {
      title: 'Liposuction (Subcutaneous Aspiration)',
      slug: 'liposuction',
      category: 'Body Aesthetics',
      categorySlug: 'body-aesthetics',
      heroDescription: 'Targeted medial contour adjustments aspiring firmly localized lipodystrophy occurrences stubbornly resisting normalized physiological weight metabolization protocols.',
      longDescription: `Addressing residual disproportionate structural fatty collections surrounding central flanks, visceral belts or localized submental tracks routinely warrants systematic evaluation outside conventional metabolism metrics. Applying modern clinically adopted emulsification avenues (e.g. focused Ultrasonic/Vaser emissions) safeguards underlying crucial structural vascular frameworks and collateral neural networks proficiently. Dissolving selected dense lipocyte deposits intelligently limits intense abrasive traumatic factors drastically decreasing anticipated hematomas supporting superior post surgical recuperation dynamics safely.`,
      process: [
        { step: 1, title: 'Dermatologic Zone Tracing', description: 'Categorizing isolated lipodystrophic occurrences quantifying precise medical thresholds minimizing general volume compromise.' },
        { step: 2, title: 'Vasoconstrictive Infusion', description: 'Safeguarded standard tumescent localized delivery ensures capillary stasis aggressively averting perioperative bleeding complications heavily.' },
        { step: 3, title: 'Ultrasonic Disruption', description: 'Focused acoustical or directed thermal waves intelligently alter solid lipids shifting compositions into manageable liquified formats flawlessly.' },
        { step: 4, title: 'Aspiration & Compression Frameworks', description: 'Controlled minor diameter microcannulas gently transport emulsions allowing immediate external compression implementation promoting vital epidermal tightening phases safely.' }
      ],
      faq: [
        { q: 'Is this procedure classified fundamentally alongside primary obesity bariatric interventions?', a: 'Categorically distinct. Intervention targets solely remain focused on finite regional architectural proportions and are restricted universally from widespread generalized mass loss utilizations medically.' },
        { q: 'Can extracted anatomical zones inherently propagate renewed isolated excess clusters?', a: 'Extracting primary lipocyte colonies profoundly influences foundational capacities dynamically. Generalized widespread caloric excess behaviors manifest subsequent dispersions proportionately rather than re-creating extreme exclusive concentrations identically.' },
        { q: 'Does utilizing suction methodologies actively precipitate chronic dermal irregularities systematically?', a: 'Implementing modern energy assisted methodologies precisely encourages robust dermal retraction responses greatly neutralizing expected occurrences surrounding uneven skin topographies reliably.' }
      ],
      seoTitle: 'Liposuction Subcutaneous Treatments | Megaeste Clinic',
      seoDescription: 'Accurate clinical insights examining standardized volume moderation processes incorporating controlled localized aspiration techniques dynamically.',
      relatedSlugs: ['fat-injection', 'tummy-tuck']
    }
  },
  {
    id: 'yag-enjeksiyonu',
    image: '/images/services/yag-enjeksiyonu.webp',
    tr: {
      title: 'Yağ Enjeksiyonu (Otojen Transfer)',
      slug: 'yag-enjeksiyonu',
      category: 'Vücut Estetiği',
      categorySlug: 'vucut-estetigi',
      heroDescription: 'Kişinin kendi adipoz dokusunun rejenere edilerek eksilen anatomik alanlara güvenli kalıcı hacim olarak yapılandırıldığı doku transferi işlemi.',
      longDescription: `<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#4f6f8f] rounded-full"></span> Biyolojik Doku Entegrasyonu
</h2>
<p class="mb-8 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Fizyolojik zayıflama (atrofi), yüz konturunda yaşa bağlı gerilemeler veya kalça bölgelerindeki düzensiz doku volümü eksikliklerinde sentetik desteklerin yanında artık güvenilir bir yöntem olarak 'Otojen Yağ Transferi' öne çıkmaktadır. Hastanın karın vb. rezerv bölgelerinden asiste edilen canlı yağ hücreleri, zenginleştirilip süzülerek hedeflenen çökük alanlara (el üstü, dudak, çene hattı veya kalça) tıbbi oranda enjekte edilir. Bu medikal süreç doğal dolgunlaştırıcı bariyer görevi görür.</p>`,
      process: [
        { step: 1, title: 'Doku Aspirasyonu', description: 'Gerekli oranın hesaplanması ve kanüller vasıtasıyla travmatize edilmeden lokal doku sıvılarının elde edilmesi.' },
        { step: 2, title: 'Hücresel Arındırma', description: 'Sıvı santrifüj yöntemiyle medikal olarak kan materyalinden ayrıştırılır, biyolojik saflık sağlanır.' },
        { step: 3, title: 'Mikro Katmanlı Transfer', description: 'Yalnızca uzman eşliğinde ince uçlu taşıyıcılarla zayıf alanların hücresel matrisine enjeksiyonu gerçekleştirilir.' },
        { step: 4, title: 'Doku Adaptasyonu (Kanlanma)', description: 'Aktarılan sıvı rezervlerinin bölgedeki kan akışına eklemlenerek entegrasyon formuna adapte edilmesi beklenir.' }
      ],
      faq: [
        { q: 'Vücuda uygulanan işlemler reaksiyon (alerji) riski geliştirir mi?', a: 'Dışarıdan kimyasal veya yapay doku iletilmediği; yapı taşı tamamen hastanın genetik haritasından seçilen otojen karakterli bir doku olduğu için klinik literatüründe reaksiyon ve ret gelişimi mevcut değildir.' },
        { q: 'Enjekte edilen hacim tamamen stabil biçimde bölgede kalır mı?', a: 'Transfer edilen canlı hücre yapılarının bir bölümü genelde vücut tarafından metabolize edilirken; hücresel kanlanmaya tutunabilen stabil kütleler yaşam boyu hedef alandaki doku hacmini oluştururlar.' },
        { q: 'Bu klinik işlem genellikle hangi anatomik çöküntülerde tercih edilmektedir?', a: 'Gluteal bölgede (kalça/Brezilya) şekillendirme, göz altlarındaki derin yapısal oyuklar, doku zayıfı çene konturlarının desteklenmesinde sıklıkla değerlendirilir.' }
      ],
      seoTitle: 'Otojen Yağ Enjeksiyonu | Estetik Dolgu | Megaeste',
      seoDescription: 'Doğal hücresel dokular kullanılarak sentetik işlemsiz gerçekleştirilen yüzey hacim restorasyonları ve tıbbi enjeksiyon formasyonları.',
      relatedSlugs: ['liposuction', 'Meme-estetigi']
    },
    en: {
      title: 'Fat Injection (Autologous Transfer)',
      slug: 'fat-injection',
      category: 'Body Aesthetics',
      categorySlug: 'body-aesthetics',
      heroDescription: 'Biological structural transferring methodologies integrating harvested autologous materials reliably rejuvenating or replacing volume deficient anatomical pathways safely.',
      longDescription: `Compensating intrinsic physiological volume degradation linked progressively mapping facial hollows or deficient gluteal dimensions relies progressively toward adopting established "Autologous Fat Transfer" paradigms alongside synthetic solutions safely. Employing carefully extracted viable lipid compartments sourced systematically bypassing external processing elements yields refined organic concentrates safely. Delivering processed layers distinctly into depleted host tissues initiates substantial biologically accepted scaffolding formations encouraging superior, organic volumetric stabilizations permanently avoiding synthetic drawbacks completely.`,
      process: [
        { step: 1, title: 'Sterile Harvest Mapping', description: 'Evaluating core donor thresholds systematically procuring fundamental resources preserving maximal cellular vitality comprehensively.' },
        { step: 2, title: 'Purification Strategies', description: 'Centrifugation maneuvers categorically phase out residual biological fluids consolidating pristine adipose extracts properly.' },
        { step: 3, title: 'Micro-structural Placement', description: 'Calculated minimal dose increments navigate multiple spatial tissue planes structurally averting unnatural volume coalescing dynamically.' },
        { step: 4, title: 'Vascular Assimilation Phases', description: 'Awaiting critical successful micro-vascular incorporation linking newly delivered substrates integrally with native perfusion resources effectively.' }
      ],
      faq: [
        { q: 'Are physiological allergic cascades intrinsically generated utilizing these methodologies?', a: 'Eliminating external biological synthetic structures strictly maintains absolute autogenous DNA parity effectively terminating classical rejection reactions completely universally.' },
        { q: 'Do integrated structural components remain entirely stationary permanently?', a: 'While a calculated proportion succumbs biologically unvascularized, efficiently integrated components successfully securing local perfusion networks effectively establish genuine long-term tissue permanence biologically.' },
        { q: 'Which principal cosmetic applications heavily utilize these approaches reliably?', a: 'Prominent gluteal dimensioning frameworks, reconstructing depleted severe orbital hollowings, or structurally bolstering degraded intrinsic mandibular contours represent major application spheres accurately.' }
      ],
      seoTitle: 'Autologous Fat Injection Therapeutics | Megaeste Clinic',
      seoDescription: 'Accurately replacing deteriorated volume horizons exploring completely natural autogenous biological adipose transfer treatments.',
      relatedSlugs: ['liposuction', 'breast-aesthetics']
    }
  }
];
