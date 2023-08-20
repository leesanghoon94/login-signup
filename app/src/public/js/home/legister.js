"use strict";

const id = document.querySelector("#id"),
   name = document.querySelector("#name"),
   password = document.querySelector("#password"),
   confirmPassword = document.querySelector("#confirm-password"),
   registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register(){
    const req = {
        id: id.value,
        name: name.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    //덴 이후 프로미스 객체로 반환
    //.then((res) => console.log(res); 파라미터값을 또 파라미터로 넘길때 생략해줄수있다.
    .then((res) => {
        if(res.success) {
            location.href = "/login";
        } else {
            alert(res.message);
        }
    })
    .catch((err) => {
        console.error("회원가입 중 에러발생");
    })
  
    
};
