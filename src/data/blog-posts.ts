export interface BlogPost {
  id: string;
  image: string;
  date: string;
  tr: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    author: string;
    seoTitle: string;
    seoDescription: string;
    tags: string[];
    relatedSlugs: string[];
  };
  en: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    author: string;
    seoTitle: string;
    seoDescription: string;
    tags: string[];
    relatedSlugs: string[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 'sac-ekimi-sonrasi-bakim',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
    date: '2026-03-15',
    tr: {
      title: 'Saç Ekimi Sonrası Bakım Rehberi',
      slug: 'sac-ekimi-sonrasi-bakim-rehberi',
      excerpt: 'Saç ekimi sonrası ilk günlerden itibaren uygulamanız gereken bakım adımlarını detaylı olarak anlattığımız kapsamlı rehber.',
      content: `Saç ekimi operasyonu kadar, operasyon sonrası bakım süreci de başarılı sonuçlar için kritik öneme sahiptir. Doğru bakım protokolünü uygulamak, ekilen saçların tutma oranını artırır ve iyileşme sürecini hızlandırır.

## İlk 3 Gün: Kritik Dönem

Operasyon sonrası ilk 3 gün, ekilen greftlerin yerleşmesi için en kritik dönemdir. Bu sürede ekim bölgesine dokunulmaması, su temas ettirilmemesi ve yüzüstü yatılmaması önerilir.

Uyku pozisyonu çok önemlidir. Başınızı 45 derece yükseltilmiş pozisyonda tutmanız, şişliğin minimuma inmesini sağlar.

## İlk Yıkama (3. Gün)

İlk yıkama genellikle 3. günde kliniğimizde uzman ekibimiz tarafından gerçekleştirilir. Özel losyon ve şampuan kullanılarak hassas bir şekilde kabuklar yumuşatılır.

## 1-2 Hafta: Kabuklanma Dönemi

Bu dönemde ekim bölgesinde kabuklanma oluşur. Kabukları zorla koparmamak çok önemlidir. Doğal olarak dökülmelerini bekleyin. Günlük yıkama rutinine devam edin.

## 1-3 Ay: Şok Dökülme

Ekilen saçların büyük kısmı bu dönemde dökülür. Bu tamamen normal bir süreçtir ve "şok dökülme" olarak adlandırılır. Saç kökleri aktif olarak çalışmaya devam eder.

## 3-12 Ay: Büyüme Dönemi

3. aydan itibaren yeni saçların çıkmaya başladığını göreceksiniz. 6. ayda belirgin bir yoğunluk artışı gözlemlenir. Tam sonuç 8-12 ay arasında ortaya çıkar.

## Beslenme Önerileri

Protein, demir, çinko ve biotin açısından zengin beslenme, saç büyümesini destekler. Bol su tüketmek de iyileşme sürecini olumlu etkiler.`,
      category: 'Saç Ekimi',
      author: 'Dr. Mehmet Yıldız',
      seoTitle: 'Saç Ekimi Sonrası Bakım Rehberi | Megaeste Blog',
      seoDescription: 'Saç ekimi sonrası bakım adımları, ilk yıkama, şok dökülme ve iyileşme süreci hakkında kapsamlı rehber.',
      tags: ['Saç Ekimi', 'Bakım', 'İyileşme'],
      relatedSlugs: ['dhi-ve-fue-farklari', 'sac-dokulmesi-nedenleri'],
    },
    en: {
      title: 'Post Hair Transplant Care Guide',
      slug: 'post-hair-transplant-care-guide',
      excerpt: 'A comprehensive guide explaining the care steps you need to follow from the first days after hair transplant.',
      content: `Post-operative care is just as critical as the hair transplant operation itself for successful results. Following the correct care protocol increases graft retention rates and accelerates the healing process.

## First 3 Days: Critical Period

The first 3 days after the operation are the most critical period for grafts to settle. It is recommended not to touch the transplant area, avoid water contact, and not sleep face down.

Sleep position is very important. Keeping your head at a 45-degree elevated position minimizes swelling.

## First Wash (Day 3)

The first wash is usually performed on the 3rd day at our clinic by our specialist team. Crusts are gently softened using special lotion and shampoo.

## 1-2 Weeks: Crusting Period

Crusting forms in the transplant area during this period. It is very important not to forcefully remove crusts. Wait for them to fall off naturally. Continue the daily wash routine.

## 1-3 Months: Shock Loss

Most transplanted hair falls out during this period. This is completely normal and is called "shock loss." Hair roots continue to work actively.

## 3-12 Months: Growth Period

From the 3rd month, you will see new hair starting to grow. A noticeable density increase is observed at month 6. Full results appear between 8-12 months.

## Nutrition Tips

A diet rich in protein, iron, zinc and biotin supports hair growth. Drinking plenty of water also positively affects the recovery process.`,
      category: 'Hair Transplant',
      author: 'Dr. Mehmet Yildiz',
      seoTitle: 'Post Hair Transplant Care Guide | Megaeste Blog',
      seoDescription: 'Post-transplant care steps, first wash, shock loss and recovery process comprehensive guide.',
      tags: ['Hair Transplant', 'Care', 'Recovery'],
      relatedSlugs: ['dhi-vs-fue-differences', 'hair-loss-causes'],
    },
  },
  {
    id: 'dhi-ve-fue-farklari',
    image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80&w=800',
    date: '2026-03-10',
    tr: {
      title: 'DHI ve FUE Saç Ekimi Arasındaki Farklar',
      slug: 'dhi-ve-fue-farklari',
      excerpt: 'DHI ve FUE saç ekimi tekniklerinin detaylı karşılaştırması. Hangi yöntem size daha uygun olabilir?',
      content: `Saç ekimi alanında en çok tercih edilen iki teknik DHI (Direct Hair Implantation) ve FUE (Follicular Unit Extraction) yöntemleridir. Her iki yöntem de modern ve etkin tedaviler olup, hasta profili ve beklentilerine göre tercih edilir.

## FUE Tekniği

FUE saç ekiminde greftler donör bölgeden mikro punch cihazı ile tek tek alınır. Ardından ekim yapılacak bölgede mikro kanallar açılır ve greftler bu kanallara yerleştirilir.

FUE yöntemi geniş alanlarda etkilidir ve tek seansta yüksek sayıda greft ekimine olanak tanır.

## DHI Tekniği

DHI saç ekiminde Choi Pen adı verilen özel implanter kalem kullanılır. Greftler alındıktan sonra doğrudan Choi Pen ile ekim yapılır. Ayrı bir kanal açma aşaması yoktur.

DHI yöntemi, özellikle ön saç çizgisi tasarımında daha hassas sonuçlar verir ve daha sık ekim yapılmasına olanak tanır.

## Temel Farklılıklar

Her iki teknik de kendi avantajlarına sahiptir. Seçim, hastanın saç yapısı, dökülme paterni ve beklentilerine göre uzman hekim tarafından belirlenir.

FUE geniş saçsız alanlar için idealdir. DHI ise ön hat tasarımı ve sıklaştırma işlemleri için tercih edilir. Her iki teknik de lokal anestezi altında uygulanır ve minimal izle iyileşir.`,
      category: 'Saç Ekimi',
      author: 'Dr. Mehmet Yıldız',
      seoTitle: 'DHI ve FUE Saç Ekimi Farkları | Megaeste Blog',
      seoDescription: 'DHI ve FUE saç ekimi tekniklerinin karşılaştırması. Avantajlar, işlem süreçleri ve sonuçlar hakkında detaylı bilgi.',
      tags: ['DHI', 'FUE', 'Saç Ekimi'],
      relatedSlugs: ['sac-ekimi-sonrasi-bakim-rehberi', 'sac-dokulmesi-nedenleri'],
    },
    en: {
      title: 'Differences Between DHI and FUE Hair Transplant',
      slug: 'dhi-vs-fue-differences',
      excerpt: 'Detailed comparison of DHI and FUE hair transplant techniques. Which method might be more suitable for you?',
      content: `The two most preferred techniques in hair transplantation are DHI (Direct Hair Implantation) and FUE (Follicular Unit Extraction). Both methods are modern and effective treatments, chosen based on patient profile and expectations.

## FUE Technique

In FUE hair transplant, grafts are extracted one by one from the donor area with a micro punch device. Then micro channels are opened in the transplant area and grafts are placed in these channels.

FUE method is effective in large areas and allows high graft counts in a single session.

## DHI Technique

DHI hair transplant uses a special implanter pen called Choi Pen. After grafts are extracted, they are directly transplanted with the Choi Pen. There is no separate channel opening phase.

DHI method gives more precise results especially in front hairline design and allows denser transplantation.

## Key Differences

Both techniques have their own advantages. The choice is determined by the specialist physician based on the patient's hair structure, loss pattern and expectations.

FUE is ideal for large bald areas. DHI is preferred for front hairline design and densification. Both techniques are performed under local anesthesia and heal with minimal scarring.`,
      category: 'Hair Transplant',
      author: 'Dr. Mehmet Yildiz',
      seoTitle: 'DHI vs FUE Hair Transplant Differences | Megaeste Blog',
      seoDescription: 'Comparison of DHI and FUE hair transplant techniques. Detailed info about advantages, processes and results.',
      tags: ['DHI', 'FUE', 'Hair Transplant'],
      relatedSlugs: ['post-hair-transplant-care-guide', 'hair-loss-causes'],
    },
  },
  {
    id: 'sac-dokulmesi-nedenleri',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    date: '2026-03-05',
    tr: {
      title: 'Saç Dökülmesinin Nedenleri ve Çözüm Yolları',
      slug: 'sac-dokulmesi-nedenleri',
      excerpt: 'Saç dökülmesine yol açan faktörleri ve modern tedavi seçeneklerini detaylı inceliyoruz.',
      content: `Saç dökülmesi, kadın ve erkeklerde farklı nedenlerle ortaya çıkabilen yaygın bir sorundur. Genetik faktörler, hormonal değişimler, stres, beslenme yetersizliği ve çeşitli sağlık sorunları saç dökülmesinin başlıca nedenleri arasındadır.

## Genetik Faktörler

Androgenetik alopesi olarak bilinen genetik saç dökülmesi, en yaygın saç dökülmesi nedenidir. Erkeklerde saç çizgisinden ve tepe bölgeden başlayan bir seyir gösterirken, kadınlarda genel bir seyrelme şeklinde ortaya çıkar.

## Hormonal Değişimler

Tiroid bozuklukları, hamilelik, menopoz ve hormonal dengesizlikler saç dökülmesine neden olabilir. Hormonal kaynaklı dökülmelerde altta yatan nedenin tedavisi önceliklidir.

## Stres ve Beslenme

Yoğun stres dönemlerinde telogen effluvium adı verilen yaygın dökülme görülebilir. Demir, çinko, biotin ve protein eksikliği de saç sağlığını olumsuz etkiler.

## Tedavi Seçenekleri

Modern tıp, saç dökülmesi için çeşitli tedavi seçenekleri sunar. Saç mezoterapisi, PRP tedavisi, medikal tedaviler ve saç ekimi bu seçenekler arasındadır. Uzman hekim tarafından yapılan değerlendirme sonrasında kişiye özel tedavi planı oluşturulur.`,
      category: 'Sağlık',
      author: 'Dr. Ayşe Kara',
      seoTitle: 'Saç Dökülmesinin Nedenleri | Megaeste Blog',
      seoDescription: 'Saç dökülmesine yol açan faktörler ve modern tedavi seçenekleri. Genetik, hormonal ve beslenme kaynaklı dökülme.',
      tags: ['Saç Dökülmesi', 'Sağlık', 'Tedavi'],
      relatedSlugs: ['sac-ekimi-sonrasi-bakim-rehberi', 'dhi-ve-fue-farklari'],
    },
    en: {
      title: 'Causes of Hair Loss and Solutions',
      slug: 'hair-loss-causes',
      excerpt: 'We examine the factors causing hair loss and modern treatment options in detail.',
      content: `Hair loss is a common problem that can occur for different reasons in both men and women. Genetic factors, hormonal changes, stress, nutritional deficiency and various health problems are among the main causes of hair loss.

## Genetic Factors

Genetic hair loss, known as androgenetic alopecia, is the most common cause of hair loss. In men, it shows a pattern starting from the hairline and crown area, while in women it appears as general thinning.

## Hormonal Changes

Thyroid disorders, pregnancy, menopause and hormonal imbalances can cause hair loss. In hormonal hair loss, treating the underlying cause is a priority.

## Stress and Nutrition

During intense stress periods, a widespread shedding called telogen effluvium can be seen. Iron, zinc, biotin and protein deficiency also negatively affects hair health.

## Treatment Options

Modern medicine offers various treatment options for hair loss. Hair mesotherapy, PRP treatment, medical treatments and hair transplant are among these options. A personalized treatment plan is created after evaluation by a specialist physician.`,
      category: 'Health',
      author: 'Dr. Ayse Kara',
      seoTitle: 'Causes of Hair Loss | Megaeste Blog',
      seoDescription: 'Factors causing hair loss and modern treatment options. Genetic, hormonal and nutrition-based loss.',
      tags: ['Hair Loss', 'Health', 'Treatment'],
      relatedSlugs: ['post-hair-transplant-care-guide', 'dhi-vs-fue-differences'],
    },
  },
  {
    id: 'medikal-cilt-bakimi-rehberi',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    date: '2026-02-28',
    tr: {
      title: 'Medikal Cilt Bakımı: Profesyonel Yaklaşım',
      slug: 'medikal-cilt-bakimi-rehberi',
      excerpt: 'Medikal cilt bakımının evde bakımdan farkı, uygulanan prosedürler ve cilt sağlığına katkıları hakkında detaylı bilgi.',
      content: `Medikal cilt bakımı, evde uygulanan bakım rutinlerinin ötesinde, profesyonel cihazlar ve dermatolojik ürünlerle gerçekleştirilen klinik bakım uygulamalarıdır.

## Medikal Cilt Bakımı Nedir?

Medikal cilt bakımı, cildin ihtiyaçlarına göre özelleştirilmiş profesyonel bakım protokollerini kapsar. Hydrafacial, kimyasal peeling, mikrodermabrazyon, LED terapi gibi uygulamalar bu kapsamda değerlendirilir.

## Evde Bakımdan Farkı

Medikal cilt bakımında kullanılan aktif maddelerin konsantrasyonu, evde kullanılan ürünlerden çok daha yüksektir. Profesyonel cihazlar sayesinde aktif maddeler cildin derinliklerine ulaştırılır.

## Hangi Cilt Problemlerinde Uygulanır?

Akne, hiperpigmentasyon, kırışıklık, nem kaybı, gözenek büyüklüğü gibi çeşitli cilt problemlerinde medikal cilt bakımı etkili sonuçlar verir.

## Düzenli Bakımın Önemi

Cilt sağlığını korumak ve iyileştirmek için düzenli medikal cilt bakımı seansları önerilir. Cilt tipine göre 2-4 hafta aralıklarla devam eden protokoller, cildin genel sağlığını ve görünümünü iyileştirir.`,
      category: 'Cilt Bakımı',
      author: 'Dr. Ayşe Kara',
      seoTitle: 'Medikal Cilt Bakımı Rehberi | Megaeste Blog',
      seoDescription: 'Medikal cilt bakımının evde bakımdan farkı ve profesyonel prosedürler hakkında detaylı makale.',
      tags: ['Cilt Bakımı', 'Medikal Estetik', 'Sağlık'],
      relatedSlugs: ['sac-ekimi-sonrasi-bakim-rehberi'],
    },
    en: {
      title: 'Medical Skin Care: Professional Approach',
      slug: 'medical-skin-care-guide',
      excerpt: 'Detailed information about the difference between medical skin care and home care, procedures applied and contributions to skin health.',
      content: `Medical skin care is clinical care applications performed with professional devices and dermatological products, beyond home care routines.

## What is Medical Skin Care?

Medical skin care covers professional care protocols customized according to skin needs. Applications such as hydrafacial, chemical peeling, microdermabrasion, LED therapy are evaluated in this scope.

## Difference from Home Care

The concentration of active ingredients used in medical skin care is much higher than products used at home. Active ingredients reach the depths of the skin thanks to professional devices.

## Which Skin Problems is it Applied For?

Medical skin care provides effective results for various skin problems such as acne, hyperpigmentation, wrinkles, moisture loss, and pore size.

## Importance of Regular Care

Regular medical skin care sessions are recommended to maintain and improve skin health. Protocols continuing at 2-4 week intervals according to skin type improve the overall health and appearance of the skin.`,
      category: 'Skin Care',
      author: 'Dr. Ayse Kara',
      seoTitle: 'Medical Skin Care Guide | Megaeste Blog',
      seoDescription: 'Detailed article about the difference between medical skin care and home care, and professional procedures.',
      tags: ['Skin Care', 'Medical Aesthetics', 'Health'],
      relatedSlugs: ['post-hair-transplant-care-guide'],
    },
  },
];

export function getBlogBySlug(slug: string, lang: 'tr' | 'en'): BlogPost | undefined {
  return blogPosts.find(p => p[lang].slug === slug);
}

export function getRelatedPosts(slugs: string[], lang: 'tr' | 'en'): BlogPost[] {
  return blogPosts.filter(p => slugs.includes(p[lang].slug));
}
