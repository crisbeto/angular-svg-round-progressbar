import * as gulp from 'gulp';
import * as path from 'path';
import * as fs from 'fs';

const gulpTs = require('gulp-typescript');
const gulpSourcemaps = require('gulp-sourcemaps');
const merge = require('merge2');

// Compiles TypeScript files.
export default function compileTs(source: string, target: string) {
  return () => {
    const tsProject = gulpTs.createProject('./tsconfig.json', {
      typescript: require('typescript')
    });

    let pipe = gulp.src(source)
      .pipe(gulpSourcemaps.init())
      .pipe(gulpTs(tsProject));

    return merge([
      pipe.dts.pipe(gulp.dest(target)),
      pipe.pipe(gulpSourcemaps.write('.')).pipe(gulp.dest(target))
    ]);
  }
}
