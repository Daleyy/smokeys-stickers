const Sticker = require("../models/Sticker");

const getStickers = async (req, res) => {
  try {
    const stickers = await Sticker.find();
    res.status(200).json(stickers);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getStickers