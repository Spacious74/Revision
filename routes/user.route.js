const express = require('express');
const userRouter = express.Router();
const userController = require('./../controller/user.controller');

userRouter.get("/", userController.getDatafromDb);
userRouter.get("/:userId", userController.getUserById);
userRouter.post("/", userController.insertData);
userRouter.post("/:userId", userController.updateData);
userRouter.delete("/:userId", userController.deleteUser);


module.exports = userRouter;