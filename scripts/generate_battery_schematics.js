const fs = require('fs');
const path = require('path');

const propsDir = path.join(__dirname, '..', 'public', 'brand', 'gpc', 'props');
if (!fs.existsSync(propsDir)) fs.mkdirSync(propsDir, { recursive: true });

// 1. Conventional Battery Schematic (18650 Cylindrical Pack with external sensors and heat hotspot)
const conventionalSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" width="100%" height="100%">
  <defs>
    <linearGradient id="metalCasing" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#d4d4d4"/>
      <stop offset="25%" stop-color="#f5f5f5"/>
      <stop offset="60%" stop-color="#b0b0b0"/>
      <stop offset="100%" stop-color="#8a8a8a"/>
    </linearGradient>
    <radialGradient id="heatHotspot" cx="50%" cy="55%" r="45%">
      <stop offset="0%" stop-color="#f94e2a" stop-opacity="0.85"/>
      <stop offset="50%" stop-color="#f66f00" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#ffc013" stop-opacity="0"/>
    </radialGradient>
    <pattern id="diagonalHatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="8" stroke="#a1a1a1" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="100%" height="100%" fill="#faf5ee"/>

  <!-- Blueprint Title -->
  <text x="25" y="35" font-family="'gtAmericaMono', monospace" font-size="11" font-weight="500" fill="#f94e2a" letter-spacing="1.5">LEGACY CELL 1.0 : CONVENTIONAL ARCHITECTURE</text>
  <text x="25" y="52" font-family="'fsKim', serif" font-size="15" fill="#232424">Passive Cylindrical Can with Blind Thermal Core</text>

  <!-- Outer Cell Body -->
  <g transform="translate(100, 80)">
    <!-- Positive Terminal Top -->
    <rect x="115" y="0" width="70" height="15" rx="3" fill="#8a8a8a" stroke="#232424" stroke-width="1.5"/>
    <rect x="135" y="-8" width="30" height="8" rx="2" fill="#232424"/>
    
    <!-- Cylindrical Can Body -->
    <rect x="50" y="15" width="200" height="240" rx="8" fill="url(#metalCasing)" stroke="#232424" stroke-width="2"/>
    
    <!-- Internal Jelly Roll Cutaway -->
    <rect x="65" y="30" width="170" height="210" fill="url(#diagonalHatch)" stroke="#4d4a47" stroke-dasharray="3 3"/>
    
    <!-- Thermal Hotspot (The Danger Core) -->
    <ellipse cx="150" cy="145" rx="65" ry="65" fill="url(#heatHotspot)"/>
    <circle cx="150" cy="145" r="4" fill="#f94e2a"/>
    <text x="150" y="165" font-family="'gtAmericaMono', monospace" font-size="10" font-weight="bold" fill="#232424" text-anchor="middle">HOTSPOT: 68°C</text>

    <!-- External Laggy Thermistor -->
    <path d="M 250 145 L 290 145" stroke="#f94e2a" stroke-width="2" stroke-dasharray="4 2"/>
    <circle cx="295" cy="145" r="6" fill="#f94e2a"/>
    <text x="310" y="142" font-family="'gtAmericaMono', monospace" font-size="9" fill="#f94e2a">Laggy Surface</text>
    <text x="310" y="153" font-family="'gtAmericaMono', monospace" font-size="9" fill="#f94e2a">Sensor (Reads 38°C)</text>

    <!-- Weak Points Callout -->
    <line x1="20" y1="210" x2="65" y2="210" stroke="#4d4a47" stroke-width="1"/>
    <circle cx="20" cy="210" r="3" fill="#4d4a47"/>
    <text x="15" y="225" font-family="'gtAmerica', sans-serif" font-size="10" fill="#4d4a47" text-anchor="end">Blind internal dendrite growth</text>

    <line x1="20" y1="90" x2="65" y2="90" stroke="#4d4a47" stroke-width="1"/>
    <circle cx="20" cy="90" r="3" fill="#4d4a47"/>
    <text x="15" y="94" font-family="'gtAmerica', sans-serif" font-size="10" fill="#4d4a47" text-anchor="end">No real-time impedance</text>
  </g>

  <!-- Technical Specs Table at Bottom -->
  <g transform="translate(25, 345)">
    <line x1="0" y1="0" x2="450" y2="0" stroke="#d9d1c8" stroke-width="1"/>
    <text x="0" y="18" font-family="'gtAmericaMono', monospace" font-size="9" fill="#4d4a47">CYCLE LIFE: 500-800 CYCLES</text>
    <text x="170" y="18" font-family="'gtAmericaMono', monospace" font-size="9" fill="#4d4a47">ACCURACY: ±8% SOC DRIFT</text>
    <text x="330" y="18" font-family="'gtAmericaMono', monospace" font-size="9" fill="#f94e2a">THERMAL RISK: HIGH</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(propsDir, 'conventional-battery-schematic.svg'), conventionalSvg);
