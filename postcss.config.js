module.exports = (ctx) => {
  return {
    plugins: {
      // need this to get relative @import "./Foo.css"; working
      'postcss-import': { root: ctx.file.dirname },

      // copied from create-react-app
      'postcss-flexbugs-fixes': {},
      'postcss-preset-env': {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
      },
      'postcss-normalize': {},
    },
  };
};
