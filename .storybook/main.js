const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.[tj]sx'],
  addons: [
    // '@storybook/preset-typescript'
    {
      name: '@storybook/preset-typescript',
      options: {
        // tsLoaderOptions: {
        //   configFile: path.resolve(__dirname, '../tsconfig.json'),
        // },
        // forkTsCheckerWebpackPluginOptions: {
        //   colors: false, // disables built-in colors in logger messages
        // },
        // include: [path.resolve(__dirname, '../src')],
        // transpileManager: false,
      },
    },
  ],
  // webpackFinal: async config => {
  //   config.module.rules.push({
  //     test: /\.(ts|tsx)$/,
  //     use: [
  //       {
  //         loader: require.resolve('ts-loader'),
  //       },
  //     ],
  //   });
  //   config.resolve.extensions.push('.ts', '.tsx');
  //   return config;
  // },
};
