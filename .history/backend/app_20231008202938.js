const express = require("express");
const app = express();


//config

if(process.env.NODE_ENV != "PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })
}

// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;