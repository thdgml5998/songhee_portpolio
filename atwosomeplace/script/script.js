$(document).ready(function(){
    //2차메뉴
    $(".in_menu").hover(function(){
        $(".sub_menu",this).stop().slideDown(500);
    },function(){
        $(".sub_menu",this).stop().slideUp(500);
    })


    // 배너슬라이드자동재생

    let banner_slide=$(".b_slide").width();
    let auto=setInterval(function(){
        $(".ba_slide").animate({
            left:-banner_slide
        },7000,function(){
            $(".b_slide").eq(0).appendTo(".ba_slide");
            $(".ba_slide").css({
                left:0
            })
        })
    },7000)








    let click_num=0;
    let img_length=$(".de_img_box").length-4;
    let move_width=-$(".de_img_box").width();

    

    $(".left_but").click(function(){
        click_num--;
        if(click_num<=0){
            click_num=0;  
        }
        $(".de_slide_move").animate({
            left:move_width*click_num
        },1000)   
    })
    $(".right_but").click(function(){
        click_num++;
        if(click_num>img_length){
            click_num=img_length;
        }
        $(".de_slide_move").animate({
            left:move_width*click_num
        },1000) 
    })


    $(".img_box").hover(function(){
        $(".outimg_box,.img_box").css({
            animationPlayState: "paused"
        })
    },function(){
        $(".outimg_box,.img_box").css({
            animationPlayState: ""
        })
    })
    
    
    
    
})