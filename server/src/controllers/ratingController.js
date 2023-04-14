const ratingService = require('../services/ratingService');
const httpStatus = require('http-status');
const ratingValidation = require('../validations/ratingValidation');
const config = require('../config/index');
const authMessage = require('../constants/authMessage');

class RatingController {
    createRating = async (req, res, next) => {
        try {
            const { error, value } = ratingValidation.createRatingSchema.validate(req.body);
            if (error) {
                return res.status(httpStatus.BAD_REQUEST).json(error.details[0].message);
            }
            const { username } = req.user;
            const rating = await ratingService.createRating(username, value);
            return res.status(httpStatus.CREATED).json({ rating });
        } catch (error) {
            next(error)
        }
    }

    updateRating = async (req, res, next) => {
        try {
            const { id } = req.params;
            const { error, value } = ratingValidation.updateRatingSchema.validate(req.body);
            if (error) {
                return res.status(httpStatus.BAD_REQUEST).json(error.details[0].message);
            }
    
            const rating = await ratingService.updateRating(id, value);
            return res.status(httpStatus.OK).json(rating);
        } catch (error) {
            next(error);
        }
    };
    
    getListRatings = async (req, res, next) => {
        try {
            const pageIndex = parseInt(req.query.pageIndex) || config.default_index_paging;
            const pageSize = parseInt(req.query.pageSize) || config.default_size_paging;
            const ratings = await ratingService.getListRatings(pageIndex, pageSize);
            return res.status(httpStatus.OK).json(ratings);
        } catch (error) {
            next(error);
        }
    };

    getRatingDetail = async (req, res, next) => {
        try {
            const { id } = req.params;
            const rating = await ratingService.getRatingDetail(id);
            return res.status(httpStatus.OK).json(rating);
        } catch (error) {
            next(error);
        }
    };

    deleteRating = async (req, res, next) => {
        try {
            const { id } = req.params;
            const deletedRating = await ratingService.deleteRating(id);
            return res.status(httpStatus.OK).json(deletedRating);
        } catch (error) {
            next(error);
        }
    };
}

module.exports = new RatingController();