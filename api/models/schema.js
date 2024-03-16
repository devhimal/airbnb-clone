const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
  },
  {
    timestamps: true,
  }
)

const UserModel = mongoose.model("user", userSchema)

module.exports = UserModel
