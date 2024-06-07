$(function(){
    //nav
    $(".nav>ul>li").mouseover(function(){
        $(this).children(".sub").stop().slideDown()
    })
    $(".nav>ul>li").mouseout(function(){
        $(this).children(".sub").stop().slideUp()
    })

    //slide
    var t=0;

    function slide(){
        if(t<2){
            t++;
        }else{
            t=0;
        }

        $(".slide ul li").fadeIn()
        $(".slide ul li").eq(t).fadeOut()
    }
    setInterval (slide,2000)

    //popup
    $(".pp").click(function(){
        $(".popup").show();
    })
    $("button").click(function(){
        $(".popup").hide();
    })

})