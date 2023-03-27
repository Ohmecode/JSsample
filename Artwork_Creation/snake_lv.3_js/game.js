let finscore = 11;//

const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.high-score');
const gameClearEl = document.querySelector('.game-clear');
const playAgainBtn = document.querySelector('.play-again');
const BacktoHomeBtn = document.querySelector('.BacktoHome');

const canvas = document.getElementById("canvas")
const canvasContext = canvas.getContext('2d')

window.onload = () => {

    gameLoop()

}

// add a border to canvas
canvas.style.border = '3px solid #fff';

function gameLoop() {
    setInterval(show, 1000 / 21) // here 15 is our fps value
}

$(function () {
    $(document).on("click", ".deleteEvent", function (e) {
        // $(this)でイベントが発生した要素を取得して削除する
        $(this).remove();
    });
});

function show() {
    update()
    draw()
}

function update() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height)
    snake.move()
    eatApple()
    eatPoison()
    eatNiceapple()
    checkHitWall()

}



function eatApple() {
    for (let i = 0; i < apple.length; i++) {
        if (snake.tail[snake.tail.length - 1].x == apple[i].x &&
            snake.tail[snake.tail.length - 1].y == apple[i].y) {
            snake.tail[snake.tail.length] = { x: apple[i].x, y: apple[i].y }//加算
            apple[i] = new Apple();
            if (navigator.userAgent.match(/(Android)/i)) {
                //20ms振動、10ms止める、20ms振動、
                window.navigator.vibrate([20]);
            }
        }
    }

    if (snake.tail.length >= finscore) {// x-1 
        //alert("win");
        gameClear()

    }
}

function eatPoison() {
    for (let i = 0; i < poison.length; i++) {
        if (snake.tail[snake.tail.length - 1].x == poison[i].x &&
            snake.tail[snake.tail.length - 1].y == poison[i].y) {
            snake.tail.length = Math.max(parseInt(snake.tail.length) - 1, 1);

            poison[i] = new Poison();
            console.log("eatpoison")

            if (navigator.userAgent.match(/(Android)/i)) {
                //20ms振動、10ms止める、20ms振動、
                window.navigator.vibrate([30, 10, 20, 10, 10]);
            }
            console.log("current", snake.tail.length);
        }
    }
}

function eatNiceapple() {

    for (let i = 0; i < niceapple.length; i++) {
        if (snake.tail[snake.tail.length - 1].x == niceapple[i].x &&
            snake.tail[snake.tail.length - 1].y == niceapple[i].y) {
            snake.tail[snake.tail.length] = { x: niceapple[i].x, y: niceapple[i].y }
            snake.tail[snake.tail.length] = { x: niceapple[i].x, y: niceapple[i].y }

            niceapple[i] = new Niceapple();
            console.log("eatNiceapple")

            if (navigator.userAgent.match(/(Android)/i)) {
                //20ms振動、10ms止める、20ms振動、
                window.navigator.vibrate([25, 10, 25]);
            }
            console.log("current", snake.tail.length);
        }
    }
}



function checkHitWall() {
    let headTail = snake.tail[snake.tail.length - 1]
    if (headTail.x == - snake.size) {
        headTail.x = canvas.width - snake.size
    } else if (headTail.x == canvas.width) {
        headTail.x = 0
    } else if (headTail.y == - snake.size) {
        headTail.y = canvas.height - snake.size
    } else if (headTail.y == canvas.height) {
        headTail.y = 0
    }
}

function draw() {
    createRect(0, 0, canvas.width, canvas.height, "black")

    for (let i = 0; i < snake.tail.length; i++) {
        if (i == snake.tail.length - 1) {
            createRect(snake.tail[i].x + 2.5, snake.tail[i].y + 2.5, snake.size - 1, snake.size - 1, "#FFFFFF")
        } else {
            createRect(snake.tail[i].x + 2.5, snake.tail[i].y + 2.5, snake.size - 1, snake.size - 1, "#999999")
        }
    }



    scoreEl.innerHTML = ("🍎ｘ " + (snake.tail.length - 1))

    for (let i = 0; i < apple.length; i++) {
        createRect(apple[i].x, apple[i].y, apple[i].size, apple[i].size, apple[i].color)
    }
    for (let i = 0; i < poison.length; i++) {
        createRect(poison[i].x, poison[i].y, poison[i].size, poison[i].size, poison[i].color)
    }
    for (let i = 0; i < niceapple.length; i++) {
        createRect(niceapple[i].x, niceapple[i].y, niceapple[i].size, niceapple[i].size, niceapple[i].color)
    }
}



