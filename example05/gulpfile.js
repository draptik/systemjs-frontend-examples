var gulp = require("gulp"),
  util = require("gulp-util"),
  del = require("del"),
  path = require("path"),
  Builder = require('systemjs-builder'),
  sjsBuilder = require('gulp-systemjs-builder'),
  babel = require('gulp-babel'),
  fs = require('fs');

var dest = "dist";

var sysConfig = {
  baseURL: './js/modules',
  paths: {
    jquery: './node_modules/jquery/dist/jquery.min.js'
  },
  bundles: {}
};

// one bundle per page:
var bundles = ['index2.js'];

function systemjs_builder() {
  var configLocation = 'src/js/config.js';
  var builder = new Builder('src/js/modules', sysConfig);

  for (var i = 0; i < bundles.length; i++) {
    var bundle = bundles[i];
    var bundleBase = bundle.replace('.js', '');
    
    // NOTE: Final path is combination of sysConfig.baseURL + bundleDest:
    var bundleDest = bundleBase + 'Bundle.js';

    builder
      .bundle(bundle, bundleDest)
      .then(function () {
        console.log('Bundling complete');
      })
      .catch(function (err) {
        console.log('Build error');
        console.log(err);
      });
    sysConfig.bundles[bundleDest] = [bundle];
  }

  console.log(sysConfig);
  var s = 'System.config(' + JSON.stringify(sysConfig) + ');';
  console.log(s);
  fs.writeFile(configLocation, s);
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
