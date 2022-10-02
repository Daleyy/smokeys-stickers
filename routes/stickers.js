const express = require("express");
const router = express.Router();

const getStickers = require('../controllers/stickers')

router.get("/", getStickers);

router.post("/", (req, res) => {
  res.send("Add sticker");
});

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
