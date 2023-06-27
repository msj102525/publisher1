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
            const secOffset = $("#sec" + i).offset();
            $('html, body').animate({
                scrollTop: secOffset.top,
            }, 400);
        }
    });
});


$(window).scroll(function () {
    let wScrollT = $(this).scrollTop();

    for (let i = 0; i < $(".section").length; i++) {
        let sectionTop = $('.section').eq(i).offset().top;
        let sectionBottom = $(".section").eq(i).outerHeight();
        if (wScrollT >= sectionTop) {
            gnbUlLi.eq(i).addClass("liOn").siblings().removeClass("liOn");
        }
        
    }
});




// $(".gnb>ul>li>a").on("click", function () {
//     const targetP = $(this).parent();
//     // console.log(targetP);
//     targetP.addClass("liOn").siblings().removeClass("liOn");
// });

$("#main").on("click", function () {
    alert("main이동!");
    location.href = "http://msj102525.dothome.co.kr/portfolio/project_portfolio/index.html";
});
$("#login").on("click", function () {
    alert("Login이동!");
    location.href = "http://msj102525.dothome.co.kr/portfolio/project_portfolio/login.html";
});
$("#join").on("click", function () {
    alert("Join이동!");
    location.href = "http://msj102525.dothome.co.kr/portfolio/project_portfolio/join.html";
});
$("#subMain").on("click", function () {
    alert("일문사이트 sub-main이동!");
    location.href = "http://msj102525.dothome.co.kr/portfolio/project_portfolio/index_sub.html";
});
$("#sub2").on("click", function () {
    alert("jQuery/grid(sub2)이동!");
    location.href = "http://msj102525.dothome.co.kr/portfolio/project_portfolio/index_sub2.html";
});



// section2
const lightBoxUlLi = $(".light-box>ul>li");
const popUpCon = $(".popup-con");

lightBoxUlLi.on('click', function () {
    const imgSrc = $(this).find("img").attr('src');
    const imgAlt = $(this).find("img").attr('alt');
    const pTxt = $(this).find("p.txt").text();
    console.log(imgSrc, imgAlt, pTxt);
    console.log($(this));
    popUpCon.find("img").attr({
        "src": imgSrc,
        "alt": imgAlt
    });
    popUpCon.find("p.txt").text(pTxt);
    popUpCon.fadeIn(400);
});
popUpCon.find(".popup").on("click", function () {
    console.log($(this));
    popUpCon.fadeOut(200);
});

// section3

$(window).on("scroll", function () {
    const wScrollY = $(document).scrollTop();
    // console.log(wScrollY);
    if (wScrollY >= 2037) {
        $(".section.sec3 .left-box").addClass("leftOn");
        $(".sec3-txt p").fadeIn(400);
    } else {
        $(".section.sec3 .left-box").removeClass("leftOn");
    }
});

$(window).on("scroll", function () {
    const wScrollY = $(document).scrollTop();
    if (wScrollY >= 2037) {
        $(".section.sec3 .left-box").addClass("leftOn");
    } else {
        $(".section.sec3 .left-box").removeClass("leftOn");
    }
});
$(window).on("scroll", function () {
    const wScrollY = $(document).scrollTop();
    if (wScrollY >= 2492) {
        $(".section.sec3 .center-box").addClass("centerOn");
    } else {
        $(".section.sec3 .center-box").removeClass("centerOn");
    }
});
$(window).on("scroll", function () {
    const wScrollY = $(document).scrollTop();
    if (wScrollY >= 2800) {
        $(".section.sec3 .right-box").addClass("rightOn");
    } else {
        $(".section.sec3 .right-box").removeClass("rightOn");
    }
});
$(window).on("scroll", function () {
    const wScrollY = $(document).scrollTop();
    if (wScrollY >= 3300) {
        $(".section.sec3 span.pouBtn").fadeIn(400);
    } else {
        $(".section.sec3 span.pouBtn").fadeOut(400);
    }
});

$(".sec3-txt a").on("click", function () {
    alert("노션 이동!");
    location.href = "https://www.notion.so/UX-UI-389b201d0d994f1da7ff5a9600404439";
});







// section4

const gallery = $(".gallery");
const galleryUl = $(".gallery>ul");
const galleryUlLi = $(".gallery>ul>li");
const arrows = $("span.arrow");
const itemsUlLi = $(".items>ul>li");

const arrObj = {
    arrSrc: [],
    arrAlt: []
}
for (let i = 0; i < galleryUlLi.length; i++) {
    arrObj.arrSrc.push(`img/sub2Page/sec4${i}.png`);
    arrObj.arrAlt.push(`img${0}.jpg`);

    galleryUlLi.eq(i).children("img").attr({
        'src': arrObj.arrSrc[i],
        'alt': arrObj.arrAlt[i]
    });
}


function fadeGallery4Fn(j) {
    galleryUlLi.eq(j).fadeIn().siblings().fadeOut();
    itemsUlLi.eq(j).addClass("on").siblings().removeClass("on");
}

let i2 = -1;

function fadeGallery4() {
    i2++;
    if (i2 >= galleryUlLi.length - 1) i2 = -1;
    fadeGallery4Fn(i2);
    // console.log(i2);
    if (i2 >= galleryUlLi.length - 1) i2 = -1;
}
let setIn = setInterval(fadeGallery4, 3000);

arrows.on('click', function () {
    const idx = $(this).index();
    // console.log(idx);
    if (idx == 0) {
        if (i2 <= 0) i2 == galleryUlLi.length;
        i2--;
        // console.log(i2);
        fadeGallery4Fn(i2);
    } else {
        if (i2 >= galleryUlLi.length - 1) i2 == -1;
        i2++;
        // console.log(i2);
        fadeGallery4Fn(i2);
    }
});

itemsUlLi.on("click", function () {
    const idx = $(this).index();
    i2 = idx
    fadeGallery4Fn(i2);
});

(function () {
    fadeGallery4()
})();

const portfolioOn = $(".portfolioOn");

portfolioOn.on("click", function () {
    ulSub.slideToggle();
});

// 모바일

portfolioOn.on("click", function () {
    gnbOnFn();
});


$("span.menu").on("click", function () {
    gnbOnFn();
});

function gnbOnFn() {
    if ($(".gnb").hasClass("mMenuOn")) {
        $(".gnb").removeClass("mMenuOn");
    } else {
        $(".gnb").addClass("mMenuOn");
    }
}