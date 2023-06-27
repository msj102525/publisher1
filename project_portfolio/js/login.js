'use strict';

const checkBox = document.querySelector('.login-check');

const member = document.querySelector('input#member');
const memberCheck = document.querySelector('#memberCheck');
const loginPhone = document.querySelector('input#loginPhone');
const phoneCheck = document.querySelector('#phoneCheck');

const loginBox = document.querySelector('li.li3 .login-box');
const pLoginBox = document.querySelector('li.li3 .pLogin-box');

checkBox.addEventListener('click',(e)=>{
    // console.log(e.target);
    if(e.target == member){
        if(member.checked == true){
            // console.log('true');
            pLoginBox.classList.add('inputNone');
            loginBox.classList.remove('inputNone');
        }
    }else if(e.target == loginPhone){
        if(loginPhone.checked == true){
            loginBox.classList.add('inputNone');
            pLoginBox.classList.remove('inputNone');
        }
    }
});
// 유효성 검사
const loginForm = document.querySelector('#loginForm');
const loginDo = document.querySelector('#loginDo');

const userId = document.querySelector('#userId');
const userPw = document.querySelector('#userPw');

const userId2 = loginForm.userId2;
const selectPhone = loginForm.selectPhone;
const userPhone = loginForm.userPhone;

loginDo.addEventListener('click',(e)=>{

    e.preventDefault();
    if(member.checked == true){
        if(userId.value == "" || userId.value.length <= 0){
            alert('아이디를 입력해 주세요');
            userId.focus();
            return false;
        }else if(userPw.value == "" || userPw.value.length <= 0){
            alert('비밀번호를 입력해 주세요');
            userPw.focus();
            return false;
        }else {
            alert('로그인 실행');
            loginForm.submit();
        }
    }else if(loginPhone.checked == true){
        if(userId2.value == "" || userId2.value <= 0){
            alert('아이디2를 입력해 주세요');
            userId2.focus();
            return false;
        }else if(selectPhone.value == ""){
            alert('통신사를 선택해 주세요');
            selectPhone.focus();
            return false;
        }else if(userPhone.value.length < 11 || isNaN(userPhone.value)){
            if(userPhone.value == "" || userPhone.value <= 0){
                alert("전화번호를 입력해 주세요");
                userPhone.focus();
                return false;
            }
            alert('전화번호를 다시 입력해 주세요');
            userPhone.focus();
            return false; 
        }else {
            alert('로그인 실행');
            loginForm.submit();
        }
    }
});


