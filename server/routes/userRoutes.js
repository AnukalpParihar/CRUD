const express = require("express");
const multer = require('multer')
const {getAllUsers,getOneUser,createNewUser,updateOneUser,deleteOneUser} = require("../controllers/userController");
// require("../db/dbConnect");
const { verifyToken,verifyTokenAdmin } = require('../middlewares')

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/user_images');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });
  
const upload = multer({ storage: storage });


router.get("/user", verifyTokenAdmin, getAllUsers);
router.get("/user/:_id", verifyTokenAdmin, getOneUser);
router.post("/user",upload.single("pic"), createNewUser);
router.put("/user/:_id", verifyToken,upload.single("pic"), updateOneUser);
router.delete("/user/:_id", verifyToken, deleteOneUser);

module.exports = router;






