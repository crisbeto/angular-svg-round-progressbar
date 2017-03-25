const gulp = require('gulp');
const gulpServer = require('gulp-server-livereload');

// Creates a dev server.
module.exports = source => {
  return () => gulp.src(source).pipe(gulpServer({
    fallback: 'index.html',
    port: 1337,
    livereload: {
      enable: true,
      filter: (filename, cb) => {
        cb(/\.[css|html|js]/.test(filename));
      }
    }
  }));
}
