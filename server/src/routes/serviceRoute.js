const express = require('express');
const serviceController = require('../controllers/serviceController');
const authMiddleware = require("../middlewares/authMiddleware");
const upload = require( "../middlewares/uploadMiddleware");

const serviceRouter = express.Router();

serviceRouter.post('/services', authMiddleware, upload.single("file"), serviceController.createService);

serviceRouter.put('/services/:id', authMiddleware, serviceController.updateService);

serviceRouter.get('/services', authMiddleware, serviceController.getListServices);
serviceRouter.get('/services/:id', authMiddleware, serviceController.getServiceDetail);

serviceRouter.delete('/services/:id', authMiddleware, serviceController.deleteService);

module.exports = serviceRouter;