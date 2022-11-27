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
Object.defineProperty(exports, "__esModule", { value: true });
const db = require('../databaseHelpers/connection');
const { Response, Request } = require('express');
const { Router } = require('express');
const jwt = require('jsonwebtoken');
const UserControllerInApp = require('../modules/user/controller/userOperations.controller');
const router = Router();
function schemaValidator(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof req.body.name === 'string' &&
            typeof req.body.email === 'string' &&
            typeof req.body.gender === 'string' &&
            typeof req.body.password === 'string') {
            next();
        }
        else {
            return res.status(500).json({ message: 'unsuccessful posting' });
        }
    });
}
router.get('/', UserControllerInApp.getUserWithUserController);
router.get('/:id', UserControllerInApp.getSingleUserWithUserController);
router.post('/postpersoninfo', 
//   schemaValidator,
UserControllerInApp.createUserFromUserController);
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).send({ message: 'Enter all fields' });
        }
        const user = yield db('people').select('*').where({ email });
        console.log(user);
        const token = jwt.sign({ user_id: user.id, email }, 'gbewegfxb', { expiresIn: '180s' });
    }
    catch (_a) {
    }
}));
module.exports = router;
