'use strict';

const joinForm = document.querySelector('#joinForm');
const joinSubmit = joinForm.joinSubmit;

const userName = joinForm.userName;
const userBirth = joinForm.userBirth;
const genderM = document.querySelector('.gender>input#male');
const genderW = document.querySelector('.gender>input#female');
const userEmail = joinForm.userEmail;
const selectPhone = joinForm.selectPhone;
const userPhone = joinForm.userPhone;
const userId = joinForm.userId;
const userPw = joinForm.userPw;
const userPw2 = joinForm.userPw2;

const idTxt = document.querySelector(".idTxt");
const pwTxt = document.querySelector(".pwTxt");
const pwTxt2 = document.querySelector(".pwTxt2");

joinSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    if (userName.value == "" || userName.value.length <= 0) {
        alert('이름을 입력해 주세요');
        userName.focus();
        return false;
    } else if (userBirth.value.length < 8 || isNaN(userBirth.value)) {
        if (userBirth.value == "" || userBirth.value.length <= 0) {
            alert('생년월일을 입력해 주세요');
            userBirth.focus();
            return;
        }
        alert('생년월일을 다시 입력해 주세요');
        userBirth.focus();
        return false;
    } else if (genderM.checked == false && genderW.checked == false) {
        alert('성별을 체크해 주세요');
        return false;
    } else if (userEmail.value == "" || userEmail.value.length <= 0) {
        alert('이메일을 입력해 주세요');
        userEmail.focus();
        return false;
    } else if (selectPhone.value == "") {
        alert('통신사를 선택해 주세요');
        selectPhone.focus();
        return false;
    } else if (userPhone.value.length < 11 || isNaN(userPhone.value)) {
        if (userPhone.value == "" || userPhone.value.length <= 0) {
            alert('전화번호를 입력해 주세요');
            userPhone.focus();
            return;
        }
        alert('전화번호를 다시 입력해 주세요');
        userPhone.focus();
        return false;
    } else if (userId.value.length > 12 || userId.value.length < 4) {
        if (userId.value == 0) {
            alert('아이디를 입력해 주세요');
            userId.focus();
            return false;
        }
        alert('아이디를 다시 입력해 주세요');
        userId.focus();
        return false;
    } else if (userPw.value.length > 16 || userPw.value.length <8) {
        if (userPw.value == 0) {
            alert('비밀번호를 입력해 주세요');
            userPw.focus();
            return false;
        }
        alert('비밀번호를 다시 입력해 주세요');
        userPw.focus();
        return false;
    }else if(userPw.value !== userPw2.value){
        alert('비밀번호가 다릅니다');
        userPw2.focus();
        return false;
    }else {
        alert('회원가입을 합니다!');
        // joinForm.submit();
    }

});

userId.addEventListener('keyup',(e)=>{
    if(userId.value.length < 4 || userId.value.length > 12){
        idTxt.style.color = "rgb(250, 78, 78)";
    }else {
        idTxt.style.color = "#ccccff";
    }
});
userPw.addEventListener('keyup',(e)=>{
    if(userPw.value.length < 8 || userPw.value.length > 16){
        pwTxt.style.color = "rgb(250, 78, 78)";
    }else {
        pwTxt.style.color = "#ccccff";
    }
});
userPw2.addEventListener('keyup',(e)=>{
    if(userPw.value == userPw2.value){
        pwTxt2.innerText = "비밀번호가 같습니다";
        pwTxt2.style.color = "#ccccff";
    }else {
        pwTxt2.style.color = "rgb(250, 78, 78)";
        pwTxt2.innerText = "비밀번호가 틀립니다";
    }
});