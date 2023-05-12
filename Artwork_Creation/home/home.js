if (navigator.serviceWorker) {
    navigator.serviceWorker.register('PWA/manifest.json')
}

$(function () {
    $('#js-slider-3').slick({
        autoplay: true,//自動でスライドさせる
        autoplaySpeed: 3000,//次の画像に切り替えるまでの時間 今回の場合は0
        swipe: true,//スワイプ禁止
        arrows: true, // 前・次のボタンを表示する
        dots: true, // ドットナビゲーションを表示する
        appendDots: $('.dots-3'), // ドットナビゲーションの生成位置を変更
        speed: 1000, // スライドさせるスピード（ミリ秒）
        slidesToShow: 1, // 表示させるスライド数
        centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
        variableWidth: true, // スライド幅の自動計算を無効化

    });
});

$(function () {
    $('#js-imgslider1').slick({
        autoplay: true,//自動でスライドさせる
        autoplaySpeed: 3000,//次の画像に切り替えるまでの時間 今回の場合は0
        swipe: true,//スワイプ禁止
        arrows: true, // 前・次のボタンを表示する
        dots: true, // ドットナビゲーションを表示する
        appendDots: $('.dots-3'), // ドットナビゲーションの生成位置を変更
        speed: 1000, // スライドさせるスピード（ミリ秒）
        slidesToShow: 1, // 表示させるスライド数
        centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
        variableWidth: true, // スライド幅の自動計算を無効化

    });
});

$(function () {
    $('#js-imgslider2').slick({
        autoplay: true,//自動でスライドさせる
        autoplaySpeed: 3000,//次の画像に切り替えるまでの時間 今回の場合は0
        swipe: true,//スワイプ禁止
        arrows: true, // 前・次のボタンを表示する
        dots: true, // ドットナビゲーションを表示する
        appendDots: $('.dots-3'), // ドットナビゲーションの生成位置を変更
        speed: 1000, // スライドさせるスピード（ミリ秒）
        slidesToShow: 1, // 表示させるスライド数
        centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
        variableWidth: true, // スライド幅の自動計算を無効化

    });
});

$(function () {
    $('#js-imgslider3').slick({
        autoplay: true,//自動でスライドさせる
        autoplaySpeed: 3000,//次の画像に切り替えるまでの時間 今回の場合は0
        swipe: true,//スワイプ禁止
        arrows: true, // 前・次のボタンを表示する
        dots: true, // ドットナビゲーションを表示する
        appendDots: $('.dots-3'), // ドットナビゲーションの生成位置を変更
        speed: 1000, // スライドさせるスピード（ミリ秒）
        slidesToShow: 1, // 表示させるスライド数
        centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
        variableWidth: true, // スライド幅の自動計算を無効化

    });
});



/*
        autoplay: true,//自動でスライドさせる
        autoplaySpeed: 6000,//次の画像に切り替えるまでの時間 今回の場合は0
        speed: 1000,//画像が切り替わるまでの時間 今回の場合は難病で1枚分動くか
        cssEase: 'ease',//動きの種類は等速に
        arrows:false,//左右に出る矢印を非表示
        swipe: true,//スワイプ禁止
        pauseOnFocus: false,//フォーカスが合っても止めない
        pauseOnHover: false,//hoverしても止めない
        centerMode: false,//一枚目を中心に表示させる
        initialSlide: 1,//最初に表示させる要素の番号を指定
        variableWidth: true,//スライドの要素の幅をcssで設定できるようにする 
        dots:true,//ドットインジケーターを表示
        focusOnSelect:true,//クリックした要素に移動
*/

document.getElementById("playsnake-lv.1").addEventListener("click", function () {
    // window.open('../snake_lv.2_js/snake.html');
    location = '../snake_lv.1_js/snake.html'
}, false);

document.getElementById("playsnake-lv.2").addEventListener("click", function () {
    // window.open('../snake_lv.2_js/snake.html');
    location = '../snake_lv.2_js/snake.html'
}, false);

document.getElementById("playsnake-lv.3").addEventListener("click", function () {
    // window.open('../snake_lv.2_js/snake.html');
    location = '../snake_lv.3_js/snake.html'
}, false);

document.getElementById("playsnake-lv.4").addEventListener("click", function () {
    // window.open('../snake_lv.2_js/snake.html');
    location = '../snake_lv.4_js/snake.html'
}, false);


document.getElementById("playhockey-easy").addEventListener("click", function () {
    // window.open('../JS-ballgame-easy/index.html');
    location = '../JS-ballgame-easy/index.html'
}, false);

document.getElementById("playhockey-normal").addEventListener("click", function () {
    // window.open('../JS-ballgame-easy/index.html');
    location = '../JS-ballgame-normal/index.html'
}, false);

document.getElementById("playhockey-hard").addEventListener("click", function () {
    // window.open('../JS-ballgame-easy/index.html');
    location = '../JS-ballgame-hard/index.html'
}, false);

document.getElementById("playhockey-bakemon").addEventListener("click", function () {
    // window.open('../JS-ballgame-easy/index.html');
    location = '../JS-ballgame-bakemon/index.html'
}, false);





document.getElementById("playtetris-easy").addEventListener("click", function () {
    // window.open('../tetris-pro2_js/index.html');
    location = '../tetris-pro1_js/index.html'
}, false);

document.getElementById("playtetris-normal").addEventListener("click", function () {
    // window.open('../tetris-pro2_js/index.html');
    location = '../tetris-pro2_js/index.html'
}, false);

document.getElementById("playtetris-hard").addEventListener("click", function () {
    // window.open('../tetris-pro2_js/index.html');
    location = '../tetris-pro3_js/index.html'
}, false);

document.getElementById("playtetris-bakemon").addEventListener("click", function () {
    // window.open('../tetris-pro2_js/index.html');
    location = '../tetris-pro4_js/index.html'
}, false);


// ゲームパッド版のテトリス
document.getElementById("playtetris-easy-gamepad").addEventListener("click", function () {
    location = '../tetris-pro1-gamepad_js/index.html'
}, false);

document.getElementById("playtetris-normal-gamepad").addEventListener("click", function () {
    location = '../tetris-pro2-gamepad_js/index.html'
}, false);

document.getElementById("playtetris-hard-gamepad").addEventListener("click", function () {
    location = '../tetris-pro3-gamepad_js/index.html'
}, false);

document.getElementById("playtetris-bakemon-gamepad").addEventListener("click", function () {
    location = '../tetris-pro4-gamepad_js/index.html'
}, false);



document.getElementById("idsnake").addEventListener("click", function () {
    window.scroll({ top: 470, behavior: 'smooth' });
}, false);

document.getElementById("idtennis").addEventListener("click", function () {
    window.scroll({ top: 1900, behavior: 'smooth' });
}, false);

document.getElementById("idtetris").addEventListener("click", function () {
    window.scroll({ top: 3200, behavior: 'smooth' });
}, false);