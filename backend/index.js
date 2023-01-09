const express = require("express");

// const messageRouter = require("./routes/message.routes");

const app = express();

// app.use("/message",messageRouter);
app.get("/",(req,res)=>{
    res.send("<>Welcome to Home page.</>");
});

require("dotenv").config();

const {PORT} = process.env;

console.log(PORT);

app.listen(8080,async()=>{
    try{
        console.log(`Server is running on localhost port : ${PORT}`);
    }catch(error){
        if( error ){
            console.log("Something went wrong with connecting database...");
            throw error;
        }
    }
});
