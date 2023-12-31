const multer = require("multer");
const express = require("express");
const path = require("path");
const app = express();

//storage pointer for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cd(error, "../images");
  },
  filename: (req, file, cb) => {
    cb(error, Date.now() + path.extname(file.originalname));
  },
});

//This is for imageupload only
const upload = multer({ storage: storage });

app.set("title", "menu");

app.get("/upload", (req, res) => {
  res.render("Upload");
});

app.post("/upload", upload.single("food-image"), (req, res) => {
  res.render("Image Uploaded");
});

app.listen(5000);
