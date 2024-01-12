$(document).ready(function(){
    layout();

    const tab_plus=document.querySelector('.tab_plus');
    const click_m=document.querySelector('.click_m');
    const mo_show_1=document.querySelector('.mo_show_1');
    const mo_show_2=document.querySelector('.mo_show_2');
    const quick=document.querySelector('.quick');
    
    //리사이즈///////////////////////////////////////////////////
    window.addEventListener('resize',()=>{
        history.go(0);
        layout();
        
        const wrap_w=parseInt(getComputedStyle(document.querySelector('.wrap')).width);
        

        if(wrap_w>=1200){
            tab_plus.style.display="none";
            document.querySelector('footer').after(click_m);
            document.querySelector('footer').after(mo_show_1);
            document.querySelector('footer').after(mo_show_2);
            document.querySelector('footer').after(quick);
        }else if(wrap_w<1200){
            tab_plus.style.display="flex";
            tab_plus.appendChild(click_m);
            tab_plus.appendChild(mo_show_1);
            tab_plus.appendChild(mo_show_2);
            tab_plus.appendChild(quick);
        }
    })

    


    

    //2차메뉴//////////////////////////////////////////////////////
    $(".main_menu").hover(function(){
        $(".sub_menu").stop().slideDown(500);
    },function(){
        $(".sub_menu").stop().slideUp(500);
    })

    //자동배너/////////////////////////////////////////////////////
    $(".img_box").hide().first().show();
    
    let auto=setInterval(function(){
        $(".img_box").eq(0).fadeOut(2500);
        $(".img_box").eq(1).fadeIn(2500);
        $(".img_box").eq(0).appendTo(".slide");
    },4000)


    //오른쪽버튼 클릭 자동슬라이드/////////////////////////////////////
    side_move_1=setInterval(function(){
        cont_1_1_right_slide();
    },5000)
    side_move_2=setInterval(function(){
        cont_1_2_right_slide();
    },5000)
    side_move_3=setInterval(function(){
        cont_2_1_right_slide();
    },5000)

    
    
    //행사 및 체험/////////////////////////////////////////////////////
    //오른쪽버튼
    $(".cont_1_right_but_1").click(function(){
        cont_1_1_right_slide();
    })
    //왼쪽버튼
    $(".cont_1_left_but_1").click(function(){
        cont_1_1_left_slide();
    })
    //화살표 버튼 마우스 호버
    //hover_src(".cont_1_left_but_1",".cont_1_right_but_1",side_move_1,cont_1_1_right_slide());
    //hover_left(".cont_1_left_but_1",side_move_1,cont_1_1_right_slide());
    //hover_right(".cont_1_right_but_1",side_move_1,cont_1_1_right_slide());

    $(".cont_1_left_but_1").mouseenter(function(){
        clearInterval(side_move_1);
        $("img",this).attr({
            src:"./img/left_but_after.png"
        })
    })
    $(".cont_1_left_but_1").mouseleave(function(){
        side_move_1=setInterval(function(){
            cont_1_1_right_slide();
        },5000)
        $("img",this).attr({
            src:"img/left_but_black.png"
        })
    })

    $(".cont_1_right_but_1").mouseenter(function(){
        clearInterval(side_move_1);
        $("img",this).attr({
            src:"./img/right_but_after.png"
        })
    })
    $(".cont_1_right_but_1").mouseleave(function(){
        side_move_1=setInterval(function(){
            cont_1_1_right_slide();
        },5000)
        $("img",this).attr({
            src:"img/right_but_black.png"
        })
    })


    //명소 베스트12/////////////////////////////////////////////////////
    //오른쪽버튼
    $(".cont_1_right_but_2").click(function(){
        cont_1_2_right_slide();
    })
    //왼쪽버튼
    $(".cont_1_left_but_2").click(function(){
        cont_1_2_left_slide();
    })
    //화살표 버튼 마우스 호버
    //hover_src(".cont_1_left_but_2",".cont_1_right_but_2",side_move_2,cont_1_2_right_slide());
    $(".cont_1_left_but_2").mouseenter(function(){
        clearInterval(side_move_2);
        $("img",this).attr({
            src:"./img/left_but_after.png"
        })
    })
    $(".cont_1_left_but_2").mouseleave(function(){
        side_move_2=setInterval(function(){
            cont_1_2_right_slide();
        },5000)
        $("img",this).attr({
            src:"img/left_but_black.png"
        })
    })

    $(".cont_1_right_but_2").mouseenter(function(){
        clearInterval(side_move_2);
        $("img",this).attr({
            src:"./img/right_but_after.png"
        })
    })
    $(".cont_1_right_but_2").mouseleave(function(){
        side_move_2=setInterval(function(){
            cont_1_2_right_slide();
        },5000)
        $("img",this).attr({
            src:"img/right_but_black.png"
        })
    })

    

    //어린이 놀이공간/////////////////////////////////////////////////////
    //오른쪽버튼
    $(".cont_2_right_but_1").click(function(){
        cont_2_1_right_slide();
    })
    //왼쪽버튼
    $(".cont_2_left_but_1").click(function(){
        cont_2_1_left_slide();
    })
    //화살표 버튼 마우스 호버
    //hover_src(".cont_2_left_but_1",".cont_2_right_but_1",side_move_3,cont_2_1_right_slide());
    $(".cont_2_left_but_1").mouseenter(function(){
        clearInterval(side_move_3);
        $("img",this).attr({
            src:"./img/left_but_after.png"
        })
    })
    $(".cont_2_left_but_1").mouseleave(function(){
        side_move_3=setInterval(function(){
            cont_2_1_right_slide();
        },5000)
        $("img",this).attr({
            src:"img/left_but_black.png"
        })
    })

    $(".cont_2_right_but_1").mouseenter(function(){
        clearInterval(side_move_3);
        $("img",this).attr({
            src:"./img/right_but_after.png"
        })
    })
    $(".cont_2_right_but_1").mouseleave(function(){
        side_move_3=setInterval(function(){
            cont_2_1_right_slide();
        },5000)
        $("img",this).attr({
            src:"img/right_but_black.png"
        })
    })


    
    // 왼쪽지도/////////////////////////////////////////////////////
    $(".click_m").css({
        display:"none"
    })
    $(".click_m").click(function(){
        $(".map_in").fadeToggle(500);
    })
    $(".close").click(function(){
        $(".map_in").css({
            display:"none"
        })
    })
    
    //스크롤시 지도랑 퀵메뉴 나타남//////////////////////////////////////
    $(window).scroll(function(){
        ww=$(window).width();
        let st=$("html,body").scrollTop();
        let header_h=$(".main_header").height();
        let banner_h=$(".banner").height();
        let map_show_h=header_h+banner_h;

        if(st>=map_show_h){
            $(".click_m").stop().fadeIn(200);
            $(".quick").stop().fadeIn(200)
            $(".top_baro").stop().fadeIn(200)
        }else{
            $(".click_m").stop().fadeOut(200);
            $(".quick").stop().fadeOut(200)
            $(".top_baro").stop().fadeOut(200)
        }
    })

    
    //고객센터,대관문의 마우스이벤트(pc에서만 구동)/////////////////////////
    $(".call_center").on({
        'mouseenter':function(){
        ww=$(window).width();
        if(ww>=1200){
            $(".call_in").animate({
                height:50
            },200)
        }else{
            $(".call_in").css({
                height:'100%'
            })
        }
    },
    'mouseleave':function(){
        ww=$(window).width();
        if(ww>=1200){
            $(".call_in").animate({
                height:0
            },200)
        }else{
            $(".call_in").css({
                height:'100%'
            })
        }
     }
    })

    $(".hiring").on({
        'mouseenter':function(){
        ww=$(window).width();
        if(ww>=1200){
            $(".hi_in").animate({
                height:50
            },200)
        }else{
            $(".hi_in").css({
                height:'100%'
            })
        }
    },
    'mouseleave':function(){
        ww=$(window).width();
        if(ww>=1200){
            $(".hi_in").animate({
                height:0
            },200)
        }else{
            $(".hi_in").css({
                height:'100%'
            })
        }
     }
    })


    //왼쪽지도 탭메뉴/////////////////////////////////////////////////////
    $(".side_map").hide().eq(0).show();
    $(".map_but").eq(0).css({
        borderTop: "2px solid #eeba00",
        color:"#eeba00"
    })


    $(".map_but").click(function(){
        let in_num=$(this).index();
        $(".map_but").css({
            borderTop: "1px solid #333333",
            color:"#333333"
        })
        $(this).css({
            borderTop: "2px solid #eeba00",
            color:"#eeba00"
        })
        $(".side_map").css({
            display:"none"
        })
        $(".side_map").eq(in_num).css({
            display:"block"
        })
    })

    // 오른쪽 퀵메뉴/////////////////////////////////////////////////////
    $(".top_baro").click(function(){
        $("html,body").stop().animate({
            scrollTop:0
        },500)
    })


    //팝업////////////////////////////////////////////////////////////
    //팝업 자동슬라이드
    let pop_move=setInterval(slide_auto,5000);

    

    
    //팝업 내 일시정지,재생 버튼클릭 이벤트///////////////////////////////
    $(".pop_up_slide .play_but").click(function(){
        play(".pop_up_slide .play_but",".pop_up_slide .stop_but");
    })
    $(".pop_up_slide .stop_but").click(function(){
        stop(".pop_up_slide .stop_but",".pop_up_slide .play_but");
    })

    
    // //일시정지 
    function play(a,b){
        clearInterval(pop_move); 
        $(a).css({
            display:"none"
        })
        $(b).css({
            display:"block"
        })
    }
    //재생 
    function stop(a,b){
        $(a).css({
            display:"none"
        })
        $(b).css({
            display:"block"
        })
        pop_move=setInterval(slide_auto,5000);
    }

    //팝업 내 호버 이벤트///////////////////////////////////////////////
    // 팝업 왼쪽,오른쪽 버튼에 마우스올리면 자동재생 멈추고 벗어나면 움직여
    $(".p_but").mouseenter(function(){
        clearInterval(pop_move);
    })
    $(".p_but").mouseleave(function(){
        pop_move=setInterval(slide_auto,5000);
    })

    // 팝업 왼쪽, 오른쪽 마우스 올려서 멈췄을때 클릭하면 좌우로 움직이는거
    $(".p_right_but").click(function(){
        slide_auto(".pop_move_box",".pop_img_box");
    })
    $(".p_left_but").click(function(){
        slide_pop_left(".pop_img_box",".pop_move_box");
    })


    //패밀리사이트 바로가기
    $("#gosite").click(function(){
        let address = $("#familySite option:selected").attr("value");  
        window.open(address, "_blank");   
    });



    //모바일메뉴클릭/////////////////////////////////////////////////////
    $(".m_menu_bg").click(function(){
        $(".m_menu_in").slideDown(500);
    })
    $(".m_top_menu").click(function(){
        $(".m_sub_menu",this).slideToggle(500);
    })
    $(".m_top_menu").mouseenter(function(){
        $(this).css({
            background:"#ffffff"
        })
    })
    $(".m_top_menu").mouseleave(function(){
        $(this).css({
            background:"none"
        })
    })
    $(".menu_close").click(function(){
        $(".m_menu_in").fadeOut(500);
    })



})






