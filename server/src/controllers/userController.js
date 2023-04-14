const userService = require('../services/userService');
const httpStatus = require('http-status');
const userValidation = require('../validations/userValidation');
const config = require('../config/index');
const authMessage = require('../constants/authMessage');

class UserController {
    login = async (req, res, next) => {
        try {
            const { error, value } = userValidation.loginSchema.validate(req.body);
            if (error) {
                return res.status(httpStatus.BAD_REQUEST).json(error.details[0].message);
            }
    
            const user = await userService.login(value);
            return res.status(httpStatus.OK).json({ user });
        } catch (error) {
            next(error);
        }
    };

    createUser = async (req, res, next) => {
        try {
            const { error, value } = userValidation.createUserSchema.validate(req.body);
            if (error) {
                return res.status(httpStatus.BAD_REQUEST).json(error.details[0].message);
            }
            const user = await userService.createUser(value);
            return res.status(httpStatus.CREATED).json({ user });
        } catch (error) {
            next(error)
        }
    }

    updateUser = async (req, res, next) => {
        try {
            const { id } = req.params;
            const { error, value } = userValidation.updateUserSchema.validate(req.body);
            if (error) {
                return res.status(httpStatus.BAD_REQUEST).json(error.details[0].message);
            }
    
            const user = await userService.updateUser(id, value);
            return res.status(httpStatus.OK).json(user);
        } catch (error) {
            next(error);
        }
    };
    
    getListUsers = async (req, res, next) => {
        try {
            const pageIndex = parseInt(req.query.pageIndex) || config.default_index_paging;
            const pageSize = parseInt(req.query.pageSize) || config.default_size_paging;
            const users = await userService.getListUsers(pageIndex, pageSize);
            return res.status(httpStatus.OK).json(users);
        } catch (error) {
            next(error);
        }
    };

    getUserDetail = async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = await userService.getUserDetail(id);
            return res.status(httpStatus.OK).json(user);
        } catch (error) {
            next(error);
        }
    };

    deleteUser = async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = req.user;
            if(user.isAdmin) {
                const deletedUser = await userService.deleteUser(id);
                return res.status(httpStatus.OK).json(deletedUser);
            }
            return res.status(httpStatus.UNAUTHORIZED).json({ message: authMessage.UNAUTHORIZE });
        } catch (error) {
            next(error);
        }
    };
}

module.exports = new UserController();