console.log('Saved conventional-battery-schematic.svg');

// 2. Intelligent Cell 4.0 Schematic (Smart In-Situ Sensor, Edge Neural Co-Processor, Sovereign Chemistry)
const intelligentSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" width="100%" height="100%">
  <defs>
    <linearGradient id="smartCasing" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#efe7dd"/>
      <stop offset="40%" stop-color="#faf5ee"/>
      <stop offset="100%" stop-color="#d9d1c8"/>
    </linearGradient>
    <linearGradient id="neuralFlow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#9b338f"/>
      <stop offset="50%" stop-color="#ffc013"/>
      <stop offset="100%" stop-color="#f94e2a"/>
    </linearGradient>
    <radialGradient id="balancedCore" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffc013" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#faf5ee" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="100%" height="100%" fill="#faf5ee"/>

  <!-- Blueprint Title -->
  <text x="25" y="35" font-family="'gtAmericaMono', monospace" font-size="11" font-weight="bold" fill="#9b338f" letter-spacing="1.5">INTELLIGENT CELL 4.0 : COGNITIVE ARCHITECTURE</text>
  <text x="25" y="52" font-family="'fsKim', serif" font-size="15" fill="#232424">Embedded Fiber Bragg Sensing & AI Digital Twin Core</text>

  <!-- Outer Cell Body -->
  <g transform="translate(100, 80)">
    <!-- Smart Integrated Cap with Neural Co-processor -->
    <rect x="100" y="-12" width="100" height="26" rx="4" fill="#232424" stroke="#ffc013" stroke-width="1.5"/>
    <text x="150" y="4" font-family="'gtAmericaMono', monospace" font-size="8" fill="#ffc013" text-anchor="middle">EDGE AI BMS 4.0</text>
    
    <!-- Cell Body -->
    <rect x="50" y="15" width="200" height="240" rx="8" fill="url(#smartCasing)" stroke="#232424" stroke-width="2"/>
    
    <!-- In-situ Fiber Bragg Optical Grating (Core sensor spine) -->
    <line x1="150" y1="15" x2="150" y2="245" stroke="#9b338f" stroke-width="3"/>
    
    <!-- Sensor Nodes along spine -->
    <circle cx="150" cy="65" r="5" fill="#9b338f"/>
    <circle cx="150" cy="130" r="5" fill="#ffc013"/>
    <circle cx="150" cy="195" r="5" fill="#f94e2a"/>

    <!-- Ceramic Phase Change Matrix Rings -->
    <ellipse cx="150" cy="130" rx="70" ry="70" fill="url(#balancedCore)" stroke="#9b338f" stroke-width="1" stroke-dasharray="4 2"/>

    <!-- Sensor Data Callout Lines -->
    <path d="M 155 65 L 280 65" stroke="#9b338f" stroke-width="1.5"/>
    <text x="285" y="68" font-family="'gtAmericaMono', monospace" font-size="9" fill="#9b338f">In-situ Strain Sensor</text>

    <path d="M 155 130 L 280 130" stroke="#ffc013" stroke-width="1.5"/>
    <text x="285" y="133" font-family="'gtAmericaMono', monospace" font-size="9" fill="#f66f00">Real-time Impedance (EIS)</text>

    <path d="M 155 195 L 280 195" stroke="#f94e2a" stroke-width="1.5"/>
    <text x="285" y="198" font-family="'gtAmericaMono', monospace" font-size="9" fill="#f94e2a">Core Temp Sensor (±0.1°C)</text>

    <!-- Wireless IoT Mesh Node -->
    <rect x="15" y="120" width="30" height="20" rx="3" fill="#232424"/>
    <text x="30" y="133" font-family="'gtAmericaMono', monospace" font-size="7" fill="#faf5ee" text-anchor="middle">BLE</text>
    <path d="M 30 115 A 8 8 0 0 1 30 95" fill="none" stroke="#9b338f" stroke-width="1.5"/>
    <path d="M 30 118 A 15 15 0 0 1 30 85" fill="none" stroke="#9b338f" stroke-width="1.2"/>
  </g>

  <!-- Technical Specs Table at Bottom -->
  <g transform="translate(25, 345)">
    <line x1="0" y1="0" x2="450" y2="0" stroke="#d9d1c8" stroke-width="1"/>
    <text x="0" y="18" font-family="'gtAmericaMono', monospace" font-size="9" fill="#9b338f">CYCLE LIFE: 2,500+ CYCLES</text>
    <text x="170" y="18" font-family="'gtAmericaMono', monospace" font-size="9" fill="#232424">ACCURACY: ±0.5% SOC (NEURAL)</text>
    <text x="330" y="18" font-family="'gtAmericaMono', monospace" font-size="9" fill="#15803d">SAFETY: SELF-HEALING AI</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(propsDir, 'intelligent-cell-schematic.svg'), intelligentSvg);
console.log('Saved intelligent-cell-schematic.svg');
