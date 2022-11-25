"use strict";
const { Router } = require('express');
const UserControllerInApp = require("../modules/user/controller/userOperations.controller");
const router = Router();
router.get("/", UserControllerInApp.getUserWithUserController);
router.get("/:id", UserControllerInApp.getSingleUserWithUserController);
router.post("/postpersoninfo", UserControllerInApp.createUserFromUserController);
module.exports = router;
