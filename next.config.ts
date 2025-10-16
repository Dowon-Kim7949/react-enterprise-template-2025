import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
}

export default nextConfig