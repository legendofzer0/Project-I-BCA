const userService = require("../services/user.service");
const { ErrorHandler } = require("../helper/error");

const getAllUser = async (req, res) => {
  const result = await userService.getAllUser();
  res.status(200).json(result);
};

const createUser = async (req, res) => {
  const { username, password, email, phone_number, full_name } = req.body;
  console.log(req.body);
  // try {
  const user = await userService.createUser({
    username,
    password,
    email,
    phone_number,
    full_name,
  });
  res.status(201).json({
    status: "success",
    user,
  });
  // } catch (error) {
  // throw new ErrorHandler(error.statusCode, "create error");
  // }
};

const getUserByID = async (req, res) => {
  const { id } = req.params;
  // if (req.user.role.includes("admin")) {
  try {
    const user = await userService.getUserById(id);
    return res.status(200).json(user);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, "User Not Found");
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

const updateUserByID = async (req, res) => {
  const { id } = req.params;
  const { username, email, phone_number, full_name } = req.body;
  // if (req.user.role.includes("admin")) {
  try {
    const user = await userService.updateUserByID({
      id,
      username,
      email,
      phone_number,
      full_name,
    });

    return res.status(200).json(user);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, "User Not Found");
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

const deleteUserByID = async (req, res) => {
  const { id } = req.params;
  // if (req.user.role.includes("admin")) {
  try {
    const user = await userService.deleteUserByID(id);
    return res.status(200).json(user);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, "User Not Found");
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

module.exports = {
  getAllUser,
  createUser,
  getUserByID,
  updateUserByID,
  deleteUserByID,
};
