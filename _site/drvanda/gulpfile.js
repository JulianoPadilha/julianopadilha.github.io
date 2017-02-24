const gulp 				= require('gulp');
const mincss 			= require('gulp-clean-css');
const concat 			= require('gulp-concat');
const imagemin 		= require('gulp-imagemin');
const clean 			= require('gulp-clean');
const runSequence = require('run-sequence');
const livereload	= require('gulp-livereload');
const gulpsass 		= require('gulp-sass');

gulp.task('clean', function(){
	return gulp.src('dist/')
	.pipe(clean());
});

gulp.task('gulpsass', function(){
	return gulp.src('css/main.scss')
	.pipe(gulpsass())
	.pipe(gulp.dest('./dist/scss'));
});

gulp.task('minify_css', function(){
	return gulp.src('css/main.css')
	.pipe(mincss())
	.pipe(concat('master.min.css'))
	.pipe(gulp.dest('./dist/css'))
	.pipe(livereload());
});

gulp.task('minify_img', function(){
	return gulp.src('img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('./dist/img'));
});

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('css/main.css', ['minify_css', 'gulpsass']);
});


gulp.task('default', function(){
	return runSequence('clean', ['gulpsass', 'minify_css', 'minify_img', 'watch']);
});

// Vamos entender a linha acima: eu crio uma task chamada default. Dentro dela eu coloco um runSequence, que recebe como parâmetro strings separadas por vírgula, que serão executadas sequencialmente, ou um array, que dentro dele, as tasks não serão executas sequencialmente. No exemplo acima, será executado primeiro clean e depois, assincronamente, as tasks restantes.	

