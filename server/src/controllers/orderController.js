const httpStatus = require("http-status");
const orderValidation = require("../validations/orderValidation");
const orderService = require("../services/orderService");
const config = require("../config/index");
const { Service } = require('../models/Service');
const orderMessage = require("../constants/orderMessage");

class OrderController {
    createOrder = async (req, res, next) => {
        try {
            const { error, value } = orderValidation.createOrderValidation.validate(req.body);
            if (error) {
                return res.status(httpStatus.BAD_REQUEST).json(error.details[0].message);
            }
            const { username } = req.user;
            const bodyPayload = { username, ...value };
            const { serviceName } = req.body;
            const service = await Service.findOne({ serviceName });
            console.log(service)
            if (!service) {
                return res.status(httpStatus.CONFLICT).json({ message: orderMessage.SERVICE_NOT_FOUND });
            }
            
            const order = await orderService.createOrder(bodyPayload);
            return res.status(httpStatus.CREATED).json({ order });
        } catch (error) {
            next(error)
        }
    }

    getListOrders = async (req, res, next) => {
        try {
            const pageIndex = parseInt(req.query.pageIndex) || config.default_index_paging;
            const pageSize = parseInt(req.query.pageSize) || config.default_size_paging;
            const orders = await orderService.getListOrders(pageIndex, pageSize);
            return res.status(httpStatus.OK).json(orders);
        } catch (error) {
            next(error);
        }
    }

    getOrderDetail = async (req, res, next) => {
        try {
            const { id } = req.params;
            const order = await orderService.getOrderDetail(id);
            return res.status(httpStatus.OK).json(order);
        } catch (error) {
            next(error);
        }
    };

    updateOrder = async (req, res, next) => {
        try {
            const { id } = req.params;
            const { error, value } = orderValidation.updateOrderValidation.validate(req.body);
            if (error) {
                return res.status(httpStatus.BAD_REQUEST).json(error.details[0].message);
            }
    
            const order = await orderService.updateOrder(id, value);
            return res.status(httpStatus.OK).json(order);
        } catch (error) {
            next(error);
        }
    };

    deleteService = async (req, res, next) => {
        try {
            const { id } = req.params;
            const order = await orderService.deleteOrder(id);
            return res.status(httpStatus.OK).json(order);
        } catch (error) {
            next(error);
        }
    };
}

module.exports = new OrderController();