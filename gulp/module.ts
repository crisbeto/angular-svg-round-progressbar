import { watch, task } from 'gulp';
import { join } from 'path';

import { SRC, DIST, DEMO_DIST } from './constants';
import compileTs from './tasks/compileTs';
import clean from './tasks/clean';

const runSequence = require('run-sequence');
const src = join(SRC, '**/*.ts');

task('module:clean', clean(DIST));

task('module:ts:demo', compileTs(join(SRC, '**/*.ts'), null, DEMO_DIST));

task('module:watch', () => {
  watch(join(SRC, '**/*.ts'), ['module:ts:demo']);
});

task('module:ts:separate', compileTs(src, DIST));

task('module:ts:umd', compileTs(src, DIST, {
  outFile: 'round-progress.umd.js',
  module: 'system'
}));

task('module:ts', ['module:ts:separate', 'module:ts:umd']);

task('module:build', (done: any) => {
  runSequence('module:clean', 'module:ts', done);
});

task('deploy', (done: any) => {
  runSequence('module:build', 'demo:deploy', done);
});
