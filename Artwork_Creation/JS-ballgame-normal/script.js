import Ball from "./Ball.js"
import Paddle from "./Paddle.js"
setTimeout(scrollTo, 100, 0, 1);
const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
const playerScoreElem = document.getElementById("player-score")
const computerScoreElem = document.getElementById("computer-score")


const finscoreEl = document.querySelector('.fin-score');
const finhighScoreEl = document.querySelector('.fin-high-score');
const gameOverEl = document.querySelector('.game-over');
const gameWinEl = document.querySelector('.game-win');
const playAgainBtnwin = document.querySelector('.play-again-win');
const playAgainBtnlose = document.querySelector('.play-again-lose');
const BacktoHomewinBtn = document.querySelector('.BacktoHome-win');
const BacktoHomeloseBtn = document.querySelector('.BacktoHome-lose');

let gameStarted = false;

let lastTime
function update(time) {


  if (lastTime != null) {
    const delta = time - lastTime
    ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()])
          computerPaddle.update(delta, ball.y)
    const hue = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--hue")
    )
    document.documentElement.style.setProperty("--hue", hue + delta * 0.05)
    if (playerScoreElem.textContent >= 9 || computerScoreElem.textContent >= 9){
      document.documentElement.style.setProperty("--hue", hue + delta * 0.70)
    }
    if (isLose()) handleLose()
  }

  lastTime = time
  window.requestAnimationFrame(update)
}

function isLose() {
  if(!gameStarted) return;
  const rect = ball.rect()
  return rect.right >= window.innerWidth || rect.left <= 0
}



$(function () {
  $(document).on("click", ".deleteEvent", function (e) {
      // $(this)でイベントが発生した要素を取得して削除する
      $(this).remove();
  });5
});



function handleLose() {
  if(!gameStarted) return;
  const rect = ball.rect()
  if (rect.right >= window.innerWidth) {

    if(navigator.userAgent.match(/(Android)/i)){
      //20ms振動、10ms止める、20ms振動、
      window.navigator.vibrate([20,10]);
    }
    playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1 
      
  } else {

    if(navigator.userAgent.match(/(Android)/i)){
      //20ms振動、10ms止める、20ms振動、
      window.navigator.vibrate([30,10,20,10]);
    }
    computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1
  }

  //勝敗の選定
  if(playerScoreElem.textContent >= 10){
    gameWin();
    

  }else if(computerScoreElem.textContent >= 10){
    gameOver();
  }

  ball.reset()
  computerPaddle.reset()
}



if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)){// スマホ・タブレット（iOS・Android）の場合の処理を記述

  //  iOS13以後のスマートフォンやタブレットの傾きによる検出イベント
  button.onclick = () => {
    DeviceOrientationEvent.requestPermission()
    .then(response => {
        if (response === 'granted') {
            window.addEventListener('deviceorientation', function(event) {  
              var y = -(event.gamma);
              y += 60;
              playerPaddle.position = y;
            }, true);  
        }
    })
    .catch( error => {
        console.log(error);
    });
  }

  //  Androidスマートフォンやタブレットの傾きによる検出イベント
  window.addEventListener('deviceorientation', function(event) {  
    var y = -(event.gamma);
    y += 25;
    playerPaddle.position = y;
  }, false);



}else{// PCの場合の処理を記述

  //コンピュータの左右矢印キー押下による検出イベント
  window.addEventListener("keydown", function(event){
    setTimeout(() => {
        if (event.key == "ArrowUp") {
          playerPaddle.position -= 2;
        } else if (event.key == "ArrowDown") {
          playerPaddle.position += 2;
        }
    }, 1)
  });
  //コンピュータのマウスに追従
  document.addEventListener("mousemove", e => {
    playerPaddle.position = (e.y / window.innerHeight) * 100
  })



}
if(!gameStarted){
  gameStarted = true;
  window.requestAnimationFrame(update)
}


function scoreReset(){
  playerScoreElem.textContent = parseInt(playerScoreElem.textContent) * 0
  computerScoreElem.textContent = parseInt(computerScoreElem.textContent) * 0
}

function gameOver() {

    // select score and high score el
    const finscoreEl = document.querySelector('.game-over-score .current');
    const finhighScoreEl = document.querySelector(
      '.game-over-score .high'
    );

    
    gameStarted = false;

  finscoreEl.innerHTML = `👨 ${playerScoreElem.textContent}`;
  finhighScoreEl.innerHTML = `💻 ${computerScoreElem.textContent}`;

  // show game over el
  gameOverEl.classList.remove('hide');
}



function gameWin() {
  // select score and high score el
  const finscoreEl = document.querySelector('.game-win-score .current');
  const finhighScoreEl = document.querySelector(
    '.game-win-score .high'
  );

  
  gameStarted = false;

finscoreEl.innerHTML = `👨 ${playerScoreElem.textContent}`;
finhighScoreEl.innerHTML = `💻 ${computerScoreElem.textContent}`;

// show game win el
gameWinEl.classList.remove('hide');
}


function frame(){
  ball.reset()
  handleLose()
  isLose()
  scoreReset()
}




BacktoHomewinBtn.addEventListener('click', BACKHOMEWIN);
function BACKHOMEWIN() {
  location = '../home/home.html'
}

BacktoHomeloseBtn.addEventListener('click', BACKHOMELOSE);
function BACKHOMELOSE() {
  location = '../home/home.html'
}

playAgainBtnlose.addEventListener('click', restartloseGame);
function restartloseGame() {
  

  // hide the game over screen
  gameOverEl.classList.add('hide');
  
  frame()
  gameStarted = true;
}


playAgainBtnwin.addEventListener('click', restartwinGame);
function restartwinGame() {
  

  // hide the game over screen
  gameWinEl.classList.add('hide');
  
  frame()
  gameStarted = true;
}