import { src, dest } from 'gulp';

const gulpTs = require('gulp-typescript');
const gulpSourcemaps = require('gulp-sourcemaps');
const merge = require('merge2');

// Compiles TypeScript files.
export default function compileTs(source: string, target: string, overrides?: any) {
  return () => {
    const config = { typescript: require('typescript') };

    if (overrides) {
      Object.keys(overrides).forEach(key => config[key] = overrides[key]);
    }

    const tsProject = gulpTs.createProject('./tsconfig.json', config);
    const pipe = src(source).pipe(gulpSourcemaps.init()).pipe(gulpTs(tsProject));

    return merge(
      pipe.dts.pipe(dest(target)),
      pipe.pipe(gulpSourcemaps.write('.')).pipe(dest(target))
    );
  };
}
