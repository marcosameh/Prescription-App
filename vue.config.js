const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Prescription-App/' // This should match the repository name
    : '/'
};

