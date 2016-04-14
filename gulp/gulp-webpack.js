var gulp   		= require('gulp'),
	gulpWebpack = require('gulp-webpack'),
	webpack 	= require('webpack'),
	plumber 	= require('gulp-plumber'),
	livereload 	= require('gulp-livereload');

gulp.task('webpack', function () {
  return gulp.src(global.source.js+'main.js')
	  .pipe(plumber())
	.pipe(gulpWebpack({
		output: {
			filename: "main.js"
		},
		resolve: {
			extensions: ['', '.js']
		},
		module: {
			loaders: [
				{
					test: /\.js?$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
					query: {
						presets: ['es2015', 'react']
					}
				}
			]
		}
	}, webpack))
	.pipe(gulp.dest(global.build.js))
	.pipe(livereload());
});
