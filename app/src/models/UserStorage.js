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

    
    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
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

    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return { success: true };

    }
    
};

module.exports = UserStorage;