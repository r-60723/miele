$(function () {
  /*=================================================
  productsのスライダー
  ===================================================*/

  $(".slider").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });

  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  // ハンバーガーメニューのクリックイベント
  $(".toggle_btn").on("click", function () {
    // #headerにopenクラスが存在する場合
    if ($("#header").hasClass("open")) {
      // openクラスを削除
      // openクラスを削除すると、openクラスのCSSがはずれるため、
      // メニューが非表示になる
      $("#header").removeClass("open");

      // #headerにopenクラスが存在しない場合
    } else {
      // openクラスを追加
      // openクラスを追加すると、openクラスのCSSが適応されるため、
      // メニューが表示される
      $("#header").addClass("open");
    }
  });

  // メニューが表示されている時に画面をクリックした場合
  $("#mask").on("click", function () {
    // openクラスを削除して、メニューを閉じる
    $("#header").removeClass("open");
  });
  /*=================================================
  ふわっと出てくる fadein  （blogのところ）
  ===================================================*/
  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
  /*=================================================
    to shopボタンをメインビジュアル過ぎたら表示
    ===================================================*/
  $(window).scroll(function() {
    // スクロール位置を取得
    let scroll = $(window).scrollTop();
// スクロール位置が600pxを超えた場合かつ横幅がレスポンシブ以上の時
    if (scroll > 600 && $(window).width() >= 768) {
      // ロゴとハンバーガ―メニュをfadeInで表示する 1秒で
      $('.buy').fadeIn(1000).css("opacity", "1");
      
    // スクロール位置が600px未満の場合
    } else {
      // ロゴとハンバーガ―メニュをfadeOutで非表示にする
      $('.buy').fadeOut(1000);
    }
  });
  /*=================================================
  イラストを横からふわっと slidein
  ===================================================*/
  // 右から出るイラスト
  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".slidein1").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateX(0)");
      }
    });
  });
  // 左から出るイラスト
  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".slidein2").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateX(0)");
      }
    });
  });
  /*=================================================
  スムーススクロール 
  ===================================================*/
  // ページ内のリンク（例headerのnavの）aタグをクリックした時に動作する
  $('a[href^="#"]').click(function () {
    // クリックしたaタグのリンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // ページトップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
    // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position }, 1000, "swing");

    // urlが変化しないようにfalseを返す
    return false; 
  });


/*=================================================
  ハンバーガーメニュー
  ===================================================*/


// ハンバーガーメニューのクリックイベント（ノーマルパターン）
$(".toggle_btn").on("click", function () {
  // headerにopenクラスが存在する場合
  if ($(".header").hasClass("open")) {
    // openクラスを削除
    // openクラスを削除すると、openクラスのCSSがはずれるため、
    // メニューが非表示になる
    $(".header").removeClass("open");

    // headerにopenクラスが存在しない場合
  } else {
    // openクラスを追加
    // openクラスを追加すると、openクラスのCSSが適応されるため、
    // メニューが表示される
    $(".header").addClass("open");
  }
});


// メニューが表示されている時にクリックした場合(全パターン書く！)
// ①navをクリックしたとき
$('nav').on('click', function() {
  // openクラスを削除して、メニューを閉じる
  $('.header').removeClass('open');
  
});
// ②navのリンクをクリックしたとき

$('nav a').on('click', function() {
  // openクラスを削除して、メニューを閉じる
  $('.header').removeClass('open');
  
});
// ③maskをクリックしたとき

$('.mask').on('click', function() {
  // openクラスを削除して、メニューを閉じる
  $('.header').removeClass('open');
  
});



// メインビジュアルの部分

let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);







});
