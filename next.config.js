/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'evolving-digital.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'evolving-digital.com',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
