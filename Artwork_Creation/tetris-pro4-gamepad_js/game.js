"use strict";


const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");
context.scale(20, 20);

const timeEl = document.querySelector('.time');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.high-score')
const gameOverEl = document.querySelector('.game-over');
const playAgainBtn = document.querySelector('.play-again');
const BacktoHomeBtn = document.querySelector('.BacktoHome');

function arenaSweep() {

    let rowCount = 1;
    outer: for (let y = arena.length - 1; y > 0; --y) {
        for (let x = 0; x < arena[y].length; ++x) {
            if (arena[y][x] === 0) {
                continue outer;
            }
        }
        const row = arena.splice(y, 1)[0].fill(0);
        arena.unshift(row);
        ++y;
        player.score += rowCount * 10;
        rowCount *= 2;

    }
}

// タイム計測用変数
var startBtn;
var stopBtn;
var resetBtn;
var TimeDisplay;

var time;
var startTime;
var elapsedTime = 0;
var keepTime = 0;

window.onload = function () {
    startBtn = document.getElementById("StartBtn");
    stopBtn = document.getElementById("StopBtn");
    resetBtn = document.getElementById("ResetBtn");
    TimeDisplay = document.getElementById("TimeDisplay");
}

// タイム計測用関数

function timeStart() {
    startTime = Date.now();

    processTime(); //計測時間

    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
}

//停止
function timeStop() {
    clearInterval(time);

    keepTime += Date.now() - startTime;

    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;
}

//リセット
function timeReset() {
    clearInterval(time);

    elapsedTime = 0;
    keepTime = 0;
    TimeDisplay.textContent = "00:00.000";

    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
}

function processTime() {
    time = setTimeout(function () {

        elapsedTime = Date.now() - startTime + keepTime;
        TimeDisplay.textContent = new
            Date(elapsedTime).toISOString().slice(14, 23);

        processTime();
    }, 10);
}

//出力時に整理する関数
// ミリ秒をmm:ss.sss形式に変換する関数
function msToTime(elapsedTime) {
    // 分と秒とミリ秒を計算する
    let minutes = Math.floor(elapsedTime / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);
    let milliseconds = elapsedTime % 1000;

    // ゼロ埋めをする
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    milliseconds = milliseconds.toString().padStart(3, "0");

    // mm:ss.sss形式の文字列を返す
    return `${minutes}:${seconds}.${milliseconds}s`;
}


button.addEventListener("click", function () {
    timeStart();
});

function collide(arena, player) {

    const m = player.matrix;
    const o = player.pos;
    for (let y = 0; y < m.length; ++y) {
        for (let x = 0; x < m[y].length; ++x) {
            if (m[y][x] !== 0 && (arena[y + o.y] && arena[y + o.y][x + o.x]) !== 0) {
                return true;
            }
        }
    }
    return false;

}

