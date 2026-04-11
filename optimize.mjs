import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const publicImagesDir = path.join(process.cwd(), 'public', 'images');
const srcDir = path.join(process.cwd(), 'src');

const imageExtensions = ['.jpg', '.jpeg', '.png', '.jfif'];

async function optimizeImages() {
  const imagesToConvert = [];
  
  // Recursively find all images
  async function findImages(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await findImages(fullPath);
      } else {
        const ext = path.extname(entry.name).toLowerCase();
        if (imageExtensions.includes(ext)) {
          imagesToConvert.push({
            originalPath: fullPath,
            nameWithoutExt: path.basename(entry.name, path.extname(entry.name)),
            dirPath: dir,
            oldExt: ext
          });
        }
      }
    }
  }

  await findImages(publicImagesDir);
  const replacements = [];

  for (const img of imagesToConvert) {
    const webpPath = path.join(img.dirPath, `${img.nameWithoutExt}.webp`);
    try {
      await sharp(img.originalPath)
        .webp({ quality: 80 })
        .toFile(webpPath);
      
      const relativeOldPath = img.originalPath.split('public')[1].replace(/\\/g, '/');
      const relativeNewPath = webpPath.split('public')[1].replace(/\\/g, '/');
      
      replacements.push({
        oldBase: path.basename(img.originalPath),
        newBase: `${img.nameWithoutExt}.webp`,
        oldPath: relativeOldPath,
        newPath: relativeNewPath
      });

      await fs.unlink(img.originalPath);
      console.log(`Converted and deleted: ${img.originalPath}`);
    } catch (err) {
      console.error(`Error converting ${img.originalPath}:`, err);
    }
  }

  return replacements;
}

async function updateCodeReferences(replacements) {
  if (replacements.length === 0) return;

  async function processFiles(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await processFiles(fullPath);
      } else {
        const ext = path.extname(entry.name);
        if (['.ts', '.tsx', '.js', '.jsx', '.css'].includes(ext)) {
          let content = await fs.readFile(fullPath, 'utf-8');
          let modified = false;

          for (const rep of replacements) {
            // Very simple replace all - replaces base names and full relative paths just in case
            if (content.includes(rep.oldBase)) {
              // Only replace exactly matching old filenames
              const regex = new RegExp(rep.oldBase.replace(/\./g, '\\.'), 'g');
              content = content.replace(regex, rep.newBase);
              modified = true;
            }
          }

          if (modified) {
            await fs.writeFile(fullPath, content, 'utf-8');
            console.log(`Updated references in: ${fullPath}`);
          }
        }
      }
    }
  }

  await processFiles(srcDir);
}

async function main() {
  console.log('Optimizing images...');
  const replacements = await optimizeImages();
  console.log('Updating code references...');
  await updateCodeReferences(replacements);
  console.log('Done!');
}

main().catch(console.error);
