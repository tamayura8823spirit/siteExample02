// .box の要素を選択
const elBox = document.querySelector('.box');

// アニメーション開始
anim(elBox);

// アニメーション関数
async function anim(el) {
  // 「四角 → 丸＆回転 → 四角」のアニメーション
  await el.animate(
    {
      borderRadius: ['0px', '50px', '0px'],
      transform: ['', 'rotate(720deg)', ''],
    },
    1500  // 1500ミリ秒かけて変化
  ).finished; // Promiseを得る

  // 「下＆赤 → 上＆青 → 下＆赤」のアニメーション
  await el.animate(
    [
      { top: '300px', backgroundColor: '#faa' },
      { top: '0px', backgroundColor: '#aaf' },
      { top: '300px', backgroundColor: '#faa' },
    ],
    {
      delay: 250, // 250ミリ秒遅らせて開始
      duration: 750, // 750ミリ秒かけて変化
      easing: 'ease-in-out', // 変化の種類はease-in-out
      endDelay: 250, // 250秒遅らせて終了
    }
  ).finished; // Promiseを得る

  anim(el); // アニメーション再実行
}
