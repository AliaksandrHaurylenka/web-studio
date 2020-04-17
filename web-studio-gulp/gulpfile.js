const gulp = require('gulp');
const pug2html = require('./gulp/tasks/pug2html');
const styles = require('./gulp/tasks/styles');
const imageMinify = require('./gulp/tasks/imageMinify');
const fonts = require('./gulp/tasks/fonts');

const dev = gulp.parallel(pug2html, styles, imageMinify, fonts);

const build = gulp.series(dev);

module.exports.build = build;