module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'uglify': {
      'options': {
        'banner': '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      'build': {
        'src': 'roundProgress.js',
        'dest': 'build/roundProgress.min.js'
      }
    },
    'copy': {
      'deploy': {
        'files': [{
          'src': ['demo.html'],
          'dest': 'build/index.html'
        }, {
          'src': ['roundProgress.js'],
          'dest': 'build/'
        }]
      }
    },
    'gh-pages': {
      'options': {
        'base': 'build'
      },
      'deploy': {
        'src': ['index.html','roundProgress.js', 'roundProgress.min.js']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('default', ['uglify:build', 'copy:deploy']);
  grunt.registerTask('deploy', ['default', 'gh-pages:deploy']);
};