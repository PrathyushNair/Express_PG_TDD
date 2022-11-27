"use strict";
const express = require('express');
// const UserControllerInApp = require("./modules/user/controller/userOperations.controller");
const userRouter = require('./Routes/userRoutes');
// Logger section
const bunyan = require('bunyan');
const log = bunyan.createLogger({ name: 'my_App' });
// Logger section ends.
// swagger configurations
const swaggerDocumentaion = require('swagger-jsdoc');
const swaggerDefinition = {
    openapi: '1.0.0',
    info: {
        title: 'Express API for CRUD operation',
        version: '1.0.0'
    }
};
const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./*.js']
};
const swaggerSpec = swaggerDocumentaion(options);
// swagger config ends.
function myApp() {
    const app = express();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    // middle ware to check request headers
    app.use((req, res, next) => {
        try {
            if (req.headers['content-type'] == 'application/json' ||
                req.method == 'GET') {
                log.info('content type json received');
                next();
            }
            else {
                res.status(500).send({ error: 'internal server error' });
                log.warn('content type error');
            }
        }
        catch (err) {
            res.status(500).send({ error: err.message });
        }
    });
    // middleware ends.
    // request middleware
    app.use('/', userRouter);
    return app;
}
module.exports = myApp;
