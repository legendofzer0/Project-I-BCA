const {
  getAllUserNameDb,
  getUserByIdDb,
  getUserByUsernameDb,
  createUserDb,
  updateUserByID,
  deleteUserByID,
  changeUserPasswordDB,
} = require("../db/user.db.js");
const { ErrorHandler } = require("../helper/error");

class UserService {
  getAllUser = async () => {
    try {
      return await getAllUserNameDb();
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  createUser = async (user) => {
    try {
      return await createUserDb(user);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  getUserById = async (id) => {
    try {
      const user = await getUserByIdDb(id);
      console.log(user);
      return user;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  getUserByUsername = async (username) => {
    try {
      const user = await getAllUserNameDb(username);
      console.log(user);
      return user;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  updateUserByID = async (id) => {
    try {
      const user = await updateUserByID(id);
      console.log(user);
      return user;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  deleteUserByID = async (ID) => {
    try {
      const user = await deleteUserByID(ID);
      return user;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  changeUserPassword = async (id) => {
    try {
      const user = await changeUserPasswordDB(id);
      return user;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
}

module.exports = new UserService();
