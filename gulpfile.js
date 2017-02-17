var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var connect = require('gulp-connect');

gulp.task('build', function() {
  return gulp.src('src/app.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('public'));
});

gulp.task('server', function() {
  gulp.watch(['src/app.css'], ['build']);
  connect.server();
});
