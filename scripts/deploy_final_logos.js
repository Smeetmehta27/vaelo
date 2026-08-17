const fs = require('fs');
const path = require('path');

const brandingDir = path.join(__dirname, '..', 'public', 'branding');
const appDir = path.join(__dirname, '..', 'src', 'app');

const ink = '#0B1727';

// Nav Lockup SVG (Transparent background, dark ink)
const lockupSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@500&amp;display=swap');
      .v-text { font-family: 'Crimson Pro', serif; font-weight: 500; font-size: 65px; }
      .wordmark { font-family: 'Crimson Pro', serif; font-weight: 500; font-size: 60px; letter-spacing: -0.02em; }
    </style>
  </defs>
  <g transform="translate(10, 0)">
    <text x="50" y="54" class="v-text" text-anchor="middle" dominant-baseline="middle" fill="${ink}">V</text>
    <path d="M 24 32 Q 12 50 24 68" fill="none" stroke="${ink}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M 76 32 Q 88 50 76 68" fill="none" stroke="${ink}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <text x="120" y="54" class="wordmark" dominant-baseline="middle" fill="${ink}">Vaelo</text>
</svg>`;

// Footer Icon SVG (Transparent background, dark ink, 100x100 weight)
const iconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@500&amp;display=swap');
      .v-text { font-family: 'Crimson Pro', serif; font-weight: 500; font-size: 65px; }
    </style>
  </defs>
  <text x="50" y="54" class="v-text" text-anchor="middle" dominant-baseline="middle" fill="${ink}">V</text>
  <path d="M 24 32 Q 12 50 24 68" fill="none" stroke="${ink}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M 76 32 Q 88 50 76 68" fill="none" stroke="${ink}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;

// Favicon SVG (Dynamic color scheme, 16x16 optimized weight)
const faviconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@900&amp;display=swap');
      .v-text { font-family: 'Crimson Pro', serif; font-weight: 900; font-size: 65px; }
      .ink { stroke: #0B1727; fill: #0B1727; }
      @media (prefers-color-scheme: dark) {
        .ink { stroke: #FAFAFA; fill: #FAFAFA; }
      }
    </style>
  </defs>
  <text x="50" y="54" class="v-text ink" text-anchor="middle" dominant-baseline="middle" stroke="none">V</text>
  <path d="M 26 30 Q 8 50 26 70" fill="none" class="ink" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M 74 30 Q 92 50 74 70" fill="none" class="ink" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;

fs.writeFileSync(path.join(brandingDir, 'vaelo-logo-lockup.svg'), lockupSVG);
fs.writeFileSync(path.join(brandingDir, 'vaelo-icon.svg'), iconSVG);
fs.writeFileSync(path.join(appDir, 'icon.svg'), faviconSVG);
console.log('Deployed logos to codebase.');
