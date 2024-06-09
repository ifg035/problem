$(function(){
    //slide
    function slide(){
            $("#slide ul").animate({top:"-350px"},1000,function(){
                $("#slide ul").append($("#slide ul li").first())
                $("#slide ul").css({top:0})
        })
    }   
    setInterval(slide,2000)

    //nav
    $(".nav>ul>li").mouseover(function(){
        $(this).children(".sub").stop().slideDown();
    })
    $(".nav>ul>li").mouseout(function(){
        $(this).children(".sub").stop().slideUp();
    })

    //tab
    $(".tabmenu>li").click(function(){
        $(".tabmenu>li").removeClass("on");
        $(this).addClass("on");

        var i =$(this).index();

        console.log(i)

        $(".tabcon").hide();
        $(".tabcon").eq(i).show();
    })
})