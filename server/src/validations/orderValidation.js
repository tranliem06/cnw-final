const Joi = require("joi");

const orderValidation = {
    createOrderValidation: Joi.object({
        address: Joi.string(),
        phone: Joi.string(),
        description: Joi.string().required(),
        serviceName: Joi.string().required()
    }),
    updateOrderValidation: Joi.object({
        address: Joi.string(),
        phone: Joi.string(),
        description: Joi.string(),
    })
};

module.exports = orderValidation;