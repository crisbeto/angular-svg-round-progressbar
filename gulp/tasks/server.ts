import { src } from 'gulp';

const gulpServer = require('gulp-server-livereload');

// Creates a dev server.
export default function server(source: string) {
  return () => src(source).pipe(gulpServer({
    livereload: true,
    fallback: 'index.html',
    port: 1337
  }));
}
