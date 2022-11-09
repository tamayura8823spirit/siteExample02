
<br>

## JavaScript

```JavaScript
  //簡易バリデーション
  //--------------------------------------------

  $('input,textarea,select').each(function(){

    $(this).on('change',function(){

      if($(this).is(':invalid')) {
        $(this).parents('.inputField').addClass('is-error');
        //そのフォームのエラーメッセージをスクリーンリーダー向けに表示
        $(this).parents('.inputField').find('.errorText').attr('aria-hidden',false);

      }else {
        $(this).parents('.inputField').removeClass('is-error');
        //エラーメッセージをスクリーンリーダーから隠す
        $(this).parents('.inputField').find('.errorText').attr('aria-hidden',true);
      }
    });
  });

  $('#submit').on('click',function(){
    $('input,textarea,select').each(function(){
      if($(this).is(':invalid')) {
        $(this).parents('.inputField').addClass('is-error');
        //そのフォームのエラーメッセージをスクリーンリーダー向けに表示
        $(this).parents('.inputField').find('.errorText').attr('aria-hidden',false);
      }else {
        $(this).parents('.inputField').removeClass('is-error');
        //エラーメッセージをスクリーンリーダーから隠す
        $(this).parents('.inputField').find('.errorText').attr('aria-hidden',true);
      }
    });
  });
```

<br>
<br>

## HTML

