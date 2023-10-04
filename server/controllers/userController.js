const passwordValidator = require("password-validator");
const fs = require('fs')
const bcrypt = require("bcrypt");
const User = require("../models/user");

var schema = new passwordValidator();
schema
  .is().min(8) // Minimum length 8
  .is().max(100) // Maximum length 100
  .has().uppercase() // Must have uppercase letters
  .has().lowercase() // Must have lowercase letters
  .has().digits(1) // Must have at least 2 digits
  .has().not().spaces() // Should not have spaces
  .is().not().oneOf(["Password@123", "User123", "aDMIN123",]);


const getAllUsers = async (req, res) => {
  const data = await User.find();
  if (data)
    res.send({ result: "Done", data: data });
  else
    res.status(500).send({ result: "Fail", message: "Internal Server Error" });
};

const getOneUser = async (req, res) => {
  try {
    // console.log(req.params._id)
    const data = await User.findOne({ _id: req.params._id });
    if (data) res.send({ result: "Done", data: data });
    else res.status(404).send({ result: "Fail", message: "Invalid Username" });
  }
  catch (error) {
    res.status(500).send({ result: "Fail", message: "Internal Server Error" });
  }
};

const createNewUser = async (req, res) => {
  // console.log(req.body)
  try {
    const existingUser = await User.findOne({ username: req.body.username });
    const existingUserEmail = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({
        result: "Fail",
        message: "Username already exists. Please choose a different username.",
      });
    }
    else if (existingUserEmail) {
      return res.status(400).json({
        result: "Fail",
        message: "Email already exists. Please choose a different email.",
      });
    }
    else {
      if (schema.validate(req.body.password)) {
        bcrypt.hash(req.body.password, 12, async function (err, hash) {
          const data = new User(req.body)
          data.password = hash
          if (req.file) 
            data.pic = req.file.filename ?? data.pic
          await data.save()


          res.send({ result: "Done", message: "User account has been created successfully" })
        });
      }
      else
        res.status(404).send({ result: "Fail", message: "Invalid Password\nPassword Length Must be Atleast 8 and Maximum 100, Must Contain Atleast 1 Upper Case Character, Atleast 1 Lowe Case Character, Does not Contain Space" })
    }
  }
  catch (error) {
    console.log(error)
    if (error.code === 11000)
      res.status(400).send({ result: "Fail", message: "Username or Email Already Registered" })
    else if (error.errors.name)
      res.status(400).send({ result: "Fail", message: error.errors.name.message })
    else if (error.errors.email)
      res.status(400).send({ result: "Fail", message: error.errors.email.message })
    else if (error.errors.username)
      res.status(400).send({ result: "Fail", message: error.errors.username.message })
    else if (error.errors.phone)
      res.status(400).send({ result: "Fail", message: error.errors.phone.message })
    else if (error.errors.password)
      res.status(400).send({ result: "Fail", message: error.errors.password.message })
    else
      res.status(500).send({ result: "Fail", message: "Internal Server Error" })
  }
};

const updateOneUser = async (req, res) => {
  try {
    const data = await User.findOne({ _id: req.params._id })
    if (data) {
      data.email = req.body.email ?? data.email
      data.name = req.body.name ?? data.name
      data.phone = req.body.phone ?? data.phone
      data.status = req.body.status ?? data.status
      data.updated_at = new Date()
      if (req.file) {
        try {
          fs.unlinkSync(`./public/user_images/${data.pic}`)
        } catch (error) {
        }
        data.pic = req.file.filename ?? data.pic
      }
      await data.save()
      res.status(200).send({ result: "Done", message: "User Details has been Updated" })
    }
    else
      res.status(404).send({ result: "Fail", message: "Invalid User Id" })
  }
  catch (error) {
    console.log(error)
    res.status(500).send({ result: "Fail", message: "Internal Server Error" })
  }
};

const deleteOneUser = async (req, res) => {
  try {
    const data = await User.findOne({ _id: req.params._id })
    if (data) {
      data.status = false
      await data.save()
      // await User.deleteOne({ _id: req.params._id })
      res.send({ result: "Done", message: "User is deleted !" })
    }
    else
      res.status(404).send({ result: "Fail", message: "Invalid Username" })
  }
  catch (error) {
    res.status(500).send({ result: "Fail", message: "Internal Server Error" })
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
