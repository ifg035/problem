$(function(){
    //nav
    $(".nav>ul>li").mouseover(function(){
        $(this).children(".sub").stop().slideDown()
    })
    $(".nav>ul>li").mouseout(function(){
        $(this).children(".sub").stop().slideUp()
    })

    //slide
    // function slide(){
    //     $(".slide>ul").animate({left:"-100%"},1000,function(){
    //         $(".slide>ul").append($(".slide>ul>li").first())
    //         $(".slide>ul").css({left:"0"})
    //     })  
    // }
    // setInterval(slide,2000)

    //popup
    $(".pp").click(function(){
        $(".popup").show()
    })
    $("button").click(function(){
        $(".popup").hide()
    })
})