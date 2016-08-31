process.env.NODE_ENV = 'production';

var chalk = require('chalk');
var fs = require('fs');
var webpack = require('webpack');
var config = require('../config/webpack.config.prod');


console.log('Creating an optimized production build...');
webpack(config).run(function(err, stats) {
  if (err) {
    console.error('Failed to create a production build. Reason:');
    console.error(err.message || err);
    process.exit(1);
  }
  console.log(chalk.green('Compiled successfully.'));
});
