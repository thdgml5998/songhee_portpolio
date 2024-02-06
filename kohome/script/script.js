$(document).ready(function(){
    layout();

    window.addEventListener("resize",()=>{
        layout();


    })

    // 2차메뉴
    $(".top_menu").mouseenter(function(){
        $(".sub_menu",this).stop().slideDown(500);
    })
    $(".top_menu").mouseleave(function(){
        $(".sub_menu",this).stop().slideUp(500);
    })

    //모바일 메뉴
    $(".mo_menu").click(function(){
        $(".mo_hide_menu").css({
            width:"100%",
            display:"block"
        })
    })
    
    $(".mo_sub_menu").hide().first().show();
    $(".mo_top_menu").first().css({
        background:"pink"
    })
    $(".mo_bottom_menu").mouseenter(function(){
        $(this).css({
            borderBottom: "2px solid #99cc33",
            boxSizing: "border-box"
        })
    })
    $(".mo_bottom_menu").mouseleave(function(){
        $(this).css({
            borderBottom: "none"
        })
    })

    $(".mo_top_menu").click(function(){
        $(".mo_top_menu").css({
            background:"#e0e0e0"
        })
        $(this).css({
            background:"pink"
        })
        $(".mo_sub_menu").hide();
        $(".mo_sub_menu",this).show();
    })

    $(".mo_menu_close").click(function(){
        $(".mo_hide_menu").css({
            display:"none"
        })
    })




    //배너 스와이퍼
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        grabCursor:true,
        speed:2000,
        autoplay:{
            delete:1000,
            disableOnInteraction:true
        },
        navigation: {
            nextEl: '.swiper-button-next', 
            prevEl: '.swiper-button-prev'
        }
    })

    //지사찾기 이동
    $("#gobranch").click(function(){
        let address = $("#branch_office option:selected").attr("value");  
        window.open(address, "_blank");   
    });
    $(".search_btn").click(function(){
        let address = $(this).attr("value");  
        window.open(address, "_blank");   
    });



    //하단 자동 슬라이드배너
    let auto_slide=setInterval(function(){
        slide_width=$(".slide").width();
        $(".slide_wrap").animate({
            left:-slide_width
        },5000,function(){
            $(".slide").eq(0).appendTo(".slide_wrap");
            $(".slide_wrap").css({
                left:0
            })
        })
    })

    //패밀리사이트 바로가기
    $("#gosite").click(function(){
        let address = $("#familySite option:selected").attr("value");  
        window.open(address, "_blank");   
    });




    function layout(){
        ww=$(window).width();

        $(".wrap").css({
            width:ww
        })
        $(".w_width").css({
            width:"100%"
        })
        $(".main_header").css({
            height:ww*0.05
        })
        $(".side_box").css({
            top:ww*0.05+ww*0.03+70
        })
        $(".cont_top").css({
            height:ww*0.03
        })
        $(".cont_1").css({
            height:ww*0.35
        })
        $(".cont_2").css({
            height:ww*0.16
        })
        $(".swiper").css({
            marginLeft:0
        })
        $(".cont_3").css({
            height:ww*0.15
        })
        $(".cont_4").css({
            height:ww*0.15
        })


        $(".sub_banner").css({
            height:ww*0.05
        })
        $(".main_footer").css({
            height:ww*0.1
        })

        $(".mo_wrap").css({
            display:"none"
        })
    
        
        


        if(ww<1200 && ww>=860){
            $(".side_box").css({
                top:0,
                height:ww*0.2
            })
            $(".cont_1").css({
                height:ww*0.5
            })
            $(".cont_2").css({
                height:ww*0.2
            })
            $(".cont_3").css({
                height:ww*0.2
            })
            $(".cont_4").css({
                height:ww*0.2
            })
        }else if(ww<860){
            $(".wrap").css({
                display:"none"
            })
            $(".mo_wrap").css({
                display:"block",
                width:ww
            })
            $(".main_header").css({
                height:"9vh"
            })
            $(".mo_hide_menu").css({
                top:0,
                left:0,
                height:"100vh"
            })
            $(".cont_top").css({
                height:ww*0.1
            })
            $(".cont_1").css({
                height:ww*0.65
            })
            $(".cont_2").css({
                height:ww*0.2
            })
            $(".cont_3").css({
                height:ww*0.25
            })
            $(".cont_4").css({
                height:ww*1.5
            })
            $(".cont_5").css({
                height:ww*0.4
            })
            $(".cont_6").css({
                height:ww*0.4
            })
            $(".cont_7").css({
                height:ww*0.5
            })
            $(".cont_8").css({
                height:ww*0.5
            })
            $(".side_box").css({
                height:ww*0.4
            })
            $(".main_footer").css({
                height:ww*0.3
            })
        }
    }




















})