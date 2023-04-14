const mongoose = require("mongoose");
const { ratingSchema } = require('./Rating');

const schemaConfig = {
    serviceName: { 
        type: String,
        required: true
    },
    price: { 
        type: Number,
        require: true 
    },
    picturePath: { 
        type: String
    },
    ratings: [ratingSchema]
}

const timestampConfig = {
    timestamps: true
}

const serviceSchema = new mongoose.Schema(schemaConfig, timestampConfig);

const Service = mongoose.model("Service", serviceSchema);

module.exports = { Service, serviceSchema };
