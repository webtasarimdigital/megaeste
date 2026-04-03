const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\omerf\\.gemini\\antigravity\\brain\\1e850119-8434-4e5c-b2e0-264029b3d596';
const destDir = 'C:\\Users\\omerf\\megaeste\\public\\images\\services';

const mapping = {
  'goz_kapagi_estetigi_v4_1775250986249.png': 'goz-kapagi-klinik.png',
  'kapali_burun_v3_1775251000142.png': 'burun-estetigi.png',
  'kol_bacak_germe_v3_1775251012575.png': 'kol-bacak-germe.png',
  'meme_asimetrisi_v3_1775251026384.png': 'meme-asimetrisi.png',
  'yag_enjeksiyonu_v2_1775251043451.png': 'yag-enjeksiyonu.png',
  'yuz_germe_v2_1775251068499.png': 'yuz-germe.png',
  'alin_germe_kas_kaldirma_v2_1775251083841.png': 'alin-germe-kas-kaldirma.png',
  'boyun_germe_v2_1775251138711.png': 'boyun-germe.png',
  'kulak_estetigi_v2_1775251099686.png': 'kulak-estetigi.png',
  'liposuction_v2_1775251116393.png': 'liposuction.png',
  'meme_kucultme_v3_1775251190566.png': 'meme-kucultme.png',
  'meme_onarimi_v3_1775251202873.png': 'meme-onarimi.png'
};

for (const [srcName, destName] of Object.entries(mapping)) {
  const src = path.join(srcDir, srcName);
  const dest = path.join(destDir, destName);
  
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${srcName} to ${destName}`);
  } else {
    console.error(`ERROR: Could not find ${srcName}`);
  }
}
