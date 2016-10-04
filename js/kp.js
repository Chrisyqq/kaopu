/**
 * 
 * Created by Chris on 16/10/3.
 */
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
