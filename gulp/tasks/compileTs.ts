import { src, dest } from 'gulp';

const gulpTs = require('gulp-typescript');
const gulpSourcemaps = require('gulp-sourcemaps');
const merge = require('merge2');

// Compiles TypeScript files.
export default function compileTs(source: string, ...targets) {
  return () => {
    const tsProject = gulpTs.createProject('./tsconfig.json', {
      typescript: require('typescript')
    });

    let pipe = src(source).pipe(gulpSourcemaps.init()).pipe(gulpTs(tsProject));

    return targets.map(target => {
      return merge(
        pipe.dts.pipe(dest(target)),
        pipe.pipe(gulpSourcemaps.write('.')).pipe(dest(target))
      );
    });
  };
}
