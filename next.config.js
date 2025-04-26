/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

// module.exports = nextConfig;
// next.config.js
module.exports = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};
