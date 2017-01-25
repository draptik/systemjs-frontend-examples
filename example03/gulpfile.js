var gulp = require("gulp"),
  util = require("gulp-util"),
  del = require("del"),
  livereload = require("gulp-livereload");

var dest = "dist";

function copyHtml() {
  gulp.src('src/**/*.html')
    .pipe(gulp.dest(dest + '/'));
}

function copyJs() {
  gulp.src('src/js/**/*.js')
    .pipe(gulp.dest(dest + '/js'));
}

function copyVendorJs() {
  gulp.src('node_modules/systemjs/dist/*.js')
    .pipe(gulp.dest(dest + '/js/vendor/'));
}

function watch() {
  // livereload.listen();

  gulp.watch('src/**/*.html', copyHtml);
  gulp.watch('node_modules/systemjs/**', copyVendorJs);
  gulp.watch('src/js/**/*.js', copyJs);
}

gulp.task("default", watch);

gulp.task('clean', function() {
	del(dest + '/*', {force: true}, function (err, paths) {
		console.log('Deleted files/folders:\n', paths.join('\n'));
	});
});
