var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');

gulp.task('minify:css', function() {
  return gulp.src('src/app.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('public'));
});

gulp.task('minify:js', function() {
  return gulp.src('src/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('public'));
});

gulp.task('server', function() {
  gulp.watch(['src/app.css'], ['minify:css']);
  gulp.watch(['src/app.js'], ['minify:js']);
  connect.server();
});
