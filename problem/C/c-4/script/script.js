$(function(){
    //nav
    // $(".nav>ul>li").mouseover(function(){
    //     $(".nav>ul>li>ul").stop().slideDown();
    // })
    // $(".nav>ul>li").mouseout(function(){
    //     $(".nav>ul>li>ul").stop().slideUp();
    // })


    //slide
    function slide(){
        $(".slide ul").animate({left:"-1200px"},1000,function(){
            $(".slide ul").append($(".slide ul li").first())
            $(".slide ul").css({left:"0"})
        })
    }
    setInterval(slide,2000)
})