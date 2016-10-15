import * as gulp from 'gulp';
import { join } from 'path';

import { SRC, DIST, DEMO_DIST } from './constants';
import compileTs from './tasks/compileTs';
import clean from './tasks/clean';

const runSequence = require('run-sequence');

gulp.task('module:clean', clean(DIST));

gulp.task('module:ts:demo', compileTs(join(SRC, '**/*.ts'), DEMO_DIST));

gulp.task('module:watch', () => {
  gulp.watch(join(SRC, '**/*.ts'), ['module:ts:demo']);
});

// unused for now
gulp.task('module:ts', compileTs(join(SRC, '**/*.ts'), DIST));
gulp.task('module:build', (done: any) => {
  runSequence('module:clean', 'module:ts', done);
});
