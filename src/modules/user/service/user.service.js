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
const UserRepositoryInService = require('../repository/user.repository');
const bcrypt = require('bcrypt');
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
            const pass = yield bcrypt.hash(personDetails.password, 10);
            const personDetailsUpdated = {
                name: personDetails.name,
                gender: personDetails.gender,
                email: personDetails.email.toLowerCase(),
                password: pass,
                age: personDetails.age
            };
            // if(false)
            // {
            //     return await UserRepositoryInService.createUserInDB(personDetails)
            // }
            return yield UserRepositoryInService.createUserInDB(personDetailsUpdated);
            // return []
        });
    }
}
module.exports = new UserService();
