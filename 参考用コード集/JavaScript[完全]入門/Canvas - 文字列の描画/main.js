const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

// 横幅、高さ、行の高さ
const w = canvas.width;
const h = canvas.height;
const lnH = 60;

// 縦線
context.fillRect(150, 0, 1, h);
context.fillRect(450, 0, 1, h);

// 横線
for(let y = lnH / 2; y <= h; y += lnH) {
  context.fillRect(0, y, w, 1);
}

// 設定
context.fillStyle = '#ccc';
context.strokeStyle = '#000';
context.lineWidth = 2;
context.font = 'bold 32px sans-serif';
const t = 'ftjyあ龍';

// 横位置を変えながら、左に描画
['start', 'end', 'left', 'right', 'center']
.forEach((align, i) => {
  context.textAlign = align;
  context.textBaseline = 'middle';

  context.fillText(t, 150, lnH * (i + 0.5));
  context.strokeText(t, 150, lnH * (i + 0.5));
});

// 縦位置を変えながら、右に描画
['top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom']
.forEach((baseline, i) => {
  context.textAlign = 'center';
  context.textBaseline = baseline;

  context.fillText(t, 450, lnH * (i + 0.5));
  context.strokeText(t, 450, lnH * (i + 0.5));
});
