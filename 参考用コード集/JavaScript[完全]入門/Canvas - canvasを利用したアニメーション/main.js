const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const w = canvas.width;
const h = canvas.height;
const size = 40;
let x = 0;
let y = 0;

// 設定
context.fillStyle = '#faa';
context.strokeStyle = '#44f';
context.lineWidth = 8;

let tmOld = 0;

// アニメーション用関数
const step = function(tm) {
  // タイムスタンプの差分を求めて、過去地を更新
  let tmDif = tm - tmOld;
  if (tmDif > 1000) {tmDif = 0}
  tmOld = tm;

  // タイムスタンプの時間から移動位置を計算
  x += tmDif / 4;
  y += tmDif / 8;
  if(x >= w + size) {x = -size}
  if(y >= h + size) {y = -size}

  context.clearRect(0,0,w,h);

  context.beginPath();
  context.arc(x, y, size, 0, 2 * Math.PI );
  context.fill();
  context.stroke();

  requestAnimationFrame(step);
};

requestAnimationFrame(step);