function createRect(x, y, width, height, color) {
    canvasContext.fillStyle = color
    canvasContext.fillRect(x, y, width, height)
}

let functionRunFlag = false;
let vibrationRunFlag = false;
let functionRun2Flag = false;
let vibrationRun2Flag = false;
let functionRun3Flag = false;
let vibrationRun3Flag = false;
let functionRun4Flag = false;
let vibrationRun4Flag = false;

if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {

    //  iOS13以後iphone
    button.onclick = () => {
        DeviceOrientationEvent.requestPermission()
            .then(response => {
                if (response === 'granted') {
                    window.addEventListener('deviceorientation', function (event) {
                        var gamma = event.gamma;
                        var beta = event.beta;
                        if (gamma < -10) {
                            snake.rotateX = 0
                            snake.rotateY = -1
                        } else if (gamma > 10) {
                            snake.rotateX = 0
                            snake.rotateY = 1
                        } else if (beta < -10) {
                            snake.rotateX = -1
                        } else if (beta > 10) {
                            snake.rotateX = 1
                        }
                    }, true);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    //スマホでの操作
    //  Androidスマートフォン
    window.addEventListener('deviceorientation', function (event) {
        var gamma = event.gamma;
        var beta = event.beta;
        if (beta < -10) {
            snake.rotateX = 0
            snake.rotateY = -1
        } else if (beta > 10) {
            snake.rotateX = 0
            snake.rotateY = 1
        } else if (gamma < -10) {
            snake.rotateX = -1
        } else if (gamma > 10) {
            snake.rotateX = 1
        }




        //UP TURN
        if (beta > 10) {
            if (!functionRunFlag) {
                if (navigator.userAgent.match(/(Android)/i)) {
                    //20ms振動、10ms止める、20ms振動、
                    window.navigator.vibrate([10]);
                }
                functionRunFlag = true;
            }
        } else if (beta < 10) {
            functionRunFlag = false;
        }

        if (beta < 10) {
            if (!vibrationRunFlag) {
                if (navigator.userAgent.match(/(Android)/i)) {
                    //20ms振動、10ms止める、20ms振動、

                }
                vibrationRunFlag = true;
            }
        } else if (beta > 10) {
            vibrationRunFlag = false;
        }


        //DOWN TURN
        if (beta < -10) {
            if (!functionRun2Flag) {
                if (navigator.userAgent.match(/(Android)/i)) {
                    window.navigator.vibrate([10]);
                }
                functionRun2Flag = true;
            }
        } else if (beta > -10) {
            functionRun2Flag = false;
        }
        if (beta > -10) {
            if (!vibrationRun2Flag) {
                if (navigator.userAgent.match(/(Android)/i)) {

                }
                vibrationRun2Flag = true;
            }
        } else if (beta < -10) {
            vibrationRun2Flag = false;
        }


        //RIGHT TURN
        if (gamma > 10) {
            if (!functionRun3Flag) {
                if (navigator.userAgent.match(/(Android)/i)) {
                    //20ms振動、10ms止める、20ms振動、
                    window.navigator.vibrate([10]);
                }
                functionRun3Flag = true;
            }
        } else if (gamma < 10) {
            functionRun3Flag = false;
        }

        if (gamma < 10) {
            if (!vibrationRun3Flag) {
                if (navigator.userAgent.match(/(Android)/i)) {
                    //20ms振動、10ms止める、20ms振動、

                }
                vibrationRun3Flag = true;
            }
        } else if (gamma > 10) {
            vibrationRun3Flag = false;
        }


        //LEFT TURN
        if (gamma < -10) {
            if (!functionRun4Flag) {
                if (navigator.userAgent.match(/(Android)/i)) {
                    window.navigator.vibrate([10]);
                }
                functionRun4Flag = true;
            }
        } else if (gamma > -10) {
            functionRun4Flag = false;
        }
        if (gamma > -10) {
            if (!vibrationRun4Flag) {
                if (navigator.userAgent.match(/(Android)/i)) {

                }
                vibrationRun4Flag = true;
            }
        } else if (gamma < -10) {
            vibrationRun4Flag = false;
        }

    }, false);

} else {

    //コンピュータ
    window.addEventListener("keydown", function (event) {
        setTimeout(() => {
            if (event.key == "ArrowLeft") {
                snake.rotateX = -1
            } else if (event.key == "ArrowUp") {
                snake.rotateX = 0
                snake.rotateY = -1
            } else if (event.key == "ArrowRight") {
                snake.rotateX = 1
            } else if (event.key == "ArrowDown") {
                snake.rotateX = 0
                snake.rotateY = 1
            }
        }, 1)
    });
}
class Snake {
    constructor(x, y, size) {
        this.x = x
        this.y = y
        this.size = size
        this.tail = [{ x: this.x, y: this.y }]
        this.rotateX = 0
        this.rotateY = 1
    }

    move() {
        let newRect

        if (this.rotateX == 1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x + this.size,
                y: this.tail[this.tail.length - 1].y
            }
        } else if (this.rotateX == -1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x - this.size,
                y: this.tail[this.tail.length - 1].y
            }
        } else if (this.rotateY == 1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x,
                y: this.tail[this.tail.length - 1].y + this.size
            }
        } else if (this.rotateY == -1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x,
                y: this.tail[this.tail.length - 1].y - this.size
            }
        }

        this.tail.shift()
        this.tail.push(newRect)
    }
}

