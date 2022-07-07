const path = require('path')

module.exports = {
  stories: [
    '../src/components/primitives/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/components/common/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
  ],
  staticDirs: ['../public'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        core: path.resolve(__dirname, '../src/core'),
        assets: path.resolve(__dirname, '../src/assets'),
        hooks: path.resolve(__dirname, '../src/hooks'),
        utils: path.resolve(__dirname, '../src/utils'),
        primitives: path.resolve(__dirname, '../src/components/primitives'),
        common: path.resolve(__dirname, '../src/components/common'),
        components: path.resolve(__dirname, '../src/components'),
        public: path.resolve(__dirname, '../public'),
      },
    }
    return config
  },
}
