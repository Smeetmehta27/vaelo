# Vaelo Design System Plan

This plan establishes the foundational design language for Vaelo. It is engineered specifically for working Indian Chartered Accountants—prioritizing credibility, precision, and calm authority over flashy startup aesthetics.

## 1. Color Palette: "The Trusted Ledger"
We avoid trendy warm creams and terracottas. Instead, we use a palette inspired by premium financial reports, ink, and traditional accounting ledgers. The contrast must be high enough to make data-dense tables instantly legible.

- **Ink (Deepest Navy):** `#0B1727` — Used for primary text and dark backgrounds. Exudes institutional weight.
- **Corporate Blue:** `#1A365D` — The primary brand color. Professional, traditional, trustworthy.
- **Precision Green:** `#047857` — Used sparingly for positive financial indicators, call-to-action buttons, or highlighting key metrics.
- **Slate (Secondary Text):** `#475569` — For metadata, table headers, and supporting copy.
- **Ledger Line (Borders):** `#E2E8F0` — Essential for creating crisp, grid-like layouts that evoke spreadsheets.
- **Paper (Background):** `#FAFAFA` — A crisp, neutral off-white. Not warm/yellow, not stark hospital white. Just clean paper.

## 2. Typography: "Authority & Precision"
Since we are displaying real financial figures, our typography must support tabular data flawlessly while feeling like a prestigious advisory firm.

- **Headlines (Authority):** `Crimson Pro` (Serif). A highly readable, elegant serif that adds immediate institutional weight and credibility. It says "established firm", not "disruptive app".
- **Body (Pragmatism):** `Inter` (Sans-serif). Unbeatable legibility for dense paragraphs and UI elements.
- **Numbers & Data (Precision):** `JetBrains Mono` (Monospace). Used specifically for financial figures, data tables, and metrics. Using a beautiful monospace font for numbers instantly communicates rigorous math and terminal-grade accuracy.

## 3. Brand Assets
The primary logo is the **Parentheses `(V)`** mark. This concept uses parentheses—a standard and genuine accounting notation for indicating negative or adjusted figures—to frame the central serif `V`. It establishes a precise, technical, and finance-native brand identity.

### Icon Weight Optimizations
To maintain crisp legibility across all scales, the `(V)` mark uses size-specific weight variants:
- **100x100 (Baseline):** `Crimson Pro 500` with a 5px stroke. Used for standard UI displays.
- **32x32 (Medium):** `Crimson Pro 700` with an 8px stroke.
- **16x16 (Favicon):** `Crimson Pro 900` with a 12px stroke, plus physically widened parenthesis curves to prevent them from blurring into the `V`.

### Files and Colors
The assets are located in the codebase:
- `public/branding/vaelo-logo-lockup.svg`: The full logo lockup `(V) Vaelo`. By default, this uses the dark ink `#0B1727` on a transparent background for use on the light Nav bar.
- `public/branding/vaelo-icon.svg`: The standalone square icon at baseline 100x100 weight.
- `src/app/icon.svg`: The size-optimized 16x16 favicon. It utilizes CSS `prefers-color-scheme` to dynamically switch between dark ink (`#0B1727`) and light ink (`#FAFAFA`) depending on the user's OS theme.

*(Note: The previous 'Grid Monogram' concept has been archived and fully replaced by the Parentheses system).*

## 4. Layout Concept
**Concept: The Structured Ledger.** 
The layout eschews floating, drop-shadowed cards in favor of a crisp, grid-based structure using 1px `Ledger Line` borders. Sections feel like beautifully typeset financial reports, relying on alignment and negative space rather than decorative gradients.

## 5. Technical Architecture & Deployment
Vaelo is engineered as a **100% static Next.js export** (`output: 'export'`), resulting in a pure HTML/CSS/JS build with zero server-side dependencies.

- **Hosting:** Deployed to Cloudflare Pages via standard static asset upload (`out/` directory). No Cloudflare Workers, Edge runtime, or SSR adapters (like `@opennextjs/cloudflare`) are used.
- **Contact Form:** Submits directly from the client browser to Web3Forms' API (`https://api.web3forms.com/submit`). There is no backend `/api/contact` route or server-side Resend integration. The Web3Forms access key is a public UUID stored directly in the client code.
- **Data Fetching:** All data and pages are prerendered at build time.
