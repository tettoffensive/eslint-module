module.exports = {
  rootDir: __dirname,
  render: {
    resourceHints: false,
  },
  buildModules: [
    // eslint-disable-next-line global-require
    { handler: require('../..') },
  ],
};
