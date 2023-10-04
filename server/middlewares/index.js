const User = require("../models/user")
const jsonwebtoken = require('jsonwebtoken')



async function verifyTokenAdmin(req, res, next) {
  var token = req.headers["authorization"];
  var role = req.headers["role"];
  var username = req.headers["username"];
  // console.log(token,role,username)
  if (token) {
    let user = await User.findOne({ username: username });
    if (user && user.tokens.findIndex((item) => item === token) !== -1) {
      jsonwebtoken.verify(token, process.env.JSONSALTKEY, (error, data) => {
        if (error) {
          res.status(400).send({
            result: "Fail",
            message: "You Are Not Authorized to Access this Data",
          });
        } else {
          if (role === "Admin")
            next();
          else
            res.status(400).send({
              result: "Fail",
              message: "You Are Not Authorized to Perform This Action",
            });
        }
      });
    } else
      res.status(400).send({
        result: "Fail",
        message: "You Currently Logged Out!!! Please Login Again",
      });
  } else
    res.status(400).send({
      result: "Fail",
      message: "You Are Not Authorized to Access this Data",
    });
}

async function verifyToken(req, res, next) {
  var token = req.headers["authorization"];
  //   var role = req.headers["role"];
  var username = req.headers["username"];
  if (token) {
    let user = await User.findOne({ username: username });
    if (user && user.tokens.findIndex((item) => item === token) !== -1) {
      jsonwebtoken.verify(token, process.env.JSONSALTKEY, (error, data) => {
        if (error) {
          res.status(400).send({
            result: "Fail",
            message: "You Are Not Authorized to Perform This Action",
          });
        } else {
          // let user = User.findOne({username:username})
          next();
        }
      });
    } else
      res.status(400).send({
        result: "Fail",
        message: "You Currently Logged Out!!! Please Login Again",
      });
  } else
    res.status(400).send({
      result: "Fail",
      message: "You Are Not Authorized to Access this Data",
    });
}

module.exports = {
  verifyToken,
  verifyTokenAdmin
}