$(document).ready(function () {
  $('#splash-logo').addClass('fade-in');




  //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  setTimeout(function () {
    $('#splash-logo').addClass('slide-up');
    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
  }, 2600); // 2秒遅延

  // , function () {//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述


  // });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる


  //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
  $('.splashbg').on('animationend', function () {
    //この中に動かしたいJSを記載
  });
  //=====ここまで背景が伸びた後に動かしたいJSをまとめる
});