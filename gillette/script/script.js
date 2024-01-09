$(document).ready(function(){
    
    $(".con_wrap_2").hover(function(){
        $(".tx_1").stop().slideDown(500);
    },function(){
        $(".tx_1").stop().slideUp(500);
    })

    $(".con_wrap_3").hover(function(){
        $(".tx_2").stop().slideDown(500);
    },function(){
        $(".tx_2").stop().slideUp(500);
    })

    $(".con_wrap_4").hover(function(){
        $(".tx_3").stop().slideDown(500);
    },function(){
        $(".tx_3").stop().slideUp(500);
    })



    $(".hj_box1").hover(function(){
        $(".te_xt1").stop().fadeIn(500)
        $(this).css({
            boxSizing: "border-box",
            border: "10px solid #00FF41"
        })
    },function(){
        $(".te_xt1").stop().fadeOut(500)
        $(this).css({
            boxSizing: "none",
            border: "none"
        })
    })
    $(".hj_box2").hover(function(){
        $(".te_xt2").stop().fadeIn(500)
        $(this).css({
            boxSizing: "border-box",
            border: "10px solid #00FF41"
        })
    },function(){
        $(".te_xt2").stop().fadeOut(500)
        $(this).css({
            boxSizing: "none",
            border: "none"
        })
    })
    $(".hj_box3").hover(function(){
        $(".te_xt3").stop().fadeIn(500)
        $(this).css({
            boxSizing: "border-box",
            border: "10px solid #00FF41"
        })
    },function(){
        $(".te_xt3").stop().fadeOut(500)
        $(this).css({
            boxSizing: "none",
            border: "none"
        })
    })
    $(".hj_box4").hover(function(){
        $(".te_xt4").stop().fadeIn(500)
        $(this).css({
            boxSizing: "border-box",
            border: "10px solid #00FF41"
        })
    },function(){
        $(".te_xt4").stop().fadeOut(500)
        $(this).css({
            boxSizing: "none",
            border: "none"
        })
    })


}) 
