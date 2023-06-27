'use strict';

// header gnb

const gnbArrow = document.querySelectorAll('.gnbArrow');
const subBox = document.querySelectorAll('.subBox');


const sub3ArrowA = document.querySelectorAll('.sub3ArrowA');
const sub3Box = document.querySelectorAll('.sub3-box');
const sub3BoxArrow = document.querySelectorAll('.sub2 img');

// categoryArrow.addEventListener('click', (e) => {
//     // console.log(e.target);
//     categoryBox.classList.toggle('categoryOn');
//     
// });

gnbArrow.forEach(el => {
    el.addEventListener('click', (e) => {
        const elParent = e.target.parentElement;
        const elPNext = elParent.nextElementSibling;
        subBox.forEach(el2 => {
            if (el2 == elPNext) {
                el2.classList.toggle('gnbOn');
            } else {
                el2.classList.remove('gnbOn');
            }
        });
    });
});







sub3ArrowA.forEach(el => {
    el.addEventListener('click', (e) => {
        sub3BoxArrow.forEach(el2 => {
            if (e.target == el2) {
                const el2Parent = el2.parentElement;
                const nextEl2 = el2Parent.nextElementSibling;
                // console.log(el2);
                // console.log(el2Parent);
                // console.log(nextEl2);
                nextEl2.classList.toggle('sub3BoxOn');
                el2.classList.toggle('rotateImg');
            }
        });
    });
});

const translateBoxUl = document.querySelector('.translate-box>ul');
const translateBoxUlLi = document.querySelectorAll('.translate-box>ul>li');
const categoryUlSub1 = document.querySelector('.sub1');

translateBoxUl.addEventListener('click', (e) => {
    translateBoxUlLi.forEach((el, idx) => {
        if (e.target == el) {
            categoryUlSub1.classList.add('translateX');
            el.classList.add('liOn');
        } else {
            categoryUlSub1.classList.remove('translateX');
            el.classList.remove('liOn');
        }
    });
});

// container

// gallery1 

const gallery1 = document.querySelector('.gallery1');
const gallery1Ul = document.querySelector('.gallery1>ul');
const gallery1UlLi = document.querySelectorAll('.gallery1>ul>li');

const arrowCon = document.querySelector('.section.sec1');
const arrowConSpan = arrowCon.querySelectorAll('span.arrow');

const itemsUl = document.querySelector('.items>ul');
const itemsUlLi = document.querySelectorAll('.items>ul>li');

const arrBg = [];
for (let i = 0; i < gallery1UlLi.length; i++) {
    arrBg.push(`url(img/subPage/gallery1_${i}.jpg) no-repeat 50%/cover`);
    gallery1UlLi[i].style.background = arrBg[i];
}

const firstClone1 = gallery1Ul.firstElementChild.cloneNode(true);
const lastClone1 = gallery1Ul.lastElementChild.cloneNode(true);

gallery1Ul.append(firstClone1);
gallery1Ul.prepend(lastClone1);



let i = 0;
let setOut;

function autoGallery1() {
    i++;
    const gap = gallery1UlLi[1].offsetLeft - gallery1UlLi[0].offsetLeft;
    const goto = (-gap * i) + 'px';
    if (i > gallery1UlLi.length) {
        gallery1.style.left = 0;
        gallery1.style.transition = '0s';
        i = 0;
        setOut = setTimeout(autoGallery1, 0);
    } else {
        gallery1.style.left = goto;
        gallery1.style.transition = 'all 0.5s ease-in-out';
        setOut = setTimeout(autoGallery1, 4000);
    }
    // console.log(i);
    itemsUlLi.forEach((el, idx) => {
        let itemsIdx = i - 1;
        if (idx == itemsIdx) {
            el.classList.add('itemOn');
        } else {
            el.classList.remove('itemOn');
        }
    });


}

(() => autoGallery1())();

// arrow
function autoGalleryFn(j) {
    const gap = gallery1UlLi[1].offsetLeft - gallery1UlLi[0].offsetLeft;
    const goto = (-gap * j) + 'px';
    gallery1.style.left = goto;
    gallery1.style.transition = 'all 0.5s ease-in-out';
    if (j <= 0) {
        j = gallery1UlLi.length;
    }

    itemsUlLi.forEach((el, idx) => {
        let idx2 = j - 1;
        if (idx2 == idx) {
            el.classList.add('itemOn');
        } else {
            el.classList.remove('itemOn');
        }
    });
}

