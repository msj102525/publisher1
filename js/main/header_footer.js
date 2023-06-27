'use strict';

const menuBtn = document.querySelector('.menu-img');
const gnb = document.querySelector('.gnb');
const gnbInner = document.querySelector('.gnb > .inner-gnb');
const searchBox = document.querySelector('#search-box');
const popularBox = document.querySelector('.popular-box');
const removeBtn = document.querySelector('#remove-icon');
const footerMore = document.querySelector(".footer-more");

menuBtn.addEventListener('click',()=>{
    // if(gnb.hasAttribute('menuOn')){
    //     gnb.classList.remove('menuOn');
    // }else{
    //     gnb.classList.add('menuOn');
    // }
        gnb.classList.toggle('menuOn');
        gnb.style.transition='all 0.2s';
        gnbInner.classList.toggle('innerOn');
        gnbInner.style.transition='all 0.2s';
});
footerMore.addEventListener('click',()=>{
    // if(gnb.hasAttribute('menuOn')){
    //     gnb.classList.remove('menuOn');
    // }else{
    //     gnb.classList.add('menuOn');
    // }
        gnb.classList.toggle('menuOn');
        gnb.style.transition='all 0.2s';
        gnbInner.classList.toggle('innerOn');
        gnbInner.style.transition='all 0.2s';
});

searchBox.addEventListener('focus',()=>{
    popularBox.classList.add('headerOn');
    popularBox.style.transition='all 0.2s';
    removeBtn.style.display='block';
});

searchBox.addEventListener('blur',()=>{
    popularBox.classList.remove('headerOn');
    removeBtn.style.display='none';
    searchBox.value=null;
});


removeBtn.addEventListener('click',()=>{
    popularBox.classList.remove('headerOn');
});

// footer-gallert

const fGalleryUlLi = document.querySelectorAll('.footer-gallery>ul>li');

let f = -1;
function fGallery(){
    f++;
    fGalleryUlLi.forEach((el,idx)=>{
        if(f==idx){
            el.classList.add('fadeLi');
        }else {
            el.classList.remove('fadeLi');
        }
    });
    if(f >= fGalleryUlLi.length-1) f = -1;
    // console.log(f);
}
setInterval (fGallery,3000);

(()=>fGallery())();

const goSub = document.querySelector('#familySite');

goSub.addEventListener('change',(e)=>{
    if(e.target.value == 'japen'){
        alert('sub이동!');
        location.href = 'http://msj102525.dothome.co.kr/portfolio/project_portfolio/index_sub.html';
        console.log(e.target.value);
    }else if (e.target.value == 'sub2'){
        alert('sub2이동!');
        location.href = 'http://msj102525@msj102525.dothome.co.kr/portfolio/project_portfolio/profile.html';
    }else if(e.target.value == "main"){
        alert("main이동!");
        location.href = "http://msj102525.dothome.co.kr/portfolio/project_portfolio/index.html"
    }
});

// windowUp이벤트
const scrollBox = document.querySelector('.scrollBox');

window.addEventListener('scroll', () => {
    const wScrollTop = window.scrollY;
    // console.log(wScrollTop);
    if (wScrollTop >= 100) {
        scrollBox.classList.add('scrollBoxOn');
    } else {
        scrollBox.classList.remove('scrollBoxOn');
    }
});

scrollBox.addEventListener('click', () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});
////////////////////////////////////
