var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function(){
	gulp
	.src('src/*.css')
	.pipe(concat('sets.css'))
	.pipe(autoprefixer())
	.pipe(gulp.dest('dist'))
	.pipe(rename({suffix:'.min'}))
	.pipe(cssmin())
	.pipe(gulp.dest('dist'))
	;
});
