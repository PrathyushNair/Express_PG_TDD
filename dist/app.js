"use strict";
const express = require("express");
const UserControllerInApp = require("./modules/user/controller/userOperations.controller");
function myApp() {
    const app = express();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    //middle ware to check request headers
    //   app.use(
    //     (
    //       req: { headers: { [x: string]: string }; method: string },
    //       res: any,
    //       next: () => void
    //     ) => {
    //       try {
    //         if (
    //           req.headers["content-type"] == "application/json" ||
    //           req.method == "GET"
    //         ) {
    //           next();
    //         } else {
    //           throw Error("internal server error");
    //         }
    //       } catch (e: any) {
    //         //throw Error("internal server error from else")
    //         res.send({ error: e.message });
    //       }
    //     }
    //   );
    //requests
    app.get("/", (req, res) => {
        res.send({ message: "hello from Prathyush!" });
    });
    app.get("/abc", (req, res) => {
        res.send({ message: "hello from Prathyushabc!" });
    });
    // app.post("/postpersoninfo",async(req: { headers: any; body: { name: string; gender: string; email: string; password: string; age: string | number; }; },res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { message: string; data?: any; }): void; new(): any; }; }; })=>{
    //     console.log("req headers",req.headers["content-type"])
    //     const person= await database.createUserInDB(req.body)
    //     try
    //     {
    //         if(req.headers['content-type']=="application/json")
    //         {
    //             res.status(200).send({message:"successful posting",data:person})
    //         }
    //     }
    //     catch
    //     {
    //         res.status(500).send({
    //             message: "internal server error",
    //         })
    //     }
    // })
    //post using class
    app.post("/postpersoninfo", UserControllerInApp.createUserFromUserController);
    return app;
}
module.exports = myApp;
// database: { createUserInDB: (arg0: { name:string,
//     gender: string,
//     email:string,
//     password:string,
//     age:number|string }) => any; }
