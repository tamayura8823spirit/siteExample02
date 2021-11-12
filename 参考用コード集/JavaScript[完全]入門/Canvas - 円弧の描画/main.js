const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

// 設定
context.fillStyle = '#faa';
context.strokeStyle = '#44f';
context.lineWidth = 8;
context.lineCap = 'round';

// --------------------------
// パスを作る 時計回り
context.beginPath();
context.arc(100, 150, 80, 0, 240 / 180 * Math.PI);
context.fill();
context.stroke();

// 回転の視点を描画
context.strokeRect(175, 145, 10, 10);
//---------------------------

//---------------------------
// パスを作る 反時計回り
context.beginPath();          
context.arc(150, 100, 80, 0, 240 / 180 * Math.PI, true);
context.fill();
context.stroke();

context.strokeRect(225, 95, 10, 10);
//---------------------------

// パスを作る ぐるっと１周
context.beginPath();
context.arc(300, 200, 80, 0, 360 / 180 * Math.PI);
context.fill();
context.stroke();

context.strokeRect(375, 195, 10, 10);
