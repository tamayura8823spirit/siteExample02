## GSAPとは
JavaScriptでアニメーションを行うために、大変よく使われるライブラリ。  
「**greensock**」というプロジェクトが開発しており、複雑なアニメーションを簡単に作成できる。  
類似トゥイーンライブラリよりも高機能であり、かつ実行パフォーマンスも優れている。  

     「GSAP」 はかつての TweenMax（高機能トゥイーンライブラリ） や TweenLite（機能をシンプルにした軽量版）  
    を統合したJSライブラリであり、古い記事では 「TweenMax」 で紹介されていることがあるが、同じJSライブラリとなっている  

### CDN
```rb
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.0/gsap.min.js"></script>
```

<br>

### 公式サイト
[【https://greensock.com/get-started/】](https://greensock.com/get-started/)

<br><br>

## .toメソッド
第一引数に" 対象となるDOM "、第二引数に" アニメーションの間隔 "、第三引数に" アニメーションの詳細 "を記述する。  

```rb
class TweenTextAnimation extends TextAnimation {
    constructor(el) {
        super(el);
        this.DOM.chars = this.DOM.el.querySelectorAll('.char');
    }
    animate() {
        this.DOM.chars.forEach((c, i) => {
            TweenMax.to(c, .6, {
                ease: Back.easeOut ,                    ・・・・・・ ①
                delay: i * .05 ,
                startAt: { y: '-50%' , opacity: 0 } ,   ・・・・・・ ②
                y: '0%' ,                               ・・・・・・ ③
                opacity: 1
            });
        });
    }
}
```

①　`Back`は「TweenMax」に格納されているオブジェクトで、**タイミングファンクションを取得するとき**にこのような記述を取る。  

②　`startAt`は**アニメーションが始まる状態**を定義できる。  
「TweenMax」では、`x`と`y`で上下左右の設定を行うので、`y: '-50%'`は`translateY: -50%`と同じだと思って良い。  
なので上の記述では、`"上に50%移動していて、opacityは0の状態"`で始まることを意味している。  

③　別に`y`や`opacity`を記述することで終了時の状態を設定する。  



<br><br>

---

参考：  
[【GSAPを使ったタイムリマップ表現】](https://ics.media/entry/7162/)  

