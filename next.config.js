/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [require('path').join(__dirname, 'styles')],
  },
  images: {
    domains: ['media.gq.com.mx'],
  }
}

module.exports = nextConfig
