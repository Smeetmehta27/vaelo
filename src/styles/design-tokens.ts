// Design tokens for Vaelo marketing site
// Derived from the approved Vaelo Identity System

export const tokens = {
  colors: {
    ink: '#14171C',        // Primary brand color. Wordmark, logo, headings, primary text, dark surfaces.
    inkSoft: '#4B4A45',    // Secondary text, metadata, descriptions.
    paper: '#F7F4EF',      // Primary background. Replaces pure-white.
    paperDim: '#EFEAE1',   // Secondary surfaces, cards.
    stone: '#CFC8BA',      // Structural neutral.
    stoneLine: '#DAD4C6',  // Borders and dividers.
    bronze: '#96733A',     // Proprietary accent. CTAs, active states, highlights.
    bronzeDeep: '#6E5225', // Bronze text on light backgrounds, hover states.
    bronzeTint: '#F1E6D2', // Bronze pills, soft highlights, status backgrounds.
  },
  typography: {
    fonts: {
      sans: "var(--font-ibm-plex-sans)",   // Navigation, body, buttons, forms, UI.
      serif: "var(--font-source-serif-4)", // Wordmark, headings, editorial emphasis.
      mono: "var(--font-ibm-plex-mono)",   // Financial figures, metrics, technical labels.
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
