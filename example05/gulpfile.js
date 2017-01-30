var gulp = require("gulp"),
  util = require("gulp-util"),
  del = require("del"),
  path = require("path"),
  Builder = require('systemjs-builder'),
  babel = require('gulp-babel');

var dest = "dist";

function systemjs_builder() {
  var builder = new Builder('src/js/modules', 'src/js/config.js');

  /* Bundle modules into 'mybundle.js' */
  builder
    .bundle(['moduleA.js'], dest + '/js/modules/indexBundle.js')
    .then(function () {
      console.log('Bundling complete');
    })
    .catch(function (err) {
      console.log('Build error');
      console.log(err);
    });
}

function copyHtml() {
  gulp.src('src/**/*.html')
    .pipe(gulp.dest(dest + '/'));
}

function copyJs() {
  gulp.src('src/js/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(dest + '/js'));
}

function copyVendorJs() {
  // SystemJS
  gulp.src('node_modules/systemjs/dist/*.js')
    .pipe(gulp.dest(dest + '/js/vendor/'));
  
  // jQuery
  gulp.src('node_modules/jquery/dist/*.js')
    .pipe(gulp.dest(dest + '/js/vendor/'));
}

function watch() {
  gulp.watch('src/**/*.html', copyHtml);
  gulp.watch('node_modules/systemjs/**', copyVendorJs);
  gulp.watch('src/js/*.js', copyJs);
  gulp.watch('src/js/modules/*.js', systemjs_builder);
}

gulp.task('copy:html', copyHtml);
gulp.task('copy:js', copyJs);
gulp.task('copy:vendorjs', copyVendorJs);
gulp.task('bundle:sjs', systemjs_builder);

gulp.task('make', [
  'copy:html',
  'copy:js',
  'copy:vendorjs',
  'bundle:sjs'
]);

gulp.task("default", watch);

gulp.task('clean', function () {
  del(dest + '/*', { force: true }, function (err, paths) {
    console.log('Deleted files/folders:\n', paths.join('\n'));
  });
});
