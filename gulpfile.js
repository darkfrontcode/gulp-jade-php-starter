var gulp = require('gulp'),
	require_dir = require('require-dir');

//global paths
global.build = {
	'root':'./build/',
	'html':'./build/html/',
	'js':'./build/js/',
	'css':'./build/css/'
}

global.source = {
	'html':'./source/html/',
	'js':'./source/js/',
	'css':'./source/css/'
}

require_dir('./gulp', { recurse: false });

gulp.task('default', ['watch'], function() {
   gulp.start('jade','stylus','webpack');
});
