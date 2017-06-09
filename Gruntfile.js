/**
 * Created by jay.witcher on 7/21/2016.
 */
module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.es6.js'],
                    dest: 'tmp',
                    ext: '.js'
                }]
            }
        },
        clean: ['build'],
        concat: {
            js: {
                src: 'tmp/app/**/*.js',
                dest: 'build/scripts/app.js'
            },
            css: {
                src: 'tmp/app/**/*.css',
                dest: 'build/styles/app.css'
            }
        },
        uglify: {

        }
    });

    grunt.registerTask('default', ['babel']);
};