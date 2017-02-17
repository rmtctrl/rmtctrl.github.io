var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

gulp.task('build', function() {
  return gulp.src('src/app.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('public'));
});
