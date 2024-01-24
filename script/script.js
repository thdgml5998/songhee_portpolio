$(document).ready(function(){
  
    let ww=$(window).width();
    let box_index=0;
    let direction="";

    let before_time=new Date().getTime(); //휠이벤트 시간값 넣어줘서 중첩 무시하기 20231023
    let now_time=new Date().getTime;

    layout();

    
    $(window).resize(function(){
        ww=$(window).width();
    
        layout();
        //$(window).scrollTop(0);
        // $('html,body').animate({
        //     scrollTop:0
        // })
        $(".under_big_line").animate({
            height:0
        })
        // =>첫번째 페이지 박스 밑에 라인
        if(ww>=1200){
            history.go(0);
        }
    })

    //마우스휠 
    function wrap_scroll_down(){
        ww=$(window).width();
        wh=$(window).height();
        
        if(box_index<13){
            box_index++;
            direction="down";
        }

        before_time=now_time;
        


        if(box_index>=0 && box_index<4){
            
            //첫번째페이지
            $(".wrap").animate({
                top:-box_index*100
            })
            if(box_index==0){  
                box_x(0);   
            }
            else if(box_index==1){  
                box_x(1);   
            }
            else if(box_index==2){ 
                box_x(2); 
            }
            else if(box_index==3){  
                box_x(3);
                $(".power_move").fadeOut(500);
                $(".under_big_line").delay(500).animate({
                    height:400
                },500,function(){
                    $(".wrap").animate({
                        top:-1400
                    },1000)
                    back_lines(".p_top_line,.p_bottom_line");
                    //다음페이지 배경라인 생성 animate

                    $(".click_menu").fadeIn(500);
                    //=>왼쪽 숨김메뉴 보이기
                    menu_light(0);
                    menu_off(1);
                    menu_off(2);
                    //=>첫번째 profile 메뉴 밝게
                })
                       
            }else{
                $(".power_move").css({
                    display:"block"
                })
                //=>power박스 나오기
            }  
        }

        if(box_index>3 && box_index<7){
            $(".click_menu").fadeIn(500);
            //=>왼쪽 숨김메뉴 보이기
            menu_light(0);
            menu_off(1);
            menu_off(2);
            // //=>첫번째 profile 메뉴 밝게
            $(".wrap").animate({
                top:-((box_index-3)*100)-1400
            })
                    
            if(box_index==4){
                        
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
                    
            else if(box_index==5){
                $(".con_1").fadeOut(500);
                $(".con_2").fadeIn(500);  
                //첫번째 소개페이지 사라지고 두번째 소개페이지보이기
            }
            else if(box_index==6){
                $(".p_bottom_big_line").animate({
                    height:150
                },1000,function(){
                    $(".wrap").animate({
                        top:-2700
                    },1000)
                    back_lines(".a_top_line,.a_bottom_line");

                    menu_off(0);
                    menu_off(2);
                    menu_light(1);
                    //=>art work 밝게
                    $(".more_btn").css({
                        display:"none"
                    }); 
                    //=>더보기 안보이게
                        })
                        move_lines(0);
            } 
        }

        if(box_index>6 && box_index<13){
            menu_off(0);
            menu_off(2);
            menu_light(1);

            $(".wrap").animate({
                top:-((box_index-6)*100)-2700
            })
            if(box_index==7){
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
            else if(box_index==8){
                box_y(1);
                info_reset(1);
            }
            else if(box_index==9){
                box_y(2);
                info_reset(2);                   
            }
            else if(box_index==10){
                box_y(3);
                info_reset(3);                   
            }
            else if(box_index==11){
                box_y(4);
                info_reset(0);     
                $(".more_btn").fadeIn(500);               
            }
            else if(box_index==12){
                $(".a_bottom_big_line").animate({
                    height:150
                },1000,function(){
                    $(".wrap").animate({
                        top:-4300
                    },1000)
                    back_lines(".c_top_line,.c_bottom_line");

                    $(".contact_top_big_line").animate({
                        height:200
                    },1000)
                    menu_off(0);
                    menu_off(1);
                    menu_light(2);
                })
                move_lines(0);
            }else{
                $(".more_btn").css({
                    display:"none"
                }); 
            }
        }

        
            if(box_index==13){
                $(".wrap").animate({
                    top:-((box_index-12)*100)-4300
                })
                move_lines(50);
                $(".contact_con").animate({
                    height:"60%"
                },500,function(){
                    $(".star").css({
                        display:"block"
                    })
                })
                $(".copy").delay(500).fadeIn(1000);                    
            }
        
    }


    function wrap_scroll_up(){
        ww=$(window).width();
        wh=$(window).height();

        if(box_index>0){
            box_index--;
            direction="up";
        }

        before_time=now_time;

        if(box_index>=0 && box_index<3){
            $(".click_menu").fadeOut(500);
            //첫번째페이지
            $(".wrap").animate({
                top:-box_index*100
            })
            if(box_index==0){  
                box_x(0);   
            }
            else if(box_index==1){  
                box_x(1);   
                h_zero(".under_big_line");
                $(".power_move").fadeIn(500);
            }
            else if(box_index==2){ 
                box_x(2); 
                h_zero(".under_big_line");
                //h_zero : 높이 0으로 animate 1000초
                $(".power_move").fadeIn(500);
            } 
        }

        if(box_index>2 && box_index<6){
            menu_light(0);
            menu_off(1);
            menu_off(2);

            // $(".wrap").animate({
            //     top:-((box_index-3)*100)-1400
            // })
               
            if(box_index==3){
                $(".con_1").fadeOut(500); 
                $(".cls-1").css({
                    strokeDashoffset:-2300 
                })    
                move_lines(0);
                $(".click_menu").fadeOut(500);
                h_zero(".p_top_line,.p_bottom_line");
                h_zero(".p_top_big_line");
                $(".wrap").animate({
                    top:-((box_index-3)*100)-200
                },1000,function(){
                    box_index=2;
                })
            }
            else if(box_index==4){
                $(".wrap").animate({
                    top:-((box_index-3)*100)-1400
                })
                $(".con_2").fadeOut(500);
                $(".con_1").fadeIn(500);
            }
            // else if(box_index==5){
            //     $(".wrap").animate({
            //         top:-((box_index-3)*100)-1400
            //     })
            //     $(".con_1").fadeOut(500);
            //     $(".con_2").fadeIn(500);
            //     move_lines(50);
            // }
        }


        if(box_index>5 && box_index<12){
            //=>세번째 페이지 일때
            menu_off(0);
            menu_off(2);
            menu_light(1);
            $(".more_btn").css({
                display:"none"
            })

            if(box_index==6){
                h_zero(".a_top_big_line,.work");
                $(".work_info_line").fadeOut(500);
                info_hide();
                h_zero(".a_top_line,.a_bottom_line");
                menu_light(0);
                menu_off(1);
                menu_off(2);
                $(".wrap").animate({
                    top:-1600
                },1000,function(){
                    h_zero(".p_bottom_big_line");
                    box_index=5;
                    $(".p_top_big_line").animate({
                        height:150
                    },1000,function(){
                        $(".cls-1").css({
                            strokeDashoffset:0
                        })
                        $(".con_2").fadeIn(500);
                    })    
                })
            }
            else if(box_index==7){
                $(".wrap").animate({
                    top:-((box_index-6)*100)-2700
                })
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
            else if(box_index==8){
                $(".wrap").animate({
                    top:-((box_index-6)*100)-2700
                })
                box_y(1);
                info_reset(1);
            }
            else if(box_index==9){
                $(".wrap").animate({
                    top:-((box_index-6)*100)-2700
                })
                box_y(2);
                info_reset(2);                  
            }
            else if(box_index==10){
                $(".wrap").animate({
                    top:-((box_index-6)*100)-2700
                })
                box_y(3);
                info_reset(3);                    
            }
            else if(box_index==11){
                $(".wrap").animate({
                    top:-((box_index-6)*100)-2700
                })
                box_y(4);
                info_reset(0);
                $(".more_btn").fadeIn(500);  
                h_zero(".a_bottom_big_line");  
                move_lines(50);
            }            
        }
        

        
            if(box_index==12){
                $(".star").css({
                    display:"none"
                })
                h_zero(".contact_con");
                $(".copy").fadeOut(500);
                move_lines(0);
                h_zero(".contact_top_big_line");
                h_zero(".c_top_line,.c_bottom_line");
                $(".wrap").animate({
                    top:-3200
                },1000,function(){
                    box_index=11;
                    
                    $(".more_btn").fadeIn(500);  
                    //추가작품버튼

                    back_lines(".a_top_line,.a_bottom_line");
                    h_zero(".a_bottom_big_line");  
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
                        box_y(4);
                    })
                })
                menu_off(0);
                menu_off(2);
                menu_light(1);
            } 
        

    }

    $(window).on("mousewheel",function(event){
        $(".wrap").clearQueue(); 
        //위에서 들어가있는 와프의 이벤트를 초기화시켜주는것. 중첩적인걸 없앨때 사용

        now_time=new Date().getTime();

        if(0>event.originalEvent.wheelDeltaY){
            if(direction=="down"){
                if(before_time+300 < now_time){
                    if(box_index>=0){
                        wrap_scroll_down();
                    }else{
                        wrap_scroll_up();
                    }
                }
                
            }else{
                if(box_index>=0){
                    wrap_scroll_down();
                }else{
                    wrap_scroll_up();
                }
            }
        }else{
            if(direction=="up"){
                if(before_time+300 < now_time){
                    if(box_index<=13){
                        wrap_scroll_up();
                    }else{
                        wrap_scroll_down();
                    }
                }
                
            }else{
                if(box_index<14){
                    wrap_scroll_up();
                }else{
                    wrap_scroll_down();
                }
            }
        }
    })


    //메뉴클릭
    $('.menu_1').click(function(){
        menu_light(0);
        menu_off(1);
        menu_off(2);
        back_lines(".p_top_line,.p_bottom_line");
            
        $(".wrap").animate({
            top:-1500
        },1000)
        box_index=4;

        move_lines(50);
        $(".p_top_big_line").animate({
            height:150
        },1000,function(){
            $(".cls-1").css({
                strokeDashoffset:0
            })
            $(".con_1").delay(300).fadeIn(500);
            $(".con_2").fadeOut(300);
            //첫번째소개페이지 보이기
            h_zero(".p_bottom_big_line");
        })
    
    })
    $('.menu_2').click(function(){
        menu_light(1);
        menu_off(0);
        menu_off(2);
        back_lines(".a_top_line,.a_bottom_line");
        
        info_hide();
        //작품 설명부분 나와있는거 리셋

        $(".wrap").animate({
            top:-2800
        },1000)
        box_index=7;

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
    })

    $('.menu_3').click(function(){
        menu_light(2);
        menu_off(0);
        menu_off(1);
        back_lines(".c_top_line,.c_bottom_line");
            
        $(".wrap").animate({
            top:-4400
        },1000)
        box_index=13;

        move_lines(50);
        $(".contact_top_big_line").animate({
            height:200
        },1000)
        $(".contact_con").animate({
            height:"60%"
        },500,function(){
            $(".star").css({
                display:"block"
            })
        })
        $(".copy").delay(500).fadeIn(1000);   
            
    }) 
    
    
    $(".quick").click(function(){
        $(".click_menu").fadeOut(300);
        $(".wrap").animate({
            top:0
        })
        box_index=0;
        box_x(0);
        $(".power_move").css({
            display:"block"
        })
        h_zero(".under_big_line");
    })



    //pc 작품 더보기 클릭이벤트
    // $(".more_btn").on("click",function(){
    //     $(".more_in").fadeIn(500);
    // })
    // $(".close").on("click",function(){
    //     $(".more_in").fadeOut(500);
    // })


    //pc 작품 추가시 더보기 속 스와이퍼
    // const pc_swiper = new Swiper('.swiper_pc', {
    //     direction: 'horizontal',
    //     loop: true,
    //     navigation: {
    //         nextEl: '.swiper-button-next', 
    //         prevEl: '.swiper-button-prev', 
            
    //     },
        
    // })


    //탭메뉴클릭
    $(".light_text").click(function(){
        $(".click_change").fadeIn(500);
        $(".top_s").css({
            top:"50%",
            transform: "translateY(-50%) rotate(45deg)",
            transitionDuration: "0.5s"
        })
        $(".bottom_s").css({
            bottom: "50%",
            transform: "translateY(50%) rotate(-45deg)",
            transitionDuration: "0.5s"
        })
        $(".tab_menu_in").slideDown(500);
    })
    $(".click_change").click(function(){
        clear_menu();
    })

    $(".tab_menu_in>a").click(function(){
        $(".tab_menu_in").slideUp(500);
        $(".click_change").fadeOut(500);
    })



    function clear_menu(){
        $(".top_s").css({
            top:0,
            transform: "translateY(0) rotate(0)",
            transitionDuration: "0.5s"
        })
        $(".bottom_s").css({
            bottom: 0,
            transform: "translateY(0) rotate(0)",
            transitionDuration: "0.5s"
        })
        $(".click_change").fadeOut(500);
        $(".light_text").fadeIn(500);
        $(".tab_menu_in").slideUp(500);
    }



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
        $(".tab_wrap").css({
            display:"none"
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
        }else if(ww<1200 && ww>=760){
            $(".mo_hide").css({
                //pc html숨김
                display:"none"
            })
            $(".tab_wrap").css({
                display:"block"
            })
            $(".tab_power_img").animate({
                height:"100%"
            },2000)
            $(".left_bg,.right_bg").animate({
                width:"100%"
            },2000,function(){
                $(this).css({
                    opacity:0.8,
                    transitionDuration: "0.5s"
                })
                $(".tab_cont_1").slideDown(2000);
            })
            $(".click_change").addClass("hide");


            

        }else if(ww<760){
            $(".mo_hide").css({
                //pc html숨김
                display:"none"
            })
            $(".tab_wrap").css({
                //tab html숨김
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




}) 
