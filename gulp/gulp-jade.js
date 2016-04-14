var gulp = require('gulp'),
	jade = require('gulp-jade-php'),
	plumber = require('gulp-plumber'),
	livereload = require('gulp-livereload');

gulp.task('jade', function() {
	gulp.src([
			global.source.html + '*.jade',
			'!' + global.source.html + 'blocks/*.jade'
		])
		.pipe(plumber())
		.pipe(jade())
		.pipe(gulp.dest(global.build.root))
		.pipe(livereload());
});
