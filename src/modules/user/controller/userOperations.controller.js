"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const UserServicee = require('../service/user.service');
class UserController {
    // GET all users
    getUserWithUserController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield UserServicee.getUserWithService(req.query.limit, req.query.sort);
            try {
                res.status(200).send({ message: 'successful', data });
            }
            catch (_a) {
                res.status(500).send({
                    message: 'internal server error'
                });
            }
        });
    }
    // GET single user from DB
    getSingleUserWithUserController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield UserServicee.getSingleUserWithService(req.params.id);
            try {
                res.status(200).send({ message: 'successful', data });
            }
            catch (_a) {
                res.status(500).send({ message: 'some error occured' });
            }
        });
    }
    // POST a user into DB
    createUserFromUserController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield UserServicee.createFromUserService(req.body);
            console.log(data);
            try {
                if (data) {
                    res.status(200).send({ message: 'successful posting', data });
                }
                else {
                    res.status(500).send({ message: 'unsuccessful posting' });
                }
            }
            catch (_a) {
                res.status(500).send({
                    message: 'internal server error'
                });
            }
        });
    }
}
module.exports = new UserController();
