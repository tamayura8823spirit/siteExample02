const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

// 背景を作る
context.fillStyle = '#ccffcc';
context.fillRect(0,0,canvas.width,canvas.height);

// 設定を指定
context.fillStyle = '#8888ff';
context.strokeStyle = 'rgba(255, 32, 32, 0.66)';
context.lineWidth = 16;

context.fillRect(50, 50, 300, 200); // 塗りつぶし
context.strokeRect(50, 50, 300, 200); // 線描画
context.clearRect(100, 100, 200, 100);  // 消去
