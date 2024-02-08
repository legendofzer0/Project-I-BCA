const multer = require("multer");
const path = require("path");

const allowedFileTypes = ["image/png", "image/jpeg"];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "D:/4th sem/Project I/Code/images");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    const fileName = file.fieldname + "-" + uniqueSuffix + fileExtension;
    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only PNG and JPEG files are allowed."));
  }
};

const upload = multer({
  dest: "uploads//",
  storage: storage,
  fileFilter: fileFilter,
});

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
