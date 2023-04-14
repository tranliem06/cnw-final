const regularExpressions = require('../_utils/regularExpressions');
const httpStatus = require('http-status');
const authMessage = require('../constants/authMessage');
const config = require('../config/index');
const { User } = require('../models/User');
const jwt = require('jsonwebtoken');

const getToken = (req) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.split(regularExpressions.ONE_SPACE_ONLY)[0] === 'Bearer') {
        return authHeader.split(regularExpressions.ONE_SPACE_ONLY)[1];
    } else {
        return null;
    }
}

const authMiddleware = async (req, res, next) => {
    const token = getToken(req);
    if(!token) {
        return res.status(httpStatus.UNAUTHORIZED).json(authMessage.NO_TOKEN);
    }

    jwt.verify(token, config.token_secret, async (error, decoded) => {
        if(error) {
            return res.status(httpStatus.UNAUTHORIZED).json(authMessage.FAIL_AUTHENTICATE);
        }
        const userId = decoded.id;
        const user = await User.findById(userId);
        req.user = user;
        return next()
    })
}

module.exports = authMiddleware;