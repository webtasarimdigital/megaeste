const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'services.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add imports at the top
if (!content.includes('import { memeServices }')) {
  content = `import { memeServices } from './pl_meme';\nimport { yuzServices } from './pl_yuz';\nimport { vucutServices } from './pl_vucut';\n\n` + content;
}

// 2. Remove old burun-estetigi object
content = content.replace(/\{\s*id:\s*'burun-estetigi'[\s\S]*?(?=\{\s*id:\s*'goz-kapagi-estetigi')/, '');

// 3. Remove old goz-kapagi-estetigi object
content = content.replace(/\{\s*id:\s*'goz-kapagi-estetigi'[\s\S]*?(?=\{\s*id:\s*'meme-estetigi')/, '');

// 4. Replace old meme-estetigi with the destruction arrays
content = content.replace(/\{\s*id:\s*'meme-estetigi'[\s\S]*?relatedSlugs: \['rhinoplasty', 'blepharoplasty'\],\s*\},\s*\},/, '  ...memeServices,\n  ...yuzServices,\n  ...vucutServices,');

fs.writeFileSync(filePath, content);
console.log('Successfully updated services.ts');
