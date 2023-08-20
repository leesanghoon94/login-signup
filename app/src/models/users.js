"use strict";

const UserStorage = require("./UserStorage");

//생산자 만들기
class User {
    constructor(body) {
        this.body = body;
    }

    login(){
        const client = this.body;
        const { id, password } = UserStorage.getUsersInfo(client.id);
        
        if(id) {
          if (id === client.id && password === client.password) {
            return { success: true };
        }
        return { success: false, message: "비밀번호가 틀렸습니다."}
    }
    return { success: false, message: "존재하지 않는 아이디입니다."};
  }
  
  register() {
    const client = this.body;
    const response = UserStorage.save(client);
    return response;
  }
  
}

module.exports = User;