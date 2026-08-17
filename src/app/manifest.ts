import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vaelo',
    short_name: 'Vaelo',
    description: 'Institutional-grade financial analysis for independent CA practices',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFAFA',
    theme_color: '#1A365D',
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
