const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });

const { getStickers, addSticker } = require("../controllers/stickers");

router.get("/", getStickers);

router.post("/", upload.single("file"), addSticker);

router.get("/:id", (req, res) => {
  res.send("Get one sticker");
});

router.patch("/:id", (req, res) => {
  res.send("Update sticker");
});

router.delete("/:id", (req, res) => {
  res.send("Delete sticker");
});

module.exports = router;
