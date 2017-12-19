var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyhtml = require('gulp-minify-html');
var ghPages = require('gulp-gh-pages');
var cleanCSS = require('gulp-clean-css');
var livereload = require('gulp-livereload');

var js = ['src/js/*.js'];
var css = ['src/css/*.css'];
var lib = ['src/lib/*.js'];
var html = ['src/*.html'];


//자바스크립트 파일을 minify
gulp.task('uglify', function () {
    return gulp.src('src/js/*.js') //src/js 폴더 아래의 모든 js 파일을
        .pipe(uglify()) //minify 해서
        .pipe(gulp.dest('dist/js/')); //dist 폴더에 저장
});

//html
gulp.task('compress-html', function () {
	return gulp.src(html)
  .pipe(minifyhtml())
		.pipe(gulp.dest('dist/'));
});

//css
gulp.task('minify-css', function () {
  return gulp.src(css)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/'));
});
//lib
gulp.task('copy-lib', function() {
  return gulp.src(lib)
    .pipe(gulp.dest('dist/lib/'));
});

// 파일 변경 감지
gulp.task('watch', function () {
    gulp.watch('src/*.js', ['uglify']);
});

//gulp를 실행하면 default 로 uglify task와 watch task를 실행
gulp.task('default', ['uglify', 'watch', 'compress-html', 'minify-css', 'copy-lib']);

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
