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
    email,
    password,
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

const getUserByUsername = async (req, res) => {
  const { username } = req.body;
  console.log(username);
  // if (req.user.role.includes("admin")) {
  try {
    const user = await userService.getUserByUsername(username);
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

const updateUserRoleByID = async (req, res) => {
  const { id } = req.params;
  const { username, email, phone_number, full_name, role } = req.body;
  // if (req.user.role.includes("admin")) {
  console.log(id, username, email, phone_number, role, full_name);

  try {
    const user = await userService.updateUserRoleByID({
      id,
      username,
      email,
      phone_number,
      role,
      full_name,
    });
    return res.status(200).json(user);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, "User Not Found");
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

const changeUserPassword = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  // if (req.user.role.includes("admin")) {
  try {
    const user = await userService.changeUserPassword({
      id,
      password,
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
  getUserByUsername,
  updateUserByID,
  updateUserRoleByID,
  deleteUserByID,
  changeUserPassword,
};
