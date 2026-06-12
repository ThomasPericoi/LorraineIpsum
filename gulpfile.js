var gulp = require("gulp"),
  autoprefixer = require("autoprefixer"),
  assets = require("postcss-assets"),
  concat = require("gulp-concat"),
  cssnano = require("cssnano"),
  deporder = require("gulp-deporder"),
  htmlclean = require("gulp-htmlclean"),
  imagemin = require("gulp-imagemin"),
  newer = require("gulp-newer"),
  postcss = require("gulp-postcss"),
  sass = require("gulp-sass"),
  stripdebug = require("gulp-strip-debug"),
  uglify = require("gulp-uglify"),
  devBuild = process.env.NODE_ENV !== "production",
  folder = {
    source: "source/",
    build: "build/",
  };

// Images

gulp.task("img", function () {
  var out = folder.build + "img/";
  return gulp
    .src(folder.source + "img/**/*")
    .pipe(newer(out))
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(out));
});

// HTML

gulp.task(
  "html",
  gulp.series(gulp.parallel("img"), function () {
    var out = folder.build,
      page = gulp.src(folder.source + "*.html").pipe(newer(out));

    if (!devBuild) {
      page = page.pipe(htmlclean());
      console.log("Cleaning HTML");
    }

    return page.pipe(gulp.dest(out));
  })
);

// CSS

gulp.task(
  "css",
  gulp.series(gulp.parallel("img"), function () {
    var postCssOpts = [assets({ loadPaths: ["images/"] }), autoprefixer()];

    if (!devBuild) {
      postCssOpts.push(cssnano);
      console.log("Minifying CSS");
    }

    return gulp
      .src(folder.source + "scss/main.scss")
      .pipe(
        sass({
          outputStyle: "nested",
          imagePath: "images/",
          precision: 3,
          errLogToConsole: true,
        })
      )
      .pipe(postcss(postCssOpts))
      .pipe(gulp.dest(folder.build + "css/"));
  })
);

// JS

gulp.task("js", function () {
  var jsbuild = gulp
    .src([folder.source + "js/**/!(your)*.js", folder.source + "js/**/your.js"])
    .pipe(deporder())
    .pipe(concat("main.js"));

  if (!devBuild) {
    jsbuild = jsbuild.pipe(stripdebug()).pipe(uglify());
    console.log("Minifying JS");
  }

  return jsbuild.pipe(gulp.dest(folder.build + "js/"));
});

// Build

gulp.task("build", gulp.series("html", "css", "js"));

// Watch

gulp.task("watch", function () {
  gulp.watch(folder.source + "img/**/*", gulp.series("img"));
  gulp.watch(folder.source + "*.html", gulp.series("html"));
  gulp.watch(folder.source + "scss/**/*", gulp.series("css"));
  gulp.watch(folder.source + "js/**/*", gulp.series("js"));
});

// Default

gulp.task("default", gulp.series("build", "watch"));
