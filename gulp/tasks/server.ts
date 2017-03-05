import {src} from 'gulp';

const gulpServer = require('gulp-server-livereload');

// Creates a dev server.
export default function server(source: string) {
  return () => src(source).pipe(gulpServer({
    fallback: 'index.html',
    port: 1337,
    livereload: {
      enable: true,
      filter: (filename: string, cb: Function) => {
        cb(/\.[css|html|js]/.test(filename));
      }
    }
  }));
}
