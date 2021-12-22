

## DOMへのアクセスは控えた方が良い
```rb
const str = el.innerHTML.split("");

for(let c of str) {
    el.innerHTML = `<span>${c}</span>`;
}
```

上のコードは、  

    el の innerHTML を文字列で分割し、それを１つずつ <span> タグで囲みながらDOM要素に返却する  

というプログラムだが、  
`for`メソッドを繰り返すたび、DOMへの参照・変更をおこなっているので、非常にパフォーマンスの悪いプログラムとなっている。  

<br>

### 対処法
なのでその場合は、文字列が完成してから**変数**などに格納して、DOMに返却すると良い。  

```rb
const str = el.innerHTML.split("");

const chars = str.reduce((acc, curr) => {
    return `${acc}<span>${curr}</span>`;
}, "");

el.innerHTML = chars;
```

