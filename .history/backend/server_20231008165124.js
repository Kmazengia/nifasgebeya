const app = require("./app");


//Handling uncaught Exception
process.on("uncaughtException", (err) =>{
    console.log('Error: ${err.message}');
    console.log('shutting down the server for handling uncaught exception');
})

//config
if (process.env.NODE_ENV != "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}