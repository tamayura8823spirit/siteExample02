const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

// 座標
const x0 = 50, y0 = 25;
const cx1 = 350, cy1 = 25;
const cx2 = 350, cy2 = 275;
const x = 50, y = 275;

// --------------------------
context.fillStyle = '#a00';
context.strokeStyle = '#44f';
context.lineWidth = 8;


context.beginPath();
context.moveTo(x0, y0);
context.bezierCurveTo(cx1, cy1, cx2, cy2, x, y);
context.stroke();
// --------------------------

context.lineWidth = 2;

context.beginPath();
context.moveTo(x0, y0);
context.lineTo(cx1, cy1);
context.moveTo(x, y);
context.lineTo(cx2, cy2);
context.stroke();

context.fillRect(x0 - 10, y0 - 10, 20, 20);
context.fillRect(cx1 - 10, cy1 - 10, 20, 20);
context.fillRect(cx2 - 10, cy2 - 10, 20, 20);
context.fillRect(x - 10, y - 10, 20, 20);
