const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'logos');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const lightBg = '#FAFAFA';
const darkInk = '#0B1727';
const darkBg = '#0B1727';
const lightInk = '#FAFAFA';

function wrapSVG(bg, ink, paths, fontWeight, strokeWidth) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;500;600;700;800;900&amp;display=swap');
      .v-text {
        font-family: 'Crimson Pro', serif;
        font-weight: ${fontWeight};
        font-size: 65px;
      }
    </style>
  </defs>
  <rect width="100" height="100" fill="${bg}" />
  <text x="50" y="54" class="v-text" text-anchor="middle" dominant-baseline="middle" fill="${ink}">V</text>
  ${paths.map(d => `<path d="${d}" fill="none" stroke="${ink}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" />`).join('\n  ')}
</svg>`;
}

// 100x100 Original
const parenPaths100 = [
  'M 24 32 Q 12 50 24 68',
  'M 76 32 Q 88 50 76 68'
];
fs.writeFileSync(path.join(outDir, 'icon-paren-light-100.svg'), wrapSVG(lightBg, darkInk, parenPaths100, 500, 5));
fs.writeFileSync(path.join(outDir, 'icon-paren-dark-100.svg'), wrapSVG(darkBg, lightInk, parenPaths100, 500, 5));

// 32x32 Optimized (Heavier weight)
const parenPaths32 = [
  'M 24 32 Q 12 50 24 68',
  'M 76 32 Q 88 50 76 68'
];
fs.writeFileSync(path.join(outDir, 'icon-paren-light-32.svg'), wrapSVG(lightBg, darkInk, parenPaths32, 700, 8));
fs.writeFileSync(path.join(outDir, 'icon-paren-dark-32.svg'), wrapSVG(darkBg, lightInk, parenPaths32, 700, 8));

// 16x16 Optimized (Black weight, widened parentheses)
const parenPaths16 = [
  'M 26 30 Q 8 50 26 70',
  'M 74 30 Q 92 50 74 70'
];
fs.writeFileSync(path.join(outDir, 'icon-paren-light-16.svg'), wrapSVG(lightBg, darkInk, parenPaths16, 900, 12));
fs.writeFileSync(path.join(outDir, 'icon-paren-dark-16.svg'), wrapSVG(darkBg, lightInk, parenPaths16, 900, 12));

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Vaelo Logo Variants - Optimized</title>
<style>
  body {
    background-color: #E2E8F0;
    color: #0B1727;
    font-family: sans-serif;
    padding: 40px;
    margin: 0;
  }
  h1 { text-align: center; margin-bottom: 40px; }
  .container {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
  .row {
    background: #F1F5F9;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }
  .row h2 {
    margin-top: 0;
    text-align: center;
    color: #334155;
    font-size: 24px;
    margin-bottom: 20px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  .card {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    text-align: center;
  }
  .card-title {
    font-weight: 600;
    margin-bottom: 20px;
  }
  .previews {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 30px;
  }
  .size-label {
    font-size: 12px;
    color: #475569;
    margin-bottom: 8px;
  }
  .preview-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
</head>
<body>
  <h1>Vaelo Logo Variants - Size Optimized</h1>
  <div class="container">
    <div class="row">
      <h2>Parentheses &mdash; (V)</h2>
      <div class="grid">
        <div class="card">
          <div class="card-title">Light Background</div>
          <div class="previews">
            <div class="preview-box"><div class="size-label">100x100</div><img src="icon-paren-light-100.svg" width="100" height="100"></div>
            <div class="preview-box"><div class="size-label">32x32</div><img src="icon-paren-light-32.svg" width="32" height="32"></div>
            <div class="preview-box"><div class="size-label">16x16</div><img src="icon-paren-light-16.svg" width="16" height="16"></div>
          </div>
        </div>
        <div class="card">
          <div class="card-title">Dark Background</div>
          <div class="previews">
            <div class="preview-box"><div class="size-label">100x100</div><img src="icon-paren-dark-100.svg" width="100" height="100"></div>
            <div class="preview-box"><div class="size-label">32x32</div><img src="icon-paren-dark-32.svg" width="32" height="32"></div>
            <div class="preview-box"><div class="size-label">16x16</div><img src="icon-paren-dark-16.svg" width="16" height="16"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'preview.html'), html);
console.log('Optimized SVGs generated in public/logos/');
