import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'Vaelo - Institutional-grade financial analysis';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{
        background: '#0B1727', // Ink background for premium feel
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FAFAFA',
      }}>
        {/* Lockup */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center', width: 100, height: 100 }}>
            <svg width="100" height="100" viewBox="0 0 100 100" style={{ position: 'absolute' }}>
              <path d="M 24 32 Q 12 50 24 68" fill="none" stroke="#FAFAFA" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 76 32 Q 88 50 76 68" fill="none" stroke="#FAFAFA" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div style={{ fontSize: 65, fontWeight: 500, fontFamily: 'serif' }}>V</div>
          </div>
          <div style={{ fontSize: 60, fontWeight: 500, fontFamily: 'serif', marginLeft: 10 }}>Vaelo</div>
        </div>
        
        {/* Tagline */}
        <div style={{ marginTop: 40, fontSize: 32, color: '#E2E8F0', fontFamily: 'sans-serif', letterSpacing: '-0.01em' }}>
          Institutional-grade financial analysis for independent CA practices
        </div>
      </div>
    ),
    { ...size }
  );
}
