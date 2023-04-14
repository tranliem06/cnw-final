const Joi = require('joi');

const ratingValidation = {
    createRatingSchema: Joi.object({
        description: Joi.string().required()
    }),

    updateRatingSchema: Joi.object({
        description: Joi.string().required()
    })
}

module.exports = ratingValidation;