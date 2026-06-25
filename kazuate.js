// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい

// ボタンを押した後の処理をする関数 hantei() の定義
// ゲーム終了フラグ
let gameover = false;

function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu++;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新

  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso = parseInt(document.querySelector('#yoso-input').value);
  // ここまで: テキストボックスに指定された数値を yoso に代入する

  document.querySelector('#yoso-display').textContent = kaisu + '回目の予想: ' + yoso;

  // ここから: 正解判定する
  const result = document.querySelector('#result');

  if (gameover) {
    result.textContent = '答えは ' + kotae + ' でした．すでにゲームは終わっています';
  } else if (yoso === kotae) {
    result.textContent = '正解です．おめでとう!';
    gameover = true;
  } else if (kaisu >= 3) {
    result.textContent = 'まちがい．残念でした答えは ' + kotae + ' です．';
    gameover = true;
  } else if (yoso < kotae) {
    result.textContent = 'まちがい．答えはもっと大きいですよ';
  } else {
    result.textContent = 'まちがい．答えはもっと小さいですよ';
  }
  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
document.querySelector('#hantei-btn').addEventListener('click', hantei);
document.querySelector('#yoso-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') hantei();
});
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
