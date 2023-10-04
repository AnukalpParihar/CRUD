const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const login = async (req, res) => {
  try {
    const data = await User.findOne({ username: req.body.username });
    if (data) {
      if (await bcrypt.compare(req.body.password, data.password)) {
        jsonwebtoken.sign({ data }, process.env.JSONSALTKEY , async (error, token) => {
          if (error) {
            res
              .status(500)
              .send({ result: "Fail", message: "Internal Server Error" });
          } else {
            if (data.tokens.length < 3) {
              data.tokens.push(token);
              await data.save();
              res.send({ result: "Done", data: data, token: token });
            } else
              res
                .status(400)
                .send({
                  result: "Fail",
                  message:
                    "You Already Logged in From 3 Devices. To Login on This Device Logout From any Other Device",
                });
          }
        });
      } else
        res
          .status(404)
          .send({ result: "Fail", message: "Password Incorrect" });
    } else
      res
        .status(404)
        .send({ result: "Fail", message: "Username  Incorrect" });
  } catch (error) {
    res.status(500).send({ result: "Fail", message: "Internal Server Error" });
  }
};

const logout = async (req, res) => {
  try {
    const data = await User.findOne({ username: req.body.username });
    if (data) {
      let index = data.tokens.findIndex((item) => item === req.body.token);
      if (index !== -1) {
        data.tokens.splice(index, 1);
        await data.save();
      }
    }
    res.status(200).send({ result: "Done", message: "You're Logged Out" });
  } catch (error) {
    res.status(500).send({ result: "Fail", message: "Internal Server Error" });
  }
};
const logoutAll = async (req, res) => {
  try {
    const data = await User.findOne({ username: req.body.username });
    if (data) {
      let index = data.tokens.findIndex((item) => item === req.body.token);
      if (index !== -1) {
        data.tokens = [];
        await data.save();
      }
    }
    res
      .status(500)
      .send({ result: "Done", message: "You're Logged Out from All Devices" });
  } catch (error) {
    res.status(500).send({ result: "Fail", message: "Internal Server Error" });
  }
};

module.exports = {
  login,
  logout,
  logoutAll,
};
