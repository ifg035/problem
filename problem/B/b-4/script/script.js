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

    //slide //좌 -> 우
    function slide(){
        // $("#slide ul").animate({left:"-1200px"},1000,function(){
        //     $("#slide ul").append($("#slide ul li").first());
        //     $("#slide ul").css({left:0})
        // })

        //위아래
        $("#slide ul").animate({top:"-300px"},1000,function(){
            $("#slide ul").append($("#slide ul li").first());
            $("#slide ul").css({top:0})
        })
    }
    setInterval(slide,2000)
})