const express = require('express');
const routers = express.Router();

const userRouter = require('./userRoute');
const ratingRouter = require('./ratingRoute');
const serviceRouter = require('./serviceRoute');
const orderRouter = require('./orderRoute');

routers.use(userRouter);
routers.use(ratingRouter);
routers.use(serviceRouter);
routers.use(orderRouter);

module.exports = routers;