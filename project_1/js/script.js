$(document).ready(function(){

// 메인 메뉴

// 검색 슬라이드
$(".t_serch label > .img_2").hide();
    
$(".t_serch label > .img_1").click(
    function(){
        $(".t_serch input").animate({ "width": "300px","opacity":"1" }, 300);
        $(".t_serch label > .img_1").hide();
        $(".t_serch label > .img_2").show();
        $(".t_nav > div > span").fadeOut();
    }
); 
$(".t_serch label > .img_2").click(
    function(){
        $(".t_serch input").animate({ "width": "0px","opacity":"0.1"}, 300);
        $(".t_serch label > .img_1").show();
        $(".t_serch label > .img_2").hide();
        $(".t_nav > div > span").fadeIn();
    }
); 
    
// 네비게이션 슬라이드 다운
$(".s_menu").hide();

$(".m_menu > li").hover(
    function(){
        $(this).find(".s_menu").slideDown(500);
    },
    function(){
        $(".s_menu").hide();
    }
);   

$(".m_menu .m_list").hover(
    function(){
        $(this).css({"opacity":"0.6"});
    },
    function(){
        $(this).css({"opacity":"1"});
    }
);

$('.s_menu .s_list').hover(
    function(){
        $(this).css({"opacity":"0.6"});
    },
    function(){
        $(this).css({"opacity":"1"});
    }
);

// 사이드 버튼
$(".side_button .side_close").hide();
$(".overlay_sub").hide();

$(".side_button .side_open").click(
    function(){
        $(".side_open").animate({"width": "0px"});
        $(".side_button .side_close").delay(300).fadeIn();
        $(".overlay_sub").slideDown();
        $("#wrap").css({"position":"fixed"})
    }
); 
$(".side_button .side_close").click(
    function(){
        $(".side_open").animate({"width": "55px"});
        $(".side_button .side_close").hide();
        $(".overlay_sub").slideUp();
        $("#wrap").css({"position":"unset"}) 
    }
); 
// 사이드 버튼 서브 메뉴 슬라이드토글
$(".ols_menu").hide();

$(".overlay_menu > li > a").click(
    function(e){
        e.preventDefault(); 
        $(this).next(".ols_menu").stop().slideToggle();
    }
); 

$(".overlay_menu .m_list").hover(
    function(){
        $(this).css({"opacity":"0.6"});
    },
    function(){
        $(this).css({"opacity":"1"});
    }
);

$('.ols_menu .s_list').hover(
    function(){
        $(this).css({"opacity":"0.6"});
    },
    function(){
        $(this).css({"opacity":"1"});
    }
);



});