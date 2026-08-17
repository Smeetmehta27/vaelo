const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'logos');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const lightBg = '#FAFAFA';
const darkInk = '#0B1727';
const darkBg = '#0B1727';
const lightInk = '#FAFAFA';

function generateLockupSVG(bg, ink) {
  // Parentheses paths (100x100 weight style)
  const leftPath = 'M 24 32 Q 12 50 24 68';
  const rightPath = 'M 76 32 Q 88 50 76 68';
  
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@500&amp;display=swap');
      .v-text {
        font-family: 'Crimson Pro', serif;
        font-weight: 500;
        font-size: 65px;
      }
      .wordmark {
        font-family: 'Crimson Pro', serif;
        font-weight: 500;
        font-size: 60px;
        letter-spacing: -0.02em;
      }
    </style>
  </defs>
  <rect width="350" height="100" fill="${bg}" />
  
  <g transform="translate(10, 0)">
    <text x="50" y="54" class="v-text" text-anchor="middle" dominant-baseline="middle" fill="${ink}">V</text>
    <path d="${leftPath}" fill="none" stroke="${ink}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="${rightPath}" fill="none" stroke="${ink}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  
  <text x="120" y="54" class="wordmark" dominant-baseline="middle" fill="${ink}">Vaelo</text>
</svg>`;
}

fs.writeFileSync(path.join(outDir, 'lockup-light.svg'), generateLockupSVG(lightBg, darkInk));
fs.writeFileSync(path.join(outDir, 'lockup-dark.svg'), generateLockupSVG(darkBg, lightInk));

console.log('Parentheses Lockups generated in public/logos/');
