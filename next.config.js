/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Nos images sont déjà des webp légers (27-110 Ko). On les sert en direct,
    // sans optimisation à la demande de Next (qui était lente : encodage sharp +
    // upscale jusqu'à 3840px + AVIF au 1er chargement -> photos lentes/blanches).
    // Servies statiquement par Caddy avec Cache-Control immutable => chargement instantané.
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cptunis.com' },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  compress: true,
  poweredByHeader: false,
  async redirects() {
    // Le cathétérisme et l'électrophysiologie ne sont plus des chirurgies : ils
    // forment le pôle « Cardiologie interventionnelle & Rythmologie » (Centres).
    // On redirige toutes les anciennes URLs (Chirurgies + Explorations cardiaques).
    const dest = '/centres/cardiologie-interventionnelle'
    const actesCathe = ['coronarographie', 'catheterisme-cardiaque', 'angioplastie-stent', 'valvuloplastie-percutanee']
    const redirs = [
      // La thyroïde passe de Chirurgie générale à Chirurgie ORL
      { source: '/chirurgies/chirurgie-generale/chirurgie-thyroidienne', destination: '/chirurgies/chirurgie-orl/thyroidectomie', permanent: true },
      { source: '/chirurgies/electrophysiologie', destination: dest, permanent: true },
      { source: '/chirurgies/electrophysiologie/:slug', destination: `${dest}/:slug`, permanent: true },
      { source: '/chirurgies/cardiologie-interventionnelle', destination: dest, permanent: true },
      { source: '/chirurgies/cardiologie-interventionnelle/:slug', destination: `${dest}/:slug`, permanent: true },
    ]
    for (const base of ['/explorations/explorations-cardiaques', '/centres/explorations-cardiaques']) {
      for (const acte of actesCathe) {
        redirs.push({ source: `${base}/${acte}`, destination: `${dest}/${acte}`, permanent: true })
      }
    }
    return redirs
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
