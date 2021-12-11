/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');

const nextConfig = { reactStrictMode: true };

const settings = withPlugins([
  [
    withPWA,
    {
      pwa: {
        dest: 'public',
      },
    },
  ],
  nextConfig,
]);

module.exports = process.env.NODE_ENV === 'development' ? nextConfig : settings;
