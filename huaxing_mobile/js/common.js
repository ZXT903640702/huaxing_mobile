// $("html").css("fontSize",$(window).width() * 0.13333333333333333);
// $(window).on("resize",function(){
//     $("html").css("fontSize",$(window).width() * 0.13333333333333333);
// });

// 导航条控制
$(".pageNav .firstNav li a").on("click",function(){
    if($(this).hasClass('action')){
        $(this).removeClass('action');
        return;
    };
    $(this).parent().siblings().find("a").removeClass("action");
    $(this).addClass("action");
});
$(".pageNav .header .navBtn").on("click",function(){
    if($(this).hasClass('current')){
        $(this).removeClass('current');
        $(".pageNav .firstNav").removeClass("current");
    return;
    };
    $(this).addClass("current");
    $(".pageNav .firstNav").addClass("current");
});

//回到顶部
$(".scrollTop").on("click",function(){
    $("html").stop().animate({"scrollTop":0},500);
});