

## DOMかDOMじゃないか
" DOMは必ずDOMオブジェクトの中に入れる "というルールを明確に作っておけば、後からコードを追いやすくなる  

```
class TextAnimation {
    constructor(el) {
        this.DOM = {};        ・・・①
        this.DOM.el = document.querySelector(el);       ・・・②
        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML = this._splitText();
    }
}
```

このようにすれば、一見不便の思えるかもしれないが、

chars  =  DOM.el.innerHTML.trim().split("");  などは逆に、DOM要素をトリム・分割して配列として置き換えたものなので、DOMではないことを判別できるようにする



