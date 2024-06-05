$(function(){
    //nav
   $(".nav>ul>li").mouseover(function(){
    $(this).children(".sub").stop().fadeIn()
   })
   $(".nav>ul>li").mouseout(function(){
    $(this).children(".sub").stop().fadeOut()
   })

    slide
    function slide(){
        $(".slide ul").animate({left:"-100%"},1000,function(){
            $(".slide ul").append($(".slide ul li").first())
            $(".slide ul").css({left:"0"})
        })
    }
    setInterval(slide,2000)
})