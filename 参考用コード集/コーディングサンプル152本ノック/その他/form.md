
<br>

## HTML

```swift
      <section class="section">
        <h2 class="headingM">お問合せフォーム</h2>
        <form action="#">
          <div class="form">

            <div class="form__item" aria-labelledby="contactTypeGroupLabel">
              <label class="form__title" id="contactTypeGroupLabel" for="contactType">お問合わせ種類<strong class="require">必須</strong></label>
              <div class="form__body">
                <div class="inputField is-error">
                  <div class="selectWrap">
                    <select name="contactType" id="contactType">
                      <option value="" selected disabled>選択してください</option>
                      <option value="弊社事業について">弊社事業について</option>
                      <option value="弊社商品について">弊社商品について</option>
                      <option value="採用について">採用について</option>
                      <option value="メディア取材について">メディア取材について</option>
                      <option value="その他のお問合せ">その他のお問合せ</option>
                    </select>
                  </div>
                  <p class="errorText">お問合せ種類を選択してください。</p>
                </div>
              </div>
            </div>

            <div class="form__item">
              <label for="contactContent" class="form__title">お問合わせ内容<strong class="require">必須</strong></label>
              <div class="form__body">
                <div class="inputField">
                  <textarea name="contactContent" id="contactContent" cols="50" rows="10" placeholder="お問合せ内容をご記入下さい。"></textarea>
                  <p class="errorText">お問合せ内容を入力してください。</p>
                </div>
              </div>
            </div>

            <div class="form__item">
              <div id="nameGroup" class="form__title">お名前<strong class="require">必須</strong></div>
              <div class="form__body" aria-labelledby="nameGroup">
                <div class="form__wrap">
                  <div class="inputField">
                    <label for="name1" class="form__subTitle">姓</label>
                    <input name="name1" type="text" placeholder="山田" id="name1">
                    <p class="errorText">姓を入力してください。</p>
                  </div>
                  <div class="inputField">
                    <label for="name2" class="form__subTitle">名</label>
                    <input name="name2" type="text" placeholder="太郎" id="name2">
                    <p class="errorText">名を入力してください。</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="form__item">
              <div id="kanaGroup" class="form__title">フリガナ<strong class="require">必須</strong></div>
              <div class="form__body" aria-labelledby="kanaGroup">
                <div class="form__wrap">
                  <div class="inputField">
                    <label for="kana1" class="form__subTitle">セイ</label>
                    <input name="kana1" type="text" placeholder="ヤマダ" id="kana1">
                    <p class="errorText">フリガナの姓を入力してください。</p>
                  </div>
                  <div class="inputField">
                    <label for="kana2" class="form__subTitle">メイ</label>
                    <input name="kana2" type="text" placeholder="タロウ" id="kana2">
                    <p class="errorText">フリガナの名を入力してください。</p>
                  </div>
                </div>
                <small class="inputNote">※全角カタカナでご入力下さい。</small>
              </div>
            </div>

            <div class="form__item">
              <label for="email" class="form__title">メールアドレス<strong class="require">必須</strong></label>
              <div class="form__body">
                <div class="inputField">
                  <input type="email" name="email" id="email" placeholder="yamada@sample.co.jp">
                  <p class="errorText">正しい形式のメールアドレスを入力してください。</p>
                </div>
              </div>
            </div>

            <div class="form__item">
              <label for="tel" class="form__title">電話番号<strong class="require">必須</strong></label>
              <div class="form__body">
                <div class="inputField">
                  <input name="tel" type="tel" placeholder="09012345678" id="tel">
                  <p class="errorText">電話番号を入力してください。</p>
                </div>
                <small class="inputNote">※半角数字でご入力下さい。ハイフン(-)は任意です。</small>
              </div>
            </div>

            <div class="form__item">
              <div id="attribute" class="form__title">法人／個人<strong class="require">必須</strong></div>
              <div class="form__body">
                <div class="inputField">
                  <ul class="radioList" aria-labelledby="attribute">
                    <li><label><input type="radio" name="attribute" value="法人"><span>法人</span></label></li>
                    <li><label><input type="radio" name="attribute" value="個人"><span>個人</span></label></li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="form__item">
              <label for="company" class="form__title">会社名</label>
              <div class="form__body">
                <div class="inputField">
                  <input type="text" name="company" placeholder="サンプル株式会社" id="company">
                  <p class="errorText">法人のお客様は会社名を入力してください。</p>
                </div>
                <small class="inputNote">※法人のお客様の場合は必ずご記入ください。</small>
              </div>
            </div>
          </div>

          <div class="privacyBox">
            <p>「<a href="#">プライバシーポリシー</a>」をご確認いただき、個人情報の取扱いについて同意いただける場合は「同意する」を選択してください。</p>
            <label>
              <input type="checkbox" name="agree" value="同意します">
              <span>個人情報保護方針に同意する</span>
            </label>
          </div>

          <div class="formBtns">
            <button class="buttonAction">入力内容を確認する</button>
          </div>

        </form>
      </section>
```

<br>
<br>

## SCSS

