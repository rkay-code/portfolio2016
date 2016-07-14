var gulp = require('gulp');
var connect = require('gulp-connect');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var jpegtran = require('imagemin-jpegtran');
var jsonmin = require('gulp-jsonmin');
var pngquant = require('imagemin-pngquant');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('connect', function() {
  connect.server({
    livereload: true,
    port: 8080
  });
});

gulp.task('html', function() {
  gulp.src('templates/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['templates/*.html'], ['html']);
});

gulp.task('sass', function() {
  return gulp.src('styles/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('styles'));
});

gulp.task('sass:watch', function() {
  gulp.watch('styles/*.scss', ['sass']);
});

gulp.task('default', ['connect', 'watch', 'sass', 'sass:watch']);

gulp.task('cssmin', function() {
  gulp.src('styles/*.css')
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('htmlmin', function() {
  return gulp.src('templates/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/templates'));
});

gulp.task('index', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('jsmin', function() {
  return gulp.src('scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('jsonmin', function () {
    gulp.src('data/*.json')
        .pipe(jsonmin())
        .pipe(gulp.dest('dist/data'));
});

gulp.task('imagemin', () => {
  return gulp.src('img/*')
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('build', ['cssmin', 'htmlmin', 'jsmin', 'imagemin', 'index', 'jsonmin']);
