
$(document).ready(function(){
    let ww=$(window).width();
    let wh=$(window).height();
    let st=$(this).scrollTop();
    let sh=$(".cont").height();
    
    layout();
    slide_fun();
    
    
    //스크롤이벤트
    $(window).scroll(function(){
        st=$(this).scrollTop();
        sh=$(".cont").height();

        if(ww>=960){
            if(st>sh && st<sh*2){
                $(".cont_plus_in").slideDown(700);
            }else if(st>sh*2 && st<sh*3){
                $(".cont_1_title").animate({
                    right:"2%"
                },1000)
            }else if(st>sh*3 && st<sh*4){
                $(".t50").stop().animate({
                    top:"0"
                },500,function(){
                    $(".cont_2_text").fadeIn(700);
                    $(".func_text").fadeIn(700);
                })
                $(".t50_1").stop().animate({
                    top:"0"
                },1000)
            }else if(st>sh*5 && st<sh*6){
                $(".cont_4_in").slideDown(1000);
            }
        }else if(ww<960){
            if(st>sh/2 && st<(sh*2)/2){
                $(".cont_plus_text").slideDown(700);
            }else if(st>(sh*2)/2 && st<(sh*3)/2){
                $(".cont_1_title").animate({
                    right:"2%"
                },1000)
            }else if(st>(sh*3)/2 && st<(sh*4)/2){
                $(".t50").stop().animate({
                    top:"0"
                },500,function(){
                    $(".cont_2_text").fadeIn(700);
                    $(".func_text").fadeIn(700);
                })
                $(".t50_1").stop().animate({
                    top:"0"
                },1000)
            }else if(st>(sh*5)/1.2 && st<(sh*6)/1.2){
                $(".cont_4_mo_hide").slideDown(1000);
            }
            
        }
    })

    //레이아웃 사이즈
    function layout(){
        ww=$(window).width();
        wh=$(window).height();
        sw=$(".slide").width();

        $(".wrap").css({
            width:ww,
        })
        $(".main_header").css({
            width:ww,
            height:(ww/2)*0.2
        })
        $(".header_in").css({
            width:ww,
            height:(ww/2)*0.1
        })
        $(".main_banner").css({
            width:ww,
            height:ww/2
        })
        $(".content").css({
            width:ww,
        })
        $(".cont_wrap").css({
            width:ww,
        })
        $(".cont").css({
            width:ww,
            height:ww/2
        })
        $(".cont_5").css({
            width:ww,
            height:(ww/2)*0.5
        })
        $(".main_footer").css({
            width:ww,
            height:(ww/2)*0.3
        })
        $(".map_bg").css({
            width:ww,
            height:ww/1.8
        })
        $(".slide").css({
            width:ww/1.8
        })
        $(".slide_box").css({
            width:(ww/1.8)*6
        })

        if(ww<960){
            $(".slide_box").css({
                width:sw*6
            })
            $(".header_in").css({
                width:ww,
                height:(ww/2)*0.1
            })
            $(".hamburger_menu_wrap").css({
                height:wh
            })
            $(".cont").css({
                width:ww,
                height:ww*1.1
            })
            $(".cont_5").css({
                width:ww,
                height:ww/2
            })
            $(".map_bg").css({
                 width:ww,
                height:ww/1.2
            })
            $(".main_footer").css({
                width:ww,
                height:(ww/2)*0.5
            })

        }
        
        
    }
    
    $(window).resize(function(){
        layout();
    })
    


    
    //슬라이드 클릭이벤트
    function slide_fun(){
        $(".slide_text").eq(0).addClass("op");
        $(".slide_img").eq(0).addClass("big");
        $(".slide_img").eq(0).addClass("op");

            $(".right").click(function(){
                sw=$(".slide").width();
                ww=$(window).width();

                //if(ww>=960){
                    $(".slide_text").eq(0).removeClass("op");
                    $(".slide_img").eq(0).removeClass("big");
                    $(".slide_img").eq(0).removeClass("op");
            
                    $(".slide_box").animate({
                        left:-sw
                    },1000,function(){
                        $(".slide").eq(0).appendTo(".slide_box");
                        $(".slide_box").css({
                            left:0
                        })
                        $(".slide_text").eq(0).addClass("op");
                        $(".slide_img").eq(0).addClass("big");
                        $(".slide_img").eq(0).addClass("op");
            
                    })
                    $(".right").hover(function(){
                        $(this).addClass("op");
                    },function(){
                        $(this).removeClass("op");
                    }) 
                //}
                // else if(sw<960){
                //     sw_m=$(".slide").width();
                //     wh=$(window).height();

                //     //alert(sw_m);
                //     $(".slide_box").css({
                //         width:sw*6
                //     })
                //     $(".header_in").css({
                //         width:ww,
                //         height:(ww/2)*0.1
                //     })
                //     $(".hamburger_menu_wrap").css({
                //         height:wh
                //     })
                //     $(".cont").css({
                //         width:ww,
                //         height:ww*1.1
                //     })
                //     $(".cont_5").css({
                //         width:ww,
                //         height:ww/2
                //     })
                //     $(".map_bg").css({
                //         width:ww,
                //         height:ww/1.2
                //     })
                //     $(".main_footer").css({
                //         width:ww,
                //         height:(ww/2)*0.5
                //     })
                //     $(".slide_text").eq(0).removeClass("op");
                //     $(".slide_img").eq(0).removeClass("big");
                //     $(".slide_img").eq(0).removeClass("op");
            
                //     $(".slide_box").animate({
                //         left:-sw_m
                //     },1000,function(){
                //         $(".slide").eq(0).appendTo(".slide_box");
                //         $(".slide_box").css({
                //             left:0
                //         })
                //         $(".slide_text").eq(0).addClass("op");
                //         $(".slide_img").eq(0).addClass("big");
                //         $(".slide_img").eq(0).addClass("op");
                //     })
                // }

            })
      
    }
    
    //mo 메뉴와프 클릭이벤트

    $(".hamburger").click(function(){
        $(".hamburger_menu_wrap").fadeToggle();
    })
    
    //슬라이드 자동재생
    let auto_slide=setInterval(function(){
        $(".right").trigger("click");
    },4000)

   

    
})