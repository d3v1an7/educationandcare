var { series, parallel, src, dest, watch } = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var del = require('del');
var paths = {
  images: {
    src: './images/raw/*',
    dest: './images/min/'
  },
  scripts: {
    src: ['./js/plugins/history.js', './js/plugins/imagesloaded.js', './js/plugins/masonry.js', './js/plugins/debounce.js', './js/plugins/fluidbox.js', './js/plugins/owl.js', './js/plugins/waypoints.js', './js/personal.js'],
    dest: './js/'
  }
};
function clean() {
  return del(['./js/personal-min.js']);
}
function images() {
  return src(paths.images.src)
    .pipe(imagemin())
    .pipe(dest(paths.images.dest));
}
function scripts() {
  return src(paths.scripts.src)
    .pipe(uglify())
    .pipe(concat('personal-min.js'))
    .pipe(dest(paths.scripts.dest));
}
function watchScripts() {
  watch(paths.scripts.src, build);
  watch(paths.images.src, images);
}
var build = series(clean, parallel(scripts,images));
exports.build = build;
exports.clean = clean;
exports.images = images;
exports.scripts = scripts;
exports.watch = watchScripts;
exports.default = build;
