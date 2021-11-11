window.addEventListener('DOMContentLoaded', e => {
  const elVideo = document.querySelector('#video');
  const elTm = document.querySelector('#time');
  const elStatus = document.querySelector('#status');

  document.querySelector('#play')
  .addEventListener('click', e => {
    elVideo.play();
    elStatus.innerText = '再生中'
  });

  document.querySelector('#pause')
  .addEventListener('click', e => {
    elVideo.pause();
    elStatus.innerText = '一時停止';
  });

  // 現在/全体時間の表示
  elVideo.addEventListener('timeupdate', e => {
    elTm.innerText = Math.trunc(elVideo.currentTime) + '/' + Math.trunc(elVideo.duration);
  });

  // 再生完了
  elVideo.addEventListener('ended', e => {
    elStatus.innerText = '再生終了';
  });
});
