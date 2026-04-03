const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'Header.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add plasticSurgeryNav definition before navData
const plasticSurgeryDef = `
  const plasticSurgeryNav = {
    title: lang === 'tr' ? 'PLASTİK CERRAHİ' : 'PLASTIC SURGERY',
    href: '#',
    items: [
      {
        label: lang === 'tr' ? 'Meme Estetiği' : 'Breast Aesthetics',
        href: '#',
        subItems: [
          { label: lang === 'tr' ? 'Meme Asimetrisi Düzeltme' : 'Breast Asymmetry Correction', href: \`\${prefix}/\${lang === 'tr' ? 'hizmetler/meme-asimetrisi-duzeltme' : 'treatments/breast-asymmetry-correction'}\` },
          { label: lang === 'tr' ? 'Meme Onarımı' : 'Breast Reconstruction', href: \`\${prefix}/\${lang === 'tr' ? 'hizmetler/meme-onarimi' : 'treatments/breast-reconstruction'}\` },
          { label: lang === 'tr' ? 'Meme Küçültme' : 'Breast Reduction', href: \`\${prefix}/\${lang === 'tr' ? 'hizmetler/meme-kucultme' : 'treatments/breast-reduction'}\` }
        ]
      },
      {
        label: lang === 'tr' ? 'Burun Estetiği' : 'Nose Aesthetics',
        href: '#',
        subItems: [
          { label: lang === 'tr' ? 'Kapalı Burun Estetiği' : 'Closed Rhinoplasty', href: \`\${prefix}/\${lang === 'tr' ? 'hizmetler/kapali-burun-ameliyati' : 'treatments/closed-rhinoplasty'}\` }
        ]
      },
      {
        label: lang === 'tr' ? 'Yüz Estetiği' : 'Facial Aesthetics',
        href: '#',
        subItems: [
          { label: lang === 'tr' ? 'Yüz Germe' : 'Face Lift', href: \`\${prefix}/\${lang === 'tr' ? 'hizmetler/yuz-germe' : 'treatments/face-lift'}\` },
          { label: lang === 'tr' ? 'Boyun Germe' : 'Neck Lift', href: \`\${prefix}/\${lang === 'tr' ? 'hizmetler/boyun-germe' : 'treatments/neck-lift'}\` },
          { label: lang === 'tr' ? 'Kulak Estetiği' : 'Ear Aesthetics', href: \`\${prefix}/\${lang === 'tr' ? 'hizmetler/kulak-estetigi' : 'treatments/ear-aesthetics'}\` },
          { label: lang === 'tr' ? 'Göz Kapağı Estetiği' : 'Eyelid Surgery', href: \`\${prefix}/\${lang === 'tr' ? 'hizmetler/goz-kapagi-estetigi' : 'treatments/blepharoplasty'}\` },
          { label: lang === 'tr' ? 'Alın Germe - Kaş Kaldırma' : 'Brow & Forehead Lift', href: \`\${prefix}/\${lang === 'tr' ? 'hizmetler/alin-germe-kas-kaldirma' : 'treatments/brow-forehead-lift'}\` }
        ]
      },
      {
        label: lang === 'tr' ? 'Vücut Estetiği' : 'Body Aesthetics',
        href: '#',
        subItems: [
          { label: lang === 'tr' ? 'Karın Germe' : 'Tummy Tuck', href: \`\${prefix}/\${lang === 'tr' ? 'hizmetler/karin-germe' : 'treatments/tummy-tuck'}\` },
          { label: lang === 'tr' ? 'Kol ve Bacak Germe' : 'Arm & Leg Lift', href: \`\${prefix}/\${lang === 'tr' ? 'hizmetler/kol-bacak-germe' : 'treatments/arm-leg-lift'}\` },
          { label: 'Liposuction', href: \`\${prefix}/\${lang === 'tr' ? 'hizmetler/liposuction' : 'treatments/liposuction'}\` },
          { label: lang === 'tr' ? 'Yağ Enjeksiyonu' : 'Fat Injection', href: \`\${prefix}/\${lang === 'tr' ? 'hizmetler/yag-enjeksiyonu' : 'treatments/fat-injection'}\` }
        ]
      }
    ]
  };
`;

