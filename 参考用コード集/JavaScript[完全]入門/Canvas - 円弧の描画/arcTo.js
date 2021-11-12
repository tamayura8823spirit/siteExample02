
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

// 座標
const x0 = 25, y0 = 250;
const x1 = 350, y1 = 250;
const x2 = 350, y2 = 100;


// --------------------------
// 設定
context.fillStyle = '#a00';
context.strokeStyle = '44f';
context.lineWidth = 8;

context.beginPath();
context.moveTo(x0, y0);
context.arcTo(x1, y1, x2, y2, 150);
context.stroke();
// --------------------------

// 設定
context.lineWidth = 2;

// 半径を描く
context.strokeRect(200, 250, 150, -150);

// 3つの座標
context.fillRect(x0 - 10, y0 - 10, 20, 20);
context.fillRect(x1 - 10, y1 - 10, 20, 20);
context.fillRect(x2 - 10, y2 - 10, 20, 20);
