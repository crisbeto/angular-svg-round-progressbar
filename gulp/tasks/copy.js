const gulp = require('gulp');
const path = require('path');
const merge = require('merge2');

// Copies files
module.exports = (root, target, files) => {
  return () => merge(files.map(pattern => {
    let glob = path.join(root, pattern);
    let destination = path.join(target, pattern.split('*').shift());

    return gulp.src([glob]).pipe(gulp.dest(destination));
  }));
}
