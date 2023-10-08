const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, res, cb){
        cb(null, "uploads/")
    }
})