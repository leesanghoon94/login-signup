"use strict";

const db = require("../config/db");

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

    
    static getUsers(isAll, ...fields) {}

    static getUsersInfo(id) {
       return new Promise((resolve, reject) => {
            db.query("SELECT * FROM users WHERE id = ?", [id], (err, data) => {
                if(err) {
                    reject(err);
                } else {
                    console.log(data[0]);
                resolve(data[0]);
                
                }
            });
        });
        
        }

    static async save(userInfo) {}
};

module.exports = UserStorage;