function createMatrix(w, h) {

    const matrix = [];
    while (h--) {
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}

function createPiece(type) {

    if (type === "I") {
        return [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ];
    } else if (type === "L") {
        return [
            [0, 2, 0],
            [0, 2, 0],
            [0, 2, 2],
        ];
    } else if (type === "J") {
        return [
            [0, 3, 0],
            [0, 3, 0],
            [3, 3, 0],
        ];
    } else if (type === "O") {
        return [
            [4, 4],
            [4, 4],
        ];
    } else if (type === "Z") {
        return [
            [5, 5, 0],
            [0, 5, 5],
            [0, 0, 0],
        ];
    } else if (type === "S") {
        return [
            [0, 6, 6],
            [6, 6, 0],
            [0, 0, 0],
        ];
    } else if (type === "T") {
        return [
            [0, 7, 0],
            [7, 7, 7],
            [0, 0, 0],
        ];
    }
}

function drawMatrix(matrix, offset) {

    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = colors[value];
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}

function draw() {

    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawMatrix(arena, { x: 0, y: 0 });
    drawMatrix(player.matrix, player.pos);

    context.beginPath();
    context.moveTo(1, 0);
    context.lineTo(1, 20);
    context.lineTo(2, 20);
    context.lineTo(2, 0);
    context.lineTo(3, 0);
    context.lineTo(3, 20);
    context.lineTo(4, 20);
    context.lineTo(4, 0);
    context.lineTo(5, 0);
    context.lineTo(5, 20);
    context.lineTo(6, 20);
    context.lineTo(6, 0);
    context.lineTo(7, 0);
    context.lineTo(7, 20);
    context.lineTo(8, 20);
    context.lineTo(8, 0);
    context.lineTo(9, 0);
    context.lineTo(9, 20);
    context.lineTo(10, 20);
    context.lineTo(10, 0);
    context.lineTo(11, 0);
    context.lineTo(11, 20);
    //---------------------------------
    context.lineTo(12, 20);
    context.lineTo(12, 19);
    context.lineTo(0, 19);
    context.lineTo(0, 18);
    context.lineTo(12, 18);
    context.lineTo(12, 17);
    context.lineTo(0, 17);
    context.lineTo(0, 16);
    context.lineTo(12, 16);
    context.lineTo(12, 15);
    context.lineTo(0, 15);
    context.lineTo(0, 14);
    context.lineTo(12, 14);
    context.lineTo(12, 13);
    context.lineTo(0, 13);
    context.lineTo(0, 12);
    context.lineTo(12, 12);
    context.lineTo(12, 11);
    context.lineTo(0, 11);
    context.lineTo(0, 10);
    context.lineTo(12, 10);
    context.lineTo(12, 9);
    context.lineTo(0, 9);
    context.lineTo(0, 8);
    context.lineTo(12, 8);
    context.lineTo(12, 7);
    context.lineTo(0, 7);
    context.lineTo(0, 6);
    context.lineTo(12, 6);
    context.lineTo(12, 5);
    context.lineTo(0, 5);
    context.lineTo(0, 4);
    context.lineTo(12, 4);
    context.lineTo(12, 3);
    context.lineTo(0, 3);
    context.lineTo(0, 2);
    context.lineTo(12, 2);
    context.lineTo(12, 1);
    context.lineTo(0, 1);
    context.strokeStyle = "#BBB";
    context.lineWidth = 0.012;
    context.stroke();
}

function merge(arena, player) {
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                arena[y + player.pos.y][x + player.pos.x] = value;
            }
        });
    });
}



function playerDrop() {

    player.pos.y++;
    if (collide(arena, player)) {
        player.pos.y--;
        merge(arena, player);
        playerReset();
        arenaSweep();
        updateScore();
    }
    dropCounter = 0;
}

function playerMove(offset) {
    player.pos.x += offset;
    if (collide(arena, player)) {
        player.pos.x -= offset;
        console.log(player.pos.x);
    }
}



function playerReset() {

    const pieces = "TJLOSZI";
    player.matrix = createPiece(pieces[(pieces.length * Math.random()) | 0]);
    player.pos.y = 0;
    player.pos.x = ((arena[0].length / 2) | 0) - ((player.matrix[0].length / 2) | 0);
    if (collide(arena, player)) {

        gameOver();

    }
}



function playerRotate(dir) {
    const pos = player.pos.x;
    let offset = 1;
    // rotate(player.matrix, dir);//回転処理
    for (let y = 0; y < player.matrix.length; ++y) {
        for (let x = 0; x < y; ++x) {
            //回転処理
            [player.matrix[x][y], player.matrix[y][x]] =
                [player.matrix[y][x], player.matrix[x][y]];
        }
    }
    if (dir > 0) {
        player.matrix.forEach((row) => row.reverse());
    } else {
        player.matrix.reverse();
    }
    while (collide(arena, player)) {//回転後に衝突するかどうかをチェックする
        player.pos.x += offset;//衝突する場合は、衝突しなくなるまで、プレーヤーのpos.x座標をoffset++
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > player.matrix[0].length) {
            // rotate(player.matrix,-dir);
            for (let y = 0; y < player.matrix.length; ++y) {
                for (let x = 0; x < y; ++x) {
                    //回転処理
                    [player.matrix[x][y], player.matrix[y][x]] =
                        [player.matrix[y][x], player.matrix[x][y]];
                }
            }
            if (-dir > 0) {
                player.matrix.forEach((row) => row.reverse());
            } else {
                player.matrix.reverse();
            }
            player.pos.x = pos;
            return;
        }
    }
}

//150 コントローラ ちょうどいい

let dropCounter = 0;
let dropInterval = 135;
let lastTime = 0;

function update(time = 0) {
    const deltaTime = time - lastTime;
    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
        playerDrop();
    }
    lastTime = time;
    draw();
    requestAnimationFrame(update);
}


let highScore = localStorage.getItem('high-score') || 0;

function updateScore() {

    scoreEl.innerHTML = `score ${player.score}`;
    highScoreEl.innerHTML = `🏆 ${highScore}`;
}

$(function () {
    $(document).on("click", ".deleteEvent", function (e) {
        // $(this)でイベントが発生した要素を取得して削除する
        $(this).remove();
    });
});




