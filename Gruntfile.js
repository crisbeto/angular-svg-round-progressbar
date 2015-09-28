'use strict';

// jshint node:true

module.exports = function(grunt) {
    var files = [
        'src/shim.js',
        'src/module.js',
        'src/roundProgressConfig.js',
        'src/roundProgressService.js',
        'src/roundProgress.js',
    ];

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: files,
                dest: 'build/roundProgress.min.js'
            }
        },
        concat: {
            options: {
                separator: '\n',
            },
            build: {
                src: files,
                dest: 'build/roundProgress.js',
            }
        },
        'gh-pages': {
            options: {
                base: 'build'
            },
            deploy: {
                src: ['index.html','roundProgress.js', 'roundProgress.min.js']
            }
        },
        jshint: {
            options: {
                jshintrc: true,
                reporter: require('jshint-stylish')
            },
            src: {
                files: {
                    src: files
                }
            }
        }
    });

    grunt.registerTask('default', ['jshint:src', 'concat:build', 'uglify:build']);
    grunt.registerTask('deploy', ['default', 'gh-pages:deploy']);
};
