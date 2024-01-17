

[【公式サイト】](https://gist.github.com/LambdaNote/0d33b7d8284a3c99cffd1a5aa83c115f)

[【Markdown記法 チートシート】](https://gist.github.com/mignonstyle/083c9e1651d7734f84c99b8cf49d57fa)

[【見やすい文章を書くためのマークダウンの書き方】](https://github.com/Techpit-Market/host-guide/blob/master/4/markdown.md)

[【コードブロックでシンタックスハイライト可能な言語一覧】](https://blog.katsubemakito.net/articles/github-markdown-syntaxhighlighting)

[【Github公式の設定ファイル】](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)

[【Markdown記法の書き方】](https://notepm.jp/help/how-to-markdown)

---

<br>

# 見出し１
## 見出し２
### 見出し３
#### 見出し４
##### 見出し５
###### 見出し６

<br>

*斜体*

_同じく斜体_

**強調**

__同じく強調__

***斜体と強調***

___同じく斜体と強調___

<br>

![サンプル画像](images/film-reel-147631_640.png)

<br>

| 右寄せ | 中央寄せ | 左寄せ |
| -----: | :------: | :----  |
| 123456 | 〇       | ABC   |
| 00     | ✔       | あいう |

<br>

```
def greeting():
   print ("Hello World!")
```

```rb
def greeting():
   print ("Hello World!")
```

```{break="allow"}
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

<br>

> 引用文
> 引用文
> 
> > 引用文のネスト

<br>

ここは本文です[^anchor]。
文末に脚注を挿入する場合は、この例のように、句読点の前にアンカーを設置してください。

[^anchor]: 脚注の本文。本文に設置したアンカーと同じ文字列段落をには改行を入れないでください。

<br>

* 箇条書き
* 箇条書き
   * 箇条書き２
   * 箇条書き２
      * 箇条書き３
      * 箇条書き３

1. 連番
2. 連番
3. 連番

<br>

文中にコードを埋め込みたい時は、`インラインコード`を用います。

半角スペースを２回入れると、  
改行します。

<br>

★ これはコメントです。

<br>

<details><summary>折りたたみ</summary>

HTMLの詳細折りたたみ要素を使えます。  
HTMLタグの下には空行が必要です。
</details>

<br>



