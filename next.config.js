/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const path = require('path')
const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, 'components'),
      path.join(__dirname, 'pages'),
    ],
  }
}

module.exports = nextConfig
