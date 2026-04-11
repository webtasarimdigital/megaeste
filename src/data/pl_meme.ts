import { Service } from './services';

export const memeServices: Service[] = [
  {
    id: 'meme-asimetrisi-duzeltme',
    image: '/images/services/meme-asimetrisi.webp',
    tr: {
      title: 'Meme Asimetrisi Düzeltme',
      slug: 'meme-asimetrisi-duzeltme',
      category: 'Meme Estetiği',
      categorySlug: 'meme-estetigi',
      heroDescription: 'Meme dokusunda gelişen asimetrik görünümleri anatomik oranlara göre düzenlemeyi hedefleyen tıbbi cerrahi yaklaşım.',
      longDescription: `<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#729788] rounded-full"></span> Meme Asimetrisi ve Tıbbi Değerlendirme
</h2>
<p class="mb-8 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Meme asimetrisi, memeler arasında şekilsel veya hacimsel yapısal farklılıkların göze çarptığı bir durumdur. Genetik, hormonal veya emzirme gibi etkenler rol oynayabilir. Bu asimetrinin, hastanın kemik/göğüs yapısına en uygun şekilde dengelenmesi doktor-hasta planlaması çerçevesinde sağlanır.</p>

<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#729788] rounded-full"></span> Tedavi Planlaması
</h2>
<p class="mb-6 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Cerrah muayenesine bağlı olarak; hacmi az olan memeye doku veya implant desteği ile estetik uyum sağlanabileceği gibi, daha büyük olan memeden doku çıkartılarak (redüksiyon) orantı kurulabilmektedir.</p>`,
      process: [
        { step: 1, title: 'Klinik Analiz', description: 'Göğüs kafesi genleşimi ve hacimleri ölçülerek cerrahi süreç planlanır.' },
        { step: 2, title: 'Cerrahi Metot Seçimi', description: 'Hangi memeye hacim ekleneceği veya küçültüleceği kararlaştırılır.' },
        { step: 3, title: 'Ameliyat Süreci', description: 'Belirlenen cerrahi asimetri tedavisi genel anestezi altında sürdürülür.' },
        { step: 4, title: 'Medikal İzlem', description: 'Post-operatif iyileşme süreci klinik tarafından yakından takip edilir.' }
      ],
      faq: [
        { q: 'Cerrahi süre genellikle ne kadardır?', a: 'Asimetrinin türüne göre operasyon ortalama 2 ile 4 saat aralığında değişebilir.' },
        { q: 'Uygulama sonrası iz kalır mı?', a: 'Dışarıdan minimal görünecek şekilde meme formuna uygun kesi alanları seçilir, zamanla solması amaçlanır.' },
        { q: 'İyileşme periyodu nasıldır?', a: 'Hekim onayıyla hastalar çoğunlukla ilk 1 haftanın ardından günlük faaliyetlerine (hafif düzeyde) dönebilmektedir.' }
      ],
      seoTitle: 'Meme Asimetrisi Tedavisi | Megaeste Klinik',
      seoDescription: 'Meme dokusu farklılıklarında tıbbi ve estetik onarımı hedefleyen meme asimetrisi cerrahisi detayları.',
      relatedSlugs: ['meme-onarimi', 'meme-kucultme']
    },
    en: {
      title: 'Breast Asymmetry Correction',
      slug: 'breast-asymmetry-correction',
      category: 'Breast Aesthetics',
      categorySlug: 'breast-aesthetics',
      heroDescription: 'Medical surgical approach aiming to structurally correct asymmetric variances in breast tissues in alignment with anatomical aesthetics.',
      longDescription: `Breast asymmetry represents a structural disparity between breasts considering overall volume or contour shape. Key contributors often include genetic backgrounds alongside lactational or hormonal shifts. Reconstructive evaluations ensure tailored surgical protocols aim accurately at supporting foundational anatomical harmony, meticulously respecting inherent patient profiles.`,
      process: [
        { step: 1, title: 'Visual & Clinical Mapping', description: 'Chest parameters are objectively measured determining supportive baseline vectors.' },
        { step: 2, title: 'Methodology Definition', description: 'Approaches including volume supplementation or precise reductions are finalized mutually.' },
        { step: 3, title: 'Operative Phase', description: 'Procedural steps are strictly conducted in secured clinical environments under standard anesthesia.' },
        { step: 4, title: 'Recovery Oversight', description: 'Routine medical assessments guide recovery integrating clinical-grade supportive garments.' }
      ],
      faq: [
        { q: 'How extensive is the operational time?', a: 'Timescales conventionally remain situated between 2 to 4 operative hours relying specifically on procedure complexity.' },
        { q: 'Will surgical incisions result in lasting visibility?', a: 'Incision sites logically merge via natural contours. Healing inherently degrades their clarity over expected recovery months.' },
        { q: 'When is routine baseline activity permissible?', a: 'Moderate regular daily engagements are systematically reinstated usually surpassing the primary postoperative recovery week.' }
      ],
      seoTitle: 'Breast Asymmetry Management | Megaeste Clinic',
      seoDescription: 'Medical approaches and clinical insight to re-align disproportionate breast structures emphasizing balanced aesthetics.',
      relatedSlugs: ['breast-reconstruction', 'breast-reduction']
    }
  },
  {
    id: 'meme-onarimi',
    image: '/images/services/meme-onarimi.webp',
    tr: {
      title: 'Meme Onarımı (Rekonstrüksiyon)',
      slug: 'meme-onarimi',
      category: 'Meme Estetiği',
      categorySlug: 'meme-estetigi',
      heroDescription: 'Kanser cerrahisi veya travma sonucu kayba uğrayan meme dokusunun tıbbi yöntemlerle yapısal olarak yeniden vücuda kazandırılması.',
      longDescription: `<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#729788] rounded-full"></span> Meme Rekonstrüksiyonunun Rolü
</h2>
<p class="mb-8 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Meme rekonstrüksiyonu, mastektomi işlemleri sonrası beden formunun tıbbi ve estetik bağlamda desteklenmesini içerir. Estetik bir tamamlayıcı operasyon olduğu kadar, onkolojik tedaviyi bitirmiş hastaların psiko-sosyal bütünlüğüne katkı sağlayan önemli rekonstrüktif yaklaşımlardan biridir.</p>

<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#729788] rounded-full"></span> Tıbbi Yöntemler
</h2>
<p class="mb-6 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Genellikle kişinin doku uyumu dikkate alınarak sırt veya karın bölgesinden (flep) doku aktarımı yahut hekim tarafından onaylanmış implant (silikon) destekleriyle anatominin yeniden oluşturulması sağlanır.</p>`,
      process: [
        { step: 1, title: 'Onkolojik Değerlendirme', description: 'Ek cerrahi müdahalenin zamanlaması için onkolog-cerrah istişaresi mutlak suretle yapılır.' },
        { step: 2, title: 'Operasyon Yöntemi', description: 'Silikon protezler mi yoksa vücudun kendi öz dokusunun mu kullanılacağına karar verilir.' },
        { step: 3, title: 'Rekonstrüktif Girişim', description: 'Aşamalı operasyon prensibiyle öncelikli olarak meme kalıbı ve hacmi dokuya entegre edilir.' },
        { step: 4, title: 'Areola (Meme Başı) Yapılandırma', description: 'Takip eden medikal aşamalarda daha küçük cerrahilerle meme başı anatomisi şekillendirilir.' }
      ],
      faq: [
        { q: 'Kanser cerrahisi ile eşzamanlı olarak rekonstrüksiyon uygulanabilir mi?', a: 'Şartların tıbbi açıdan uygun tesisis edildiği kimi vakalarda eşzamanlı (anında) rekonstrüksiyon işlemleri klinik olarak yürütülebilmektedir.' },
        { q: 'Flep ameliyatları yüksek risk barındırır mı?', a: 'Flep yönteminde kişinin genetik doku reddi oluşmazken; bu kapsamlı cerrahi, ameliyat sonrası kan akımının özenle korunmasını gerektiren teknik bir süreçtir.' },
        { q: 'Oluşturulan alanda his duygusu zamanla onarılır mı?', a: 'Doku dokumalarının travmatize olması sebebiyle başlangıçtaki doğallıkta his kalitesi oluşmayabilse de sinir süreçleri uzun vadede yenilenebilir.' }
      ],
      seoTitle: 'Meme Onarımı & Rekonstrüksiyon İşlemleri | Megaeste',
      seoDescription: 'Mastektomi sonrası implant veya tıbbi doku transferi yoluyla uygulanan anatomik onarım (rekonstrüksiyon) prosedür rehberi.',
      relatedSlugs: ['meme-asimetrisi-duzeltme', 'karin-germe']
    },
    en: {
      title: 'Breast Reconstruction',
      slug: 'breast-reconstruction',
      category: 'Breast Aesthetics',
      categorySlug: 'breast-aesthetics',
      heroDescription: 'The structured medical process rehabilitating breast volume and structural symmetry typically subsequent to oncological excisions.',
      longDescription: `Addressing tissue deficiencies ensuing predominantly from mastectomy treatments, breast reconstruction methodologies clinically strive linking functionality with bodily aesthetics. Reconstruction endeavors are profoundly fundamental regarding holistic post-operative patient psychology. Depending heavily on tissue thresholds alongside ongoing treatments, procedures involve safely expanding anatomical volumes via approved implants alongside integrating dedicated autologous flap (native tissue) transfers.`,
      process: [
        { step: 1, title: 'Multidisciplinary Sync', description: 'Procedural timelines necessitate definitive evaluations aligning rigorously with active oncologic pathways.' },
        { step: 2, title: 'Material Integration Strategies', description: 'Decisions objectively weigh utilizing prosthesis devices strictly vs autologous internal tissue flaps.' },
        { step: 3, title: 'Staged Construction', description: 'Primarily stabilizing overarching breast foundation sizes before subsequently modeling specialized aesthetic contours.' },
        { step: 4, title: 'Symmetry Refinements', description: 'Opposite native breast tissues might encounter minor matching interventions ensuring visual proportions correspond.' }
      ],
      faq: [
        { q: 'Can immediate reconstruction protocols execute synchronously?', a: 'Within carefully targeted demographics presenting favorable pathology, executing breast conservation/rebuilding instantaneously maintains high prioritization safely.' },
        { q: 'Do autologous surgical transfers elevate operative risks substantially?', a: 'Leveraging organic native cells naturally neutralizes implant rejections, yet inherently lengthens hospital tenure mandating concentrated vigilance regarding relocated vascular micro-connections.' },
        { q: 'Is physiological nervous sensory response anticipated organically?', a: 'Excising native neural channels broadly limits absolute initial sensitivities; though prolonged recovery phases can document varied progressive re-innervations over extensive timelines.' }
      ],
      seoTitle: 'Medical Breast Reconstruction Processes | Megaeste Clinic',
      seoDescription: 'Accurate clinical insights into established autologous flap protocols alongside implant driven breast recovery paradigms post-mastectomy.',
      relatedSlugs: ['breast-asymmetry-correction', 'tummy-tuck']
    }
  },
  {
    id: 'meme-kucultme',
    image: '/images/services/meme-kucultme.webp',
    tr: {
      title: 'Meme Küçültme (Redüksiyon)',
      slug: 'meme-kucultme',
      category: 'Meme Estetiği',
      categorySlug: 'meme-estetigi',
      heroDescription: 'Orantısız ağırlığın neden olduğu sırt ağrıları ve iskelet yükünü iyileştirmeyi hedefleyen redüksiyon işlemi.',
      longDescription: `<h2 class="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3 transform transition-transform duration-500 hover:translate-x-2">
  <span class="w-8 h-1 bg-[#729788] rounded-full"></span> Meme Küçültme İçin Tıbbi Nedenler
</h2>
<p class="mb-8 opacity-90 leading-relaxed text-gray-700 text-[15px] md:text-base">Aşırı büyük göğüs yapısı, sadece estetik olarak algılanan bir varyasyon değil; öncelikle fiziksel omurga yükünü (zamanla skolyoz veya postür bozukluğu etkileri) artıran fizyolojik bir detaydır. Cerrahi süreç ile aşırı parankimal bez dokusu ve cildin çıkartılması hem vücut ağırlığını dengeler hem de dermatolojik (pişik/tahriş vb.) risk eğri sınırını alta çeker.</p>`,
      process: [
        { step: 1, title: 'Tıbbi Analiz', description: 'Operasyonun sağlayacağı postüral destek haritalanır ve uygun doku çıkarım ölçüsü tespit edilir.' },
        { step: 2, title: 'Estetik Form Planı', description: 'Kesi sınırların (ters T, sirküler vb.) izler gizlenebilecek yapıdan seçilmesi planlanır.' },
        { step: 3, title: 'Operasyon (Doku Tahliyesi)', description: 'Fazla olan meme bezi yapısı, yağ ve cilt cerrahi ile kontrollü olarak uzaklaştırılır.' },
        { step: 4, title: 'Sabitleme ve Kontrol', description: 'Vücudun yeni dengesine ulaşması medikal sutyen asistanlığında 4-6 hafta izlenir.' }
      ],
      faq: [
        { q: 'Cerrahi kesi izleri dışarıdan farkedilir yapıda mıdır?', a: 'Dikiş hatları çoğunlukla doğal göğüs alt formuna uyumlandırılır. Zamanla deri rengine yaklaşıp klinik izler soluklaşır.' },
        { q: 'Süt emzirme (laktasyon) süreçlerine zarar verir mi?', a: 'Kesi sırasında uygun süt kanallarının anatomisi titizlikle korunsa da; total hacimsel azlıktan kaynaklı üretim oranlarında kısmî düşüşler görülebilmektedir.' },
        { q: 'Hızlı kilo alımları redüksiyon başarısını zedeler mi?', a: 'Adipos (yağ) artışı hormonlara duyarlı olduğundan operasyon sonrasında metabolik stabilizasyonun korunması estetik/topografik açıdan şiddetle tavsiye edilir.' }
      ],
      seoTitle: 'Meme Küçültme Ameliyatı (Redüksiyon) Medikal | Megaeste',
      seoDescription: 'Sırt ve boyun bölgelerinde fiziksel kısıt oluşturabilen ağır doku fazlalıklarına karşı etkili meme redüksiyonu.',
      relatedSlugs: ['liposuction', 'karin-germe']
    },
    en: {
      title: 'Breast Reduction (Reduction Mammaplasty)',
      slug: 'breast-reduction',
      category: 'Breast Aesthetics',
      categorySlug: 'breast-aesthetics',
      heroDescription: 'Functional reduction modalities targeting musculoskeletal discomforts instigated via extensive breast volumes establishing proportional balance.',
      longDescription: `Oversized chest proportions essentially transcend cosmetic criteria, presenting persistent mechanical overloads pressing drastically against neck/shoulder orthopedic boundaries. Excisional manipulation via reduction mammaplasty directly reduces disproportionate glandular/adipose matrices alleviating severe postural distress inherently. Redesigned tissues systematically encourage biological adaptations supporting dermatological wellness preventing sub-fold dermal irritations completely.`,
      process: [
        { step: 1, title: 'Biomechanical Diagnostics', description: 'Assessing comprehensive tissue volumes isolating critical resection ratios ensuring structural integrity endures.' },
        { step: 2, title: 'Incisional Drafting', description: 'Strategic marking methodologies dictate subsequent operative excisions camouflaging paths along expected organic creases.' },
        { step: 3, title: 'Organized Tissue Excision', description: 'Careful removal strictly calibrates blood supply preservation ensuring paramount anatomical vitality.' },
        { step: 4, title: 'Recovery Immobilization', description: 'Robust post-surgical garments essentially prohibit unnecessary tension aiding consistent internal sutural bonding.' }
      ],
      faq: [
        { q: 'Does residual healing leave significantly prominent scar layouts?', a: 'Properly maintained closures fundamentally merge along organic pigment perimeters lightening exponentially passing typical extended healing cycles.' },
        { q: 'Will natural lactation abilities completely forfeit subsequently?', a: 'Modern procedural adaptations actively safeguard principal lactational duct frameworks; however, general glandular depletion logically impacts gross production capabilities dynamically.' },
        { q: 'Is future extreme weight variance structurally detrimental?', a: 'Adipose tissues readily fluctuate correlating closely to severe metabolic shifting. Retaining relative baseline metrics effectively prolongs aesthetic structural milestones optimally.' }
      ],
      seoTitle: 'Breast Reduction Operations (Mammaplasty) | Megaeste',
      seoDescription: 'Operative strategies relieving prolonged orthopedic back burdens via balanced glandular reduction and safe modeling interventions.',
      relatedSlugs: ['liposuction', 'tummy-tuck']
    }
  }
];
