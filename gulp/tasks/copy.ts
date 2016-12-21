import { src, dest }  from 'gulp';
import { join } from 'path';

const merge = require('merge2');

// Copies files
export default function copy(root: string, target: string, files: string[]) {
  return () => merge(files.map(pattern => {
    let glob = join(root, pattern);
    let destination = join(target, pattern.split('*').shift());
    return src([glob]).pipe(dest(destination));
  }));
}
