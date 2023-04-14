const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const userRouter = express.Router();

userRouter.post("/users/login", userController.login);
userRouter.post("/users", userController.createUser);

userRouter.get("/users", authMiddleware, userController.getListUsers);
userRouter.get("/users/:id", authMiddleware, userController.getUserDetail);

userRouter.put("/users/:id", authMiddleware, userController.updateUser);

userRouter.delete("/users/:id", authMiddleware, userController.deleteUser);

module.exports = userRouter;