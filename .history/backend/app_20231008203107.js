const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

//config
if(process.env.NODE_ENV != "PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })
}

// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;