'use strict';



const gallery = document.querySelector('.gallery');
const galleryUl = gallery.querySelector('ul');
const galleryUlLi = gallery.querySelectorAll('ul>li');

const linkBox = document.querySelectorAll('.link-box');

const arrowCon = document.querySelector('.section.sec1 .center-btn');
const arrowConSpan = arrowCon.querySelectorAll('span.arrow');

const itemsUl = document.querySelector('.items>ul');
const itemsUlLi = document.querySelectorAll('.items>ul>li');

const firstClone = galleryUl.firstElementChild.cloneNode(true);
const lastClone = galleryUl.lastElementChild.cloneNode(true);

galleryUl.prepend(lastClone);
galleryUl.append(firstClone);


let i = 0;
let setOut;

function autoGallery() {
    i++;
    const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
    const goto = (-gap * i) + 'px';
    // console.log(gallery.offsetLeft);

    if (i > galleryUlLi.length) {
        gallery.style.left = 0;
        gallery.style.transition = 0 + 'ms';
        i = 0;
        setOut = setTimeout(autoGallery, 0);
    } else {
        gallery.style.left = goto;
        gallery.style.transition = 'all 0.5s ease-in-out';
        setOut = setTimeout(autoGallery, 4000);
    }
    // add,remove class
    itemsUlLi.forEach((el, idx) => {
        let idx2 = i - 1;
        // console.log(`idx2 -> ${idx2}`);
        if (idx2 == galleryUlLi) idx2 = 0;
        if (idx2 == idx) {
            el.classList.add('on');
        } else {
            el.classList.remove('on');
        }
    });
}

// linkBox

linkBox.forEach(el => {
    el.addEventListener('mouseenter', (e) => {
        clearTimeout(setOut);
    });
    el.addEventListener('mouseleave', () => {
        setOut = setTimeout(autoGallery, 1000);
    });
});

(() => autoGallery())();

// itemsUlLi클릭 이동
itemsUl.addEventListener('click', (e) => {
    // console.log(e.target)
    itemsUlLi.forEach((el, idx) => {
        let idx2 = idx + 1;
        if (e.target == el) {
            const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
            const goto = (-gap * idx2) + 'px';
            gallery.style.left = goto;
            gallery.style.transition = 'all 0.5s ease-in-out';
            i = idx;
            el.classList.add('on');
        } else {
            el.classList.remove('on');
        }
    });
});

//arrow이동


function autoGalleryFn(j) {
    const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
    const goto = (-gap * j) + 'px';
    gallery.style.left = goto;
    gallery.style.transition = 'all 0.5s ease-in-out';
    if (j <= 0) {
        j = galleryUlLi.length;
    }

    itemsUlLi.forEach((el, idx) => {
        let idx2 = j - 1;
        if (idx2 == idx) {
            el.classList.add('on');
        } else {
            el.classList.remove('on');
        }
    });
}

arrowCon.addEventListener('click', (e) => {
    arrowConSpan.forEach((el, idx) => {
        if (el == e.target) {
            if (idx == 0) {
                if (i <= 0) {
                    i = galleryUlLi.length;
                    const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
                    const goto = (-gap * i) + 'px';
                    gallery.style.left = goto;
                    gallery.style.transition = 0 + 'ms';
                }
                console.log(i);
                i--;
                autoGalleryFn(i);
            }

            if (idx == 1) {
                if (i == galleryUlLi.length) {
                    gallery.style.left = 0;
                    gallery.style.transition = 0 + 'ms';
                    i = 0;
                }
                console.log(i);
                i++;
                autoGalleryFn(i);
            }
        }
    });
});







// section2 

const sec2RightUl = document.querySelectorAll('.section.sec2 .right-con ul');
const sec2RightUlLi = document.querySelectorAll('.section.sec2 .right-con ul>li');
const sec2RightUlLiImg = document.querySelectorAll('.section.sec2 .right-con ul>li>img');
const popUp = document.querySelector('.popup');
const popUpImg = document.querySelector('.popup img');
const popUpClose = document.querySelector('span.pop-close');

const bannerCon = document.querySelector('.banner-con');
const bannerConUl = document.querySelector('.banner-con>ul');
const bannerConUlLi = document.querySelectorAll('.banner-con>ul>li');

const centerBtn2 = document.querySelector('.section.sec2 .center-btn');
const centerBtn2Arrow = document.querySelectorAll('.section.sec2 .center-btn span.arrow');

const itemsUl2 = document.querySelector('.section.sec2 .items>ul');
const itemsUlLi2 = document.querySelectorAll('.section.sec2 .items>ul>li');

const firstClone2 = bannerConUl.firstElementChild.cloneNode(true);
const lastClone2 = bannerConUl.lastElementChild.cloneNode(true);

bannerConUl.append(firstClone2);
bannerConUl.prepend(lastClone2);



function Gallery2Fn(j) {
    const gap = bannerConUlLi[1].offsetLeft - bannerConUlLi[0].offsetLeft;
    const goto = (-gap * j) + 'px';
    bannerCon.style.left = goto;
    bannerCon.style.transition = 'all 0.5s ease-in-out';

    if (j <= 0) {
        j = bannerConUlLi.length;
    }

    itemsUlLi2.forEach((el, idx) => {
        let idx2 = j - 1;
        if (idx2 == idx) {
            el.classList.add('on2');
        } else {
            el.classList.remove('on2');
        }
    });
}

