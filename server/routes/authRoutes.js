const express = require("express");
const {login,logout,logoutAll} = require("../controllers/authController");

const router = express.Router();

router.post("/auth/login", login);
router.post("/auth/logout", logout);
router.post("/auth/logoutAll", logoutAll);
module.exports = router;






