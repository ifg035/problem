$(function(){
    $(".nav>ul>li").mouseover(function(){
        $(".sub, .bg").stop().slideDown()
    })
    $(".nav>ul>li").mouseout(function(){
        $(".sub, .bg").stop().slideUp()
    })
})