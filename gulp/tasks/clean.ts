import { src } from 'gulp';

const gulpClean = require('gulp-clean');

// Cleans out a directory.
export default function cleanTask(target: string) {
  return () => src(target, { read: false }).pipe(gulpClean(null));
}
