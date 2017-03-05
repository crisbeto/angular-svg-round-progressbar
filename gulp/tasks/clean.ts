import {src} from 'gulp';

const gulpClean = require('gulp-clean');

// Cleans out a directory.
export default function cleanTask(...targets: string[]) {
  return () => src(targets, { read: false }).pipe(gulpClean(null));
}