// ゲームパッド接続イベント（修正途中です）

// x = button0
// o = button1
// □ = button2
// Δ = button3

// L1 = button4
// R1 = button5

// L2 = button6(max value = 1)
// R2 = button7(max value = 1)

// arrow key up = button12
// arrow key down = button13
// arrow key left = button14
// arrow key right = button15

// コントローラーが接続されたときに呼ばれる関数
function onGamepadConnected(event) {
    // 接続されたコントローラーの情報を取得
    let gamepad = event.gamepad;
    // コントローラーのIDを表示
    console.log("A gamepad connected: " + gamepad.id);
    // コントローラーの入力を監視する関数を呼び出す
    monitorGamepadInput(gamepad);
}

// コントローラーが切断されたときに呼ばれる関数
function onGamepadDisconnected(event) {
    // 切断されたコントローラーの情報を取得
    let gamepad = event.gamepad;
    // コントローラーのIDを表示
    console.log("A gamepad disconnected: " + gamepad.id);
}

// 前のフレームでのキーのボタンの状態を記憶する変数（初期値はfalse）
let prevUpPressed = false;
// let prevDownPressed = false;
let prevLeftPressed = false;
let prevRightPressed = false;
// let prevL1Pressed = false;
let prevR1Pressed = false;

// ボタンを押した時間と話した時間を記憶
let leftPressedTime = 0;
let leftReleasedTime = 0;
let rightPressedTime = 0;
let rightReleasedTime = 0;
// let downPressedTime = 0;
// let downReleasedTime = 0;
// let l1PressedTime = 0;
// let l1ReleasedTime = 0;
let r1PressedTime = 0;
let r1ReleasedTime = 0;


// ボタンの長押しと判断する時間
let longPressThreshold = 300;

