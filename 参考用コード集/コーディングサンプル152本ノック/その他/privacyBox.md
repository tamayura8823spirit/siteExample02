
<br>

## JavaScript

```JavaScript
$('#agree').on('click',function(){

  if($(this).prop('checked')){
    $('#submit').prop('disabled', false);
  }else{
    $('#submit').prop('disabled', true);
  }
});
```

<br>
<br>

## HTML

```swift
<div class="privacyBox">
  <p id="privacy-description">「<a href="#">プライバシーポリシー</a>」をご確認いただき、個人情報の取扱いについて同意いただける場合は「同意する」を選択してください。</p>
  <div class="privacyBox__check">
    <label>
      <input type="checkbox" id="agree" name="agree" value="同意します" required aria-describedby="privacy-description">
      <span>個人情報保護方針に同意する</span>
    </label>
  </div>
</div>
```

<br>
<br>

## SCSS

```SCSS
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
```

<br>
