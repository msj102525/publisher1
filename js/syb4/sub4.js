"use strict";

const gallery = document.querySelector(".gallery");
const galleryLi = document.querySelectorAll(".gallery li");

const bcon = document.querySelector(".bcon");
const spanArrow = document.querySelectorAll("span.arrow");
const bconLi = document.querySelectorAll(".bcon li");



let i = 0;

bcon.addEventListener('click', (e) => {
    spanArrow.forEach((el, idx) => {
        if (e.target == el) {
            if (idx == 0) {
                // console.log(e.target);
                if (i == 0) {
                    i = galleryLi.length;
                }
                i--;
                console.log(i);
                galleryLi.forEach((el2, idx2) => {
                    if(i == idx2){
                        el2.classList.add("fadeLiOn");
                    }else {
                        el2.classList.remove("fadeLiOn");
                    }
                });
                bconLi.forEach((el2, idx2) => {
                    if(i == idx2){
                        el2.classList.add("fadeLiOn");
                    }else {
                        el2.classList.remove("fadeLiOn");
                    }
                });
            }
        }else {
            if (i == galleryLi.length-1) {
                i = -1;
            }
            i++;
            galleryLi.forEach((el2, idx2) => {
                if(i == idx2){
                    el2.classList.add("fadeLiOn");
                }else {
                    el2.classList.remove("fadeLiOn");
                }
            });
            bconLi.forEach((el2, idx2) => {
                if(i == idx2){
                    el2.classList.add("fadeLiOn");
                }else {
                    el2.classList.remove("fadeLiOn");
                }
            });
        }
    });
});