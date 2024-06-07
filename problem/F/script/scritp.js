$(function(){
    //nav
    $(".nav>ul>li").mouseover(function(){
        $(this).children(".sub").stop().slideDown()
    })
    $(".nav>ul>li").mouseout(function(){
        $(this).children(".sub").stop().slideUp()
    })

    //slide
    

    //popup
    $(".pp").click(function(){
        $(".popup").show();
    })
    $("button").click(function(){
        $(".popup").hide();
    })

})