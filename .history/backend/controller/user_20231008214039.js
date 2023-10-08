const express = require("express");
const path = require("path");
const router = express.Router();
const {upload} = require("../multer"); 

router.post("/create-user", upload.single("file"), async (req, res, next)=>{
const {name,email,password} = req.body;
    const userEmail = await user.findOne({email});
if(userEmail){
    return next(new ErrorHandler("User already exists", 400));
}
})