const express = require("express");
const app = express();

app.listen(3000, function(){
    console.log("서버 가동");
});

app.get("/", (req,res)=>{
    res.send("여기는 루트입니다.")
});
app.get("/login",(req,res)=>{
    res.send("여기는 로그인 화면 입니다")
});