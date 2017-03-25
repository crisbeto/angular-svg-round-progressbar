const gulp = require('gulp');
const runSequence = require('run-sequence');

require('./gulp/demo');
require('./gulp/module');

gulp.task('default', ['demo:build', 'module:ts:demo'], done => {
  runSequence('demo:watch', 'module:watch', 'demo:server', done);
});
