"use strict"

const app = require("../app")
const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`http://localhost:${process.env.PORT}`);
});