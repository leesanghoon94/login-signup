"use strict";
const Users = require("../../models/users")

const output = {
    home: (req, res) => {
        res.render("./home/index");
    },
    login: (req, res) => {
        res.render("./home/login")
    },
    register: (req, res) => {
        res.render("./home/register")
    }
};

const process = {
    login: async(req, res) => {
       const user = new Users(req.body);
       const response = await user.login();
       return res.json(response);
    },
    register: async(req, res) => {
        const user = new Users(req.body);
        const response = await user.register();
        return res.json(response);
    }
};

module.exports = {
    output,
    process,
};