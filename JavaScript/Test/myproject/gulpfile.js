// galpを読み込む
var gulp = require('gulp');

// タスクAの関数
function taskA() {

}

// タスクBの関数
function taskB() {

}

// 「gulp taskA」コマンドで単体タスクを実行できるようにする
exports.taskA = taskA;

// 「gulp」コマンドで taskA と taskB を並列実行する
exports.default = gulp.parallel('taskA', 'taskB');