import { task } from 'gulp';
import './demo';

const runSequence = require('run-sequence');

task('default', ['demo:build'], (done: any) => {
  runSequence('demo:watch', 'demo:server', done);
});
