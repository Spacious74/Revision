const bodyParser = require('body-parser');
const User = require('./../models/User');
const sequelize = require('../dbconnection');
const express = require('express');
let expressApp = express();
expressApp.use(bodyParser.json());


async function createTable() {
    await sequelize.sync({
        force: true
    });
    console.log("User table created successfully");
}
// createTable();

let insertData = async (req, res, next) => {
    let usertoAdd = req.body;
    console.log("");
    console.log(usertoAdd);
    console.log("");
    await User.create(usertoAdd);
    res.status(200).json({
        message: "Data added successfully"
    });
    res.end();
}

let getDatafromDb = async (req, res) => {
    let data = await User.findAll();
    res.status(200).json(data);
}
// getDatafromDb();

module.exports = {
    insertData,
    getDatafromDb,
};