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
const UserRepositoryInService = require("../repository/user.repository");
class UserService {
    getUserWithService(limit, sort) {
        return __awaiter(this, void 0, void 0, function* () {
            return UserRepositoryInService.getAllPeopleFromDB(limit, sort);
        });
    }
    getSingleUserWithService(personID) {
        return __awaiter(this, void 0, void 0, function* () {
            return UserRepositoryInService.getSinglePersonFromDB(personID);
        });
    }
    createFromUserService(personDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UserRepositoryInService.createUserInDB(personDetails);
        });
    }
}
module.exports = new UserService();
