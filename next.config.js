module.exports = {
  rules: {
    // Other rules
    '@next/next/no-img-element': 'off',
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false }
    return config
  },
}
