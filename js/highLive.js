
$(function(){
    var myVideo = document.getElementsByTagName('video')[0];   //获取视频video
    $('#dowebok').fullpage({
        'verticalCentered': false,
        'anchors': ['page1', 'page2', 'page3', 'page4','page5','page6','page7'],
        'menu': '#menu',
        'navigation': true,
        'navigationPosition': 'right',
        'css3': true,
        'navigationTooltips': ['HOME', 'FEATURES', 'FEATURES', 'DARE TO DREAM','DARE TO DREAM', 'CONTACT', ''],

        'afterLoad': function(anchorLink, index){
            //禁止视频暂停
            if (myVideo.paused) {
                myVideo.play();
            }
            // if(index == 2){
            //      $('.section2-right').addClass('active');
            // }
            $('.section2-right').toggleClass('active', index == 2);
            $('.section3-title').toggleClass('active', index == 3);
            $('.section4-title').toggleClass('active', index == 4);
            $('.section4-txt').toggleClass('active', index == 4);
            $('.section5-title').toggleClass('active', index == 5);
            $('.section5-txt').toggleClass('active', index == 5);

        },
    });

//单击进入下一页
    $('.pub-arrow').on('click', function (e) {
        $.fn.fullpage.moveSectionDown()
    });
//获取随机数
    function randNumber(min, max) {
        return parseInt(Math.random() * (max - min + 1) + min)
    }
//随机图片放大
    setInterval(function() {
        (function() {
            randres = randNumber(0, 11);

            if(randres <= 5){
                var img = $(".section4-content-left li:eq("+randres+")>img")
            }
            else{
                var img = $(".section4-content-right li:eq("+(randres-6)+")>img")
            }
            img.addClass("active-img");
            setTimeout(function() {
                img.removeClass("active-img")
            }, 1000)
        })()
    }, 1000);

});


