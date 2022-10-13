require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const connectToDB = require("./db/connect");
const stickers = require("./routes/stickers");

app.use("/api/v1/stickers", stickers);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const start = async () => {
  try {
    await connectToDB(process.env.MONGO_URI).then(() =>
      console.log("Connected to Database...")
    );
    app.listen(PORT, () => {
      console.log(`Server started on ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
