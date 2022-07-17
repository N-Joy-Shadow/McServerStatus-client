/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source : '/napi/:path*',
        destination : "http://localhost:5238/api/:path*"
      }
    ]
  }
}

module.exports = nextConfig
