const { ErrorHandler } = require("../helper/error");

module.exports = (req, res, next) => {
  const { roles } = req.user;
  if (roles.includes("admin")) {
    req.user = {
      ...req.user,
      roles,
    };
    return next();
  } else {
    throw new ErrorHandler(401, "require Admin Role");
  }
};
