

## thisとコールバック関数

```4D
 
 document.addEventListener('DOMContentLoaded', function () {

    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    const btn = document.querySelector('#btn');

    ta.animate();
    ta2.animate();
    
    btn.addEventListener('click', ta.animate);                • • • • • • ①
    btn.addEventListener('click', ta.animate.bind(ta) );      • • • • • • ③
 });


 class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        console.log(this);                                    • • • • • • ②
        this.el.classList.toggle('inview');
    }
 }
 
```

上は、ボタンを押すごとにテキストがアニメーションを行う、というものを書いたプログラムである。  
通常なら ① の時点で正常に動きそうなものだが、これではエラーが発生してしまう。  

② で確認してみると、`This` の値が ↓ のようになっている。  
```
<button id="btn">Animation</button>
```

これは、引数 （コールバック関数） としてオブジェクトのメソッドを渡す場合、「**関数**」として実行されてしまうので、  
「**直近で囲まれているオブジェクト**」 を参照するようにできている `This` が、本来参照するはずのクラスオブジェクトを無視するからである。  

これにより ① の `This` は、直近のオブジェクト （この場合は `btn` オブジェクト） を参照することになる。  

なので正しく実行するには、 ③ のように `.bind` と組み合わせることで、  
それがまた `ta` (本来格納されているクラスオブジェクト) を参照するように明示することで、正しく動作する  



