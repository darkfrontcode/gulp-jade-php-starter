var gulp 		= require('gulp'),
	stylus 		= require('gulp-stylus'),
	plumber 	= require('gulp-plumber'),
	livereload 	= require('gulp-livereload');

gulp.task('stylus', function() {
  	gulp.src(global.source.css+'main.styl')
		.pipe(plumber())
		.pipe(stylus({compress: true}))
		.pipe(gulp.dest(global.build.css))
		.pipe(livereload());
});