const gulp = require('gulp');
const pug2html = require('./gulp/tasks/pug2html');
const styles = require('./gulp/tasks/styles');

const dev = gulp.parallel(pug2html, styles);

const build = gulp.series(dev);

module.exports.build = build;

