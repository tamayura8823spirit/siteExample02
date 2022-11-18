
<br>

## JavaScript

```JavaScript
$('input[name="attribute"]').on('change',function(){
  const attribute = $('input[name="attribute"]:checked').val();

  if(attribute === '個人') {
    $('#company').prop('required', false);
  }else {
    $('#company').prop('required', true);
  }
});
```

<br>
<br>

## HTML

```swift
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
```

<br>
<br>
