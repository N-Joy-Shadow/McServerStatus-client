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
        
      }
    ]
  }
}

module.exports = nextConfig

