
## Gulpとは？
Node.js上で動作するビルドシステムの１つで、  
**タスクランナー**とも呼ばれている。

たとえば、Sass のコンパイルを１つのタスクとして設定ファイルに記述しておけば、  
「**gulp**」コマンドを利用するだけで実行してくれる。  

Webサイト制作には、**JavaScriptの変換や圧縮**、**画像ファイルの軽量化**など、さまざまな作業が必要になるので、  
これらの作業を**自動化するツール**である **Gulp** について学んでおくと後々便利になる。  

    同じような自動化ツールには「Grunt」があるが、  
    「Gulp」は実行速度が速く、設定ファイルもJavaScriptで記述できることから、  
    現在は主要なビルドツールとして利用されている。  

<br>
<br>

## Gulpを実行するディレクトリ構成
まずは、**Gulp を動作させて**ビルドを行うディレクトリを作成する。  

>  【**POINT**】  
> どのようなディレクトリ構成が最適なのかは、実行したいタスクやプロジェクトによって異なる。  
> 基本的には「**入力するディレクトリと結果を出力するディレクトリがある**」という構成は変わらないので、  
> わかりやすいディレクトリ構成で作成する。  

<br>

「**myproject**」というディレクトリを作成して、その中に  
Sassファイルなど変換の元となるファイルを格納する「**src**」ディレクトリと、  
変換されたファイルを格納する「**dist**」ディレクトリを作成する。  

<br>
<br>

## Gulpのインストール
Gulpはプロジェクトごとにバージョンの異なるケースが多いため、**ローカルインストール**をする。  
```rb
$ npm install gulp --save-dev
```
「**node_modules**」ディレクトリと「**package.lock.json**」が自動で作成される。  

<br>

>  【 **node_modules** 】  
> 関連するパッケージが全て保存されているディレクトリ。  
> ディレクトリの容量が大きいので、ほかの開発者と共有する場合や Git などで管理する場合は、除外して共有を行う。  
> 「npm install」を実行することで、package.json に記載されたパッケージをここに再インストールできる。  

>  【 **package.lock.json** 】  
> npm上のライブラリは常にアップデートされており、別環境でインストールする際にバージョンが変わっている可能性がある。  
> 「package.lock.json」がある場合は、**まずこちらのファイルを参照して初期インストール時のバージョンに沿って**  
インストールを行うため、初回構築時と同じ環境で開発することができる。  

<br>
<br>

## バージョン指定してインストールする
```rb
$ npm install package_name@version
```

<br>
<br>

## タスクを設定する
Gulp のタスク設定は、「**gulpfile.js**」にJavaScriptを使って記述する。    
なので作業中のディレクトリに空ファイルで「gulpfill.js」を作成しよう。  

基本的なタスクを設定する流れは以下のとおりになる。  

1. npmコマンドで使用するモジュールをインストールする
2. gulpfile.js 内でインストールしたモジュールの読み込みを行う
3. タスクを定義する関数を記述する
4. 作成した関数を、exports をつかってモジュール化する

<br>

また、設定ファイルの基本的な構成は以下のようになる。  
```
// galpを読み込む
var gulp = require('gulp');

// タスクAの関数
function taskA() {
    ...
}

// タスクBの関数
function taskB() {
    ...
}

// 「gulp taskA」コマンドで単体タスクを実行できるようにする
exports.taskA = taskA;

// 「gulp」コマンドで taskA と taskB を並列実行する
exports.default = gulp.parallel('taskA', 'taskB');
```

<br>
<br>

## Sassのコンパイルを行う
実際に Sass をコンパイルするタスクを作成しながら、設定ファイルの書き方について学んでいく。  

srcディレクトリ以下にSCSSファイルを格納する「scss」ディレクトリを作成し、コンパイル元となる「style.scss」ファイルを配置する。  

<br>
<br>

## モジュールを読み込む
タスクで利用するモジュールを読み込み、変数宣言を行う。  
Sass のコンパイルには「gulp-sass」と「node-sass」モジュールを利用するので、npmコマンドで追加する。  
```rb
$npm install node-sass gulp-sass --save-dev
```

<br>

モジュールのインストールが完了したら、  
**gulpfile.js** に **require()** を使ってモジュールを読み込む。  
```4D
var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');
```
`sass.compiler` には、Sass のコンパイルで利用するモジュールを指定する。  

