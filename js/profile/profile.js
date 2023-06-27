"use strict";
// header
const gnb = $(".gnb");
const gnbUl = $(".gnb>ul");
const gnbUlLi = $(".gnb>ul>li");
const gnbUlLiA = $(".gnb>ul>li>a");

const ulSub = $("ul.sub");

gnb.find(".portfolio").on("mouseover", function () {
    ulSub.slideDown(200);
});
gnb.find(".portfolio").on("mouseleave", function () {
    ulSub.slideUp(200);
});


let i = 0;
gnbUl.on('click', function (event) {
    gnbUlLiA.each(function (idx, el) {
        if (el == event.target) {
            i = idx + 1;
            const secOffset = $(".sec" + i).offset();
            $('html, body').animate({
                scrollTop: secOffset.top,
            }, 400);
        }
    });
});


$(window).scroll(function () {
    const wScrollT = $(this).scrollTop();
    // console.log(wScrollT);
    // console.log($(".sec2").offset().top);

    if (wScrollT >= $(".sec2").offset().top) {
        $(".about-box").fadeIn(400);
    }


    for (let i = 0; i < $("section").length; i++) {
        let sectionTop = $('section').eq(i).offset().top;
        let sectionBottom = $("section").eq(i).outerHeight();
        if (wScrollT >= sectionTop - 100) {
            gnbUlLi.eq(i).addClass("liOn").siblings().removeClass("liOn");
        }

    }
});


$(".gnb>ul>li>a").on("click", function () {
    const targetP = $(this).parent();
    // console.log(targetP);
    targetP.addClass("liOn").siblings().removeClass("liOn");
});

// aside

$("#kakao").on("click",function(){
    alert("카카오 오픈채팅으로 이동!");
    location.href = "https://open.kakao.com/o/gizlf9je";
});
$("#insta").on("click",function(){
    alert("내 인스타그램으로 이동!");
    location.href = "https://www.instagram.com/door_win_bell/";
});
$("#notion").on("click",function(){
    alert("내 노션(웹 정리 메모) 이동!");
    location.href = "https://www.notion.so/UX-UI-389b201d0d994f1da7ff5a9600404439";
});


// section1


$(function () {
    $(".sec1 h2.title1.one").fadeIn(500);
    $(".sec1 h2.title1.two").fadeIn(1000);
    $(".sec1 h2.title1.three").fadeIn(1500);
    $(".sec1 h2.title1.four").fadeIn(2000);
    $(".sec1 h2.title1.five").fadeIn(2500);
    $(".sec1 h2.title1.six").fadeIn(3000);
    $(".sec1 h2.title1.seven").fadeIn(3500);
    $(".sec1 h2.title1.eight").fadeIn(4000);
    $(".sec1 h2.title1.nine").fadeIn(4500);
    $(".sec1 h2.title1.ten").fadeIn(5000);
    $(".sec1 p.intro").fadeIn(5000);

    $("aside ul").css({
        "bottom": "0"
    });
});









// // section3

$(window).on("scroll", function () {
    const wScrollY = $(document).scrollTop();
    // console.log(wScrollY);
    if (wScrollY >= 2037) {
        $("section.sec3 .left-box").addClass("leftOn");
        $(".sec3-txt p").fadeIn(400);
    } else {
        $("section.sec3 .left-box").removeClass("leftOn");
    }
});

$(window).on("scroll", function () {
    const wScrollY = $(document).scrollTop();
    if (wScrollY >= 2037) {
        $("section.sec3 .left-box").addClass("leftOn");
    } else {
        $("section.sec3 .left-box").removeClass("leftOn");
    }
    if (wScrollY >= 2492) {
        $("section.sec3 .center-box").addClass("centerOn");
    } else {
        $("section.sec3 .center-box").removeClass("centerOn");
    }
    if (wScrollY >= 2800) {
        $("section.sec3 .right-box").addClass("rightOn");
    } else {
        $("section.sec3 .right-box").removeClass("rightOn");
    }
});


$(".sec3 .left-box").on("click", function () {
    $(".left-box").find("p.pOn").text("90%");
});
$(".sec3 .center-box").on("click", function () {
    $(".center-box").find("p.pOn").text("90%");
});
$(".sec3 .right-box").on("click", function () {
    $(".right-box").find("p.pOn").text("70%");
});

// section4 

$(window).scroll(function () {
    const wScrollT = $(this).scrollTop();


    if (wScrollT >= $(".sec4").offset().top) {
        $(".sec4 h2.title1.one").fadeIn(200);
        $(".sec4 h2.title1.two").fadeIn(300);
        $(".sec4 h2.title1.three").fadeIn(400);
        $(".sec4 h2.title1.four").fadeIn(500);
        $(".sec4 h2.title1.five").fadeIn(600);
        $(".sec4 h2.title1.six").fadeIn(700);
        $(".sec4 h2.title1.seven").fadeIn(800);
        $(".sec4 h2.title1.eight").fadeIn(900);
        $(".sec4 h2.title1.nine").fadeIn(950);
    }
});

$(window).on("scroll", function () {
    const wScrollY = $(document).scrollTop();
    // console.log(wScrollY);
    // console.log($(".sticky-box.one").offset().top);
    if (wScrollY>=$(".sticky-box.one").offset().top){
        $(".sticky-box.one p.number").css({"color":"#f8f8f8"});
    }else {
        $(".sticky-box.one p.number").css({"color":"transparent"});
    }
    if (wScrollY>=$(".sticky-box.two").offset().top){
        $(".sticky-box.two p.number").css({"color":"#f8f8f8"});
    }else {
        $(".sticky-box.two p.number").css({"color":"transparent"});
    }
    if (wScrollY>=$(".sticky-box.three").offset().top){
        $(".sticky-box.three p.number").css({"color":"#f8f8f8"});
    }else {
        $(".sticky-box.three p.number").css({"color":"transparent"});
    }
    if (wScrollY>=$(".sticky-box.four").offset().top){
        $(".sticky-box.four p.number").css({"color":"#f8f8f8"});
    }else {
        $(".sticky-box.four p.number").css({"color":"transparent"});
    }
    // if (wScrollY>=$(".sticky-box.five").offset().top){
    //     $(".sticky-box.five p.number").css({"color":"#f8f8f8"});
    // }else {
    //     $(".sticky-box.five p.number").css({"color":"transparent"});
    // }
    
});

$("#etudeSite").on("click",function(){
    alert("ETUDE로 이동!");
    location.href = "http://msj102525.dothome.co.kr/portfolio/project_portfolio/index.html";
});
$("#etudeSiteJ").on("click",function(){
    alert("ETUDE(Japen 번역O)로 이동!");
    location.href = "http://msj102525.dothome.co.kr/portfolio/project_portfolio/index_sub.html";
});
$("#loginJoin").on("click",function(){
    alert("Login 페이지로 이동!");
    location.href = "http://msj102525.dothome.co.kr/portfolio/project_portfolio/login.html";
});
$("#Snp").on("click",function(){
    alert("Snp 페이지로 이동!");
    location.href = "http://msj102525@msj102525.dothome.co.kr/portfolio/project_portfolio2/index.html";
});