// コントローラーの入力を監視する関数
function monitorGamepadInput() {
    // 十字キーのボタン番号（ブラウザによって異なる場合がある）
    let up = 12;
    // let down = 13;
    let left = 14;
    let right = 15;
    // let l1 = 4;
    let r1 = 5;

    // ゲームパッドの配列を取得
    let gamepads = navigator.getGamepads();

    // 最初に接続されたゲームパッドを取得（インデックスは0から始まる）
    let gamepad = gamepads[0];

    // ゲームパッドが存在するかどうかをチェック
    if (gamepad) {
        // 十字キーのボタンが押されているかどうかを取得
        let upPressed = gamepad.buttons[up].pressed;
        // let downPressed = gamepad.buttons[down].pressed;
        let leftPressed = gamepad.buttons[left].pressed;
        let rightPressed = gamepad.buttons[right].pressed;
        // let l1Pressed = gamepad.buttons[l1].pressed;
        let r1Pressed = gamepad.buttons[r1].pressed;


        // 十字キーによるミノの操作を行う
        if (leftPressed && !prevLeftPressed) {
            playerMove(-1);
            console.log("Left: " + leftPressed);
            // leftボタンが押された時間を記憶
            leftPressedTime = Date.now();
        }
        if (rightPressed && !prevRightPressed) {
            playerMove(1);
            console.log("Right: " + rightPressed);
            // rightボタンが押された時間を記憶
            rightPressedTime = Date.now();
        }
        // if (downPressed && !prevDownPressed) {
        //     playerDrop();
        //     console.log("Down: " + downPressed);
        //     // downボタンが押された時間を記憶
        //     downPressedTime = Date.now();
        // }

        // l1,R1キーで回転操作を行う
        // if (l1Pressed && !prevL1Pressed) {
        //     playerRotate(-1);
        //     console.log("RotateLeft: " + l1Pressed);
        //     // L1ボタンが押された時間を記憶
        //     l1PressedTime = Date.now();
        // }
        if (r1Pressed && !prevR1Pressed) {
            playerRotate(1);
            console.log("RotateRight: " + r1Pressed);
            // R1ボタンが押された時間を記憶
            r1PressedTime = Date.now();
        }

        //Leftボタンが離された時間を記憶
        if (!leftPressed && prevLeftPressed) {
            leftReleasedTime = Date.now();
        }

        //Rightボタンが離された時間を記憶
        if (!rightPressed && prevRightPressed) {
            rightReleasedTime = Date.now();
        }
        // Downボタンが離された時間を記憶
        // if (!downPressed && prevDownPressed) {
        //     downReleasedTime = Date.now();
        // }
        // L1ボタンが離された時間を記憶
        // if (!l1Pressed && prevL1Pressed) {
        //     l1ReleasedTime = Date.now();
        // }
        // R1ボタンが離された時間を記憶
        if (!r1Pressed && prevR1Pressed) {
            r1ReleasedTime = Date.now();
        }



        // Leftボタンが長押しされているかどうかをチェックする
        if (leftPressed && prevLeftPressed) {
            // Leftボタンが押されてから現在までの時間を計算する
            let leftPressDuration = Date.now() - leftPressedTime;
            // Leftボタンが長押ししたと判断する時間以上になったら、playerMove(-1)を呼び出す
            if (leftPressDuration >= longPressThreshold) {
                playerMove(-1);
            }
        }

        // Rightボタンが長押しされているかどうかをチェックする
        if (rightPressed && prevRightPressed) {
            // Rightボタンが押されてから現在までの時間を計算する
            let rightPressDuration = Date.now() - rightPressedTime;
            // Rightボタンが長押ししたと判断する時間以上になったら、playerMove(-1)を呼び出す
            if (rightPressDuration >= longPressThreshold) {
                playerMove(1);
            }
        }
        // Downボタンが長押しされているかどうかをチェックする
        // if (downPressed && prevDownPressed) {
        //     // Downボタンが押されてから現在までの時間を計算する
        //     let downPressDuration = Date.now() - downPressedTime;
        //     // Downボタンが長押ししたと判断する時間以上になったら、playerDrop()を呼び出す
        //     if (downPressDuration >= longPressThreshold) {
        //         playerDrop();
        //     }
        // }
        // L1ボタンが長押しされているかどうかをチェックする
        // if (l1Pressed && prevL1Pressed) {
        //     // L1ボタンが押されてから現在までの時間を計算する
        //     let l1pressDuration = Date.now() - l1PressedTime;
        //     // L1ボタンが長押ししたと判断する時間以上になったら、playerRotate(-1)を呼び出す
        //     if (l1pressDuration >= longPressThreshold) {
        //         playerRotate(-1);
        //     }
        // }
        // R1ボタンが長押しされているどうかをチェックする
        if (r1Pressed && prevR1Pressed) {
            // R1ボタンが押されてから現在までの時間を計算する
            let r1pressDuration = Date.now() - r1PressedTime;
            // R1ボタンが長押ししたと判断する時間以上になったら、pleyerRotate(1)を呼び出す
            if (r1pressDuration >= longPressThreshold) {
                playerRotate(1);
            }
        }

        // 現在のフレームでのボタンの状態を記憶
        prevUpPressed = upPressed;
        // prevDownPressed = downPressed;
        prevLeftPressed = leftPressed;
        prevRightPressed = rightPressed;
        // prevL1Pressed = l1Pressed;
        prevR1Pressed = r1Pressed;

    }

    // 次のフレームで再びこの関数を呼び出す
    requestAnimationFrame(monitorGamepadInput);
}
// コントローラーが接続・切断されたときにイベントリスナーを登録
window.addEventListener("gamepadconnected", onGamepadConnected);
window.addEventListener("gamepaddisconnected", onGamepadDisconnected);


const colors = [
    null,
    "#0dc2ff",//I
    "#ff8e0d",//L
    "#3877ff",//J
    "#ffe138",//O
    "#ff0d72",//Z
    "#0dff72",//S
    "#961ED9",//T
];

const arena = createMatrix(12, 20);
const player = {
    pos: { x: 0, y: 0 },
    matrix: null,
    score: 0,
};
playerReset();
updateScore();
update();


BacktoHomeBtn.addEventListener('click', BACKHOME);
function BACKHOME() {
    location = '../home/home.html'
}

function gameOver() {

    //ストップウォッチ停止
    timeStop()
    const scoreEl = document.querySelector('.game-over-score .current');
    const highScoreEl = document.querySelector('.game-over-score .high');
    const Measurement_Result = document.querySelector('.game-over-score .Meas_Result');

    //ハイスコアの更新
    highScore = Math.max(player.score, highScore);
    localStorage.setItem('high-score', highScore);
    let result = msToTime(elapsedTime);

    scoreEl.innerHTML = `score ${player.score}`;
    highScoreEl.innerHTML = `🏆${highScore}`;
    Measurement_Result.innerHTML = `⌚ ${result}`;

    gameOverEl.classList.remove('hide');
}

playAgainBtn.addEventListener('click', restartGame);
function restartGame() {
    timeReset()
    timeStart()

    arena.forEach((row) => row.fill(0));
    player.score = 0;
    updateScore();
    console.log("gameover");

    gameOverEl.classList.add('hide');

}


