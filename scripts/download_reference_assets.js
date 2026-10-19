import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, '..', 'public', 'brand', 'gpc');

const assets = [
  {
    url: 'https://applied-imagination.gpc.consulting/brand/gpc/clouds/cloud-bank-a.png',
    dest: path.join(baseDir, 'clouds', 'cloud-bank-a.png')
  },
  {
    url: 'https://applied-imagination.gpc.consulting/brand/gpc/clouds/cloud-bank-b.png',
    dest: path.join(baseDir, 'clouds', 'cloud-bank-b.png')
  },
  {
    url: 'https://applied-imagination.gpc.consulting/brand/gpc/flight/mountain-ground-cutout.png',
    dest: path.join(baseDir, 'flight', 'mountain-ground-cutout.png')
  },
  {
    url: 'https://applied-imagination.gpc.consulting/brand/gpc/flight/jet-stream-magnific.png',
    dest: path.join(baseDir, 'flight', 'jet-stream-magnific.png')
  },
  {
    url: 'https://applied-imagination.gpc.consulting/brand/gpc/airliner-gpc-color-block.png',
    dest: path.join(baseDir, 'airliner-gpc-color-block.png')
  }
];

async function downloadAll() {
  for (const item of assets) {
    const dir = path.dirname(item.dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    console.log(`Downloading ${item.url} -> ${item.dest}...`);
    try {
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      if (!res.ok) {
        console.error(`Failed ${item.url}: status ${res.status}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(item.dest, buffer);
      console.log(`Saved ${item.dest} (${buffer.length} bytes)`);
    } catch (e) {
      console.error(`Error downloading ${item.url}:`, e);
    }
  }
}

downloadAll();
