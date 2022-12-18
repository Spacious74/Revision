const bodyParser = require('body-parser');
const User = require('./../models/User');
const sequelize = require('../dbconnection');
const express = require('express');
let expressApp = express();
expressApp.use(bodyParser.json());

// Creating the table
async function createTable() {
    await sequelize.sync({
        force: true
    });
    console.log("User table created successfully");
}

// Inserting the data
let insertData = async (req, res, next) => {
    let usertoAdd = req.body;

    if (!usertoAdd.name) {
        res.status(404).json({
            message: "Name is required"
        });
        res.end();
    } else if (!usertoAdd.age) {
        res.status(404).json({
            message: "Age is required"
        });
        res.end();
    } else {
        await User.create(usertoAdd);
        res.status(200).json({
            message: "Data added successfully"
        });
        res.end();
    }
}

// Fetching data from db
let getDatafromDb = async (req, res) => {
    let data = await User.findAll();
    res.status(200).json(data);
}

// Fetching data from db by its userId
let getUserById = async (req, res) => {
    let id = req.params.userId;
    let data = await User.findByPk(id);
    if (data) {
        res.status(200).json(data);
        res.end();
    } else {
        res.status(404).json({
            message: "User not found"
        });
    }
}


// Updating the data for a particular userId
let updateData = async (req, res, next) => {
    let id = req.params.userId;
    let usertoUpdate = req.body;
    if (!usertoUpdate.name) {
        res.status(404).json({
            message: "Name is required"
        });
    }else if(!usertoUpdate.age) {
        res.status(404).json({
            message: "Age is required"
        });
    }else{
        await User.update(usertoUpdate, {where: {id: id}});
        res.status(200).json({
            message: "Data updated successfully"
        });
    }
}

// Deleting the data by its userId
let deleteUser = async (req,res) => {
    let id = req.params.userId;
    await User.destroy({where: {id: id}});
    res.status(200).json({
        message: "Data deleted successfully"
    });
}

module.exports = {
    insertData,
    getDatafromDb,
    getUserById,
    updateData,
    deleteUser
};