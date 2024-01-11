$(document).ready(function(){
    let sct=0;
    let ww=$(window).width();

    layout();

    
    $(window).resize(function(){
        layout();
        //$(window).scrollTop(0);
        $('html,body').animate({
            scrollTop:0
        })
        sct=0;
        // =>리사이즈되면 스크롤을 첫번째 페이지
        // 최상위로 이동시키고 sct값을 초기화하기
        //=>시작 스크롤값(이전)
        $(".under_big_line").animate({
            height:0
        })
        // =>첫번째 페이지 박스 밑에 라인
    })


    //스크롤이벤트
    $(window).scroll(function(){
        //layout();
        st=$(this).scrollTop();
       
        //=>스크롤시 변경되는 값(이후)
        sh=$(".main_cont").height();
        //=>전체 부모 > sticky 부모 > 애니메이션 적용 객체
        sh_1=$(".scr_h_1").height();
        //=>sticky 부모 중 첫번째
        sh_2=$(".scr_h_2").height();
        //=>sticky 부모 중 두번째
        sh_3=$(".scr_h_3").height();
        //=>sticky 부모 중 세번째
        sh_4=$(".scr_h_4").height();
        //=>sticky 부모 중 네번째
        sh_12=sh_1+sh_2;
        //=>sticky 부모 중 첫번째+sticky 부모 중 두번째
        //=>세번째 페이지 시작값
        sh_123=sh_1+sh_2+sh_3;
        //=>네번째 페이지 시작값
        sh_1234=sh_1+sh_2+sh_3+sh_4;
        //=>네번째 페이지 끝값


        wrap_h=$(".wrap").height();
        //=>전체 부모의 높이값
        ww=$(window).width();

        // 모바일
        m_sh_1=$(".m_cont_1").height();
        m_sh_2=$(".m_cont_2").height();
        m_sh_3=$(".m_cont_3").height();
        m_sh_4=$(".m_cont_4").height();
        m_sh_12=m_sh_1+m_sh_2;
        m_sh_123=m_sh_1+m_sh_2+m_sh_3;
        m_sh_1234=m_sh_1+m_sh_2+m_sh_3+m_sh_4;

        

        if(ww>=1200){
            if(sct<=st){
                d='down';
                if(st>=0 && st<sh_1){
                    // 현재 스크롤값이 초기값 0보다 크고
                    // 두번째페이지의 시작값(첫번째 페이지의 높이값)
                    // 보다 작으면
                    // =>첫번째 페이지 영역
                    if(st==0){
                        box_x(0);  
                        //x축기준 박스 rotate 30씩
                    } 
                    else if(st==100){  
                        box_x(1);   
                    }
                    else if(st==200){ 
                        box_x(2); 
                    }
                    else if(st==300){  
                        box_x(3);
                        $(".power_move").fadeOut(500);
                        $(".under_big_line").delay(500).animate({
                            height:350
                        },500,function(){
                            $("html,body").animate({
                                scrollTop:1400
                            },1000)
                            back_lines(".p_top_line,.p_bottom_line");
                            //다음페이지 배경라인 생성 animate
                        })
                    }else{
                        $(".power_move").css({
                            display:"block"
                        })
                        //=>power박스 나오기
                    }
                } 
    
                if(st>=sh_1 && st<sh_12){
                    //=>두번째 페이지 일때
                    $(".click_menu").fadeIn(500);
                    //=>왼쪽 숨김메뉴 보이기
                    menu_light(0);
                    menu_off(1);
                    menu_off(2);
                    //=>첫번째 profile 메뉴 밝게
                    
                    if(st==1500){
                        move_lines(50);
                        $(".p_top_big_line").animate({
                            height:150
                        },1000,function(){
                            $(".cls-1").css({
                                strokeDashoffset:0
                            })
                            $(".con_1").delay(300).fadeIn(500);
                            //첫번째소개페이지 보이기
                        })
                    }
                    
                    else if(st==1600){
                        $(".con_1").fadeOut(500);
                        $(".con_2").fadeIn(500);  
                        //첫번째 소개페이지 사라지고 두번째 소개페이지보이기
                    }
                    else if(st==1700){
                        $(".p_bottom_big_line").animate({
                            height:150
                        },1000,function(){
                            $("html,body").animate({
                                scrollTop:2700
                            },1000)
                            back_lines(".a_top_line,.a_bottom_line");
                        })
                        move_lines(0);
                    }
                }
                
                if(st>=2700 && st<sh_123){
                    //=>세번째 페이지
                    menu_off(0);
                    menu_off(2);
                    menu_light(1);
                    //=>art work 밝게
                    $(".more_btn").css({
                        display:"none"
                    }); 
                    //=>더보기 안보이게
                    if(st==2800){
                        move_lines(50);
                        $(".a_top_big_line").animate({
                            height:150
                        },1000,function(){
                            $(".work").animate({
                                height:400
                            },1000,function(){
                                $(".work_info_line").fadeIn(500);
                                $(".work_title").eq(0).fadeIn(500);
                                info_in(0);
                                
                            })
                            box_y(0);
                        })
                        
                        
                    }
                    else if(st==2900){
                        box_y(1);
                        info_reset(1);
                    }
                    else if(st==3000){
                        box_y(2);
                        info_reset(2);                   
                    }
                    else if(st==3100){
                        box_y(3);
                        info_reset(3);                   
                    }
                    else if(st==3200){
                        box_y(4);
                        info_reset(0);     
                        $(".more_btn").fadeIn(500);               
                    }
                    else if(st==3300){
                        $(".a_bottom_big_line").animate({
                            height:150
                        },1000,function(){
                            $("html,body").animate({
                                scrollTop:4300
                            },1000)
                            back_lines(".c_top_line,.c_bottom_line");
                        })
                        move_lines(0);
                    }else{
                        $(".more_btn").css({
                            display:"none"
                        }); 
                    }
                }

                if(st>=sh_123 && st<sh_1234){
                    //=>네번째 페이지
                    $(".contact_top_big_line").animate({
                        height:200
                    },1000)
                    menu_off(0);
                    menu_off(1);
                    menu_light(2);

                    if(st==4400){
                        move_lines(50);
                        $(".contact_con").animate({
                            height:"50%"
                        },500,function(){
                            $(".star").css({
                                display:"block"
                            })
                        })
                        $(".copy").delay(500).fadeIn(1000);                    
                    }
                }
                sct=st;
            }
            else if(sct>st){
                d='up';
                if(st>=0 && st<sh_1){
                    //=>첫번째페이지
                    if(st==0){
                        box_x(0);  
                    }
                    else if(st==100){   
                        box_x(1);   
                    }
                    else if(st==200){
                        box_x(2);
                        h_zero(".under_big_line");
                        //h_zero : 높이 0으로 animate 1000초
                        $(".power_move").fadeIn(500);
                    }
                } 
        
                if(st>=sh_1 && st<sh_12){
                    //=>두번째 페이지 일때
                    menu_light(0);
                    menu_off(1);
                    menu_off(2);
                    
                    if(st==1400){
                        $(".con_1").fadeOut(500);
                        $(".cls-1").css({
                            strokeDashoffset:-2300
                        })
                        move_lines(0);
                        $(".click_menu").fadeOut(500);
                        h_zero(".p_top_line,.p_bottom_line");
                        h_zero(".p_top_big_line");
                        $("html,body").delay(500).animate({
                            scrollTop:200
                        },1000)
                    }
                    else if(st==1500){
                        $(".p_top_big_line").animate({
                            height:150
                        },1000,function(){
                            $(".cls-1").css({
                                strokeDashoffset:0
                            })
                        })
                        $(".con_2").fadeOut(500);
                        $(".con_1").fadeIn(500); 
                        move_lines(50);
                    }
                }
                    
                if(st>=2700 && st<sh_123){
                    //=>세번째 페이지 일때
                    menu_off(0);
                    menu_off(2);
                    menu_light(1);
                    $(".more_btn").css({
                        display:"none"
                    })
                    if(st>=2700 && st<2800){
                        h_zero(".a_top_big_line,.work");
                        move_lines(0);
                        $(".work_info_line").fadeOut(500);
                        info_hide();
                        h_zero(".a_top_line,.a_bottom_line");
                        $("html,body").delay(500).animate({
                            scrollTop:1600
                        },1000,function(){
                            h_zero(".p_bottom_big_line");
                        })
                    }
                    if(st==2800){
                        info_reset(0);
                        move_lines(50);
                        $(".a_top_big_line").animate({
                            height:150
                        },1000,function(){
                            $(".work").animate({
                                height:400
                            },1000,function(){
                                $(".work_info_line").fadeIn(500);
                                $(".work_title").eq(0).fadeIn(500);
                            })
                            box_y(0);
                        })
                    }
                    else if(st==2900){
                        box_y(1);
                        info_reset(1);
                    }
                    else if(st==3000){
                        box_y(2);
                        info_reset(2);                  
                    }
                    else if(st==3100){
                        box_y(3);
                        info_reset(3);                    
                    }
                    else if(st==3200){
                        box_y(4);
                        info_reset(0);
                        $(".more_btn").fadeIn(500);  
                        h_zero(".a_bottom_big_line");  
                        move_lines(50);
                    }
                }

                if(st>=4300 && st<sh_1234){
                    //=>네번째 페이지
                    menu_off(0);
                    menu_off(1);
                    menu_light(2);
                    
                    if(st==4300){
                        move_lines(0);
                        h_zero(".contact_top_big_line");
                        h_zero(".c_top_line,.c_bottom_line");
                        $("html,body").delay(500).animate({
                            scrollTop:3200
                            //마지막 시디즈소개위치
                        },1000)  
                    }
                    else if(st>4400){
                        $(".star").css({
                            display:"none"
                        })
                        h_zero(".contact_con");
                        $(".copy").fadeOut(500);  
                        $("html,body").delay(500).scrollTop(4300);     
                    }
                }
                sct=st;
            }
        }
        else if(ww<1200 && ww>=960){
            
            if(sct<=st){
                d='down';
                
                if(st>=0 && st<sh_1){
                    if(st==0){
                        box_x(0);   
                    }
                    else if(st==100){   
                        box_x(1);  
                    }
                    else if(st==200){
                        box_x(2);
                    }
                    else if(st==300){
                        box_x(3);
                        $(".power_move").fadeOut(500);
                        $(".under_big_line").delay(500).animate({
                            height:"100%"
                        },500,function(){
                            $("html,body").animate({
                                scrollTop:1300
                            },1000)
                            back_lines(".p_top_line,.p_bottom_line");
                        })
                    }else{
                        $(".power_move").css({
                            display:"block"
                        })
                    }
                } 
                if(st>=sh_1 && st<sh_12){
                    $(".click_menu").fadeIn(500);
                    menu_light(0);
                    menu_off(1);
                    menu_off(2);
    
                    if(st==1500){
                        move_lines(25);
                        $(".p_top_big_line").animate({
                            height:150
                        },1000,function(){
                            $(".cls-1").css({
                                strokeDashoffset:0
                            })
                            $(".won").css({
                                backgroundColor:"black"
                            })
                            $(".con_1").delay(300).fadeIn(500);
                        })
                    }
                    else if(st==1600){
                        $(".con_1").fadeOut(500);
                        $(".con_2").fadeIn(500);  
                    }
                    else if(st==1700){
                        $(".p_bottom_big_line").animate({
                            height:150
                        },1000,function(){
                            $("html,body").animate({
                                scrollTop:2700
                            },1000)
                            back_lines(".a_top_line,.a_bottom_line");
                        })
                        move_lines(0);
                    }
                }
                    
                if(st>=2700 && st<sh_123){
                    menu_off(0);
                    menu_off(2);
                    menu_light(1);
                    $(".more_btn").css({
                        display:"none"
                    }); 
                        
                    if(st==2800){
                        move_lines(25);
                        $(".a_top_big_line").animate({
                            height:150
                        },1000,function(){
                            $(".work").animate({
                                height:300
                            },1000,function(){
                                $(".work_info_line").fadeIn(500);
                                info_in(0);
                            })
                            box_y(0);
                        })
                    }
                    else if(st==2900){
                        box_y(1);
                        info_reset(1);
                    }
                    else if(st==3000){
                        box_y(2);
                        info_reset(2);                   
                    }
                    else if(st==3100){
                        box_y(3);
                        info_reset(3);                   
                    }
                    else if(st==3200){
                        box_y(4);
                        info_reset(0);                  
                        $(".more_btn").fadeIn(500);  
                    }
                    else if(st==3300){
                        $(".a_bottom_big_line").animate({
                            height:150
                        },1000,function(){
                            $("html,body").animate({
                                scrollTop:4300
                            },1000)
                            back_lines(".c_top_line,.c_bottom_line");
                        })
                        move_lines(0);
                    }else{
                        $(".more_btn").css({
                            display:"none"
                        })
                    }
                }
    
                if(st>=sh_123 && st<sh_1234){
                    $(".contact_top_big_line").animate({
                        height:150
                    },1000)
                    menu_off(0);
                    menu_off(1);
                    menu_light(2);
    
                    if(st==4400){
                        move_lines(25);
                        $(".star").css({
                            display:"block"
                        })
                        $(".contact_con").delay(500).animate({
                            height:"50%"
                        },500)
                        $(".copy").delay(500).fadeIn(1000);                    
                    }
                }
                sct=st;
    
            }else if(sct>st){
                d='up';
                if(st>=0 && st<sh_1){
                    if(st==0){
                        box_x(0);   
                    }
                    else if(st==100){   
                        box_x(1); 
                    }
                    else if(st==200){
                        box_x(2);
                        h_zero(".under_big_line");
                        $(".power_move").fadeIn(500);
                    }
                } 
           
                if(st>=sh_1 && st<sh_12){
                    menu_light(0);
                    menu_off(1);
                    menu_off(2);
    
                    if(st==1400){
                        $(".con_1").fadeOut(500);
                        $(".cls-1").css({
                            strokeDashoffset:-2300
                        })
                        move_lines(0);
                        $(".click_menu").fadeOut(500);
                        h_zero(".p_top_line,.p_bottom_line");
                        h_zero(".p_top_big_line");
                        $("html,body").delay(500).animate({
                            scrollTop:200
                        },1000)
                    }
                    if(st==1500){
                        $(".p_top_big_line").animate({
                            height:150
                        },1000,function(){
                            $(".cls-1").css({
                                strokeDashoffset:0
                            })
                        })
                        $(".con_2").fadeOut(500); 
                        $(".con_1").fadeIn(500);
                        move_lines(25);
                    }
                }
                       
                if(st>=2700 && st<sh_123){
                    menu_off(0);
                    menu_off(2);
                    menu_light(1);
                    $(".more_btn").css({
                        display:"none"
                    })
    
                    if(st==2700 && st<2800){
                        h_zero(".a_top_big_line,.work");
                        move_lines(0);
                        $(".work").animate({
                            height:0
                        },1000)
                        $(".work_info_line").fadeOut(500);
                        info_hide();
                        h_zero(".a_top_line,.a_bottom_line");
                        $("html,body").delay(500).animate({
                            scrollTop:1600
                        },1000,function(){
                            h_zero(".p_bottom_big_line");
                        })
                    }
                    else if(st==2800){
                        info_reset(0);
                        move_lines(25);
                        $(".a_top_big_line").animate({
                            height:150
                        },1000,function(){
                            $(".work").animate({
                                height:400
                            },1000,function(){
                                $(".work_info_line").fadeIn(500);
                                $(".work_title").eq(0).fadeIn(500);
                            })
                            box_y(0);
                        })
                    }
                    else if(st==2900){
                        box_y(1);
                        info_reset(1);
                    }
                    else if(st==3000){
                        box_y(2);
                        info_reset(2);                    
                    }
                    else if(st==3100){
                        box_y(3);
                        info_reset(3);                   
                    }
                    else if(st==3200){
                        box_y(4);
                        info_reset(0);
                        $(".more_btn").fadeIn(500);  
                        h_zero(".a_bottom_big_line");    
                        move_lines(25);             
                    }
                }
    
                if(st>=4300 && st<sh_1234){
                    menu_off(0);
                    menu_off(1);
                    menu_light(2);
    
                    if(st==4300){
                        move_lines(0);
                        h_zero(".contact_top_big_line");
                        h_zero(".c_top_line,.c_bottom_line");
                        $("html,body").delay(500).animate({
                            scrollTop:3200
                        },1000)       
                    }
                    if(st>4400){
                        $(".star").css({
                            display:"none"
                        })
                        h_zero(".contact_con");
                        $(".copy").fadeOut(500);        
                        $("html,body").delay(500).scrollTop(4300);             
                    }
                }
                sct=st;
            }
        }
        // else if(ww<960){
        //     if(sct<=st){
        //         d='down';
        //         if(st>=0 && st<m_sh_1){
        //             if(st>=0 && st<m_sh_1*0.5){
        //                 $(".m_con_in").css({
        //                     transform:'rotateX('+90+'deg)'
        //                 }) 
        //             }
        //             if(st>m_sh_1*0.7){
        //                 $(".m_menu_bg").fadeIn(500);
        //                 $(".m_p_photo").animate({
        //                     height:"60vw"
        //                 },1000);
        //                 $(".m_cont_2").delay(500).slideDown(5000);
        //             }
        //         }
        //         if(st>=m_sh_1 && st<m_sh_12){
        //             if(st>m_sh_12*0.7){
        //                 $(".m_cont_3").slideDown(5000);
        //             }
        //         }
        //         if(st>=m_sh_12 && st<m_sh_123){
        //             if(st>m_sh_12*0.7){
        //                 $(".m_cont_4").slideDown(5000);
        //             }
        //         }
        //         sct=st;
                
        //     }else if(sct>st){
        //         d='up';
        //         if(st>=0 && st<m_sh_1){
        //             if(st>=0 && st<m_sh_1*0.5){
        //                 $(".m_con_in").css({
        //                     transform:'rotateX('+0+'deg)'
        //                 }) 
        //                 $(".m_menu_bg").fadeOut(500);
        //             }
        //         }
        //         sct=st;
        //     }
        // }
    })

    //더보기 클릭이벤트
    $(".more_btn").on("click",function(){
        $(".more_in").fadeIn(500);
    })
    $(".close").on("click",function(){
        $(".more_in").fadeOut(500);
    })


    //pc 스와이퍼
    const pc_swiper = new Swiper('.swiper_pc', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next', //다음버튼
            prevEl: '.swiper-button-prev', //이전버튼
            //=>화살표
        },
        
    })

    //모바일 스와이퍼
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next', //다음버튼
            prevEl: '.swiper-button-prev', //이전버튼
            //=>화살표
        },
        
    })

    //모바일 메뉴클릭이벤트
    
    $(".m_cont").hide().eq(0).show();

    $(".m_menu_in").on('click',function(){
        let a = $(this).index();
        $(".m_cont").hide().eq(a).show();
    })
    
    $(".m_img_2").on('click',function(){
        let a = $(this).index();
        $(".m_cont").hide().eq(a).show(100);
    })

    

    //layout 함수
    function layout(){
        ww=$(window).width();
        wrap_h=$(".wrap").height();

        $(".top_line,.bottom_line").animate({
            height:"100%"
        },2000)
        $(".click_menu, .profile_in_con").css({
            display:"none"
        })
        $(".reset_height").animate({
            height:"0"
        },1500)
        $(".cls-1").css({
            fill:'transparent',
            stroke: '#ffffff',
            strokeWidth: 3,
            strokeDasharray: 2300,
            strokeDashoffset:-2300,
        })
        $(".w_width").css({
            width:ww
        })
        $(".h_height").css({
            height:"100vh"
        })
        $(".mo_hide").css({
            display:"block"
        })
        $(".mo_wrap").css({
            display:"none"
        })
        $(".more_btn").css({
            display:"none"
        })

        if(ww>=1200){
            $(".power_img").animate({
                height:230
            },1000,function(){
                $(".big_line").animate({
                    height:300
                },500,function(){
                    $(".content_box").css({
                        display: "flex",
                        justifyContent: "space-around"
                    })
                    $(".content_box").fadeIn(500);
                })
            })
        }else if(ww<1200 && ww>=960){
            $(".power_img").animate({
                height:180
            },1000,function(){
                $(".big_line").animate({
                    height:300
                },500,function(){
                    $(".content_box").css({
                        display: "flex",
                        justifyContent: "space-around"
                    })
                    $(".content_box").fadeIn(500);
                })
            })
        }else if(ww<960){
            $(".mo_hide").css({
                //pc,tab html숨김
                display:"none"
            })
            $(".mo_wrap").css({
                //mo html나와
                display:"block"
            })
            $(".m_power_img").animate({
                height:"100%"
            },2000)
            $(".left_bg,.right_bg").animate({
                width:"100%"
            },2000,function(){
                $(this).css({
                    opacity:0.8,
                    transitionDuration: "0.5s"
                })
                // $(".m_cont_1").slideDown(2000);
            })
            
            
        }
    }



    //animate로 height값 0만들기
    function h_zero(zero){
        $(zero).animate({
            height:0
        },1000)
    }
    
    //첫번째페이지 박스x축회전
    function box_x(a){
        $(".x_move_box").css({
            transform:'rotateX('+a*30+'deg)'
        })
    }
    //세번째페이지 박스y축회전
    function box_y(b){
        $(".work_wrap").css({
            transform:'rotateY('+b*90+'deg)'
        })
    }

    //페이지전환 이후 다음페이지 배경라인 생성
    function back_lines(page){
        $(page).animate({
            height:"100%"
        },1500)
    }


    //메뉴나타났다사라졌다
    function menu_light(n){
        $(".menu .menu_in").eq(n).addClass("menu_shadow");
        $(".menu h2").eq(n).addClass("menu_font_color");
    }
    function menu_off(m){
        $(".menu .menu_in").eq(m).removeClass("menu_shadow");
        $(".menu h2").eq(m).removeClass("menu_font_color");
    }


    //작업물 설명 바뀌는부분
    function info_in(i){
        $(".info_first").hide().eq(i).show();
        $(".info_second").eq(i).fadeIn(500);
        $(".info_text").eq(i).fadeIn(500);
    }
    function info_reset(o){
        $(".info_first").fadeOut(500).eq(o).fadeIn(500);
        $(".info_second").fadeOut(500).eq(o).fadeIn(500);
        $(".info_text").fadeOut(500).eq(o).fadeIn(500);
    }
    function info_hide(){
        $(".info_first").fadeOut(500);
        $(".info_second").fadeOut(500);
        $(".info_text").fadeOut(500);
    }

    //라인 움직이는거
    function move_lines(a){
        $(".line_3, .line_9").animate({
            left:-a
        })
        $(".line_4, .line_10").delay(150).animate({
            left:a
        })
        $(".line_2, .line_8").delay(300).animate({
            left:-a
        })
        $(".line_5, .line_11").delay(450).animate({
            left:a
        })
        $(".line_1, .line_7").delay(600).animate({
            left:-a
        })
        $(".line_6, .line_12").delay(750).animate({
            left:a
        })
    }

    //메뉴클릭
    $('.menu_1').click(function(){
        menu_light(0);
        menu_off(1);
        menu_off(2);
        back_lines(".p_top_line,.p_bottom_line");
        // $('html,body').animate({
        //     scrollTop:1500
        // })
        $('html,body').scrollTop(1500);

    })
    $('.menu_2').click(function(){
        menu_light(1);
        menu_off(0);
        menu_off(2);
        back_lines(".a_top_line,.a_bottom_line");
        $('html,body').scrollTop(2800);
    })
    $('.menu_3').click(function(){
        menu_light(2);
        menu_off(0);
        menu_off(1);
        back_lines(".c_top_line,.c_bottom_line");
        $('html,body').scrollTop(4400);
    }) 


    $(".quick").click(function(){
        $(".click_menu").fadeOut(300);
        $('html,body').animate({
            scrollTop:0
        })
        h_zero(".under_big_line");
    })


    //모바일메뉴클릭
    // $(".light_text").click(function(){
    //     $(".click_change").fadeIn(500);
    //     $(".top_s").css({
    //         top:"50%",
    //         transform: "translateY(-50%) rotate(45deg)",
    //         transitionDuration: "0.5s"
    //     })
    //     $(".bottom_s").css({
    //         bottom: "50%",
    //         transform: "translateY(50%) rotate(-45deg)",
    //         transitionDuration: "0.5s"
    //     })
    //     $(".m_menu_in").slideDown(500);
    // })
    // $(".click_change").click(function(){
    //     clear_menu();
    // })

    // $(".m_menu_in>a").click(function(){
    //     $(".m_menu_in").slideUp(500);
    //     $(".click_change").fadeOut(500);
    // })



}) 
