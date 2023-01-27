

    // const express = require("express");

    import express from "express";
    import {MongoClient} from 'mongodb';
    import * as dotenv from 'dotenv' 
    dotenv.config();
    import moviesRouter from './routes/movies.routes.js';
    import usersRouter from './routes/users.routes.js';
    // import mobilesRouter from './routes/mobiles.routes.js';

    console.log(process.argv);
    const app = express();
    const PORT = process.env.PORT;

    const MONGO_URL = process.env.MONGO_URL;
    const client =  new MongoClient(MONGO_URL);
    await client.connect();
    console.log("Your MongoDB is connected😍👍");

    app.use(express.json());


    app.get("/", function(request, response) {
        response.send("Hey there!! Welcome to Express 😍✨💜")
    });
    //app.listen(PORT, ()=> console.log(`Your server ${PORT} has started 😉👍`));

    app.use("/movies", moviesRouter);
    app.use("/users", usersRouter);
    // app.use("/mobiles", mobilesRouter);


    app.get("/mobiles", async function (request, response) {

        const mobiles = await client.db("mongo").collection("mobiles").find({}).toArray();
        // console.log(movies);
        response.send(mobiles);
    
        
    });
    
    app.post("/mobiles", async function (request, response) {
    
        const data = request.body;
        // console.log(data);
    
        const result = await client.db("mongo").collection("mobiles").insertMany(data);
    
        response.send(result);
    
    })



    app.listen(PORT, ()=> console.log(`Your server ${PORT} has started 😉👍`));


    export {client};


//    async function generateHashedPassword(password) {

//         const NO_OF_ROUNDS = 20;
//         const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
//         const hashedPassword = await bcrypt.hash(password, salt);
//         // console.log(salt);
//         // console.log(hashedPassword);

//     }

        
//     generateHashedPassword("Swetha@123");

