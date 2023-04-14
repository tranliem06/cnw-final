const httpStatus = require("http-status");
const { APIResponse, APIPagingResponse } = require("../helper/apiResponse");
const APIError = require('../helper/apiError');
const { Service } = require("../models/Service");
const serviceMessage = require("../constants/serviceMessage");
const config = require('../config/index');

class ServiceService {
    createService = async (data) => {
        const { serviceName } = data;
        const service = await Service.findOne({ serviceName });
        if(service) {
            throw new APIError({ message: serviceMessage.SERVICE_EXIST, status: httpStatus.CONFLICT});
        }
        const picturePath = `${config.product_images_url}${serviceName}.png`
        const newService = await new Service({
            ...data,
            picturePath
        }).save();
        return new APIResponse(newService, httpStatus.CREATED, serviceMessage.SERVICE_CREATED);
    }

    getListServices = async (pageIndex, pageSize) => {
        const services = await Service.find({});
    
        const numOfServices = services.length;
        if (!numOfServices) {
            throw new APIError({ message: serviceMessage.SERVICE_NOT_FOUND, status: httpStatus.NOT_FOUND });
        }
        
        const totalPages = parseInt((numOfServices / pageSize) + 1);
        if (pageIndex > totalPages) {
            throw new APIError({ message: serviceMessage.INVALID_PAGGING, status: httpStatus.BAD_REQUEST });
        }
    
        const start = (pageIndex - 1) * pageSize;
        const end = start + pageSize;
    
        return new APIPagingResponse(
            services.slice(start, end),
            pageIndex,
            pageSize,
            numOfServices,
            totalPages,
        );
    };

    getServiceDetail = async (id) => {
        const service = await Service.findById(id);
        if (!service) {
            throw new APIError({ message: serviceMessage.SERVICE_NOT_FOUND, status: httpStatus.NOT_FOUND });
        }
        return service;
    }

    updateService = async (id, data) => {
        const service = await Service.findByIdAndUpdate(id, data, { new: true });
        if (!service) {
            throw new APIError({ message: serviceMessage.SERVICE_NOT_FOUND, status: httpStatus.NOT_FOUND });
        }
        
        return new APIResponse(service, httpStatus.OK, serviceMessage.SERVICE_UPDATED);
    };

    deleteService = async (id) => {
        const service = await Service.findByIdAndDelete(id);
        if (!service) {
            throw new APIError({ message: serviceMessage.SERVICE_NOT_FOUND, status: httpStatus.NOT_FOUND });
        }
        return new APIResponse(service, httpStatus.OK, serviceMessage.SERVICE_DELETED);
    };
}

module.exports = new ServiceService();