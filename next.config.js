/** @type {import('next').NextConfig} */

let port = process.env.NODE_ENV =="development" ? 5238 : 5001

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  httpAgentOptions: {
    keepAlive: false,
  },
  async rewrites() {
    return [
      {
        source : '/v2/api/:path*',
        destination : `http://localhost:${port}/api/:path*`,
        
      },
      {
        source : '/v1/api',
        destination : `http://localhost:${port}/swagger/`
      }
    ]
  }
}

module.exports = nextConfig

