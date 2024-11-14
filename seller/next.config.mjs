/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'localhost', port: '7777' }],
  },
}

export default nextConfig
