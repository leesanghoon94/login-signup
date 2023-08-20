"use strict";

const UserStorage = require("./UserStorage");

//생산자 만들기
class User {
    constructor(body) {
        this.body = body;
    }

    login(){
        const body = this.body;
        const { id, password } = UserStorage.getUsersInfo(body.id);
        
        if(id) {
          if (id === body.id && password === body.password) {
            return { success: true };
        }
        return { success: false, message: "비밀번호가 틀렸습니다."}
    }
    return { success: false, message: "존재하지 않는 아이디입니다."};
  }
}

module.exports = User;