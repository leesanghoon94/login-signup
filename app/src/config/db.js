const mysql = require("mysql");

const db = mysql.createConnection(
    {
        host: "db-sanghoon.cxamxtdxagfz.ap-northeast-2.rds.amazonaws.com",
        user: "admin",
        password: "12345678",
        database: "db_sanghoon",
    });

db.connect();

module.exports = db;