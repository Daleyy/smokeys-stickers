const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });

const { getStickers, addSticker, getSticker, deleteSticker } = require("../controllers/stickers");

router.get("/", getStickers);

router.post("/", upload.single("file"), addSticker);

router.get("/:id", getSticker);

router.patch("/:id", (req, res) => {
  res.send("Update sticker");
});

router.delete("/:id", deleteSticker);

module.exports = router;
