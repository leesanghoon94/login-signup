// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, {"content-Type": "text/html; charset=utf-8"})

//     if(req.url === "/"){
//         res.end("여기는 루트 입니다.");
//     } else if(req.url === "/login"){
//         res.end("여기는 로그인 화면 입니다.")
//     };
// });

// app.listen(3001, ()=>{
//     console.log("http로 가동된 서버 입니다.");
// });

const express = require("express");
const app = express();

app.listen(3000, function(){
    console.log("서버 가동");
});

app.get("/", (req,res)=>{
    res.send("여기는 루트입니다.")
});
app.get("/login",(req,res)=>{
    res.send(`<!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <input type="text" placeholder="아이디"><br>
        <input type="text" placeholder="비밀번호"><br>
        <button>login</button>
    
        
    </body>
    </html>`)
});