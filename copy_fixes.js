const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\omerf\\.gemini\\antigravity\\brain\\1e850119-8434-4e5c-b2e0-264029b3d596';
const destDir = 'C:\\Users\\omerf\\megaeste\\public\\images\\services';

const mapping = {
  'kapali_burun_v4_1775252488268.png': 'burun-estetigi.png',
  'meme_kucultme_v4_1775252502423.png': 'meme-kucultme.png'
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
