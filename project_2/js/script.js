$(document).ready(function(){

// 메인 메뉴

// 네비게이션 색변경
$(window).scroll(
    function(){
        var scroll = $(window).scrollTop();
        if(scroll > 10){
            $("header").css("background" , "#ffffff");
        }
        else{
            $("header").css("background" , "rgba(0,0,0,0)");
        }
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

// 햄버거 토글
$(".ham").click(
    function(){
        $(this).toggleClass("active")
    }
);

// 사이드 버튼
$(".overlay_wrap").hide();
$(".overlay_sub").hide();

//$(".side_button .ham").click(
    //function(){
      //  $(".overlay_sub").stop().slideToggle();
       // $("#wrap").css({"position":"fixed"})
    //}
//); 
$(".side_button .ham").click(
    function(){
        $(".overlay_wrap").stop().slideToggle();
        $(".overlay_sub").stop().slideToggle();
        //$(".overlay_sub").animate({'right':'0%'});
        //$("#wrap").css({"position":"fixed"});
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

// 유튜브 동영상 반응형
$(window).resize(function(){resizeYoutube();});
  $(function(){
        resizeYoutube();}
    );
  function resizeYoutube(){
        $("iframe").each(function(){
            if( /^https?:\/\/www.youtube.com\/embed\//g.test($(this).attr("src")) ){ $(this).css("width","100%"); $(this).css("height",Math.ceil( parseInt($(this).css("width")) * 480 / 854 ) + "px");} }
    ); 
}

// 슬릭 슬라이드 
$('.sub_slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});
// 슬릭 슬라이드_2
$('.sub_slide_2').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2
});

// 뉴스목록 슬라이드
var current = 0;            // current = 0 이라고 변수 선언
var setIntervalId           // 전역변수

timer();
function timer(){
 //setInterval(실행문,시간) // 시간마다 함수를 실행
 //clearInterval(setInterval함수) setInterval 실행을 취소
 setIntervalId = setInterval(function(){
     var n = current + 1;   // current + 1 = n 의 변수 선언 
     if(n == 3){            // n 값이 3 이되면 n 값은 0 으로 바뀐다  (무한반복)
         n = 0;             // current + 1인 값이 계속 되면 1,2,3,4,5 계속 증가되어
     }                      // 슬라이드 이미지가 무한반복 되지 않기 때문에 if 문을 준다

     movie(n);              // n 매개 변수 호출 
 },3000)                    // 3초 간격으로 슬라이드
}

function movie(n){         // move 할 변수 n 을 넣어줌
 var currentEl = $(".info_box > li").eq(current);    // eq는 nth 차일드와 같은 속성 첫번째가 0, 여기서는 첫번째가 current 
 var nextEl = $(".info_box > li").eq(n);            // eq는 n , nextEl 의 변수명은 임의로 설정이 가능
 currentEl.css({top:'0%'}).animate({top:'-100%'});  //currentEl 에 스타일값, 애니메이트값 설정
 nextEl.css({top:'100%'}).animate({top:'-0%'});     //nextEl 에 move 했을때 변경되는 스타일, 애니메이트값 설정

 current = n               // current 에 n 값이 대입된다
}
  

// 컨텐츠5 아이콘3 호버애니
// $(".con5_box .icon_box3").hover(
//     function(){
//         $(".con5_box .icon_box3").delay(2000).css({"top":"70%", "right":"0%"}).animate({"top":"70%", "right":"60%"},2000);
//     },
//     function(){
//         $(".con5_box .icon_box3").delay(2000).css({"top":"70%", "right":"60%"}).animate({"top":"70%", "right":"0%"},2000);
//     },
// );   



});