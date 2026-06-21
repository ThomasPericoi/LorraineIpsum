var gulp = require("gulp"),
  cleanCss = require("gulp-clean-css"),
  concat = require("gulp-concat"),
  gulpSass = require("gulp-sass"),
  dartSass = require("sass"),
  sass = gulpSass(dartSass),
  terser = require("gulp-terser"),
  devBuild =
    process.env.NODE_ENV !== "production" &&
    !process.argv.includes("--production"),
  folder = {
    source: "source/",
    build: "build/",
    dist: "dist/",
  };

// Images

gulp.task("img", function () {
  return gulp
    .src(folder.source + "img/**/*")
    .pipe(gulp.dest(folder.build + "img/"));
});

// HTML

gulp.task(
  "html",
  gulp.series(gulp.parallel("img"), function () {
    return gulp.src(folder.source + "*.html").pipe(gulp.dest(folder.build));
  }),
);

// CSS

gulp.task(
  "css",
  gulp.series(gulp.parallel("img"), function () {
    var cssbuild = gulp.src(folder.source + "scss/main.scss").pipe(
      sass({
        outputStyle: "expanded",
        precision: 3,
      }).on("error", sass.logError),
    );

    if (!devBuild) {
      cssbuild = cssbuild.pipe(cleanCss());
      console.log("Minifying CSS");
    }

    return cssbuild.pipe(gulp.dest(folder.build + "css/"));
  }),
);

// JS

gulp.task("lorraine-ipsum", function () {
  var apiBuild = gulp
    .src([
      folder.source + "js/lorraine-ipsum/lorraine-ipsum-lib.js",
      folder.source + "js/lorraine-ipsum/lorraine-ipsum-functions.js",
    ])
    .pipe(concat("lorraine-ipsum.js"));

  if (!devBuild) {
    apiBuild = apiBuild.pipe(terser());
  }

  return apiBuild.pipe(gulp.dest(folder.dist));
});

gulp.task("js", function () {
  var jsbuild = gulp
    .src([
      folder.source + "js/ascii-printer.js",
      folder.source + "js/lorraine-ipsum/lorraine-ipsum-lib.js",
      folder.source + "js/lorraine-ipsum/lorraine-ipsum-functions.js",
      folder.source + "js/frontend.js",
    ])
    .pipe(concat("main.js"));

  if (!devBuild) {
    jsbuild = jsbuild.pipe(
      terser({
        compress: {
        },
      }),
    );
    console.log("Minifying JS");
  }

  return jsbuild.pipe(gulp.dest(folder.build + "js/"));
});

// Build

gulp.task(
  "build",
  gulp.series("html", "css", gulp.parallel("js", "lorraine-ipsum")),
);

// Watch

gulp.task("watch", function () {
  gulp.watch(folder.source + "img/**/*", gulp.series("img"));
  gulp.watch(folder.source + "*.html", gulp.series("html"));
  gulp.watch(folder.source + "scss/**/*", gulp.series("css"));
  gulp.watch(folder.source + "js/**/*", gulp.series("js"));
});

// Default

gulp.task("default", gulp.series("build", "watch"));
