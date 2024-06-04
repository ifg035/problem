$(function(){
    //nav
    $(".nav>ul>li").mouseover(function(){
        $(".sub,.bg").stop().slideDown();
    })
    $(".nav>ul>li").mouseout(function(){
        $(".sub,.bg").stop().slideUp()
    })

    //popup
    $(".pp").click(function(){
        $(".popup").show()
    })
    $("button").click(function(){
        $(".popup").hide()
    })

    //slide
    function slide(){

        $(".slide ul").animate({Left:"-1200px"},1000,function(){
            $(".slide ul").append($(".slide ul li").first());
            $(".slide ul").css({Left:0});
        })
    }
    setInterval(slide,3000)
})