
<br>

## JavaScript

```JavaScript
    $(function () {
      // JSが使えない環境のための処理
      $(".js_glovalNav_item").css({'opacity':'0', 'transform':'translateY(20px)'});

      $(".js_hamburger").click(function () {
        $(".js_hamburger, .js_glovalNav").toggleClass('show');
        // 特定のクラスを持っていない場合の処理
        if ($(".js_glovalNav_item").hasClass('is_fadeUp') == false) {
          // フェードアップさせる
          $(".js_glovalNav_item").addClass('is_fadeUp');
          // ナビゲーションアイテムの数だけループ文で "transition-delay" を設定
          for (i = 0; i < 9; i++) {
            // 0.05秒刻みでずらす
            d = .1 + (i / 20);
            $(".js_delayTime" + (i + 1)).css('transition-delay', d + 's');
          }
          // 特定のクラスを持っている場合の処理
        } else if ($(".js_glovalNav_item").hasClass('is_fadeUp')) {
          $(".js_glovalNav_item").removeClass('is_fadeUp');
          for (i = 0; i < 9; i++) {
            d = .1 + (i / 20);
            $(".js_delayTime" + (9 - i)).css('transition-delay', d + 's');
          }
        }
      });

    });
```

<br>
<br>

## HTML

```swift
  <div class="bl_hamburger js_hamburger"><span></span><span></span><span></span></div>
  <nav class="bl_glovalNav js_glovalNav">
    <ul class="bl_glovalNav_list">
      <!-- 遅延を設定するための ".js_delayTime" をつける -->
      <li class="bl_glovalNav_item js_glovalNav_item js_delayTime1">順番に表示 ふわっ</li>
      <li class="bl_glovalNav_item js_glovalNav_item js_delayTime2">順番に表示 ふわっ</li>
      <li class="bl_glovalNav_item js_glovalNav_item js_delayTime3">順番に表示 ふわっ</li>
      <li class="bl_glovalNav_item js_glovalNav_item js_delayTime4">順番に表示 ふわっ</li>
      <li class="bl_glovalNav_item js_glovalNav_item js_delayTime5">順番に表示 ふわっ</li>
      <li class="bl_glovalNav_item js_glovalNav_item js_delayTime6">順番に表示 ふわっ</li>
      <li class="bl_glovalNav_item js_glovalNav_item js_delayTime7">順番に表示 ふわっ</li>
      <li class="bl_glovalNav_item js_glovalNav_item js_delayTime8">順番に表示 ふわっ</li>
      <li class="bl_glovalNav_item js_glovalNav_item js_delayTime9">順番に表示 ふわっ</li>
    </ul>
  </nav>
```

<br>
<br>

## SCSS

```SCSS
/*ハンバーガーメニュー下準備*/
.bl_hamburger {
  position: relative; /*ボタン内側の基点となるためrelativeを指定*/
  background: #57a2c7;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  position: fixed;
  z-index: 999;

  span {
    display: inline-block;
    transition: all 0.4s; /*アニメーションの設定*/
    position: absolute;
    left: 14px;
    height: 3px;
    border-radius: 2px;
    background: #fff;
    width: 45%;

    &:nth-of-type(1) {
      top: 15px;
    }

    &:nth-of-type(2) {
      top: 23px;
    }

    &:nth-of-type(3) {
      top: 31px;
    }
  }

  &.show span:nth-of-type(1) {
    top: 18px;
    left: 18px;
    transform: translateY(6px) rotate(-45deg);
    width: 30%;
  }

  &.show span:nth-of-type(2) {
    opacity: 0; /*真ん中の線は透過*/
  }

  &.show span:nth-of-type(3) {
    top: 30px;
    left: 18px;
    transform: translateY(-6px) rotate(45deg);
    width: 30%;
  }
}


// ナビゲーションエリア
.bl_glovalNav {
  background-color: #ccc;
  position: fixed;
  height: 800px;
  width: 30%;
  opacity: 0;
  transition: opacity .4s ease-out; /*遷移の設定*/
  transition-delay: .1s; /*遅延の設定*/
  
  &.show {
    opacity: 1;
  }
}

// フェードアップさせるナビゲーションアイテム
.bl_glovalNav_item {
  opacity: 1;
  transform: translateY(0);
  transition: transform .25s ease-out, opacity .25s ease-out; /*遷移の設定*/
  
  &.is_fadeUp {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  &.is_fadeDown {
    opacity: 0 !important;
    transform: translateY(20px) !important;
  }
}

```

<br>
