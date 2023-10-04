const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
  },
  username: {
    type: String,
    unique: true,
    required: [true, "username is Required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "User Email Address is Required"],
  },
  phone: {
    type: String,
    required: [true, "User Phone Number is Required"],
  },
  password: {
    type: String,
    required: [true, "User Password is Required"],
  },
  pic: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    default: "User",
  },
  tokens: [],
  otp: {
    type: Number,
    default: -1,
  },
  status: {
    type: Boolean,
    default: true,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    default: new Date(),
  },
});


const User = new mongoose.model("User", UserSchema);
module.exports = User;
