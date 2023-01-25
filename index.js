

    // const express = require("express");

    import express from "express";
    import {MongoClient} from 'mongodb';
    import * as dotenv from 'dotenv' 
    dotenv.config();
    import moviesRouter from './routes/movies.routes.js';

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


    app.listen(PORT, ()=> console.log(`Your server ${PORT} has started 😉👍`));


    export {client};



