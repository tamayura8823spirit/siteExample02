const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

// 設定
context.fillStyle = '#faa';
context.strokeStyle = '44f';
context.lineWidth = 8;
context.lineCap = 'round';
context.lineJoin = 'round';

context.beginPath();

// パスを作る（三角形）
context.moveTo(200, 50);
context.lineTo(0, 250);
context.lineTo(400, 250);
context.closePath()

// コンテクストを保存してクリップ
context.save();
context.clip();

// 矩形を描く
context.fillRect(25, 25, 150, 250);
context.strokeRect(25, 25, 150, 250);

// コンテクストを復帰
context.restore();

context.fillRect(225, 25, 150, 250);
context.strokeRect(225, 25, 150, 250);
