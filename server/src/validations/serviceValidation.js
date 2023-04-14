const Joi = require('joi');

const serviceValidation = {
    createRatingSchema: Joi.object({
        serviceName: Joi.string().required(),
        price: Joi.number().positive().precision(2).required(),
    }),

    updateRatingSchema: Joi.object({
        price: Joi.number().positive().precision(2),
    })
}

module.exports = serviceValidation;