const gulp = require('gulp');
const path = require('path');
const runSequence = require('run-sequence');

const compile = require('./tasks/compile');
const clean = require('./tasks/clean');
const constants = require('./constants');
const src = path.join(constants.SRC, '**/*.ts');

gulp.task('module:clean', clean(constants.DIST));
gulp.task('module:ts:tsc', compile.tsc(constants.SRC));
gulp.task('module:ts:ngc', compile.ngc(constants.SRC));
gulp.task('module:ts', ['module:ts:tsc', 'module:ts:ngc']);

gulp.task('module:ts:demo', compile.tsc(constants.SRC, {
  '--outDir': constants.DEMO_DIST
}));

gulp.task('module:watch', () => {
  gulp.watch(src, ['module:ts:demo']);
});

gulp.task('module:build', done => {
  runSequence('module:clean', 'module:ts', done);
});

gulp.task('deploy', done => {
  runSequence('module:build', 'demo:deploy', done);
});


// TODO: not hooked up to anything
// gulp.task('module:ts:umd', compileTs(src, constants.DIST, {
//   outFile: 'round-progress.umd.js',
//   module: 'system'
// }));
