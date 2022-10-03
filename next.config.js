/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains : ['konseavpov.com', 'localhost'] // <== Domain name
  }
}

module.exports = nextConfig
