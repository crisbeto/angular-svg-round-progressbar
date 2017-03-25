const gulp = require('gulp');
const gulpClean = require('gulp-clean');

// Cleans out a directory.
module.exports = (...targets) => {
  return () => gulp.src(targets, { read: false }).pipe(gulpClean(null));
};
