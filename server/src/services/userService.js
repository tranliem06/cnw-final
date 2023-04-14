const { User } = require('../models/User');
const APIError = require('../helper/apiError');
const { APIResponse, APIPagingResponse } = require('../helper/apiResponse');
const userMessage = require('../constants/userMessage');
const httpStatus = require('http-status');
const jwt = require('jsonwebtoken');
const config = require('../config/index');

class UserService {
    login = async (data) => {
        const { username, password } = data;
        const user = await User.findOne({ username });
        if(!user) {
            throw new APIError({ message: userMessage.USER_NOT_FOUND, status: httpStatus.NOT_FOUND });
        }
        if(!user.comparePassword(password)) {
            throw new APIError({ message: userMessage.PASSWORDS_DONT_MATCH, status: httpStatus.UNAUTHORIZED });
        }
        const id = user.id;
        const token = jwt.sign({ id }, config.token_secret, { expiresIn: config.token_expiry });
        return new APIResponse({ token, user }, userMessage.LOGIN_SUCCEED, httpStatus.OK);
    }

    createUser = async (data) => {
        const { username } = data;
        const currentUser = await User.findOne( { username } );
        if(currentUser) {
            throw new APIError({ message: userMessage.DUPLICATE_USERNAME, status: httpStatus.CONFLICT });
        }
        const user = await new User(data).save();
        return new APIResponse(user, userMessage.USER_CREATED, httpStatus.CREATED);
    }

    updateUser = async (id, data) => {
        const user = await User.findByIdAndUpdate(id, data, { new: true });
        if (!user) {
            throw new APIError({ message: userMessage.USER_NOT_FOUND, status: httpStatus.NOT_FOUND });
        }
        
        return new APIResponse(user, httpStatus.OK, userMessage.USER_UPDATED);
    };

    getListUsers = async (pageIndex, pageSize) => {
        const users = await User.find({});
    
        const numOfUsers = users.length;
        if (!numOfUsers) {
            throw new APIError({ message: userMessage.USER_NOT_FOUND, status: httpStatus.NOT_FOUND });
        }
    
        const totalPages = parseInt((numOfUsers / pageSize) + 1);
        if (pageIndex > totalPages) {
            throw new APIError({ message: userMessage.INVALID_PAGGING, status: httpStatus.BAD_REQUEST });
        }
    
        const start = (pageIndex - 1) * pageSize;
        const end = start + pageSize;
    
        return new APIPagingResponse(
            users.slice(start, end),
            pageIndex,
            pageSize,
            numOfUsers,
            totalPages,
        );
    };

    getUserDetail = async (id) => {
        const user = await User.findById(id);
    
        if (!user) {
            throw new APIError({ message: userMessage.USER_NOT_FOUND, status: httpStatus.NOT_FOUND });
        }
        return user;
    };

    deleteUser = async (id) => {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            throw new APIError({ message: userMessage.USER_NOT_FOUND, status: httpStatus.NOT_FOUND });
        }
        return new APIResponse(user, httpStatus.OK, userMessage.USER_DELETED);
    };

}

module.exports = new UserService();