import {task} from 'gulp';

import './demo';
import './module';

const runSequence = require('run-sequence');

task('default', ['demo:build', 'module:ts:demo'], (done: any) => {
  runSequence('demo:watch', 'module:watch', 'demo:server', done);
});
