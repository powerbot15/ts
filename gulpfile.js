"use strict";
let gulp = require('gulp');
let concat = require('gulp-concat');
let minify = require('gulp-minify');
let uglify = require('gulp-uglifyjs');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let cssmin = require('gulp-cssmin');
let rename = require('gulp-rename');
let concatCss = require('gulp-concat-css');


gulp.task('default', ['build-js', 'build-js-production', 'build-scss', 'watch']);

gulp.task('build-js-production', function() {
    return gulp.src(
        [
            'js/app/**/*.js',
            'js/app.js'
        ])
        .pipe(concat('build.js'))
        .pipe(minify({
            ext:{
                //src:'-debug.js',
                min:'.min.js'
            }
        }))
        .pipe(uglify())
        .pipe(gulp.dest('js/build'));
});

gulp.task('build-js', function(){
    return gulp.src(
        [
            'js/app/**/*.js',
            'js/app.js'
        ])
        .pipe(concat('build.js'))
        .pipe(gulp.dest('js/build'));
});

gulp.task('build-scss', function () {

    return gulp.src(['scss/reset.scss', 'scss/styles/**/*.scss'])
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concatCss('main.min.css', {
            rebaseUrls: false
        }))
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('css'));

});

gulp.task('watch', function(){
    gulp.watch('js/**/*.js', ['build-js', 'build-js-production']);
    gulp.watch('scss/**/*.scss', ['build-scss']);
});