```swift
        <form action="#" method="POST" id="form">
          <!-- 表組みのままだと「ひょう」として読み上げられてしまい邪魔なのでrole="presentation"とすることでアクセシビリティーツリーからこの要素を除外 -->
          <table class="contactTable" role="presentation">
            <tr>
              <th>
                <!-- label要素の中のspan要素が「○○とその他一項目」のように読み上げられてしまう（VoiceOver）ため、スクリーンリーダーから隠しました。
                「必須」という情報はinput要素のrequried属性から取得された読み上げられるので問題はありません -->
                <label for="contact_type" class="inputLabel">問合せ種類
                  <span class="require" aria-hidden="true">必須</span>
                </label>
              </th>
              <td>
                <div class="inputField">
                  <div class="selectWrap">
                    <select name="contact_type" id="contact_type" required>
                      <option value="" selected disabled>選択して下さい</option>
                      <option value="弊社事業について">弊社事業について</option>
                      <option value="弊社商品について">弊社商品について</option>
                      <option value="採用について">採用について</option>
                      <option value="メディア取材について">メディア取材について</option>
                      <option value="その他のお問合せ">その他のお問合せ</option>
                    </select>
                  </div>
                  <!-- エラーメッセージ専用要素なので警告ロールを設定、動的な変更を通知するaria-live属性を追加、初期表示はスクリーンリーダーから隠す -->
                  <p class="errorText" role="alert" aria-live="polite" aria-hidden="true">お問合せ種類を選択してください。</p>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <label for="contact_msg" class="inputLabel">お問合せ内容
                  <span class="require" aria-hidden="true">必須</span>
                </label>
              </th>
              <td>
                <div class="inputField">
                  <textarea name="contact_msg" id="contact_msg" cols="30" rows="10" required></textarea>
                  <p class="errorText" role="alert" aria-live="polite" aria-hidden="true">お問合せ内容を入力してください。</p>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <div class="inputLabel" id="nameGroup">
                  お名前
                  <span class="require" aria-hidden="true">必須</span>
                </div>
              </th>
              <td>
                <div class="nameLayout" aria-labelledby="nameGroup">
                  <div class="inputField">
                    <label for="name1" class="inputSubLabel">姓</label>
                    <input type="text" id="name1" name="name1" placeholder="山田" required>
                    <p class="errorText" role="alert" aria-live="polite" aria-hidden="true">姓を入力してください。</p>
                  </div>
                  <div class="inputField">
                    <label for="name2" class="inputSubLabel">名</label>
                    <input type="text" id="name2" name="2" placeholder="太郎" required>
                    <p class="errorText" role="alert" aria-live="polite" aria-hidden="true">名を入力してください。</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <div class="inputLabel" id="kanaGroup">
                  フリガナ
                  <span class="require" aria-hidden="true">必須</span>
                </div>
              </th>
              <td>
                <div class="nameLayout" aria-labelledby="kanaGroup">
                  <div class="inputField">
                    <label for="kana1" class="inputSubLabel">セイ</label>
                    <input type="text" id="kana1" name="kana1" placeholder="ヤマダ" pattern="^[ァ-ンヴー]+$" required aria-describedby="kana-description">
                    <p class="errorText" role="alert" aria-live="polite" aria-hidden="true">フリガナの姓を入力してください。</p>
                  </div>
                  <div class="inputField">
                    <label for="kana2" class="inputSubLabel">メイ</label>
                    <input type="text" id="kana2" name="kana2" placeholder="タロウ" pattern="^[ァ-ンヴー]+$" required aria-describedby="kana-description">
                    <p class="errorText" role="alert" aria-live="polite" aria-hidden="true">フリガナの名を入力してください。</p>
                  </div>
                </div>
                <!-- 注意書きにはid属性をつけ、各フォームにaria-describedbyで紐付ける -->
                <p class="inputNote" id="kana-description">※全角カタカナでご入力下さい。</p>
              </td>
            </tr>
            <tr>
              <th>
                <label for="email" class="inputLabel">メールアドレス
                  <span class="require" aria-hidden="true">必須</span>
                </label>
              </th>
              <td>
                <div class="inputField">
                  <input type="email" id="email" name="email" placeholder="yamada@sample.co.jp" required>
                  <p class="errorText" role="alert" aria-live="polite" aria-hidden="true">正しい形式のメールアドレスを入力してください。</p>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <label for="tel" class="inputLabel">電話番号
                  <span class="require" aria-hidden="true">必須</span>
                </label>
              </th>
              <td>
                <div class="inputField">
                  <input type="tel" id="tel" name="tel" pattern="\d{2,5}-?\d{2,4}-?\d{3,4}" placeholder="09012345678" required aria-describedby="tel-description">
                  <p class="errorText" role="alert" aria-live="polite" aria-hidden="true">電話番号を入力してください。</p>
                </div>
                <p class="inputNote" id="tel-description">※半角数字でご入力下さい。ハイフン(-)は任意です。</p>
              </td>
            </tr>
            <tr>
              <th>
                <div class="inputLabel" id="attribute">法人/個人
                  <span class="require" aria-hidden="true">必須</span>
                </div>
              </th>
              <td>
                <div class="inputField">
                  <ul class="radioList_hr" aria-labelledby="attribute">
                    <li>
                      <label>
                        <input type="radio" name="attribute" value="法人" checked required>
                        <span>法人</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="radio" name="attribute" value="個人" required>
                        <span>個人</span>
                      </label>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <label for="company" class="inputLabel">会社名</label>
              </th>
              <td>
                <div class="inputField">
                  <input type="text" id="company" name="company" placeholder="サンプル株式会社" required aria-describedby="company-description">
                  <p class="errorText" role="alert" aria-live="polite" aria-hidden="true">法人のお客様は会社名を入力してください。</p>
                </div>
                <p class="inputNote" id="company-description">※法人のお客様の場合は必ずご記入ください。</p>
              </td>
            </tr>
          </table>

          <div class="privacyBox">
            <p id="privacy-description">「<a href="#">プライバシーポリシー</a>」をご確認いただき、個人情報の取扱いについて同意いただける場合は「同意する」を選択してください。</p>
            <div class="privacyBox__check">
              <label>
                <input type="checkbox" id="agree" name="agree" value="同意します" required aria-describedby="privacy-description">
                <span>個人情報保護方針に同意する</span>
              </label>
            </div>
          </div>

          <div class="button-center">
            <button id="submit" class="button button--action button--lg" disabled>入力内容を確認する</button>
          </div>

        </form>
```

