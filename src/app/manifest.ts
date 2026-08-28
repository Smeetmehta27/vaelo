import { MetadataRoute } from 'next'

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vaelo',
    short_name: 'Vaelo',
    description: 'Institutional-grade financial analysis for independent CA practices',
    start_url: '/',
    display: 'standalone',
    background_color: '#F7F4EF',
    theme_color: '#14171C',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
  }
}
