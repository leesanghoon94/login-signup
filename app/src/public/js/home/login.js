"use strict";
"use strict"



const id = document.querySelector("#id"),
   password = document.querySelector("#password"),
   loginButton = document.querySelector("button");


loginButton.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        password: password.value,
    };
    console.log(req);
    console.log(JSON.stringify(req));

    fetch("/login",{
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(req),
        
    })
};


console.log(id);
console.log(password);
console.log("hello");