class Apple {
    constructor() {
        let isTouching
        while (true) {
            isTouching = false;
            this.x = Math.floor(Math.random() * canvas.width / snake.size) * snake.size
            this.y = Math.floor(Math.random() * canvas.height / snake.size) * snake.size
            for (let i = 0; i < snake.tail.length; i++) {
                if (this.x == snake.tail[i].x && this.y == snake.tail[i].y) {
                    isTouching = true
                }
            }
            this.size = snake.size
            this.color = "#FF0000"
            if (!isTouching) {
                break;
            }
        }
    }
}


class Poison {
    constructor() {

        let isTouching
        while (true) {
            isTouching = false;
            this.x = Math.floor(Math.random() * canvas.width / snake.size) * snake.size
            this.y = Math.floor(Math.random() * canvas.height / snake.size) * snake.size
            for (let i = 0; i < snake.tail.length; i++) {
                if (this.x == snake.tail[i].x && this.y == snake.tail[i].y) {
                    isTouching = true
                }
            }
            this.size = snake.size
            this.color = "#00ff00"
            if (!isTouching) {

                break;
            }
        }
    }
}


class Niceapple {
    constructor() {

        let isTouching
        while (true) {
            isTouching = false;
            this.x = Math.floor(Math.random() * canvas.width / snake.size) * snake.size
            this.y = Math.floor(Math.random() * canvas.height / snake.size) * snake.size
            for (let i = 0; i < snake.tail.length; i++) {
                if (this.x == snake.tail[i].x && this.y == snake.tail[i].y) {
                    isTouching = true
                }
            }
            this.size = snake.size
            this.color = "#FED700"
            if (!isTouching) {

                break;
            }
        }
    }
}




const snake = new Snake(20, 20, 20);

let apple = [new Apple(),
new Apple()];

let poison = [new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison(),
new Poison()];

let niceapple = [new Niceapple()];
// game over
function gameClear() {
    /*
    // select score and high score el
    const scoreEl = document.querySelector('.game-over-score .current');
    const highScoreEl = document.querySelector(
      '.game-over-score .high'
    );
  
    // calculate the high score
    highScore = Math.max(score, highScore);
    localStorage.setItem('high-score', highScore);
  
    // update the score and high score el
    scoreEl.innerHTML = `⭐ ${score}`;
    highScoreEl.innerHTML = `🏆 ${highScore}`;
  */
    // show game over el
    gameClearEl.classList.remove('hide');
}



BacktoHomeBtn.addEventListener('click', BACKHOME);
function BACKHOME() {
    location = '../home/home.html'
}


playAgainBtn.addEventListener('click', restartGame);
function restartGame() {
    /*
      // reset snake length and position
    snake = [
        { x: 2, y: 0 }, // Head
        { x: 1, y: 0 }, // Body
        { x: 0, y: 0 }, // Tail
      ];
    */
    /*
      // reset directions
      currentDirection = '';
      directionsQueue = [];
    */
    snake.tail.length = (parseInt(snake.tail.length) ** 0)

    // hide the game over screen
    gameClearEl.classList.add('hide');
    /*
      // reset the gameStarted state to false
      gameStarted = false;
    */
    // re-draw everything
    show();
}
