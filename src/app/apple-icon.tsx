import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default async function Icon() {
  return new ImageResponse(
    (
      <div style={{
        background: '#0B1727', // Ink
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* The (V) Icon optimized for 180x180 - we'll scale up a bit */}
        <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center', width: 180, height: 180 }}>
          <svg width="180" height="180" viewBox="0 0 100 100" style={{ position: 'absolute' }}>
            <path d="M 24 32 Q 12 50 24 68" fill="none" stroke="#FAFAFA" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 76 32 Q 88 50 76 68" fill="none" stroke="#FAFAFA" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{ fontSize: 65, fontWeight: 500, fontFamily: 'serif', color: '#FAFAFA' }}>V</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
