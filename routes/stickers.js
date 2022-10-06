const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });

const { getStickers, addSticker, getSticker } = require("../controllers/stickers");

router.get("/", getStickers);

router.post("/", upload.single("file"), addSticker);

router.get("/:id", getSticker);

router.patch("/:id", (req, res) => {
  res.send("Update sticker");
});

router.delete("/:id", (req, res) => {
  res.send("Delete sticker");
});

module.exports = router;
