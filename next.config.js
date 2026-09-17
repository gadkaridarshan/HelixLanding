// @helix:story [USER-99000]
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  webpack: (config) => {
    config.resolve.extensionAlias = {
      '.js': ['.js', '.jsx'],
      '.ts': ['.ts', '.tsx'],
    };
    return config;
  },
};

module.exports = nextConfig;