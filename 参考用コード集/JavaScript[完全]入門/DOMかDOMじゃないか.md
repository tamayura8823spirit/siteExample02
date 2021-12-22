

## DOMかDOMじゃないか
" DOMは必ずDOMオブジェクトの中に入れる "というルールを明確に作っておけば、後からコードを追いやすくなる。  

```
class TextAnimation {
    constructor(el) {
        this.DOM = {};                                          ・・・・・・ ①
        this.DOM.el = document.querySelector(el);               ・・・・・・ ②
        this.chars = this.DOM.el.innerHTML.trim().split("");    ・・・・・・ ③
    }
}
```

このようにすれば、一見手間に思えるかもしれないが、" DOMかDOMじゃないか "をコードを見ただけで解るようになる。  

    ① 「DOMオブジェクト」を作成している。    
    ② DOMで参照した値を「プロパティ」として追加している。  

反対に ③ はDOMではなくて、 ② の`innerHTML`を`split()`で配列にしたものなので、DOMはつけない。  
こうすると、`this.chars`は**DOMではない**というのが一目瞭然となる。  

