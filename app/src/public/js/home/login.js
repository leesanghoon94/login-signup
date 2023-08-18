"use strict";

const id = document.querySelector("#id"),
   password = document.querySelector("#password"),
   loginBtn = document.querySelector("#btn");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        password: password.value,
    };
    // console.log(req);
    // console.log(JSON.stringify(req));
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    //.then((res) => console.log(res); 파라미터값을 또 파라미터로 넘길때 생략해줄수있다.
    .then((res) => {
        if(res.success) {
            location.href = "/";
        } else {
            alert(res.message);
        }
    })
    .catch((err) => {
        console.error("로그인중 에러발생");
        // console.error(new Error("로그인중 에러발생"));
    })
  
    
};




// console.log(id);
// console.log(password);
// console.log("hello");