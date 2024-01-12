$(document).ready(function(){
    layout();

    window.addEventListener("resize",()=>{
        history.go(0);
        layout();
    })

    // 2차메뉴
    $(".top_menu").mouseenter(function(){
        $(".sub_menu",this).stop().slideDown(500);
    })
    $(".top_menu").mouseleave(function(){
        $(".sub_menu",this).stop().slideUp(500);
    })

    //배너 스와이퍼
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
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
    
        
        


        if(ww<1200 && ww>=860){

        }else if(ww<860){

        }
    }




















})