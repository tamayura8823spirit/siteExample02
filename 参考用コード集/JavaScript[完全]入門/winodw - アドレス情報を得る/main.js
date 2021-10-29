


// 戻るボタンのときの処理
window.addEventListener('popstate' , e => {
  // 情報を表示
  view(e.state);
});

// カウンター用変数を作成
let cnt = 0;

// 移動ボタンを押すごとにページを移動
function exec() {
  // stateオブジェクトを作る
  const state = {text: `cnt is ${cnt}.`};

  // Webページ上に情報を表示
  view(state);

  // Stateを追加して、見かけ上移動する
  history.pushState(state, '', `${cnt}.html`);  // 移動

  // カウンターを更新する
  cnt ++;
}

// #outputに表示
function view(state) {
  // 表示する文字列を作成
  let t = 'index.html1';

  // stateが有効なら、文字列を取り出す
  if (state !== null) { t = state.text; }

  // idがoutputの要素に文字列を設定
  document.querySelector('#output').innerText = t;
}


