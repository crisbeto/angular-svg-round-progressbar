const gulp = require('gulp');
const runSequence = require('run-sequence');

require('./gulp/demo');
require('./gulp/module');

gulp.task('default', done => {
  runSequence('module:watch', 'demo:watch', 'demo:server', done);
});
