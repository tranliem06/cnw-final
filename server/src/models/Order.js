const mongoose = require("mongoose");

const schemaConfig = {
    username: { 
        type: String,
        required: true
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    description: { 
        type: String,
        require: true 
    },
    serviceName: { 
        type: String
    }
}

const timestampConfig = {
    timestamps: true
}

const orderSchema = new mongoose.Schema(schemaConfig, timestampConfig);

const Order = mongoose.model("Order", orderSchema);

module.exports = { Order, orderSchema };