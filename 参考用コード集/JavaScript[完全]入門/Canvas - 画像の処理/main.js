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
  context.fillRect( i / 8, i, w - h / 8, 1 );
}

const imgDt = context.getImageData(50, 100, 300, 100);
const data = imgDt.data;

// 画素に対して処理
for (let i = 0; i < data.length; i += 4) {
  // RGBAを取り出す
  const r = data[i + 0];
  const g = data[i + 1];
  const b = data[i + 2];
  const a = data[i + 3];

  // RGBAを入れ替える
  data[i + 0] = b;
  data[i + 1] = r;
  data[i + 2] = g;
}

context.putImageData(imgDt, 50, 100);
