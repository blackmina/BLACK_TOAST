




// 블랙토스트 메인 슬라이드 배너

$(function () {
    var swiper = new Swiper(".mainbanner", {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".mainbanner .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".mainbanner .swiper-button-next",
            prevEl: ".mainbanner .swiper-button-prev",
        },
        loop: true,
        speed: 1000,
    });
    // 블랙토스트 메인 슬라이드 배너




// 블랙토스트 서브1_1, 서브1_2  슬라이드 배너

    var swiper = new Swiper(".mainbanner2", {

        direction: "vertical",       // 위아래로 슬라이드 대는 구문추가 vertical//

        // 위아래로 슬라이드 대는 구문추가 vertical//


        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".mainbanner2 .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".mainbanner2 .swiper-button-next",
            prevEl: ".mainbanner2 .swiper-button-prev",
        },
        loop: true,
        speed: 1000,
    });
  // 블랙토스트 서브1_1, 서브1_2  슬라이드 배너
  
  





    /*#gnb>li에 마우스를 올리면 그 li 안에 있는 .sub가 슬라이드되서 내려오고,
    #gnb>li에서 마우스가 나가면 내려와 있던 sub가 슬라이드되서 올라간다. */
    $("#header").mouseenter(function () {
        $(".sub, .sub_bg").stop().slideDown();
        /*stop부분을 넣지 않으면 슬라이드 다운되서 내려오는 중에
         마우스가 나가면 sub 혼자 움직이는 현상이 발생하므로, 
         마우스가 도중에 나갈 때는 해동이 취소될 수 있게 한다.*/
    });
    $("#header").mouseleave(function () {
        $(".sub, .sub_bg").stop().slideUp();
    });

   
});

AOS.init({
    duration: 1200 //aos 나타나는 속도
});

// 메뉴 보이기 안보이기


// 서브메뉴 자연스러운 슬라이드
// $(function(){
//     $('#gnb').mouseover(function(){
//         $('.sub').stop().slideDown();
//     });
//     $('#gnb').mouseout(function(){
//         $('.sub').stop().slideUp();
//     });

//     $('#gnb').hover(function(){
//         $('.sub').stop().slideToggle();
//     });
// });

// 서브메뉴 자연스러운 슬라이드




///