arrowCon.addEventListener('click', (e) => {
    arrowConSpan.forEach((el, idx) => {
        if (el == e.target) {
            if (idx == 0) {
                if (i == 0) {
                    i = gallery1UlLi.length;
                    const gap = gallery1UlLi[1].offsetLeft - gallery1UlLi[0].offsetLeft;
                    const goto = (-gap * i) + 'px';
                    gallery1.style.left = goto;
                    gallery1.style.transition = 0 + 'ms';
                }
                i--;
                console.log(i)
                autoGalleryFn(i);
            }

            if (idx == 1) {
                if (i == gallery1UlLi.length) {
                    gallery1.style.left = 0;
                    gallery1.style.transition = 0 + 'ms';
                    i = 0;
                }
                i++;
                autoGalleryFn(i);
            }
        }
    });
});

// items
itemsUl.addEventListener('click', (e) => {
    itemsUlLi.forEach((el, idx) => {
        if (e.target == el) {
            let liIdx = idx + 1;
            i = liIdx;
            console.log(liIdx);
            const gap = gallery1UlLi[1].offsetLeft - gallery1UlLi[0].offsetLeft;
            const goto = (-gap * i) + 'px';
            gallery1.style.left = goto;
            el.classList.add('itemOn');
        } else {
            el.classList.remove('itemOn');
        }
    });
});

// gallery2 

const gallery2 = document.querySelector('.gallery2');
const gallery2Ul = document.querySelector('.gallery2>ul');
const gallery2UlLi = document.querySelectorAll('.gallery2>ul>li');
const gallery2UlLiImgBox = document.querySelectorAll('.gallery2>ul>li .img-box');

const arrObj = {
    arrSrc: [],
    arrAlt: []
};

for (let i = 0; i < gallery2UlLiImgBox.length; i++) {
    arrObj.arrSrc.push(`img/subPage/gallery2_${i}.jpg`);
    arrObj.arrAlt.push(`gallery2_${i}.jpg`);

    gallery2UlLiImgBox[i].children[0].setAttribute('src', arrObj.arrSrc[i]);
    gallery2UlLiImgBox[i].children[0].setAttribute('alt', arrObj.arrAlt[i]);
}

const firstClone2 = gallery2Ul.firstElementChild.cloneNode(true);
const lastClone2 = gallery2Ul.lastElementChild.cloneNode(true);

gallery2Ul.append(firstClone2);
gallery2Ul.prepend(lastClone2);


let i2 = 0;
let setOut2

function autoGallery2() {
    i2++;
    const gap = gallery2UlLi[1].offsetLeft - gallery2UlLi[0].offsetLeft;
    const goto = (-i2 * gap) + "px";


    if (i2 > gallery2UlLi.length - 2) {
        i2 = -2;
        gallery2.style.left = (-gap * i2) + 'px';
        gallery2.style.transition = "0s";
        setTimeout(autoGallery2, 0);
    } else {
        gallery2.style.left = goto;
        gallery2.style.transition = "all 0.5s ease-in-out";
    }

    // console.log(i2);
    // console.log(gallery2.style.left,i2);

}
(() => autoGallery2())();
// let setIn = setInterval(autoGallery2, 3000);

// arrow2

const spanArrow2Con = document.querySelector('.center-btn2');
const spanArrow2ConBtn = document.querySelectorAll('.center-btn2 span');

function autoGallery2Fn(j) {
    const gap = gallery2UlLi[1].offsetLeft - gallery2UlLi[0].offsetLeft;
    const goto = (-gap * j) + 'px';
    gallery2.style.left = goto;
    gallery2.style.transition = 'all 0.5s ease-in-out';
}





spanArrow2Con.addEventListener('click', (e) => {
    const gap = gallery2UlLi[1].offsetLeft - gallery2UlLi[0].offsetLeft;
    const goto = (-gap * i2) + 'px';

    spanArrow2ConBtn.forEach((el, idx) => {
        if (el == e.target) {
            if (idx == 0) {
                if (i2 == gallery2UlLi.length - 2) {
                    i2 = -2;
                    gallery2.style.left = (-gap * i2) + 'px';
                    gallery2.style.transition = "0s";
                }
                i2++;
                console.log(i2);
                autoGallery2Fn(i2);
            }else {
                if(i2 == -2){
                    i2 = gallery2UlLi.length-2;
                    const gap = gallery2UlLi[1].offsetLeft - gallery2UlLi[0].offsetLeft;
                    const goto = (-gap * i2) + 'px';
                    gallery2.style.left = goto;
                    gallery2.style.transition = 0 + 'ms';
                }
                i2--;
                console.log(i2);
                autoGallery2Fn(i2);
            }
        }
    });
});