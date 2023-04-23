"use strict";


const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");
context.scale(20, 20);

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


let dropCounter = 0;
let dropInterval = 800;
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



let functionRunFlag = false;
let vibrationRunFlag = false;
let functionRun2Flag = false;
let vibrationRun2Flag = false;

if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {

    //  iOS13以後iphone
    button.onclick = () => {
        DeviceOrientationEvent.requestPermission()
            .then(response => {
                if (response === 'granted') {

                    window.addEventListener('deviceorientation', function (event) {

                        var gamma = event.gamma;
                        var beta = event.beta;
                        let current;

                        //right left shifts
                        if (gamma < 60) {
                            current = player.pos.x;
                            player.pos.x = 5 + Math.floor(gamma / 10);
                            if (collide(arena, player)) {
                                player.pos.x = current;
                            }
                        }
                        // //Spinning right
                        // if (beta > 35) {
                        //     if (!functionRunFlag) {
                        //         if (navigator.userAgent.match(/(Android)/i)) {
                        //             //20ms振動、10ms止める、20ms振動、
                        //             window.navigator.vibrate([20]);
                        //         }
                        //         playerRotate(1);
                        //         functionRunFlag = true;
                        //     }
                        // } else if (beta < 35) {
                        //     functionRunFlag = false;
                        // }

                        // if (beta < 35) {
                        //     if (!vibrationRunFlag) {
                        //         if (navigator.userAgent.match(/(Android)/i)) {
                        //             //20ms振動、10ms止める、20ms振動、
                        //             window.navigator.vibrate([20, 10, 30]);
                        //         }
                        //         vibrationRunFlag = true;
                        //     }
                        // } else if (beta > 35) {
                        //     vibrationRunFlag = false;
                        // }


                        // //Spinning left
                        // if (beta < -5) {
                        //     if (!functionRun2Flag) {
                        //         if (navigator.userAgent.match(/(Android)/i)) {
                        //             window.navigator.vibrate([20]);
                        //         }
                        //         playerRotate(-1);
                        //         functionRun2Flag = true;
                        //     }
                        // } else if (beta > -5) {
                        //     functionRun2Flag = false;
                        // }

                        // if (beta > -5) {
                        //     if (!vibrationRun2Flag) {
                        //         if (navigator.userAgent.match(/(Android)/i)) {
                        //             window.navigator.vibrate([20, 10, 30]);
                        //         }
                        //         vibrationRun2Flag = true;
                        //     }
                        // } else if (beta < -5) {
                        //     vibrationRun2Flag = false;
                        // }

                    }, true);

                    window.addEventListener('devicemotion', function (e) {

                        var az = e.acceleration.z

                        //Spinning right
                        if (az > 15) {
                            if (!functionRunFlag) {
                                if (navigator.userAgent.match(/(Android)/i)) {
                                    //20ms振動、10ms止める、20ms振動、
                                    window.navigator.vibrate([30]);
                                }
                                playerRotate(1);
                                functionRunFlag = true;
                            }
                        } else if (az <= 1 || az >= -1) {
                            functionRunFlag = false;
                        }

                    }, false);


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
        let current;

        //right left shifts
        if (gamma < 60) {
            current = player.pos.x;
            player.pos.x = 5 + Math.floor(gamma / 10);
            if (collide(arena, player)) {
                player.pos.x = current;
            }
        }
        // //Spinning right
        // if (beta > 35) {
        //     if (!functionRunFlag) {
        //         if (navigator.userAgent.match(/(Android)/i)) {
        //             //20ms振動、10ms止める、20ms振動、
        //             window.navigator.vibrate([20]);
        //         }
        //         playerRotate(1);
        //         functionRunFlag = true;
        //     }
        // } else if (beta < 35) {
        //     functionRunFlag = false;
        // }

        // if (beta < 35) {
        //     if (!vibrationRunFlag) {
        //         if (navigator.userAgent.match(/(Android)/i)) {
        //             //20ms振動、10ms止める、20ms振動、
        //             window.navigator.vibrate([20, 10, 30]);
        //         }
        //         vibrationRunFlag = true;
        //     }
        // } else if (beta > 35) {
        //     vibrationRunFlag = false;
        // }


        // //Spinning left
        // if (beta < -5) {
        //     if (!functionRun2Flag) {
        //         if (navigator.userAgent.match(/(Android)/i)) {
        //             window.navigator.vibrate([20]);
        //         }
        //         playerRotate(-1);
        //         functionRun2Flag = true;
        //     }
        // } else if (beta > -5) {
        //     functionRun2Flag = false;
        // }

        // if (beta > -5) {
        //     if (!vibrationRun2Flag) {
        //         if (navigator.userAgent.match(/(Android)/i)) {
        //             window.navigator.vibrate([20, 10, 30]);
        //         }
        //         vibrationRun2Flag = true;
        //     }
        // } else if (beta < -5) {
        //     vibrationRun2Flag = false;
        // }

    }, false);



    window.addEventListener('devicemotion', function (e) {

        var az = e.acceleration.z

        //Spinning right
        if (az > 15) {
            if (!functionRunFlag) {
                if (navigator.userAgent.match(/(Android)/i)) {
                    //20ms振動、10ms止める、20ms振動、
                    window.navigator.vibrate([30]);
                }
                playerRotate(1);
                functionRunFlag = true;
            }
        } else if (az <= 1 || az >= -1) {
            functionRunFlag = false;
        }

    }, false);




} else {
    //コンピュータ

    document.addEventListener("keydown", (event) => {

        if (event.keyCode === 37) { //Left
            playerMove(-1);
        } else if (event.keyCode === 39) { //Right
            playerMove(1);
        } else if (event.keyCode === 40) { //Down
            playerDrop();
        } else if (event.keyCode === 81) { //Spinning left
            playerRotate(-1);
        } else if (event.keyCode === 69) { //Spinning right
            playerRotate(1);
        }
    });
}


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

    const scoreEl = document.querySelector('.game-over-score .current');
    const highScoreEl = document.querySelector('.game-over-score .high');

    //ハイスコアの更新
    highScore = Math.max(player.score, highScore);
    localStorage.setItem('high-score', highScore);

    scoreEl.innerHTML = `score ${player.score}`;
    highScoreEl.innerHTML = `🏆${highScore}`;


    gameOverEl.classList.remove('hide');
}

playAgainBtn.addEventListener('click', restartGame);
function restartGame() {


    arena.forEach((row) => row.fill(0));
    player.score = 0;
    updateScore();
    console.log("gameover");

    gameOverEl.classList.add('hide');

}


