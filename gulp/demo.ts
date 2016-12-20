import { src, task, watch } from 'gulp';
import { join } from 'path';

import { DEMO } from './constants';
import compileTs from './tasks/compileTs';
import clean from './tasks/clean';
import server from './tasks/server';

const ghPages = require('gulp-gh-pages');
const runSequence = require('run-sequence');

task('demo:clean', clean(join(DEMO, 'dist')));

task('demo:ts', compileTs(join(DEMO, 'src/**/*.ts'), join(DEMO, 'dist')));

task('demo:build', (done: any) => {
  runSequence('demo:clean', 'demo:ts', done);
});

task('demo:watch', () => {
  watch(join(DEMO, 'src/**/*.ts'), ['demo:ts']);
});

task('demo:server', server(DEMO));

task('demo:deploy', () => src(join(DEMO, '**/*')).pipe(ghPages()));
