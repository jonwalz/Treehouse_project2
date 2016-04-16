var gulp = require('gulp');
var livereload = require('gulp-livereload');


gulp.task('load', function() {
   gulp.src('index.html')
       .pipe(livereload({ start: true }));
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['css/*.css', 'index.html'], ['load']);
});