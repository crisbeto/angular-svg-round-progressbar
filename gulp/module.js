const gulp = require('gulp');
const path = require('path');
const runSequence = require('run-sequence');

const compile = require('./tasks/compile');
const clean = require('./tasks/clean');
const constants = require('./constants');

gulp.task('module:clean', clean(constants.DIST));
gulp.task('module:ts:tsc', compile.tsc(constants.SRC));
gulp.task('module:ts:ngc', compile.ngc(constants.SRC));
gulp.task('module:ts', ['module:ts:tsc', 'module:ts:ngc']);

gulp.task('module:ts:demo', compile.tsc(constants.SRC, {
  '--outDir': constants.DEMO_DIST
}));

gulp.task('module:ts:umd', compile.tsc(constants.SRC, {
  '--outFile': path.join(constants.DIST, 'round-progress.umd.js'),
  '--module': 'system'
}));

gulp.task('module:watch', ['module:ts:demo'], () => {
  gulp.watch(path.join(constants.SRC, '**/*.ts'), ['module:ts:demo']);
});

gulp.task('module:build', done => {
  runSequence('module:clean', 'module:ts', 'module:ts:umd', done);
});

gulp.task('deploy', done => {
  runSequence('module:build', 'demo:deploy', done);
});
