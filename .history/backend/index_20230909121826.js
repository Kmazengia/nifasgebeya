import express from "express";
import{port} from "./config.js";

const app = express();

app.listen(port, () =>{
    console.log(App is listning to $(port))
});