content = content.replace("const navData = dict?.nav ?", plasticSurgeryDef + "\\n  const navData = dict?.nav ?");

// 2. Replace the old plastic surgery object in navData
content = content.replace(
  /\{\s*title:\s*dict\.nav\.plasticSurgery[^\]]*\]}\},/,
  "plasticSurgeryNav,"
);

// 3. Desktop subitems code
const desktopOld = \`{category.items.map((subItem: { label: string; href: string }, subIdx: number) => (
                          <li key={subIdx}>
                            <Link href={subItem.href} className="block px-6 py-3 text-[13px] text-[#4f6f8f] hover:text-[#cca66b] hover:bg-gray-50 hover:pl-7 capitalize font-medium transition-all duration-300 border-b border-gray-50 last:border-none">
                              {subItem.label}
                            </Link>
                          </li>
                        ))}\`;

const desktopNew = \`{category.items.map((subItem: any, subIdx: number) => (
                          <li key={subIdx} className="relative group/sub">
                            <Link href={subItem.href} className="block px-6 py-3 text-[13px] text-[#4f6f8f] hover:text-[#cca66b] hover:bg-gray-50 hover:pl-7 capitalize font-medium transition-all duration-300 border-b border-gray-50 last:border-none flex justify-between items-center">
                              {subItem.label}
                              {subItem.subItems && <span className="text-[9px] text-[#cca66b]">▶</span>}
                            </Link>

                            {/* Third Level Dropdown */}
                            {subItem.subItems && (
                              <div className="absolute top-0 left-full ml-0 bg-white shadow-xl rounded-lg border-l-2 border-[#cca66b] min-w-[250px] opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-3 group-hover/sub:translate-x-0 z-[110]">
                                <ul className="py-1 flex flex-col">
                                  {subItem.subItems.map((thirdItem: any, thirdIdx: number) => (
                                    <li key={thirdIdx}>
                                      <Link href={thirdItem.href} className="block px-6 py-3 text-[13px] text-[#4f6f8f] hover:text-[#cca66b] hover:bg-gray-50 hover:pl-7 capitalize font-medium transition-all duration-300 border-b border-gray-50 last:border-none">
                                        {thirdItem.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </li>
                        ))}\`;

content = content.replace(desktopOld, desktopNew);

// 4. Mobile subitems code
const mobileOld = \`{category.items.map((subItem: { label: string; href: string }, subIdx: number) => (
                                  <Link 
                                    key={subIdx} 
                                    href={subItem.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="py-2.5 px-4 text-[12px] font-semibold tracking-wide text-gray-400 hover:text-white transition-colors uppercase"
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}\`;

const mobileNew = \`{category.items.map((subItem: any, subIdx: number) => (
                                <div key={subIdx} className="flex flex-col">
                                  {subItem.subItems ? (
                                    <div className="flex flex-col pt-1 pb-2">
                                      <div className="py-1.5 px-4 text-[12px] font-black tracking-wide text-[#cca66b] uppercase">
                                        {subItem.label}
                                      </div>
                                      <div className="flex flex-col pl-4 border-l border-white/5 ml-4">
                                        {subItem.subItems.map((thirdItem: any, thirdIdx: number) => (
                                          <Link 
                                            key={thirdIdx} 
                                            href={thirdItem.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="py-1.5 px-2 text-[12.5px] font-medium tracking-wide text-gray-300 hover:text-white transition-colors"
                                          >
                                            {thirdItem.label}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ) : (
                                    <Link 
                                      href={subItem.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="py-2.5 px-4 text-[12px] font-semibold tracking-wide text-gray-400 hover:text-white transition-colors uppercase"
                                    >
                                      {subItem.label}
                                    </Link>
                                  )}
                                </div>
                              ))}\`;
                              
content = content.replace(mobileOld, mobileNew);

fs.writeFileSync(filePath, content);
console.log("Header updated");
