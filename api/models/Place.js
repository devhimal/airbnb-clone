const mongoose = require("mongoose")

const PlaceSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  address: String,
  photos: [String],
  description: String,
  Perks: [String],
  exInfo: String,
  checkIn: Number,
  checkOut: Number,
  maxguest: Number,
})

const PlaceModal = mongoose.model("place", PlaceSchema)

module.exports = PlaceModal
