/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source : '/napi/:path*',
        destination : "https://localhost:7238/api/:path*"
      },
      {source : '/api/:path*',
      destination : "http://localhost:3002/api/:path*"
    }
    ]
  }
}

module.exports = nextConfig

