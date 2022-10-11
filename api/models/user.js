// STEP 7 create user.js in  /api/models/user.js

//user.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  networkId: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {type: String},
  lastName: {type: String},
  email: {type: String},
  password: {type: String},
  isAdmin: {type: Boolean, default: false}
}, {versionKey: false});

const User = mongoose.model("user", userSchema);
module.exports = User;

