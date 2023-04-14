const mongoose = require("mongoose");

const schemaConfig = {
    username: { 
        type: String,
        required: true
    },
    description: { 
        type: String,
        require: true 
    }
}

const timestampConfig = {
    timestamps: true
}

const ratingSchema = new mongoose.Schema(schemaConfig, timestampConfig);

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = { Rating, ratingSchema };