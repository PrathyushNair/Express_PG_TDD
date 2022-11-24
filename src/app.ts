const express = require("express");
const UserControllerInApp = require("./modules/user/controller/userOperations.controller");

//Logger section
const bunyan=require("bunyan")
const log=bunyan.createLogger({name:"my_App",streams: [
  {
    level: "debug",
    stream: process.stdout, 
  },
  {
    level: "info",
    path: "./logs/infolog.json",
  },
  {
    level: "error",
    path: "./logs/errorlog.json",
  },
],})
// Logger section ends.


//swagger configurations
const swaggerDocumentaion=require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '1.0.0',
  info: {
    title: 'Express API for CRUD operation',
    version: '1.0.0',
  },
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./*.js'],
};

const swaggerSpec =swaggerDocumentaion(options);
// swagger config ends.




function myApp() {
  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  //middle ware to check request headers
  app.use(
    (
      req: { headers: { [x: string]: string }; method: string },
      res: any,
      next: () => void
    ) => {
    try{
        
      if (
        req.headers["content-type"] == "application/json" ||
        req.method == "GET"
      ) {
        log.info("content type json received")
        next();
      } 
      else {
        res.status(500).send({error:"internal server error"})
        log.warn("content type error")
        
      }
    }
      catch(err:any)
      {
        res.status(500).send({error:err.message})
      }
       
      
    }
  );
//middleware ends.
  
  
  //requests
  
  //get all users using class
  app.get("/",UserControllerInApp.getUserWithUserController);
  

  //get single user using class
  app.get("/:id",UserControllerInApp.getSingleUserWithUserController)


  //post using class
  app.post("/postpersoninfo", UserControllerInApp.createUserFromUserController);

  return app;
}

module.exports = myApp;

