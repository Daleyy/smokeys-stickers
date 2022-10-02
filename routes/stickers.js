const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all stickers");
});

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
