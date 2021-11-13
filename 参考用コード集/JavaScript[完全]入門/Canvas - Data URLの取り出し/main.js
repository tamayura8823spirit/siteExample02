
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const w = canvas.width;
const h = canvas.height;

// 図形を描く
for (let i = 0; i < h; i++) {
  // 設定
  const gradation = Math.trunc(255 * i / h);
  const r = gradation;
  const g = 255 - gradation;
  const b = 255;
  context.fillStyle = `rgba(${r},${g},${b})`;

  // 横１ラインずつ塗りつぶし
  context.fillRect( i / 2, i, w - h / 2, 1 );
}

const dtUrl = canvas.toDataURL();
console.log(dtUrl);

// 画像としてWebページに追加
const elImg = document.createElement('img');
elImg.setAttribute('src', dtUrl);
document.querySelector('body').appendChild(elImg);