<br>
<br>

## SCSS

```SCSS
@charset "UTF-8";

/*----------------------------------------
	お問合せ専用
----------------------------------------*/

/*----------------------------------------
	contactTable
----------------------------------------*/
/*fieldset/legendでは実現しづらいレイアウトであるため、全体を表組みとして
マークアップしています。（div組みでも構いません）
また、SP時縦積み・PC時表組みとしたいので、このパーツのみデスクトップファーストで組みます。*/
.contactTable {
  width: 100%;
  border-bottom: 1px dashed #ccc;
}
.contactTable tr {
  height: 100px; /*表組みのheightはmin-heightとして動作します（min-heightは無効）*/
  border-top: 1px dashed #ccc;
}
.contactTable th {
  width: 32.4%;
  padding: 20px 40px 20px 0;
  vertical-align: middle;
}
.contactTable td {
  padding: 20px 0;
  vertical-align: middle;
}
@media screen and (max-width: 767px) {
  .contactTable,
  .contactTable tbody,
  .contactTable tr,
  .contactTable th,
  .contactTable td {
    display: block;
  }
  .contactTable tr {
    height: auto;
  }
  .contactTable th {
    width: 100%;
    padding: 20px 0 0 0;
  }
  .contactTable td {
    padding: 10px 0 20px 0;
  }
}

/*----------------------------------------
	Form Parts
----------------------------------------*/
/*各フォーム部品の基本スタイルを上書きします*/
input[type="text"],
input[type="email"],
input[type="tel"],
input[type="url"],
input[type="search"],
textarea,
select {
  -webkit-appearance: none;
  appearance: none; /*ブラウザ標準スタイルを無効にする*/
  width: 100%;
  padding: 10px 20px;
  background: #fff;
  border: 1px solid #707070;
  border-radius: 4px;
  font-family: inherit;
}
input[type="number"],
input[type="password"] {
  width: 100%;
  padding: 10px 20px;
  background: #fff;
  border: 1px solid #707070;
  border-radius: 4px;
}
/*フォーカス時*/
input[type="text"]:focus,
input[type="email"]:focus,
input[type="tel"]:focus,
input[type="url"]:focus,
input[type="search"]:focus,
textarea:focus,
select:focus,
input[type="number"],
input[type="password"] {
  outline: none;
  box-shadow: 0 0 5px rgba(55,149,47,0.7);
}
/*エラー時*/
.is-error input[type="text"],
.is-error input[type="email"],
.is-error input[type="tel"],
.is-error input[type="url"],
.is-error input[type="number"],
.is-error input[type="password"],
.is-error textarea,
.is-error select,
.is-error .selectWrap{
  color: #DF5656;
  border-color: #DF5656;
}

/*select
--------------------------*/
.selectWrap {
  position: relative;
}
.selectWrap::after {
  position: absolute;
  right: 20px;
  top: 0;
  bottom: 0;
  margin: auto;
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  border-right: 2px solid;
  border-bottom: 2px solid;
  transform: rotate(45deg);
}
select::-ms-expand { /*IEでもselectの矢印を消す*/
　display: none;
}

/*radio, checkbox
------------------------------------*/
input[type="radio"],
input[type="checkbox"] {
  opacity: 0; /*透明にして見えなくする*/
  position: absolute; /*本来の配置から切り離す*/
}
/*クリック範囲*/
input[type="radio"]+span,
input[type="checkbox"]+span {
  display: inline-block;
  position: relative;
  margin: 0 2em 0 0;
  padding: 0.3em 0.3em 0.3em 2em;
  line-height: 1;
  vertical-align: middle;
  cursor: pointer;
}
/*フォーカス時*/
input[type="radio"]:focus+span,
input[type="checkbox"]:focus+span {
  outline: none;
  box-shadow: 0 0 5px rgba(55,149,47,0.7);
}

/*ラジオボタンスタイル*/
input[type="radio"]+span:before {
  content: "";
  position: absolute;
  top: 0.25em;
  left: 0;
  width: 1.375em;
  height: 1.375em;
	border: 1px solid #ccc;
  border-radius: 50%;
  line-height: 1;
  background: #fff;
}
/*ラジオボタンチェック印（未選択）*/
input[type="radio"]+span:after {
  content: "";
  display: none;
}
/*ラジオボタンチェック印（選択）*/
input[type="radio"]:checked+span:after {
  display: block;
  position: absolute;
  top: 0.45em;
  left: 0.2em;
  width: 1em;
  height: 1em;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  background: #37952F;
  line-height: 1;
}
/*チェックボックススタイル*/
input[type="checkbox"]+span:before {
  position: absolute;
  top: 0.3em;
  left: 0;
  content: "";
  width: 1.25em;
  height: 1.25em;
  border: 1px solid #ccc;
  background: #fff;
  line-height: 1;
  vertical-align: middle;
}
/*チェックボックス未チェック時*/
input[type="checkbox"]+span:after {
  content: "";
  display: none;
}
/*チェックボックスチェック時*/
input[type="checkbox"]:checked+span:after {
  display: block;
  position: absolute;
  top: 0.3em;
  left: 0.4em;
  width: 0.5em;
  height: 1em;
  content: "";
  border-bottom: 3px solid #37952F;
  border-right: 3px solid #37952F;
  transform: rotate(45deg);
}

/*----------------------------------------
	Form Layout
----------------------------------------*/
/*ラベル*/
.inputLabel {
  font-weight: 500;
  font-size: 18px;
}
@media screen and (min-width:768px),print {
  .inputLabel {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
/*サブラベル*/
.inputSubLabel {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

/*必須ラベル*/
.require {
  display: inline-block;
  margin-left: 10px;
  padding: 0 10px;
  background: #37952F;
  color: #fff;
  font-weight: normal;
  font-size: 12px;
  vertical-align: middle;
}

/*注意書き*/
.inputNote {
  margin-top: 10px;
  color: #707070;
  font-size: 12px;
}

/*名前・フリガナ*/
.nameLayout >* + *{
  margin-top: 10px;
}
@media screen and (min-width:768px),print {
  .nameLayout {
    display: flex;
    justify-content: space-between;
  }
  .nameLayout > * {
    width: 48.68%;
  }
  .nameLayout > * + * {
    margin-top: 0;
  }
}

/*法人・個人*/
.radioList_hr {
  display: flex;
}

/*エラーメッセージ*/
.errorText {
  display: none;
  align-items: center;
  margin-top: 16px;
  color: #df5656;
  font-weight: bold;
}
.inputField.is-error .errorText {
  display: block;
}
.errorText::before {
  content: "";
  display: inline-block;
  width: 1.25em;
  height: 1.25em;
  margin-right: 0.2em;
  background: url(../img/icon_attention.svg) center center / contain no-repeat;
  vertical-align: middle;
}


/*----------------------------------------
	個人情報保護方針チェック
----------------------------------------*/
.privacyBox {
  margin: 50px 0;
  padding: 20px;
  border: 1px solid #ccc;
}
.privacyBox__check {
  margin-top: 20px;
  text-align: center;
}
@media screen and (min-width:768px),print {
  .privacyBox {
    margin: 80px 0;
    padding: 40px;
    text-align: center;
  }
  .privacyBox__check {
    margin-top: 50px;
  }
}

/*----------------------------------------
	送信ボタン
----------------------------------------*/
.formBtns {
  display: flex;
  justify-content: center;
}
.buttonAction {
  -webkit-appearance: none;
  appearance: none;
  display: block;
  margin: 0;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  border: 2px solid #FF7600;
  background: #FF7600;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  letter-spacing: 0.2em;
  transition: opacity 0.3s, color 0.3s;
  cursor: pointer;
}
.buttonAction:hover {
  opacity: 0.7;
}
```

<br>
