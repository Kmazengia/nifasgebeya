const express = require("express");
const ErrorHandler = require("./utils/ErrorHandler");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));



//config
if(process.env.NODE_ENV != "PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })
}

//import routers
const user = require("./controller/user");
// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;