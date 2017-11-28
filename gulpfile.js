var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var css = require('gulp-mini-css');

gulp.task('default', ['mini-js', 'mini-css']);
//压缩 js
gulp.task('mini-js', function (cb) {
  pump([
        gulp.src('src/js/*.js'),
        uglify(),
        gulp.dest('dist/js/')
    ],
    cb
  );
});

 
//压缩css
gulp.task('mini-css', function(){
	gulp.src('src/css/*.css')
        .pipe(css({ext:'-min.css'}))
        .pipe(gulp.dest('dist/css/'));
});