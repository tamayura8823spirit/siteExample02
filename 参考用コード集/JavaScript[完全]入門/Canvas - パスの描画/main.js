const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

// 設定
context.fillStyle = '#faa';
context.strokeStyle = '44f';
context.lineWidth = 8;
context.lineCap = 'round';
context.lineJoin = 'round';

context.beginPath();

// 左上に三角
context.moveTo(100, 50);
context.lineTo(10, 250);
context.lineTo(190, 250);

// 右上に三角
context.moveTo(300, 50);
context.lineTo(210, 250);
context.lineTo(390, 250);
context.closePath()

context.fill();
context.stroke();
