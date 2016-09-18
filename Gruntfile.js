// jshint node:true
module.exports = function(grunt) {
    var files = [
        'src/shim.js',
        'src/module.js',
        'src/roundProgressConfig.js',
        'src/roundProgressService.js',
        'src/roundProgress.js',
    ];

    var banner = [
        '/* <%= pkg.name %>@<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */',
        '(function(){',
        '  "use strict";',
        ''
    ].join('\n');

    var footer = '\n })();';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: banner,
                footer: footer
            },
            build: {
                src: files,
                dest: 'build/roundProgress.min.js'
            }
        },
        concat: {
            options: {
                separator: '\n',
                banner: banner,
                footer: footer
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
                src: [
                    'index.html',
                    'demo.css',
                    'demo.js',
                    'roundProgress.js',
                    'roundProgress.min.js'
                ]
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
        },
        watch: {
            options: {
                debounceDelay: 250,
                livereload: true
            },
            main: {
                // not the most efficient but it doesn't require
                // modification of the index.html
                files: ['src/**/*.js'],
                tasks: ['concat:build']
            },
            html: {
                files: ['build/index.html']
            }
        },
        connect: {
            server: {
                options: {
                    port: 1337,
                    livereload: true,
                    base: 'build',
                    open: true
                }
            }
        }
    });

    grunt.registerTask('default', ['concat:build', 'connect', 'watch']);
    grunt.registerTask('build', ['jshint:src', 'concat:build', 'uglify:build']);
    grunt.registerTask('deploy', ['build', 'gh-pages:deploy']);
};
