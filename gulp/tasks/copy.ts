import * as gulp  from 'gulp';
import * as path from 'path';

const merge = require('merge2');

// Copies files
export default function copy(files: string[], target: string) {
  return () => merge(
    files.map(root => {
      const glob = path.join('node_modules', root, '**/*.+(js|js.map)');
      return gulp.src(glob).pipe(gulp.dest(path.join(target, 'vendor', root)));
    }));
}
