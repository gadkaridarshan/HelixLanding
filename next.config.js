// @helix:story [USER-437000]
// @helix:story [USER-1789651896862]
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Fixes npm packages that depend on `fs` module
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
  // Add output export for Vercel static deployment
  output: 'export',
};

module.exports = nextConfig;