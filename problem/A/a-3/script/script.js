$(function(){
    //메뉴 하나씩 dispay:inline-block!!
    $(".nav>ul>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown()
    })
    $(".nav>ul>li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp()
    })

    //탭메뉴
    $(".tabmenu>li").click(function(){
        $(".tabmenu>li").removeClass("on");
        $(this).addClass("on");

        var i =$(this).index()

        console.log(i) 

        $(".tabcon").hide()
        $(".tabcon").eq(i).show()
    })

    //팝업

    $(".ct").click(function(){
        $(".popup").show()
    })
    
    $("button").click(function(){
        $(".popup").hide()
    })

    //슬라이드
    
})