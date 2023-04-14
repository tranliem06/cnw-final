const { Rating } = require("../models/Rating");
const { User } = require("../models/User");
const APIError = require('../helper/apiError');
const { APIResponse, APIPagingResponse } = require('../helper/apiResponse');
const ratingMessage = require('../constants/ratingMessage');
const httpStatus = require('http-status');

class RatingService {
    createRating = async (username, data) => {
        const bodyPayload = {
            username,
            ...data
        }
        const raing = await new Rating(bodyPayload).save();
        return new APIResponse(raing, ratingMessage.RATING_CREATED, httpStatus.CREATED);
    }

    getListRatings = async (pageIndex, pageSize) => {
        const ratings = await Rating.find({});
    
        const numOfRatings = ratings.length;
        if (!numOfRatings) {
            throw new APIError({ message: ratingMessage.RATING_NOT_FOUND, status: httpStatus.NOT_FOUND });
        }
    
        const totalPages = parseInt((numOfRatings / pageSize) + 1);
        if (pageIndex > totalPages) {
            throw new APIError({ message: ratingMessage.INVALID_PAGGING, status: httpStatus.BAD_REQUEST });
        }
    
        const start = (pageIndex - 1) * pageSize;
        const end = start + pageSize;
    
        return new APIPagingResponse(
            ratings.slice(start, end),
            pageIndex,
            pageSize,
            numOfRatings,
            totalPages,
        );
    };

    getRatingDetail = async (id) => {
        const rating = await Rating.findById(id);
    
        if (!rating) {
            throw new APIError({ message: ratingMessage.RATING_NOT_FOUND, status: httpStatus.NOT_FOUND });
        }
        return rating;
    };

    updateRating = async (id, data) => {
        const rating = await Rating.findByIdAndUpdate(id, data, { new: true });
        if (!rating) {
            throw new APIError({ message: ratingMessage.RATING_NOT_FOUND, status: httpStatus.NOT_FOUND });
        }
        
        return new APIResponse(rating, httpStatus.OK, ratingMessage.RATING_UPDATED);
    };

    deleteRating = async (id) => {
        const rating = await Rating.findByIdAndDelete(id);
        if (!rating) {
            throw new APIError({ message: ratingMessage.RATING_NOT_FOUND, status: httpStatus.NOT_FOUND });
        }
        return new APIResponse(rating, httpStatus.OK, ratingMessage.RATING_DELETED);
    };
}

module.exports = new RatingService();