<br>
<br>

## タスクを定義する関数を作成する
基本的には、**１つのタスクに対して１つ関数を作成する**。  
Sass をコンパイルするタスクはこのようになる。  
```4D
function cssTranspiler() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('dist/css/'))
}
```
`gulp.src` で設定した入力ソースに対して「 . 」で連結し、`pipe()` を使って実行処理を加えていく形になる。  

コンパイルが正しく行われたかどうかの判定をキャッチするために、  
「**on()**」を使用してエラーハンドリングを行うことも可能で、  
最終的には **gulp.dest** を使って処理結果を出力するディレクトリパスを指定する。  

また、最初に記述した「**return**」によって、関数実行時にこの一連の処理結果を返すようになっている。  

<br>

次に、Sass のファイル更新があるかどうかを監視する関数を作成する。  
```4D
function watch(done) {
    gulp.watch(['src/scss/*', 'src/scss/**/*'], cssTranspile);
    done();
}
```
**gulp.watch**を利用して、監視するパスを指定する。  
**第２引数**に、監視対象となっているファイルに変更があった場合に何のタスクを実行するかを記述する。  

`done()` はコールバック関数で、この関数を実行することで、タスクの実行が完了したことを明示している。  

<br>

>  【 **memo** 】  
> タスクを定義する関数のルールでは、**関数を実行した際に、何かしらの結果を返す必要がある**。  
> 基本的には Sass や JavaScript のように入力ソースをもとに変換処理をおこなってデータを返すものは **return** を使用し、  
watch や Browsersync など実行したものが継続されるものに関しては、**コールバック関数**を利用する。  

<br>
<br>

## タスクを定義した関数をモジュール化する
作成した関数をモジュール化するには **exports** オブジェクトに関数を設定する。  

exports は関数やオブジェクトなどをエクスポートして**外部からモジュール利用できるようにするもの**。  
タスクを定義した関数を設定することで、gulpコマンドを使ってタスクを実行できるようになる。  
```rb
exports.default = watch;
```
「**exports.default**」に設定すると「gulp」コマンドを打った際にデフォルトで実行されるタスクを設定できる。  

`watch` タスクが実行されれば、ファイルの監視がスタートし、  
変更があれば `watch` 関数内で設定した `cssTranspile` タスクが実行される。  

<br>
<br>

## 複数のタスクをexportsオブジェクトに設定する
`exports` に複数のタスクを設定する場合は、**そのタスクを同期的に処理するか、非同期に処理するかを明示する必要がある**。  

同期処理であれば「**gulp.series**」、  
非同期処理であれば「**gulp.parallel**」を使用する。  

>  【 **POINT** 】  
> **Sass や JavaScript の変換**などであれば非同期処理で行えば、並行して変換処理されるため全体の完了速度も早くなる。  
> **最初に dist ディレクトリ内のファイルを削除してから何かを行う**といった場合は、同期処理を使用する。  

<br>
<br>

## Gulpの実行
「gulpfile.js」に記述した全体コードはこのようになる。  
```4D
var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

function cssTranspile() {
  return gulp.src('src/scss/**/*.scss')
      .pipe(sass())
      .on('error', sass.logError)
      .pipe(gulp.dest('dist/css/'))
}

function watch(done) {
  gulp.watch(['src/scss/*', 'src/scss/**/*'], cssTranspile);
  done();
}

exports.default = watch;
```

<br>

ローカルインストールした gulp を「**npx**」コマンドを利用して実行する。  
```rb
$ npx gulp
```
gulp コマンドを実行することで、監視タスクが実行される。  
```rb
$ npx gulp
[05:43:47] Using gulpfile ~/Documents/vscode/練習/Test/myproject/gulpfile.js
[05:43:47] Starting 'default'...
[05:43:47] Finished 'default' after 6.26 ms
```

<br>

SCSSファイルの変換を実行するために「style.scss」を編集して保存する。  
すると、`css.Transpile` タスクが実行される。  
```

```

<br>

gulp の監視を終了する場合は「Ctrl + C」を押す。  

<br>

以上が **Gulp** における基本的な設定と、実行の流れである。  

ディレクトリ設計や設定ファイルの作成など、初期設定に時間がかかるものの、  
一度作ってしまえばさまざまなプロジェクトで汎用的に利用できる。  







