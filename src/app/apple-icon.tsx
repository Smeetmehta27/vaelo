import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default async function Icon() {
  return new ImageResponse(
    (
      <div style={{
        background: '#14171C', // Ink
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Constructed V mark — two converging geometric strokes */}
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <polygon points="20,20 43,20 62,98" fill="#F7F4EF"/>
          <polygon points="87,20 99,20 62,98" fill="#F7F4EF"/>
        </svg>
      </div>
    ),
    { ...size }
  );
}
