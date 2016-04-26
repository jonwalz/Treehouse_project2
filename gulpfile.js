var gulp = require('gulp');
var livereload = require('gulp-livereload');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('load', function() {
   gulp.src('css/*.css')
       .pipe(cssmin())
       .pipe(rename({suffix: '.min'}))
       .pipe(livereload({ start: true }));
});

gulp.task('watch', function () {
    livereload.listen({port: 1234});
    gulp.watch('css/*.css', ['load']);
}); 
