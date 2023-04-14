const express = require('express');
const ratingController = require('../controllers/ratingController');
const authMiddleware = require('../middlewares/authMiddleware');

const ratingRouter = express.Router();

ratingRouter.post("/ratings", authMiddleware, ratingController.createRating);

ratingRouter.get("/ratings", authMiddleware, ratingController.getListRatings);
ratingRouter.get("/ratings/:id", authMiddleware, ratingController.getRatingDetail);

ratingRouter.put("/ratings/:id", authMiddleware, ratingController.updateRating);

ratingRouter.delete("/ratings/:id", authMiddleware, ratingController.deleteRating);

module.exports = ratingRouter;