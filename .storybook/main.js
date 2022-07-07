const path = require('path')
const webpack = require('webpack')

module.exports = {
  core: {
    builder: 'webpack5',
  },
  typescript: { reactDocgen: false },
  stories: [
    '../components/primitives/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../components/common/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    // '../components/containers/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    // '../components/shared/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    'storybook-addon-next',
  ],
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        lib: path.resolve(__dirname, '../lib'),
        utils: path.resolve(__dirname, '../utils'),
        primitives: path.resolve(__dirname, '../components/primitives'),
        common: path.resolve(__dirname, '../components/common'),
        // shared: path.resolve(__dirname, '../components/shared'),
        // containers: path.resolve(__dirname, '../components/containers'),
        components: path.resolve(__dirname, '../components'),
        public: path.resolve(__dirname, '../public'),
        static: path.resolve(__dirname, '../public/static'),
        // pages: path.resolve(__dirname, '../pages'),
        hooks: path.resolve(__dirname, '../hooks'),
        // models: path.resolve(__dirname, '../models'),
        // buffer: 'buffer',
      },
      // fallback: {
      //   os: false,
      //   https: false,
      //   http: false,
      //   crypto: false,
      //   stream: false,
      //   buffer: require.resolve('buffer'),
      // },
    }
    // config.plugins.push(
    //   new webpack.ProvidePlugin({
    //     Buffer: ['buffer', 'Buffer'],
    //   })
    // )
    // console.log('hello', config.plugins)
    return config
  },
}
