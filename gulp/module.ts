import {watch, task} from 'gulp';
import {join} from 'path';

import {SRC, DIST, DEMO_DIST} from './constants';
import {tsc, ngc} from './tasks/compileTs';
import clean from './tasks/clean';

const runSequence = require('run-sequence');
const src = join(SRC, '**/*.ts');

task('module:clean', clean(DIST));

// TODO
// task('module:ts:demo', compileTs(join(SRC, '**/*.ts'), DEMO_DIST));

task('module:watch', () => {
  watch(join(SRC, '**/*.ts'), ['module:ts:demo']);
});

task('module:ts:tsc', tsc(SRC));
task('module:ts:ngc', ngc(SRC));

// TODO: not hooked up to anything
// task('module:ts:umd', compileTs(src, DIST, {
//   outFile: 'round-progress.umd.js',
//   module: 'system'
// }));

task('module:ts', ['module:ts:tsc', 'module:ts:ngc']);

task('module:build', (done: any) => {
  runSequence('module:clean', 'module:ts', done);
});

task('deploy', (done: any) => {
  runSequence('module:build', 'demo:deploy', done);
});
