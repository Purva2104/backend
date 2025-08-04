// require('dotenv').config({path: './env'})

import dotenv from "dotenv"

import connectDB from "./db/index.js"
import {app} from './app.js'
dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Mongo db connection failed !!!", err);
})

/*
import express from "express"
const app=express()
;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR: ",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch(error){
        console.error("ERROR: ",error)
        throw err
    }
})()

*/

//directly connecting but it can give errors or we can face issues while connecting to the database so better go for try catch and async
// function connectDB(){}

// connectDB()