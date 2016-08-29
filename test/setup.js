global.__DEV__ = true;
require('ignore-styles')
require('babel-register')({
  ignore: /node_modules/
});