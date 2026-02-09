import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // Static site generation
  images: {
    unoptimized: true, // Required for static export
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  eslint: {
    dirs: ['src'],
  },
}

export default nextConfig
