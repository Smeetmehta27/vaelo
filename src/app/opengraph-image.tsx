import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'Vaelo - Institutional-grade financial analysis';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{
        background: '#14171C', // Ink background
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#F7F4EF', // Paper text
      }}>
        {/* Horizontal lockup: V symbol + wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {/* Constructed V mark */}
          <svg width="80" height="80" viewBox="0 0 120 120" fill="none">
            <polygon points="20,20 43,20 62,98" fill="#F7F4EF"/>
            <polygon points="87,20 99,20 62,98" fill="#F7F4EF"/>
          </svg>
          {/* Serif wordmark */}
          <div style={{ fontSize: 64, fontWeight: 600, fontFamily: 'serif', letterSpacing: '-0.015em' }}>Vaelo</div>
        </div>
        
        {/* Tagline */}
        <div style={{ marginTop: 40, fontSize: 28, color: '#CFC8BA', fontFamily: 'sans-serif', letterSpacing: '-0.01em' }}>
          Institutional-grade financial analysis for independent CA practices
        </div>
      </div>
    ),
    { ...size }
  );
}
