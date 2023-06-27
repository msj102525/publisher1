'use strict';

const menuBtn = document.querySelector('.menu-img');
const gnb = document.querySelector('.gnb');
const gnbInner = document.querySelector('.gnb > .inner-gnb');
const searchBox = document.querySelector('#search-box');
const popularBox = document.querySelector('.popular-box');
const removeBtn = document.querySelector('#remove-icon');


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