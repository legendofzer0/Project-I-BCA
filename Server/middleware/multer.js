const multer = require("multer");
const path = require("path");

const allowedFileTypes = ["image/png", "image/jpeg"];

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error("Invalid file type. Only PNG and JPEG files are allowed."),
      false
    );
  }
};

// Integrate the fileFilter with multer configuration
const upload = multer({ storage, fileFilter }); // <- Added fileFilter here

const loggingMiddleware = (req, res, next) => {
  console.log("Logging middleware is running");
  console.log("Request method:", req.method);
  console.log("Request path:", req.path);

  // Conditionally log req.files or req.file based on the operation
  if (req.files) {
    console.log("Request files:", req.files);
  } else if (req.file) {
    console.log("Request file:", req.file);
  }

  console.log("Request body:", req.body);
  next(); 
  };

module.exports = {
  upload,
  loggingMiddleware,
};
