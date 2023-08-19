"use strict";

class UserStorage {
    static #users = {
        id: ["leesanghoon", "이상훈", "1"],
        password: ["1234", "12345", "1"],
        name: ["하", "하하", "하하하"]
    };
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, fields) => {
            if(users.hasOwnProperty(fields)){
                newUsers[fields] = users[fields];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
};

module.exports = UserStorage;