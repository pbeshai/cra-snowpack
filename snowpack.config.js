// read in packageJson for getting proxy
const packageJson = require('./package.json');

module.exports = {
  extends: '@snowpack/app-scripts-react',

  devOptions: {
    port: 3000,
    src: 'src',
    bundle: false,
    fallback: 'index.html',
  },

  installOptions: {
    polyfillNode: true,
  },

  plugins: [
    // use postcss to get relative imports working and to match CRA
    [
      '@snowpack/plugin-build-script',
      { cmd: 'postcss $FILE', input: ['.css'], output: ['.css'] },
    ],
  ],

  // allow absolute imports e.g. `import Comp from 'src/components/Comp'`
  // (similar to having baseUrl: "." in jsconfig.json)
  alias: {
    src: './src',
  },

  // optionally add in a proxy to /api
  // proxy: {
  //   '/api': `${packageJson.proxy}/api`,
  // },
};
