"use strict";

const fs = require("fs").promises;

class UserStorage {
//코딩문화 프라이빗한 변수나 메서드는 상단에
    static #getUsersInfo(data, id) {
        const users =JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUsers, info) => { 
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {});
        
        return userInfo;
    }
    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if(isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    
    static getUsers(isAll, ...fields) {
        return fs
        .readFile("src/database/db/user.json")
        .then((data) => {
            return this.#getUsers(data, isAll, fields);
        })
        .catch(console.error);
       
    }

    static getUsersInfo(id) {    
        // 콜백함수
          return fs
           .readFile("src/database/db/user.json")
           .then((data) => {
            return this.#getUsersInfo(data, id);
           })
           .catch(console.error);
        }

    static async save(userInfo) {
        //모든 파라미터를 가져올때 "id", "password", "name" => true 
      const users = await this.getUsers(true);
      //데이터 추가
      if(users.id.includes(userInfo.id)) {
        throw "이미 가입된";
      }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        fs.writeFile("src/database/db/user.json", JSON.stringify(users));
        return {success: true};
    }
    
};

module.exports = UserStorage;