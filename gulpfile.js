'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;




gulp.task('styles', () => {
  return gulp.src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./styles/'))
    .pipe(reload({stream: true}));
});

gulp.task('scripts', () => {
	return gulp.src('./js/main.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./js/'))
    .pipe(reload({stream: true}));
	});

gulp.task('browser-sync', () => {
  browserSync.init({
    server: './'  
  })
});


gulp.task('watch', function() {
  gulp.watch('./js/*.js', ['scripts']);
  gulp.watch('./styles/*.scss', ['styles']);
  gulp.watch('*.html', reload);
});

gulp.task('default', ['browser-sync','styles', 'scripts', 'watch']);

