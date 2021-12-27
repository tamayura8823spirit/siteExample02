```4D

// 本から引用したコードを、ver5.0.0用に書き換えた奴。
// cssファイルを出力する先を、「dist/css」に設定しているせいで、上手くコンパイルされないと嘆いて（勘違いして）いた。

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var sassGlob = require('gulp-sass-glob');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');

// 8.0.0 からは ES Modules のパッケージになっているので、 CommonJS を使用したければ 7.1.0 にダウングレードする。
var imagemin = require('gulp-imagemin');

var imageminJpegtran = require('imagemin-jpegtran');
var pngquant = require('imagemin-pngquant');
var del = require('del');
var browserSync = require("browser-sync");


function cssTranspile() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
          grid: true,
      }),
      cssnano({
          autoprefixer: false,
      }),
    ]))
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>')
    }))
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.reload({ stream: true }));
}

function jsTranspile() {
  return gulp.src('src/js/**/*.js')
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>'),
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
    .pipe(browserSync.reload({ stream: true }));
}

function imageMinify() {
  return gulp.src('src/img/**/*', { since: gulp.lastRun(imageMinify) })
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>'),
    }))
    .pipe(imagemin([
      imagemin.gifsicle({
        optimizationLevel: 3,
      }),
      pngquant({
        quality: [ 0.65, 0.8 ], speed: 1
      }),
      imageminJpegtran({
        progressive: true,
      }),
      imagemin.svgo({
        plugins: [
          {
            removeViewBox: false,
          }
        ]
      })
    ]))
    .pipe(gulp.dest('dist/img/'))
    .pipe(browserSync.reload({ stream: true }));
}

function cleanImage() {
  return del(['dist/img/']);
}

function server(done) {
  browserSync.init({
    server: {
      baseDir: 'src',
    },
  });
  done();
}

function watch(done) {
  gulp.watch(['src/scss/*', 'src/scss/**/*'], cssTranspile);
  gulp.watch(['src/js/*', 'src/js/**/*'], jsTranspile);
  gulp.watch(['src/img/*', 'src/img/**/*'], imageMinify);
  done();
}

exports.default = watch;
exports.default = gulp.parallel(server, watch);

// このコマンドを実行すると、「src」以下の「img」ディレクトリの画像が再圧縮され、「dist」以下の「img」ディレクトリに配置される。
exports.imagemin = gulp.series(cleanImage, imageMinify);





// 「watch」の記述がないから、「npx gulp」コマンドを実行した時しかコンパイルしない。

// const { src, dest } = require("gulp");
// const sass = require('gulp-sass')(require('sass'));

// const compileSass = (done) => {
//   src("src/scss/**/*.scss")
//   .pipe(sass({
//     outputStyle: "expanded"
//   }))
//   .pipe(dest("src/scss"));
//   done();
// };

// exports.default = compileSass;



// 公式サイトから引っ張ってきた奴。
// タスクについては良くわからん、関数を変数に代入して、最後に「defaule」で「watch」を実行した。

// 'use strict';

// var gulp = require('gulp');
// var sass = require('gulp-sass')(require('sass'));

// const buildStyles = function () {
//   return gulp.src('src/scss/**/*.scss')
//   .pipe(sass().on('error', sass.logError))
//   .pipe(gulp.dest('src/scss'));
// };

// // exports.buildStyles = buildStyles;
// const watch =  function () {
//   gulp.watch('src/scss/**/*.scss', buildStyles );
// };

// exports.default = watch;



// タスクはよくわからん。

// var gulp = require("gulp");
// var sass = require('gulp-sass')(require('sass'));

// gulp.task("sass", function(){
//     gulp.src("src/scss/**/*.scss")
//     .pipe(sass({outputStyle: "expanded"}))
//     .pipe(gulp.dest("src/scss"))
// });

// gulp.task("watch", function(){
//   gulp.watch("src/scss/**/*.scss", gulp.series(["sass"]))
// });



// 神サイトから引用。

// // gulpプラグインの読み込み
// const gulp = require("gulp");
// // Sassをコンパイルするプラグインの読み込み
// const sass = require("gulp-sass")(require("sass"));

// // style.scssの監視タスクを作成する
// gulp.task("default", function() {
//   // ★ style.scssファイルを監視
//   return gulp.watch("css/style.scss", function() {
//     // style.scssの更新があった場合の処理

//     // style.scssファイルを取得
//     return (
//       gulp
//         .src("css/style.scss")
//         // Sassのコンパイルを実行
//         .pipe(
//           sass({
//             outputStyle: "expanded"
//           })
//             // Sassのコンパイルエラーを表示
//             // (これがないと自動的に止まってしまう)
//             .on("error", sass.logError)
//         )
//         // cssフォルダー以下に保存
//         .pipe(gulp.dest("css"))
//     );
//   });
// });



// 同じく、神サイトから引用。

// // gulpプラグインを読み込みます
// const { src, dest, watch } = require("gulp");
// // Sassをコンパイルするプラグインを読み込みます
// const sass = require("gulp-sass")(require("sass"));

// /**
//  * Sassをコンパイルするタスクです
//  */
// const compileSass = () =>
//   // style.scssファイルを取得
//   src("src/scss/**/*.scss")
//     // Sassのコンパイルを実行
//     .pipe(
//       // コンパイル後のCSSを展開
//       sass({
//         outputStyle: "expanded"
//       })
//     )
//     // cssフォルダー以下に保存
//     .pipe(dest("src/scss"));

// /**
//  * Sassファイルを監視し、変更があったらSassを変換します
//  */
// const watchSassFiles = () => watch("src/scss/**/*.scss", compileSass);

// // npx gulpというコマンドを実行した時、watchSassFilesが実行されるようにします
// exports.default = watchSassFiles;
```