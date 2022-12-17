const express = require('express');
const userRouter = express.Router();
const userController = require('./../controller/user.controller');

userRouter.get("/", userController.getDatafromDb);
userRouter.post("/", userController.insertData);


module.exports = userRouter;