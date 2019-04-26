// $("html").css("fontSize",$(window).width() * 0.13333333333333333);
// $(window).on("resize",function(){
//     $("html").css("fontSize",$(window).width() * 0.13333333333333333);
// });

var strUrl = window.location.pathname;
var arrUrl = strUrl.split("/");
var strPage = arrUrl[arrUrl.length-1];
// 导航条控制
var third = sessionStorage.getItem("third");
var second = sessionStorage.getItem("second");
var first = sessionStorage.getItem("first");
var page = sessionStorage.getItem("page");

if(page == strPage){
    sessionStorage.removeItem("third");
    sessionStorage.removeItem("second");
    sessionStorage.removeItem("first");
    sessionStorage.removeItem("page");
    $(".pageNav .navBtn").addClass("current");
    if(first != "null"){
        $(".pageNav .firstNav").addClass("current");
        $(".pageNav .firstNav > li:eq("+first+") > a").addClass("action");
        if(second != "null"){
            $(".pageNav .firstNav > li:eq("+first+") > .secondNav > li:eq("+second+") > a").addClass("action");
            if(third != "null"){
            }
        }
    }
}

$(".pageNav .firstNav li a").on("click",function(){

    if($(this).hasClass('action')){
        $(this).removeClass('action');
        return;
    }else{
        var thirdIdx = null;
        var secondIdx = null;
        var firstIdx = null;

        if($(this).parents(".thirdNav").length != 0){
            thirdIdx  = $(this).parent().index();
            secondIdx = $(this).parent().parent().index();
            firstIdx  = $(this).parent().parent().parent().parent().index();
        }else if($(this).parents(".secondNav").length != 0){
            secondIdx = $(this).parent().index();
            firstIdx  = $(this).parent().parent().parent().index();
        }else{
            firstIdx  = $(this).parent().index();
        };
        sessionStorage.setItem("third",thirdIdx);
        sessionStorage.setItem("second",secondIdx);
        sessionStorage.setItem("first",firstIdx);
        sessionStorage.setItem("page",strPage);
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
var timer = null;
$(".scrollTop").on("click",function(){
    if(/UC/g.test(navigator.userAgent)){
        if(timer){
            clearInterval(timer);
        };
        var scrollAmont = $(document).scrollTop();
        var i = 1;
        timer = setInterval(function(){
            i++;
            var move = scrollAmont / 50;
            $(document).scrollTop(scrollAmont - move * i);
            if($(document).scrollTop() <= 0){
                clearInterval(timer);
            };
        },10);
    }else{
        $("html").stop().animate({"scrollTop":0},500);
    }
});