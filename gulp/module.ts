import { watch, task } from 'gulp';
import { join } from 'path';

import { SRC, DIST, DEMO_DIST } from './constants';
import compileTs from './tasks/compileTs';
import clean from './tasks/clean';

const runSequence = require('run-sequence');

task('module:clean', clean(DIST));

task('module:ts:demo', compileTs(join(SRC, '**/*.ts'), DEMO_DIST));

task('module:watch', () => {
  watch(join(SRC, '**/*.ts'), ['module:ts:demo']);
});

task('module:ts', compileTs(join(SRC, '**/*.ts'), DIST));

task('module:build', (done: any) => {
  runSequence('module:clean', 'module:ts', done);
});

task('deploy', (done: any) => {
  runSequence('module:build', 'demo:deploy', done);
});
