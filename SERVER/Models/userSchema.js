const mongoose = require("mongoose")
const validator = require("validator")

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email!")
      }
    },
  },
  username: {
    type: String,
    // required: true,
  },
  password: {
    type: String,

  },
  // googleId: {
  //   type: String,
  //   unique: true,
  //   sparse: true,
  // },
  picture: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
})

const users = mongoose.model("users", userSchema)
module.exports = users
