// jshint node: true
require('ts-node').register({
  project: require('path').join(__dirname, 'gulp')
});

require('./gulp/gulpfile');
