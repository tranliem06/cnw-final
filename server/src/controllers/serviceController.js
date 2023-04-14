const serviceValidation = require("../validations/serviceValidation");
const serviceService = require("../services/serviceService");
const config = require('../config/index');
const httpStatus = require("http-status");

class ServiceController {
    createService = async (req, res, next) => {
        try {
            const { error, value } = serviceValidation.createRatingSchema.validate(req.body);
            if (error) {
                return res.status(httpStatus.BAD_REQUEST).json(error.details[0].message);
            }
            const service = await serviceService.createService(value);
            return res.status(httpStatus.CREATED).json({ service });
        } catch (error) {
            next(error)
        }
    }

    updateService = async (req, res, next) => {
        try {
            const { id } = req.params;
            const { error, value } = serviceValidation.updateRatingSchema.validate(req.body);
            if (error) {
                return res.status(httpStatus.BAD_REQUEST).json(error.details[0].message);
            }
    
            const service = await serviceService.updateService(id, value);
            return res.status(httpStatus.OK).json(service);
        } catch (error) {
            next(error);
        }
    };
    
    getListServices = async (req, res, next) => {
        try {
            const pageIndex = parseInt(req.query.pageIndex) || config.default_index_paging;
            const pageSize = parseInt(req.query.pageSize) || config.default_size_paging;
            const services = await serviceService.getListServices(pageIndex, pageSize);
            return res.status(httpStatus.OK).json(services);
        } catch (error) {
            next(error);
        }
    };

    getServiceDetail = async (req, res, next) => {
        try {
            const { id } = req.params;
            const service = await serviceService.getServiceDetail(id);
            return res.status(httpStatus.OK).json(service);
        } catch (error) {
            next(error);
        }
    };

    deleteService = async (req, res, next) => {
        try {
            const { id } = req.params;
            const deleteService = await serviceService.deleteService(id);
            return res.status(httpStatus.OK).json(deleteService);
        } catch (error) {
            next(error);
        }
    };
}

module.exports = new ServiceController();