const { src, dest } = require("gulp");

//Configuration
const path = require("../config/path.js");
// const app = require("../config/app.js");

// Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const size = require("gulp-size");
const shorthand = require("gulp-shorthand");
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const sass = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");
const webpCss = require("gulp-webp-css");

// SCSS handler
const scss = () => {
    return src(path.scss.src, { sourcemaps: false })
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            ttitle: "SCSS",
            message: error.message
        }))
    }))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: "build.css" }))
    .pipe(dest(path.scss.dest))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(size({ title: "build.min.css" }))
    .pipe(dest(path.scss.dest));
}

module.exports = scss;