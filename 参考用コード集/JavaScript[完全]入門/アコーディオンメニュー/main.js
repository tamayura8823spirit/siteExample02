
// ダミーテキストを作成して、idが magBody の要素のに設定
const tDummy = 'coffee cake '.repeat(1000);
document.querySelector('#msgBody').innerHTML = tDummy

// idが menu の要素に、クリック時の処理を登録
document.querySelector('#msgBtn').addEventListener('click', e => {
  // idが msgBody の要素の処理
  document.querySelector('#msgBody').classList.toggle('open');
});
