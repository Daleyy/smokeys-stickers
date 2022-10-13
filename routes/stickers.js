const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });

const {
  getStickers,
  addSticker,
  getSticker,
  deleteSticker,
  removeBackground
} = require("../controllers/stickers");

router.get("/", getStickers);

router.post("/", upload.single("file"), addSticker);

router.post("/removebg", upload.single("file"), removeBackground);

router.get("/:id", getSticker);

router.patch("/:id", (req, res) => {
  res.send("Update sticker");
});

router.delete("/:id", deleteSticker);

module.exports = router;
