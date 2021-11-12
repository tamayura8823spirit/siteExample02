const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

// 座標
const x0 = 50, y0 = 25;
const cx = 350, cy = 150;
const x = 50, y = 275;

// --------------------------
context.fillStyle = '#a00';
context.strokeStyle = '#44f';
context.lineWidth = 8;


context.beginPath();
context.moveTo(x0, y0);
context.quadraticCurveTo(cx, cy, x, y);
context.stroke();
// --------------------------

context.lineWidth = 2;

context.beginPath();
context.moveTo(x0, y0);
context.lineTo(cx, cy);
context.lineTo(x, y);
context.stroke();

context.fillRect(x0 - 10, y0 - 10, 20, 20);
context.fillRect(cx - 10, cy - 10, 20, 20);
context.fillRect(x - 10, y - 10, 20, 20);
