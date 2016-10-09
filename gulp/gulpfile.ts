import * as gulp from 'gulp';
import { join } from 'path';

import compileTs from './tasks/compileTs';
import clean from './tasks/clean';
import server from './tasks/server';
import copy from './tasks/copy';

const runSequence = require('run-sequence');
const DEST = './dist/';
const DEMO = './demo/';

gulp.task('clean:demo', clean(
  join(DEMO, '{vendor,app}'))
);

gulp.task('ts:demo', compileTs(
  join(DEMO, 'src/**/*.ts'),
  join(DEMO, 'app'))
);

gulp.task('copy:demo', copy([
  '@angular/', 'core-js/client', 'rxjs',
  'systemjs/dist', 'zone.js/dist'
], DEMO));

gulp.task('build:demo', (done: any) => {
  runSequence('clean:demo', 'copy:demo', 'ts:demo', done)
});

gulp.task('server', ['build:demo'], server(DEMO));
