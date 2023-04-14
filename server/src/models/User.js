const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const { orderSchema } = require('./Order');

const schemaConfig = {
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    orders: [orderSchema]
};

const timestampConfig = {
    timestamps: true
}

const userSchema = new mongoose.Schema(schemaConfig, timestampConfig);

userSchema.methods.comparePassword = function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
};

userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = { User, userSchema };