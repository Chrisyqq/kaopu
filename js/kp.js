/**
 * 
 * Created by Chris on 16/10/3.
 */
//search js
(function () {
    $('.kp-search-address').mousedown(function (e) {
        $('.kp-search-address').addClass('kp-search-address-active');
        e.stopPropagation();
    });
    $('.chose-road div').click(function () {
        $('.kp-search-address').addClass('kp-search-address-active');
        $('.chose-road div').removeClass('active');
        $(this).addClass('active');
    });
    $('body').mousedown(function () {
        $('.kp-search-address').removeClass('kp-search-address-active');
    });
})();
//hover js
(function () {
    var hoverLeft=$('.title-hover').css('left');
    $('.kp-road-title .title-sun').mouseenter(function () {
        var num=$(".kp-road-title .title-sun").index(this)*140;
        $('.title-hover').css('left',num);
    });
    $('.kp-road-title .title-sun').mouseleave(function () {
        $('.title-hover').css('left',hoverLeft)
    });
    $('.kp-road-title .title-sun').click(function () {
        var num=$(".kp-road-title .title-sun").index(this)*140;
        var no=$(".kp-road-title .title-sun").index(this);
        $('.kp-road-title .title-sun').css({color:'gray'});
        $(this).css({'color':'#333'});
        $('.title-hover').css({'left':num});
        hoverLeft=num;
        $('.kp-road .sun').css('display','none');
        $('.kp-road .sun').eq(no).css('display','block');
    })
})();
// car hover
(function () {
    $('.kp-road-car .car-list').mouseenter(function () {
        $(this).addClass('hover-car');
    });
    $('.kp-road-car .car-list').mouseleave(function () {
        $(this).removeClass('hover-car');
    })
})();

//detail
(function () {
    $('.news-list-detail-head div').click(function () {
        $('.news-list-detail-head div').removeClass('detail-head-active');
        $(this).addClass('detail-head-active');
        $('.news-list-detail-body .news').css('display','none');
        $('.news-list-detail-body .news').eq($('.news-list-detail-head div').index(this)).css('display','block')
    })
})();
