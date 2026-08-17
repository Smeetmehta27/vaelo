// Design tokens for Vaelo marketing site
// Derived from DESIGN.md plan

export const tokens = {
  colors: {
    ink: '#0B1727', // Deepest Navy: Used for primary text and dark backgrounds.
    corporateBlue: '#1A365D', // Primary Action/Brand. Professional, trustworthy.
    precisionGreen: '#047857', // Highlight/Positive Data, CTAs.
    slate: '#475569', // Secondary text (metadata, table headers).
    ledgerLine: '#E2E8F0', // Borders for grid-like layouts.
    paper: '#FAFAFA', // Background crisp off-white.
    white: '#FFFFFF',
  },
  typography: {
    fonts: {
      sans: 'var(--font-inter)',
      serif: 'var(--font-crimson-pro)',
      mono: 'var(--font-jetbrains-mono)',
    }
  },
  spacing: {
    // Standard Tailwind spacing is sufficient, but can be customized here if needed.
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};
