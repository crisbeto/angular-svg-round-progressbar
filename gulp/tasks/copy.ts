import * as gulp  from 'gulp';
import * as path from 'path';

const merge = require('merge2');

// Copies files
export default function copy(root: string, target: string, files: string[]) {
  return () => merge(files.map(pattern => {
    let glob = path.join(root, pattern);
    let dest = path.join(target, pattern.split('*').shift());

    return gulp.src([glob]).pipe(gulp.dest(dest));
  }));
}