let i2 = 1;

function Gallery2() {
    const gap = bannerConUlLi[1].offsetLeft - bannerConUlLi[0].offsetLeft;
    const goto = (-gap * i2) + 'px';
    bannerCon.style.left = goto;

    centerBtn2.addEventListener('click', (e) => {
        centerBtn2Arrow.forEach((el, idx) => {
            if (e.target == el) {
                if (idx == 0) {
                    if (i2 <= 0) {
                        i2 = galleryUlLi.length;
                        const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
                        const goto = (-gap * i2) + 'px';
                        bannerCon.style.left = goto;
                        bannerCon.style.transition = 0 + 'ms';
                    }
                    i2--;
                    // console.log(i2);
                    Gallery2Fn(i2);
                } else if (idx == 1) {
                    if (i2 >= bannerConUlLi.length) {
                        i2 = 0;
                        bannerCon.style.left = 0;
                        bannerCon.style.transition = 0 + 'ms';
                    }
                    i2++;
                    // console.log(i2);
                    Gallery2Fn(i2);
                }
            }
        });
    });

    itemsUl2.addEventListener('click', (e) => {
        itemsUlLi2.forEach((el, idx) => {
            if (e.target == el) {
                let idx2 = idx + 1;
                const gap = bannerConUlLi[1].offsetLeft - bannerConUlLi[0].offsetLeft;
                const goto = (-gap * idx2) + 'px';
                bannerCon.style.left = goto;
                bannerCon.style.transition = 'all 0.5s ease-in-out';

                i2 = idx2;

                // console.log(`idx2->${idx2}`);
                // console.log(`idx->${idx}`);
                // console.log(`i2->${i2}`);

                el.classList.add('on2');
            } else {
                el.classList.remove('on2');
            }
        });
    });
}

(() => Gallery2())();


sec2RightUlLiImg.forEach(el => {
    el.addEventListener('click', () => {
        const imgSrc = el.getAttribute('src');
        const imgAlt = el.getAttribute('alt');
        // console.log(imgSrc);
        // console.log(imgAlt);
        popUpImg.setAttribute('src', imgSrc);
        popUpImg.setAttribute('alt', imgAlt);
        popUp.classList.add('sec2-popup');
    });
});
popUpClose.addEventListener('click', () => {
    popUp.classList.remove('sec2-popup');
});




// section4 



const bigImgUp = document.querySelectorAll('.big-img.up');
const bigImgDown = document.querySelectorAll('.big-img.down')
const smallImgUp = document.querySelectorAll('.small-img.up');
const smallImgDown = document.querySelectorAll('.small-img.down');

// left
bigImgUp.forEach(el => {
    el.addEventListener('mouseover', (e) => {
        moveLFn(el);
    });
});
bigImgUp.forEach(el => {
    el.addEventListener('mouseout', (e) => {
        moveLFn(el);
    });
});
smallImgDown.forEach(el => {
    el.addEventListener('mouseover', (e) => {
        moveLFn(el);
    });
});
smallImgDown.forEach(el => {
    el.addEventListener('mouseout', (e) => {
        moveLFn(el);
    });
});
// right
bigImgDown.forEach(el => {
    el.addEventListener('mouseover', (e) => {
        moveRFn(el);
    });
});
bigImgDown.forEach(el => {
    el.addEventListener('mouseout', (e) => {
        moveRFn(el);
    });
});
smallImgUp.forEach(el => {
    el.addEventListener('mouseover', (e) => {
        moveRFn(el);
    });
});
smallImgUp.forEach(el => {
    el.addEventListener('mouseout', (e) => {
        moveRFn(el);
    });
});


function moveLFn(element) {
    if (event.type == 'mouseover') {
        element.classList.add('moveL');
        element.style.transition = '0.5s';
    } else {
        element.classList.remove('moveL')
    }
}

function moveRFn(element) {
    if (event.type == 'mouseover') {
        element.classList.add('moveR');
        element.style.transition = '0.5s';
    } else {
        element.classList.remove('moveR')
    }
}



const gallery3 = document.querySelector('.section.sec4 .gallery3');
const gallery3Ul = document.querySelector('.section.sec4 .gallery3>ul');
const gallery3UlLi = document.querySelectorAll('.section.sec4 .gallery3>ul>li');
const gallery3UlLiDiv = document.querySelectorAll('.section.sec4 .gallery3>ul>li div');

let i3 = 0

function autogallery3() {
    i3++;
    const gap = gallery3UlLi[1].offsetLeft - gallery3UlLi[0].offsetLeft;
    const goto = (-gap * i3) + 'px';
    if (i3 >= gallery3UlLi.length) {
        setTimeout(() => {
            gallery3.style.left = 0;
            gallery3.style.transition = '0s';
            (() => autogallery3())();
        }, 0)
    } else {
        gallery3.style.left = goto;
        gallery3.style.transition = 'all 15s linear';
    }
    if (i3 > gallery3UlLi.length) i3 = 0;
    // console.log(i3);
}
(() => autogallery3())();
let setIn = setInterval(autogallery3, 15000);


(function()
{
  if( window.localStorage )
  {
    if( !localStorage.getItem('firstLoad') )
    {
      localStorage['firstLoad'] = true;
      window.location.reload();
    }
    else
      localStorage.removeItem('firstLoad');
  }
})();