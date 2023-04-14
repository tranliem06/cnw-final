const Joi = require('joi');
const regularExpressions = require('../_utils/regularExpressions');

const userValidation = {
    loginSchema: Joi.object({
        username: Joi.string().required().pattern(regularExpressions.USERNAME),
        password: Joi.string().required().pattern(regularExpressions.PASSWORD),
    }),

    createUserSchema: Joi.object({
        username: Joi.string().required().pattern(regularExpressions.USERNAME),
        password: Joi.string().required().pattern(regularExpressions.PASSWORD),
        age: Joi.number().greater(0).optional(),
        phone: Joi.string().optional(),
        address: Joi.string().optional(),
        isAdmin: Joi.boolean().required(),
    }),

    updateUserSchema: Joi.object({
        password: Joi.string().pattern(regularExpressions.PASSWORD),
        age: Joi.number().greater(0).optional(),
        phone: Joi.string().optional(),
        address: Joi.string().optional(),
    })
}

module.exports = userValidation;