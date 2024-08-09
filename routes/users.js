var express = require('express');
var router = express.Router();

const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
 
mongoose.connect("mongodb://127.0.0.1:27017/testingendgame2");

const userShema = mongoose.Schema({
  username: String,
  password: String,
  secret: String
});
 
userShema.plugin(plm);
module.exports = mongoose.model("user", userShema);