// ////함수모음///////////////////////////////////////

    //전체 레이아웃 함수
    function layout(){
        ww=$(window).width();
        

        $('.wrap').css({
            width:ww
        })
        $('.w_width').css({
            width:'100%'
        })
        $('.header_inner').css({
            display:'block'
        })
        $('header').css({
            height:ww*0.09
        })
        $('.banner').css({
            height:ww*0.41
        })
        $('.inner').css({
            height:ww
        })
        $('.cont_1').css({
            height:ww*0.3
        })
        $('.left_cont').css({
            height:'100%'
        })
        $('.right_cont').css({
            height:'100%'
        })
        $('.cont_2').css({
            height:ww*0.18
        })
        $('.cont_3').css({
            height:ww*0.18
        })
        $('.pop_up_slide').css({
            height:ww*0.09
        })
        $('footer').css({
            height:ww*0.15
        })
        $('.m_menu').css({
            display:'none'
        })
        $('.tab_plus').css({
            display:'none'
        })
        $('.mo_show').css({
            display:'none'
        })
        $('.quick_hide').css({
            height:0
        })
        
        if(ww<1200 && ww>=960){
            $('.tab_plus').css({
                display:'flex',
                height:ww*0.12
            })
            $('.quick').css({
                display:'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignContent: 'center'
            })
            $('.quick_hide').css({
                height:'100%'
            })
            $('.wrap').css({
                width:ww
            })
            $('.w_width').css({
                width:'100%'
            })
            $('.header_inner').css({
                display:'block'
            })
            $('header').css({
                height:ww*0.09
            })
            $('.banner').css({
                height:ww*0.41
            })
            $('.inner').css({
                height:ww*1.2
            })
            $('.cont_1').css({
                height:ww*0.4
            })
            $('.cont_2').css({
                height:ww*0.23
            })
            $('.cont_3').css({
                height:ww*0.18
            })
            $('.left_cont').css({
                height:'100%'
            })
            $('.right_cont').css({
                height:'100%'
            })
            $('.pop_up_slide').css({
                height:ww*0.13
            })
            $('footer').css({
                height:ww*0.15
            })
            $('.m_menu').css({
                display:'none'
            })
            $('.mo_show').css({
                display:'block'
            })
            $('.click_m').appendTo('.tab_plus');
            $('.mo_show_1').appendTo('.tab_plus');
            $('.mo_show_2').appendTo('.tab_plus');
            $('.quick').appendTo('.tab_plus');

            
        }
        else if(ww<960){
            $('.tab_plus').css({
                display:'flex',
                height:ww*0.12
            })
            $('.quick').css({
                display:'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignContent: 'center'
            })
            $('.quick_hide').css({
                height:'100%'
            })
            $('.inner').css({
                height:ww*4.3
            })
            $('header').css({
                height:ww*0.1
            })
            $('.header_inner').css({
                display:'none'
            })
            $('.cont_1').css({
                height:ww*1.4
            })
            $('.cont_1_in').css({
                height:ww*0.7
            })
            $('.mo_height').css({
                height:ww*0.4
            })
            $('.cont_2').css({
                height:ww
            })
            $('.cont_2_in').css({
                height:ww*0.45
            })
            $('.cont_3').css({
                height:ww*1.2
            })
            $('.cont_3_in').css({
                height:ww*0.5
            })
            $('.pop_up_slide').css({
                height:ww*0.15
            })
            $('.tab_plus').css({
                display: 'flex',
                height:ww*0.12
            })
            $('.m_menu').css({
                display:'block'
            })
            $('.mo_show').css({
                display:'block'
            })
            $('.click_m').appendTo('.tab_plus');
            $('.mo_show_1').appendTo('.tab_plus');
            $('.mo_show_2').appendTo('.tab_plus');
            $('.quick').appendTo('.tab_plus');
        }

    }

    //자동슬라이드 좌우버튼
    //오른쪽버튼 클릭시
   
    function slide_right(width,move,box){
        let l_width=$(width).width();
        $(move).animate({
            left:-l_width
        },2000,function(){
            $(box).eq(0).appendTo(move);
            $(move).css({
                left:0
            })
        })
        
    }
    //왼쪽버튼 클릭시
    function slide_left(width,box,move){
        let l_width=$(width).width();
        $(box).eq(length-1).prependTo(move);
        $(move).css({
            left:-l_width
        })
        $(move).animate({
            left:0
        },2000)
    }

    // 좌우 슬라이드 함수
    // 행사 및 체험 오른쪽버튼
    let num_1 = 1;
    function cont_1_1_right_slide(){
        num_1++;
        if(num_1>$(".l_box_1_1").length){
            num_1=1;
        }
        $(".change_n_1").text(num_1);
        //클릭시 text_box 숫자 페이지랑 같이 변화하는거 
        slide_right(".l_box_1",".left_1_1",".l_box_1_1");
        slide_right(".l_box_1",".left_1_2",".l_box_1_2");
        
    }
    // 행사 및 체험 왼쪽쪽버튼
    function cont_1_1_left_slide(){
        num_1--;
        if(num_1<=0){
            num_1=$(".l_box_1_1").length;
        }
        $(".change_n_1").text(num_1);
        slide_left(".l_box_1",".l_box_1_1",".left_1_1");
        slide_left(".l_box_1",".l_box_1_2",".left_1_2");
    }


    // 명소 오른쪽버튼
    let num_2 = 1;
    function cont_1_2_right_slide(){
        num_2 ++;
        if(num_2>$(".r_box_1_1").length){
            num_2=1;
        }
        $(".change_n_2").text(num_2);
        if($(".change_n_2").text().length>=2){
            $(".zero").css({
                display:"none"
            })
        }else{
            $(".zero").css({
                display:"inline"
            })
        }
        //한자리 숫자면 앞에 0을 붙인다

        slide_right(".r_box_1",".right_1_1",".r_box_1_1");
        slide_right(".r_box_1",".right_1_2",".r_box_1_2");
    }
    // 명소 왼쪽버튼
    function cont_1_2_left_slide(){
        num_2 --;
        if(num_2<=0){
            num_2=$(".r_box_1_1").length;
        }
        $(".change_n_2").text(num_2);
        if($(".change_n_2").text().length==2){
            $(".zero").css({
                display:"none"
            })
        }else{
            $(".zero").css({
                display:"inline"
            })
        }
        slide_left(".r_box_1",".r_box_1_1",".right_1_1");
        slide_left(".r_box_1",".r_box_1_2",".right_1_2");
    }


    // 어린이 오른쪽버튼
    let num_3 = 1;
    function cont_2_1_right_slide(){
        num_3++;
        if(num_3>$(".l_box_2_1").length){
            num_3=1;
        }
        $(".change_n_3").text(num_3);
        if($(".change_n_3").text().length>=2){
            $(".zero").css({
                display:"none"
            })
        }else{
            $(".zero").css({
                display:"inline"
            })
        }
        slide_right(".l_box_2",".left_2_1",".l_box_2_1");
        slide_right(".l_box_2",".left_2_2",".l_box_2_2");
    }
    // 어린이 왼쪽버튼
    function cont_2_1_left_slide(){
        num_3--;
        if(num_3<=0){
            num_3=$(".l_box_2_1").length;
        }
        $(".change_n_3").text(num_3);
        if($(".change_n_3").text().length>=2){
            $(".zero").css({
                display:"none"
            })
        }else{
            $(".zero").css({
                display:"inline"
            })
        }
        slide_left(".l_box_2",".l_box_2_1",".left_2_1");
        slide_left(".l_box_2",".l_box_2_2",".left_2_2");
    }

    

    //화살표 버튼에 마우스 호버시 멈추고 이미지 속성 바뀌는 함수
    // function hover_src(left_button,right_button,stop_moving,slide_moving){
    //     $(left_button).mouseenter(function(){
    //         clearInterval(stop_moving);
    //         $("img",this).attr({
    //             src:"./img/left_but_after.png"
    //         })
    //     })
    //     $(left_button).mouseleave(function(){
    //         stop_moving=setInterval(function(){
    //             slide_moving;
    //         },5000)
    //         $("img",this).attr({
    //             src:"img/left_but_black.png"
    //         })
    //     })
            
        
    //     $(right_button).mouseenter(function(){
    //         clearInterval(stop_moving);
    //         $("img",this).attr({
    //             src:"./img/right_but_after.png"
    //         })
    //     })
    //     $(right_button).mouseleave(function(){
    //         stop_moving=setInterval(function(){
    //             slide_moving;
    //         },5000)
    //         $("img",this).attr({
    //             src:"img/right_but_black.png"
    //         })
    //     })
            
        
    // }


    function hover_left(left_button,stop_moving,slide_moving){
        $(left_button).mouseenter(function(){
            clearInterval(stop_moving);
            $("img",this).attr({
                src:"./img/left_but_after.png"
            })
        })
        $(left_button).mouseleave(function(){
            stop_moving=setInterval(function(){
                slide_moving;
            },5000)
            $("img",this).attr({
                src:"img/left_but_black.png"
            })
        })
    }

    function hover_right(right_button,stop_moving,slide_moving){
        $(right_button).mouseenter(function(){
            clearInterval(stop_moving);
            $("img",this).attr({
                src:"./img/right_but_after.png"
            })
        })
        $(right_button).mouseleave(function(){
            stop_moving=setInterval(function(){
                slide_moving;
            },5000)
            $("img",this).attr({
                src:"img/right_but_black.png"
            })
        })
    }

    //팝업 오른쪽버튼클릭시 움직임
    function slide_auto(){
        let img_w=$(".pop_img_box").width();
        $(".pop_move_box").animate({
            left:-img_w
        },2000,function(){
            $(".pop_img_box").eq(0).appendTo(".pop_move_box");
            $(".pop_move_box").css({
                left:0
            })
        })
    }
    //왼쪽버튼클릭시 움직임
    function slide_pop_left(box,move){
        $(box).eq(length-1).prependTo(move);
        $(move).css({
            left:-$(box).width()
        })
        $(move).animate({
            left:0
        },2000)
    }

    // //일시정지 
    // function play(a,b){
    //     clearInterval(pop_move); 
    //     $(a).css({
    //         display:"none"
    //     })
    //     $(b).css({
    //         display:"block"
    //     })
    // }
    // //재생 
    // function stop(a,b){
    //     $(a).css({
    //         display:"none"
    //     })
    //     $(b).css({
    //         display:"block"
    //     })
    //     pop_move=setInterval(slide_auto,5000);
    // }