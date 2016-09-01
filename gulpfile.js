var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

gulp.task('default', ['build-js', 'build-js-production','watch']);

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

gulp.task('watch', function(){
    gulp.watch('js/**/*.js', ['build-js', 'build-js-production']);
});