```SCSS
/*----------------------------------------
	お問合せ専用
----------------------------------------*/

/*必要なスタイルを適宜追加してください。
他のページでも使用する汎用的なパーツはcommon.cssへ記述してください*/

/*----------------------------------------
  Form Parts
----------------------------------------*/

input[type="text"], input[type="email"], input[type="tel"], input[type="url"], input[type="search"], textarea, select {
  width: 100%;
  padding: 10px 20px;
  border: 1px solid #707070;
  border-radius: 5px;

  appearance: none;

  &:focus {
    box-shadow: 0 0 16px -5px #37952f, 0 0 0 1px rgba(10, 10, 10, .02);
    outline: none;
  }
}

textarea {
  display: block;
}

.inputField.is-error {
  input[type="text"], input[type="email"], input[type="tel"], input[type="url"], input[type="search"], textarea, select {
    border-color: #df5656;
    color: #df5656;
  }
}

/*----------------------------------------
  select
----------------------------------------*/

.selectWrap {
  position: relative;

  &::after {
    position: absolute;
    top: 15px;
    right: 20px;
    transform: rotate(45deg);
    width: 10px;
    height: 10px;
    border-right: 2px solid #707070;
    border-bottom: 2px solid #707070;
    content: "";
  }
}

/*----------------------------------------
  radio, checkbox
----------------------------------------*/

input[type="radio"], input[type="checkbox"] {
  opacity: 0;
  position: absolute;

  &:focus + span {
    box-shadow: 0 0 16px -5px #37952f, 0 0 0 1px rgba(10, 10, 10, .02);
  }
}

input[type="radio"] {
  & + span {
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 2em;
    padding: .3em .3em .3em 0;
    cursor: pointer;
  }


  & + span::before {
    display: inline-block;
    width: 25px;
    height: 25px;
    margin-right: 10px;
    border: 1px solid #cccccc;
    border-radius: 99999px;
    background-color: #ffffff;
    content: "";
  }
  & + span::after {
    display: none;
    content: "";
  }
  &:checked + span::after {
    display: inline-block;
    position: absolute;
    top: 9px;
    left: 4px;
    width: 17px;
    height: 17px;
    border-radius: 99999px;
    background-color: #37952f;
  }
}

input[type="checkbox"] {
  opacity: 0;
  position: absolute;

  & + span {
    display: inline-flex;
    align-items: center;
    position: relative;
    padding: .3em .3em .3em .3em;
    cursor: pointer;

    &::before {
      display: inline-block;
      width: 25px;
      height: 25px;
      margin-right: 15px;
      border: 1px solid #cccccc;
      content: "";
    }
  }
  &:checked + span {
    &::after {
      display: block;
      position: absolute;
      top: 10px;
      left: 8px;
      transform: rotate(-45deg);
      width: 20px;
      height: 10px;
      border-bottom: 3px solid #37952f;
      border-left: 3px solid #37952f;
      content: "";
    }
  }
}

/*----------------------------------------
Form
----------------------------------------*/

.form {
  &__item {
    padding: 20px 0;
    border-top: 1px dashed #cccccc;

    &:last-child {
      border-bottom: 1px dashed #cccccc;
    }
  }
  &__title {
    display: block;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 18px;
  }
  &__subTitle {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
}

.require {
  margin-left: 15px;
  padding: 2px 13px;
  background-color: #37952f;
  color: #ffffff;
  font-weight: lighter;
  font-size: 12px;
}

.inputField {
  & + & {
    margin-top: 15px;
  }
}

.inputNote {
  display: block;
  margin-top: 10px;
  color: #707070;
  font-size: 12px;
}

.radioList {
  display: flex;
}

@media screen and (min-width: 768px), print {
  .form {
    &__item {
      display: flex;
      align-items: center;
    }
    &__title {
      display: flex;
      flex-grow: 1;
      justify-content: space-between;
      margin-bottom: 0;
    }
    &__body {
      flex-basis: 70%;
      margin-left: 40px;
    }
  }

  .require {
    display: block;
    margin: 0;
  }

  .form__wrap {
    display: flex;

    .inputField {
      width: 50%;
    }
  }

  .inputField {
    & + & {
      margin-top: 0;
      margin-left: 20px;
    }
  }
}

/*----------------------------------------
  個人情報
----------------------------------------*/
.privacyBox {
  margin: 50px 0;
  padding: 20px;
  border: 1px solid #cccccc;

  label {
    display: block;
    margin-top: 20px;
    text-align: center;
  }
}

@media screen and (min-width: 768px), print {
  .privacyBox {
    margin: 80px 0;
    padding: 40px;
    text-align: center;

    label {
      margin-top: 50px;
    }
  }
}

/*----------------------------------------
送信ボタン
----------------------------------------*/
.formBtns {
  max-width: 400px;
  margin: 0 auto;
}

.buttonAction {
  display: block;
  width: 100%;
  margin: 0;
  padding: 20px;
  border: 1px solid #ff7600;
  background-color: #ff7600;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: .2em;
  text-align: center;
  cursor: pointer;
  transition: opacity .3s;

  &:hover {
    opacity: .7;
  }
}

/*----------------------------------------
  errorText
----------------------------------------*/
.errorText {
  display: none;
  align-items: center;
  margin-top: 15px;
  color: #df5656;
  font-weight: bold;

  &::before {
    font-weight: 900;
    font-size: 24px;
    line-height: .9;
    font-family: "Line Awesome Free";
    content: "\f06a";
  }
}

.inputField.is-error {
  .errorText {
    display: flex;
  }
}
```

<br>
