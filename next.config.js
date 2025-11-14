/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['monad-academy.app'],
  },
}

module.exports = nextConfig
