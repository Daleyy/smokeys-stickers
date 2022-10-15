const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });

const {
  getStickers,
  addSticker,
  getSticker,
  deleteSticker,
  removeBackground,
} = require("../controllers/stickers");

router.route("/").get(getStickers).post(upload.single("file"), addSticker);

router
  .route("/:id")
  .get(getSticker)
  .patch((req, res) => {
    res.send("Update sticker");
  })
  .delete(deleteSticker);

router.post("/removebg", upload.single("file"), removeBackground);

module.exports = router;
