const Sticker = require("../models/Sticker");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const getStickers = async (req, res) => {
  try {
    const stickers = await Sticker.find();
    res.status(200).json(stickers);
  } catch (error) {
    console.log(error);
  }
};

const addSticker = async (req, res) => {
  try {
    const extensionArray = req.file.mimetype.split("/");
    const extension = extensionArray[extensionArray.length - 1].toLowerCase();
    const filename = req.file.originalname + Date.now() + "." + extension;
    const filePath = req.file.path;
    const newPath = `./uploads/${filename}`;

    if (extension === "png" || extension === "jpeg") {
      fs.rename(filePath, newPath, (err) => {
        if (err) throw err;
      });
      const newSticker = await Sticker.create({ stickerPath: newPath });
      res.status(201).json({ newSticker });
    } else {
      fs.unlink(filePath, (err) => {
        if (err) console.log(err);
        res
          .status(403)
          .contentType("text/plain")
          .end("Only .png or .jpeg files are allowed!");
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getSticker = async (req, res) => {
  try {
    const sticker = await Sticker.findOne({ id:req.params.id });
    res.status(200).json(sticker);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getStickers, addSticker, getSticker };
