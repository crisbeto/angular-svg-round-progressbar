import * as gulp from 'gulp';
import { join } from 'path';

import compileTs from './tasks/compileTs';
import clean from './tasks/clean';
import server from './tasks/server';
import copy from './tasks/copy';

const runSequence = require('run-sequence');
const DEMO = './demo/';

gulp.task('demo:clean', clean(join(DEMO, '{vendor,app}')));

gulp.task('demo:ts', compileTs(
  join(DEMO, 'src/**/*.ts'),
  join(DEMO, 'app'))
);

gulp.task('demo:assets', copy(
  'node_modules',
  join(DEMO, 'vendor'),
  [
    '@angular/**/*.umd.js',
    'core-js/client/*.min.+(js|js.map)',
    'rxjs/**/*.+(js|js.map)',
    'systemjs/dist/*.js',
    'zone.js/dist/*.js'
  ]
));

gulp.task('demo:build', (done: any) => {
  runSequence('demo:clean', 'demo:assets', 'demo:ts', done)
});

gulp.task('demo:watch', () => {
  gulp.watch(join(DEMO, 'src/**/*.ts'), ['demo:ts']);
});

gulp.task('demo:server', server(DEMO));
