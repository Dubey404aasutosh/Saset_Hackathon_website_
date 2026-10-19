import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, '..', 'public', 'brand', 'gpc', 'battery-tech');
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

const techs = [
  {
    filename: 'tech-18650.svg',
    name: '18650 Legacy Li-ion',
    color: '#a1a1a1',
    symbol: 'M 35 15 L 65 15 L 65 85 L 35 85 Z'
  },
  {
    filename: 'tech-lead-acid.svg',
    name: 'Lead-Acid Heavy Block',
    color: '#737373',
    symbol: 'M 20 25 L 80 25 L 80 80 L 20 80 Z M 35 15 L 45 15 L 45 25 L 35 25 Z M 55 15 L 65 15 L 65 25 L 55 25 Z'
  },
  {
    filename: 'tech-relay-bms.svg',
    name: 'Rule-Based Relay BMS',
    color: '#f66f00',
    symbol: 'M 20 50 L 40 50 M 60 50 L 80 50 M 40 50 L 58 35'
  },
  {
    filename: 'tech-lifepo4.svg',
    name: 'Standard LiFePO4 Prism',
    color: '#8cb8d1',
    symbol: 'M 25 20 L 75 20 L 75 80 L 25 80 Z M 40 12 L 60 12 L 60 20 L 40 20 Z'
  },
  {
    filename: 'tech-cell40.svg',
    name: 'Intelligent Cell 4.0',
    color: '#9b338f',
    symbol: 'M 30 18 L 70 18 L 70 82 L 30 82 Z M 50 18 L 50 82 M 42 40 L 58 40 M 42 60 L 58 60'
  },
  {
    filename: 'tech-digital-twin.svg',
    name: 'AI Neural Digital Twin',
    color: '#ffc013',
    symbol: 'M 50 20 L 80 35 L 80 65 L 50 80 L 20 65 L 20 35 Z M 50 20 L 50 80 M 20 35 L 80 65 M 20 65 L 80 35'
  },
  {
    filename: 'tech-sodium-ion.svg',
    name: 'Sovereign Sodium-Ion',
    color: '#f94e2a',
    symbol: 'M 50 15 L 75 30 L 75 70 L 50 85 L 25 70 L 25 30 Z M 50 35 A 15 15 0 1 0 50 65 A 15 15 0 1 0 50 35'
  },
  {
    filename: 'tech-solid-state.svg',
    name: 'Solid-State Ceramic',
    color: '#9b338f',
    symbol: 'M 20 30 L 80 30 L 80 45 L 20 45 Z M 20 55 L 80 55 L 80 70 L 20 70 Z M 20 45 L 80 45 L 80 55 L 20 55 Z'
  }
];

techs.forEach(t => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
    <rect width="100" height="100" fill="#efe7dd" rx="4"/>
    <path d="${t.symbol}" fill="none" stroke="${t.color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="50" cy="50" r="3" fill="${t.color}"/>
  </svg>`;
  fs.writeFileSync(path.join(targetDir, t.filename), svg);
});

console.log('Saved 8 battery tech SVGs into public/brand/gpc/battery-tech/');
