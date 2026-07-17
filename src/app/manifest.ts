import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Clinique Pasteur Tunis',
    short_name: 'Clinique Pasteur',
    description: 'Clinique pluridisciplinaire au Centre Urbain Nord, Tunis — chirurgies, centres médicaux et explorations.',
    start_url: '/fr',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0d949b',
    icons: [
      { src: '/icon.png', sizes: '512x512', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
