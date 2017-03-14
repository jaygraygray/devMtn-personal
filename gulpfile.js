var gulp = require('gulp')
	concat = require('gulp-concat')
	sass = require('gulp-sass')
	watch = require('gulp-watch')
	nodemon = require('gulp-nodemon')

// gulp.task('js', function() { //type "gulp css" in command line to run task
	
// 	gulp.src(['public/script/**/*.js'])
// 	.pipe(concat('script.js'))
// 	.pipe(gulp.dest('./public'))
// })

gulp.task('css', function() {
	gulp.src(['public/style/fonts.css', 'public/style/_variables.scss', 'public/**/*.scss'])
	.pipe(sass().on('error', sass.logError))
	.pipe(concat('style.css'))
	.pipe(gulp.dest('./public'))
})


gulp.task('watch', function() {
	gulp.watch('public/style/**/*.scss', ['css'])
	gulp.watch('public/views/*.html', ['css'])
//	gulp.watch('public/script/**/*.js', ['js'])
	nodemon({
		script: 'server.js'
	})

})


gulp.task('default', ['css', 'watch'])