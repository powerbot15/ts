"use strict";
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var tsify = require('tsify');

function compile(watch) {
    var bundler = watchify(
        browserify('./js/app/controllers/director.ts', { debug: true }).plugin(tsify, { noImplicitAny: true }).transform(babel, {presets: ["es5"]}));

    if (watch) {
        bundler.on('update', function() {
            console.log('-> bundling...');
            rebundle(bundler);
            console.log('-> ready');
        });
    }

    rebundle(bundler);
}

function rebundle(bundler) {
    bundler.bundle()
        .on('error', function(err) { console.error(err); this.emit('end'); })
        .pipe(source('build.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./js/build'));
}

function watch() {
    return compile(true);
}

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });

gulp.task('default', ['watch']);
