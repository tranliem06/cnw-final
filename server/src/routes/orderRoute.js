const express = require("express");
const orderRouter = express.Router();
const orderController = require("../controllers/orderController");
const authMiddleware = require('../middlewares/authMiddleware');

orderRouter.post("/orders", authMiddleware, orderController.createOrder);
orderRouter.get("/orders", authMiddleware, orderController.getListOrders);
orderRouter.get("/orders/:id", authMiddleware, orderController.getOrderDetail);
orderRouter.put("/orders/:id", authMiddleware, orderController.updateOrder);
orderRouter.delete("/orders/:id", authMiddleware, orderController.deleteService);

module.exports = orderRouter;