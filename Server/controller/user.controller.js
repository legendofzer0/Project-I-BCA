const userService = require("../services/user.service");
const { ErrorHandler } = require("../helper/error");

const getAllUser = async (res, req) => {
  const result = await userService.getAllUser();
  res.status(200).json(result);
};

const createUser = async (res, req) => {
  const { username, password, email, phone_number, Full_Name } = req.body;

  const user = await userService.createUser({
    username,
    password,
    email,
    phone_number,
    Full_Name,
  });

  res.status(201).json({
    status: "success",
    user,
  });
};

const getUserByProfile = async (res, req) => {
  const { id } = req.user;
  const user = await userService.getUserById(id);
  return res.status(200).json(user);
};
const getUserByID = async (res, req) => {
  const { id } = req.params;
  if (req.user.role.includes("admin")) {
    try {
      const user = await userService.getUserById(id);
      return res.status(200).json(user);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, "User Not Found");
    }
  }
  throw new ErrorHandler(401, "Unauthorized");
};

const getUserByEmail = async (res, req) => {
  const { Email } = req.params;
  if (req.user.role.includes("admin")) {
    try {
      const user = await userService.getUserByEmail(Email);
      return res.status(200).json(user);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, "User Not Found");
    }
  }
  throw new ErrorHandler(401, "Unauthorized");
};

const updateUserByID = async (res, req) => {
  const { id } = req.params;
  if (req.user.role.includes("admin")) {
    try {
      const user = await userService.updateUserByID(id);
      return res.status(200).json(user);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, "User Not Found");
    }
  }
  throw new ErrorHandler(401, "Unauthorized");
};

const deleteUserByID = async (res, req) => {
  const { id } = req.params;
  if (req.user.role.includes("admin")) {
    try {
      const user = await userService.deleteUserByID(id);
      return res.status(200).json(user);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, "User Not Found");
    }
  }
  throw new ErrorHandler(401, "Unauthorized");
};

module.exports = {
  getAllUser,
  createUser,
  getUserByEmail,
  getUserByID,
  updateUserByID,
  deleteUserByID,
  getUserByProfile,
};
