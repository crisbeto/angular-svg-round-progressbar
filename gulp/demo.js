const gulp = require('gulp');
const path = require('path');
const ghPages = require('gulp-gh-pages');
const runSequence = require('run-sequence');

const DEMO = require('./constants').DEMO;
const clean = require('./tasks/clean');
const server = require('./tasks/server');
const copy = require('./tasks/copy');
const compile = require('./tasks/compile');

gulp.task('demo:clean', clean(path.join(DEMO, '{vendor,dist}')));
gulp.task('demo:server', server(DEMO));
gulp.task('demo:gh-pages', () => gulp.src(path.join(DEMO, '**/*')).pipe(ghPages()));
gulp.task('demo:ts', compile.tsc(DEMO));

gulp.task('demo:assets', copy(
 'node_modules',
 path.join(DEMO, 'vendor'),
 [
  '@angular/**/*.umd.js',
  'core-js/client/*.min.+(js|js.map)',
  'rxjs/**/*.+(js|js.map)',
  'systemjs/dist/*.js',
  'zone.js/dist/*.js'
 ]
));

gulp.task('demo:build', done => {
  runSequence('demo:clean', 'demo:assets', 'demo:ts', done);
});

gulp.task('demo:watch', ['demo:ts'], () => {
  gulp.watch(path.join(DEMO, 'src/**/*.ts'), ['demo:ts']);
});

gulp.task('demo:deploy', done => {
  runSequence('demo:build', 'demo:gh-pages', done);
});
