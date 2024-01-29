// const { logger } = require("../utils/logger");

class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.status = "error";
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, req, res) => {
  const { statusCode, message } = err;
  // logger.error(err); // Uncomment if you have a logger
  console.log(err);
  res.status(statusCode || 500).json({
    status: "error",
    statusCode: statusCode || 500,
    message: statusCode === 500 ? "An error occurred" : message,
  });
};

module.exports = {
  ErrorHandler,
  handleError,
};
