// $(function () {
//   /**
//    * header__menu 実装
//    * 背景透過
//    * navメニュー表示
//    */
//   $(".header__btn").click(function () {
//     $(".header__btn").toggleClass("active");
//     $(".header__nav").toggleClass("active");
//     $(".header__bg").toggleClass("active");
//   });

//   //navメニューをクリックしたらheader__menuのactiveクラスを解除する処理
//   $('a[href^="#"]').on("click", function () {
//     $(".header__btn").removeClass("active");
//     $(".header__nav").removeClass("active");
//     $(".header__bg").removeClass("active");

//     const href = $(this).attr("href");
//     const target = $(href == "#" || href == "" ? "html" : href);
//     const position = target.offset().top;
//     let speed = 500;
//     $("html , body").animate({ scrollTop: position }, speed, "swing");
//     return false;
//   });

//   //topへ戻るボタン実装
//   const topPage = $(".topPage");
//   topPage.hide();
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 80) {
//       topPage.fadeIn();
//     } else {
//       topPage.fadeOut();
//     }
//   });
//   topPage.click(function () {
//     $("body , html").animate({ scrollTop: 0 }, 500);
//     return false;
//   });

//   //アコーディオンメニュー実装
//   $(".js-qa").click(function () {
//     $(this).next().slideToggle(200);
//     $(this).find("span").toggleClass("active");
//   });

//   $(window).scroll(function () {
//     let pageHeight = $(document).innerHeight();
//     let windowHeight = $(window).innerHeight();
//     let pageBottom = pageHeight - windowHeight;
//     let ad = $('.ad');
//     ad.hide();
//     if (pageBottom <= $(window).scrollTop()) {
//         ad.fadeOut();
//     } else {
//         ad.fadeIn();
//     }
//   });
// });

jQuery(function(){

    const hamberger_btn = $(".hamberger");
    hamberger_btn.on("click" , () => {
        hamberger_btn.toggleClass('is-active');
        $('.header__nav').toggleClass('is-active');
    })

    stage = new createjs.Stage("myCanvas");

// パーティクルシステム作成します。
    particleSystem = new particlejs.ParticleSystem();

    // パーティクルシステムの描画コンテナーを表示リストに登録します。
    stage.addChild(particleSystem.container);

    particleSystem.importFromJson(
        {
            "bgColor": "#000000",
            "width": 20,
            "height": 5000,
            "emitFrequency": "200",
            "startX": 160.77808886134562,
            "startXVariance": "128",
            "startY": 334.77363936270956,
            "startYVariance": "148",
            "initialDirection": "49",
            "initialDirectionVariance": "360",
            "initialSpeed": "3.8",
            "initialSpeedVariance": "7.4",
            "friction": "0.063",
            "accelerationSpeed": "0.142",
            "accelerationDirection": "275.8",
            "startScale": "0.93",
            "startScaleVariance": "1",
            "finishScale": "0",
            "finishScaleVariance": "0",
            "lifeSpan": "136",
            "lifeSpanVariance": "27",
            "startAlpha": "1",
            "startAlphaVariance": "0",
            "finishAlpha": "0",
            "finishAlphaVariance": 0.5,
            "shapeIdList": [
                "blur_circle"
            ],
            "startColor": {
                "hue": "17",
                "hueVariance": "32",
                "saturation": "91",
                "saturationVariance": 0,
                "luminance": "56",
                "luminanceVariance": "16"
            },
            "blendMode": true,
            "alphaCurveType": "1",
            "VERSION": "1.0.0"
        }

    );

    createjs.Ticker.framerate = 60;
    // 定期的に呼ばれる関数を登録
    createjs.Ticker.on("tick", handleTick);

    function handleTick() {
        // パーティクルの発生・更新
        particleSystem.update();
      
        // 描画を更新する
        stage.update();
      }

});

