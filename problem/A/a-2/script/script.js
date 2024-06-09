$(function(){
    //nav
    $(".nav>ul>li").mouseover(function(){
        $(".sub,.bg").stop().slideDown();

        $(".nav>ul>li").mouseout(function(){
            $(".sub,.bg").stop().slideUp();
        })
    })

    //tab
    $(".tabmenu > li").click(function(){
        $(".tabmenu > li").removeClass("on");
        $(this).addClass("on")

        i = $(this).index()

        $(".tabcon").hide()
        $(".tabcon").eq(i).show()
    })

    //slide
    function slide(){
        $(".slide ul").animate({left:"-1200px"},1000,function(){
            $(".slide ul").append($(".slide ul li").first())
            $(".slide ul").css({left:"0"})
        })

    }
    setInterval(slide,3000)
    
    //popup
    $(".pp").click(function(){
        $(".popup").show()

        $(".popup button").click(function(){
            $(".popup").hide()
        })
    })
})