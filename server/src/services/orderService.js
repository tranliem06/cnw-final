const httpStatus = require("http-status");
const config = require("../config");
const { APIResponse, APIPagingResponse } = require("../helper/apiResponse");
const { Order } = require("../models/Order");
const orderMessage = require("../constants/orderMessage");

class OrderService {
    createOrder = async (data) => {
        const order = await new Order(data).save();
        return new APIResponse(order, httpStatus.CREATED, orderMessage.ORDER_CREATED);
    }

    getListOrders = async (pageIndex, pageSize) => {
        const orders = await Order.find({});
    
        const numOfOrders = orders.length;
        if (!numOfOrders) {
            throw new APIError({ message: orderMessage.ORDER_NOT_FOUND, status: httpStatus.NOT_FOUND });
        }
    
        const totalPages = parseInt((numOfOrders / pageSize) + 1);
        if (pageIndex > totalPages) {
            throw new APIError({ message: orderMessage.INVALID_PAGGING, status: httpStatus.BAD_REQUEST });
        }
    
        const start = (pageIndex - 1) * pageSize;
        const end = start + pageSize;
    
        return new APIPagingResponse(
            orders.slice(start, end),
            pageIndex,
            pageSize,
            numOfOrders,
            totalPages,
        );
    };

    getOrderDetail = async (id) => {
        const order = await Order.findById(id);
    
        if (!order) {
            throw new APIError({ message: orderMessage.ORDER_NOT_FOUND, status: httpStatus.NOT_FOUND });
        }
        return order;
    };

    updateOrder = async (id, data) => {
        const order = await Order.findByIdAndUpdate(id, data, { new: true });
        if (!order) {
            throw new APIError({ message: orderMessage.ORDER_NOT_FOUND, status: httpStatus.NOT_FOUND });
        }
        
        return new APIResponse(order, httpStatus.OK, orderMessage.ORDER_UPDATED);
    };

    deleteOrder = async (id) => {
        const order = await Order.findByIdAndDelete(id);
        if (!order) {
            throw new APIError({ message: orderMessage.ORDER_DELETED, status: httpStatus.NOT_FOUND });
        }
        return new APIResponse(order, httpStatus.OK, orderMessage.ORDER_DELETED);
    };
}

module.exports = new OrderService();