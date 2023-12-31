"use strict";

const db = require("../config/db");

class UserStorage {
    
    

    static getUsersInfo(id) {
       return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if(err) {
                    reject(`${err}`);
                } else {
                    console.log(data[0]);
                resolve(data[0]);
                
                }
            });
        });
        
        }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "insert into users (id, name, password) value(?, ?, ?);";
            db.query(
                query, 
                [userInfo.id, userInfo.name, userInfo.password], 
                (err) => {
                if(err) reject(`${err}`);
                resolve({success: true});
                
            });
        });
    }
};

module.exports = UserStorage;