
<br>

## JavaScript

```JavaScript
【ハンバーガーメニューScriptの改修について】
１．メニューの開閉判定にclassを使っていたものを、ボタンに設定されたaria-expandedの値を使用するように変更しています。hasClass()の値はboolean値ですが、attr('aria-expanded')の値は文字列としての'true','false'が入ってくるので、if文の評価式を文字列判定に変更する必要があるところがハマりどころです。
２．if文の中では.is-openを付け外ししていたものを、必要なariaの値の付け替えに変更しているだけで、基本的なロジックは対策前と同じです。
３．今回のサンプルではグローバルナビのソースをPC/SPで共有しているため、ブレイクポイントをまたいでUIが変化した際にaria-hiddenの値を付け替えたり、スマホ用UIレイアウトの初期化をする処理も加えています。
*/
  
//ハンバーガーボタンを $triggerに格納
const $trigger = $('#hamburger');
//グロナビを $gnavに格納
const $gnav = $('#gnav');
//ヘッダーのブレイクポイントを point_headerに格納
const point_header = window.matchMedia('screen and (min-width: 992px)');

//ハンバーガーメニューボタンがクリックされた時
$trigger.on('click',function(){
  //aria-expandedの値を変数expandedに格納
  const expanded = $(this).attr('aria-expanded');

  //もし expanded が 'false'だったら（メニューが非表示・開く操作）
  //【重要】ariaの値はbooleanではなく文字列なので評価式の記述が変わります
  if(expanded === 'false'){ 
    //対象メニューの展開ステートをtrueにし、labelを「閉じる」に変更
    $(this).attr('aria-expanded',true).attr('aria-label','メニューを閉じる');
    //メニューのhiddenステートをfalseにしてメニューを表示
    $gnav.attr('aria-hidden',false).slideDown();

  //もし expanded が 'true'だったら（メニューが展開済・閉じる操作）
  }else {
    //対象メニューの展開ステートをfalseにし、labelを「開く」に変更
    $(this).attr('aria-expanded',false).attr('aria-label','メニューを開く');
    //メニューのhiddenステートをtrueにしてメニューを閉じる
    $gnav.attr('aria-hidden',true).slideUp();
  }
});

//ブレイクポイントをまたいだときの挙動
//今回のグロナビはPC/SPソース共有なので、ブレイクポイントをまたいだ時にaria属性も動的に設定する必要がある。ハンバーガーはSPレイアウト時しか表示されないので992px以上の場合の処理は不要
function checkBreakPoint() {
  //もし992px以上だったら
  if (point_header.matches) {
    //グロナビを表示
    $gnav.attr('aria-hidden',false).show(); 
  }else {
    //スマホレイアウトの初期状態にリセット
    $trigger.attr('aria-expanded',false).attr('aria-label','メニューを開く');
    $gnav.attr('aria-hidden',true).hide(); 
  }
}

point_header.addEventListener("change", checkBreakPoint);
```

<br>
<br>

## HTML

```swift
<!-- ①ロール属性：暗黙のロールを持つHTML要素を使用しているため、role属性の追加はしない-->
<header class="header">
  <h1 class="header__logo"><a href="/"><img src="img/logo.svg" alt="株式会社Grass Field"></a></h1>
  <!-- ②アクセシブルな名前：名前が必須のbutton要素に明示的なラベルがないのでaria-labelを付与（開く／閉じるはJSで変更）-->
  <!-- ⑥動的要素の状態：操作対象であるグロナビをaria-controlesで指定、開閉の初期状態をaria-expandedで指定-->
  <button id="hamburger" class="hamburger" aria-label="メニューを開く" aria-controls="gnav" aria-expanded="false">
    <!-- ②アクセシブルな名前,④装飾的要素：今回はbutton要素自体にaria-labelを付与しているのでラインの方は隠す -->
    <span class="hamburger__line" aria-hidden="true"></span>
  </button>
  <!-- ②アクセシブルな名前：下層にはnav要素でパンくずがあるので、aria-labelでナビゲーション名を明示 -->
  <!-- ⑥動的要素の状態：自身の開閉状態をaria-hiddenで示すが、SPレイアウトの場合のみなのでHTMLではなくJSで動的に付与 -->
  <nav id="gnav" class="gnav" aria-label="メインメニュー">
    <ul class="gnav__list">
      <!-- ⑤ナビゲーションの現在位置：aria-current="page"で現在のページ位置を明示 -->
      <li class="gnav__item"><a href="/" class="gnav__link" aria-current="page">Home</a></li>
      <li class="gnav__item"><a href="/service/" class="gnav__link">事業内容</a></li>
      <li class="gnav__item"><a href="/products/" class="gnav__link">商品紹介</a></li>
      <li class="gnav__item"><a href="/company/" class="gnav__link">会社概要</a></li>
      <li class="gnav__item"><a href="/recruit/" class="gnav__link">採用情報</a></li>
      <li class="gnav__item"><a href="/contact/" class="gnav__link">お問合わせ</a></li>
    </ul>
  </nav>
</header>
```

<br>
<br>

## SCSS

```SCSS
/*----------------------------------------
	hamburger
----------------------------------------*/
.hamburger {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 0;
  background: #37952F;
  cursor: pointer;
}
.hamburger__line {
  position: relative;
  width: 25px;
  height: 2px;
  background: #fff;
}
.hamburger__line::before,
.hamburger__line::after {
  position: absolute;
  content: "";
  display: block;
  width: 25px;
  height: 2px;
  background: #fff;
  transition: transform 0.3s;
}
.hamburger__line::before {
  top: -8px;
}
.hamburger__line::after {
  bottom: -8px;
}
/*閉じる*/
/*aria-expandedの状態でスタイルを適用するように変更*/
.hamburger[aria-expanded="true"] .hamburger__line{
  background: transparent;
}
.hamburger[aria-expanded="true"] .hamburger__line::before {
  top: 0;
  transform: rotate(45deg);
}
.hamburger[aria-expanded="true"] .hamburger__line::after {
  bottom: 0;
  transform: rotate(-45deg);
}

@media screen and (min-width: 992px),print {
  .hamburger {
    display: none;
  }
}

/*----------------------------------------
	gnav
----------------------------------------*/
.gnav__link {
  color: inherit;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
}
.gnav__link:hover {
  color:#37952F;
}
@media screen and (max-width: 991px) {
  .gnav {
    display: none;
    position: absolute;
    left: 0;
    top: 50px;
    width: 100%;
    height: calc(100vh - 50px);
    background: #fff;
    overflow-y: auto; /*中身があふれたら縦スクロール*/
    -webkit-overflow-scrolling: touch; /*iOSで慣性スクロール有効化*/
  }
  .gnav__list {
    border-top: 1px solid #e7e7e7;
  }
  .gnav__item {
    border-bottom: 1px solid #e7e7e7;
  }
  .gnav__link {
    display: block;
    padding: 15px 20px;
  }
  /*現在位置の指定をaria-current属性に変更*/
  .gnav__link[aria-current] {
    padding-left: 15px;
    border-left: 5px solid #37952F;
  }
}
@media screen and (min-width: 992px),print {
  .gnav {
    display: block !important;
    position: static;
    width: auto;
    height: auto;
  }
  .gnav__list {
    display: flex;
  }
  .gnav__link {
    display: block;
    padding: 1em;
    font-size: 18px;
  }
  .gnav__link[aria-current]::after {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    background: #37952F;
  }
}
```

<br>
