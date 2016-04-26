var gulp = require('gulp');
var livereload = require('gulp-livereload');


// gulp.task('load', function() {
//    gulp.src('index.html')
//        .pipe(livereload({ start: true }));
// });

gulp.task('watch', function () {
    livereload.listen({
      port: 1234,
      basePath: 'index.html'
   }
   );
    gulp.watch(['css/*.css', 'index.html']);
});
