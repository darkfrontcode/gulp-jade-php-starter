var gulp   		= require('gulp'),
	livereload 	= require('gulp-livereload');

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch([global.source.html+'*.jade', global.source.html+'blocks/*.jade'], ['jade']);
	gulp.watch(global.source.css+'**/*.styl', ['stylus']);
	gulp.watch([global.source.js+'*',global.source.js+'*/*',global.source.js+'*/*/*'], ['webpack']);
});