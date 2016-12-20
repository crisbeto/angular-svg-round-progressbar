import { task, watch } from 'gulp';
import { join } from 'path';

import { DEMO } from './constants';
import compileTs from './tasks/compileTs';
import clean from './tasks/clean';
import server from './tasks/server';
import copy from './tasks/copy';

const runSequence = require('run-sequence');

task('demo:clean', clean(join(DEMO, '{vendor,dist}')));

task('demo:ts', compileTs(join(DEMO, 'src/**/*.ts'), join(DEMO, 'dist')));

task('demo:assets', copy(
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

task('demo:build', (done: any) => {
  runSequence('demo:clean', 'demo:assets', 'demo:ts', done);
});

task('demo:watch', () => {
  watch(join(DEMO, 'src/**/*.ts'), ['demo:ts']);
});

task('demo:server', server(DEMO));
