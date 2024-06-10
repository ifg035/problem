$(function(){
    //nav
    $(".nav>ul>li").mouseover(function(){
        $(".sub,.bg").stop().fadeIn();
    })
    $(".nav>ul>li").mouseout(function(){
        $(".sub,.bg").stop().fadeOut();
    })

    //slide

    var t =0
    function slide(){
        if(t<2){
            t++;
        }else{
            t=0;
        }
        $(".slide>ul>li").fadeOut();
        $(".slide>ul>li").eq(t).fadeIn();
    }
    setInterval (slide,2000)

    //tabmenu
    $(".tabmenu>li").click(function(){
        $(".tabmenu>li").removeClass("on");
        $(this).addClass("on");

        var i = $(this).index()

        console.log(i)

        $(".tabcon").hide()
        $(".tabcon").eq(i).show()
    })

    //popup
    $(".pp").click(function(){
        $(".popup").show()
    })
    $("button").click(function(){
        $(".popup").hide()
    })
})