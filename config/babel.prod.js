module.exports = {
  babelrc: false,
  presets: [
    'babel-preset-es2015',
    'babel-preset-es2016',
    'babel-preset-react',
  ].map(require.resolve),
  plugins: [
    'babel-plugin-syntax-trailing-function-commas',
    'babel-plugin-transform-class-properties',
    'babel-plugin-transform-object-rest-spread',
    'babel-plugin-transform-react-constant-elements'
  ].map(require.resolve).concat([
    [require.resolve('babel-plugin-transform-runtime'), {
      helpers: false,
      polyfill: false,
      regenerator: true
    }],
    ["module-alias", [
      { "src": "./test", "expose": "@test"},
      { "src": "./src/modules", "expose": "@modules"},
      { "src": "./src/components", "expose": "@components"},
      { "src": "./src/redux", "expose": "@redux"},
      { "src": "./src/utils", "expose": "@utils"}
    ]]
  ])
};
