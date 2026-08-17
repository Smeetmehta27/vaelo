const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'logos');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const lightBg = '#FAFAFA';
const darkInk = '#0B1727';
const darkBg = '#0B1727';
const lightInk = '#FAFAFA';

function wrapSVG(bg, ink, paths) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@500&amp;display=swap');
      .v-text {
        font-family: 'Crimson Pro', serif;
        font-weight: 500;
        font-size: 65px;
      }
    </style>
  </defs>
  <rect width="100" height="100" fill="${bg}" />
  <text x="50" y="54" class="v-text" text-anchor="middle" dominant-baseline="middle" fill="${ink}">V</text>
  ${paths.map(d => `<path d="${d}" fill="none" stroke="${ink}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />`).join('\n  ')}
</svg>`;
}

// Wide compression angle brackets (existing)
const anglePaths = [
  'M 28 34 L 12 50 L 28 66',
  'M 72 34 L 88 50 L 72 66'
];

// Tight compression angle brackets (existing, keeping just in case)
const tightAnglePaths = [
  'M 35 34 L 19 50 L 35 66',
  'M 65 34 L 81 50 L 65 66'
];

// Parentheses (V) - wide spacing match
const parenPaths = [
  'M 24 32 Q 12 50 24 68',
  'M 76 32 Q 88 50 76 68'
];

// Square brackets [V] - wide spacing match
const squarePaths = [
  'M 24 34 L 16 34 L 16 66 L 24 66',
  'M 76 34 L 84 34 L 84 66 L 76 66'
];

// Regenerate existing icons just to be safe
fs.writeFileSync(path.join(outDir, 'icon-wide-light.svg'), wrapSVG(lightBg, darkInk, anglePaths));
fs.writeFileSync(path.join(outDir, 'icon-wide-dark.svg'), wrapSVG(darkBg, lightInk, anglePaths));
fs.writeFileSync(path.join(outDir, 'icon-tight-light.svg'), wrapSVG(lightBg, darkInk, tightAnglePaths));
fs.writeFileSync(path.join(outDir, 'icon-tight-dark.svg'), wrapSVG(darkBg, lightInk, tightAnglePaths));

// Generate new variant icons
fs.writeFileSync(path.join(outDir, 'icon-paren-light.svg'), wrapSVG(lightBg, darkInk, parenPaths));
fs.writeFileSync(path.join(outDir, 'icon-paren-dark.svg'), wrapSVG(darkBg, lightInk, parenPaths));
fs.writeFileSync(path.join(outDir, 'icon-square-light.svg'), wrapSVG(lightBg, darkInk, squarePaths));
fs.writeFileSync(path.join(outDir, 'icon-square-dark.svg'), wrapSVG(darkBg, lightInk, squarePaths));

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Vaelo Logo Variants</title>
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
    gap: 20px;
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
  <h1>Vaelo Logo Variants</h1>
  <div class="container">
    
    <!-- Row 1: Angle brackets -->
    <div class="row">
      <h2>Angle brackets &mdash; &lt;V&gt;</h2>
      <div class="grid">
        <div class="card">
          <div class="card-title">Light Background</div>
          <div class="previews">
            <div class="preview-box"><div class="size-label">100x100</div><img src="icon-wide-light.svg" width="100" height="100"></div>
            <div class="preview-box"><div class="size-label">32x32</div><img src="icon-wide-light.svg" width="32" height="32"></div>
            <div class="preview-box"><div class="size-label">16x16</div><img src="icon-wide-light.svg" width="16" height="16"></div>
          </div>
        </div>
        <div class="card">
          <div class="card-title">Dark Background</div>
          <div class="previews">
            <div class="preview-box"><div class="size-label">100x100</div><img src="icon-wide-dark.svg" width="100" height="100"></div>
            <div class="preview-box"><div class="size-label">32x32</div><img src="icon-wide-dark.svg" width="32" height="32"></div>
            <div class="preview-box"><div class="size-label">16x16</div><img src="icon-wide-dark.svg" width="16" height="16"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Row 2: Parentheses -->
    <div class="row">
      <h2>Parentheses &mdash; (V)</h2>
      <div class="grid">
        <div class="card">
          <div class="card-title">Light Background</div>
          <div class="previews">
            <div class="preview-box"><div class="size-label">100x100</div><img src="icon-paren-light.svg" width="100" height="100"></div>
            <div class="preview-box"><div class="size-label">32x32</div><img src="icon-paren-light.svg" width="32" height="32"></div>
            <div class="preview-box"><div class="size-label">16x16</div><img src="icon-paren-light.svg" width="16" height="16"></div>
          </div>
        </div>
        <div class="card">
          <div class="card-title">Dark Background</div>
          <div class="previews">
            <div class="preview-box"><div class="size-label">100x100</div><img src="icon-paren-dark.svg" width="100" height="100"></div>
            <div class="preview-box"><div class="size-label">32x32</div><img src="icon-paren-dark.svg" width="32" height="32"></div>
            <div class="preview-box"><div class="size-label">16x16</div><img src="icon-paren-dark.svg" width="16" height="16"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Row 3: Square brackets -->
    <div class="row">
      <h2>Square brackets &mdash; [V]</h2>
      <div class="grid">
        <div class="card">
          <div class="card-title">Light Background</div>
          <div class="previews">
            <div class="preview-box"><div class="size-label">100x100</div><img src="icon-square-light.svg" width="100" height="100"></div>
            <div class="preview-box"><div class="size-label">32x32</div><img src="icon-square-light.svg" width="32" height="32"></div>
            <div class="preview-box"><div class="size-label">16x16</div><img src="icon-square-light.svg" width="16" height="16"></div>
          </div>
        </div>
        <div class="card">
          <div class="card-title">Dark Background</div>
          <div class="previews">
            <div class="preview-box"><div class="size-label">100x100</div><img src="icon-square-dark.svg" width="100" height="100"></div>
            <div class="preview-box"><div class="size-label">32x32</div><img src="icon-square-dark.svg" width="32" height="32"></div>
            <div class="preview-box"><div class="size-label">16x16</div><img src="icon-square-dark.svg" width="16" height="16"></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'preview.html'), html);
console.log('Files generated in public/logos/');
