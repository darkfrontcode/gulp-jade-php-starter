var gulp   		= require('gulp'),
	gulpWebpack = require('gulp-webpack'),
	webpack 	= require('webpack'),
	plumber 	= require('gulp-plumber'),
	livereload 	= require('gulp-livereload');

gulp.task('pro', function () {
  return gulp.src(global.source.js+'main.js')
  	.pipe(plumber())
	.pipe(gulpWebpack({
		output: {
			filename: "main.js"
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
		},
		plugins: [
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				},
				output: {
					comments: false,
					semicolons: true
				}
			})
		]
	}, webpack))
    .pipe(gulp.dest(global.build.js))
    .pipe(livereload());
});