const path = require('path');
const paths = require('../config/paths');

const stories = [
  path
    .relative(__dirname, path.resolve(paths.appStories, '**', '*.stories.js'))
    .replace(/\\/g, '/'),
];

module.exports = {
  stories,
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    // do mutation to the config

    return config;
  },
};
