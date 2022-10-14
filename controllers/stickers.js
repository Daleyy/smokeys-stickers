require("dotenv").config();
const Sticker = require("../models/Sticker");
const fs = require("fs");
const removeBG = require("remove.bg");
const sharp = require("sharp");

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

const removeBackground = async (req, res) => {
  const imageFile = req.file.path;
  const outputFile = req.file.destination + req.file.filename + ".png";
  const apiKey = process.env.REMOVEBG_API_KEY;
  if (!apiKey) {
    throw new Error("No apikey found");
  }

  removeBG
    .removeBackgroundFromImageFile({
      path: imageFile,
      apiKey: apiKey,
      size: "regular",
      position: "center",
      outputFile,
    })
    .then((removedBg) => {
      fs.unlink(req.file.path, () => {
        console.log("Removing original uploaded file...");
      });
      console.log(`File saved to ${outputFile}`);
      console.log(
        `${removedBg.creditsCharged} credit(s) charged for this image`
      );
      console.log(
        `Result width x height: ${removedBg.resultWidth} x ${removedBg.resultHeight}, type: ${removedBg.detectedType}`
      );
      console.log(removedBg.base64img.substring(0, 40) + "..");
      console.log(removedBg.detectedType)
    })
    .then(() => {
      console.log("resizing image");
      sharp(outputFile)
        .resize({
          width: 512,
          height: 512,
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .trim()
        .toFile(`./uploads/${req.file.filename + Date.now()}-resized.png`);
      res.status(201).send("Background removed and image resized");
    })
    .catch((error) => {
      console.log(error);
    });

  return null;
};

const getSticker = async (req, res) => {
  try {
    const sticker = await Sticker.findOne({ _id: req.params.id });
    res.status(200).json(sticker);
  } catch (error) {
    console.log(error);
  }
};

const deleteSticker = async (req, res) => {
  try {
    const sticker = await Sticker.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(sticker);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getStickers,
  addSticker,
  getSticker,
  deleteSticker,
  removeBackground,
};
