const multer = require("multer");
const path = require("path");

const allowedFileTypes = ["image/png", "image/jpeg"];

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./images");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  // const filename = req.body;
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only PNG and JPEG files are allowed."));
  }
};

const upload = multer({ storage });

const loggingMiddleware = (req, res, next) => {
  console.log("Logging middleware is running");
  console.log("Request method:", req.method);
  console.log("Request path:", req.path);
  console.log("Request file:", req.files);
  console.log("Request body:", req.body);

  // Log file information if available
  next(); // Move on to the next middleware or route handler
};

module.exports = {
  upload: upload,
  loggingMiddleware: loggingMiddleware,
};
