const mongoose = require("mongoose");
const { Schema } = mongoose;

const stickerSchema = new Schema({
  stickerPath: {
    type: String,
    required: [true, "Sticker filepath required"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Sticker = mongoose.model('Sticker', stickerSchema)

module.exports = Sticker