const {
  getAllUserNameDb,
  getUserByIdDb,
  getUserByEmailDb,
  createUserDb,
  updateUserByID,
  deleteUserByID,
  changeUserPasswordDB,
} = require("../db/user.db.js");
const { EventHandler } = require("../helper/error");

class UserService {
  getAllUser = async () => {
    try {
      return await getAllUserNameDb();
    } catch (error) {
      throw new EventHandler(error.statusCode, error.message);
    }
  };
  createUser = async (user) => {
    try {
      return await createUserDb(user);
    } catch (error) {
      throw new EventHandler(error.statusCode, error.message);
    }
  };
  getUserByEmail = async (email) => {
    try {
      const user = await getUserByEmailDb(email);
      return user;
    } catch (error) {
      throw new EventHandler(error.statusCode, error.message);
    }
  };
  getUserById = async (ID) => {
    try {
      const user = await getUserByIdDb(ID);
      return user;
    } catch (error) {
      throw new EventHandler(error.statusCode, error.message);
    }
  };
  updateUserByID = async (ID) => {
    try {
      const user = await updateUserByID(ID);
      return user;
    } catch (error) {
      throw new EventHandler(error.statusCode, error.message);
    }
  };
  deleteUserByID = async (ID) => {
    try {
      const user = await deleteUserByID(ID);
      return user;
    } catch (error) {
      throw new EventHandler(error.statusCode, error.message);
    }
  };
  changeUserPassword = async (ID) => {
    try {
      const user = await changeUserPasswordDB(ID);
      return user;
    } catch (error) {
      throw new EventHandler(error.statusCode, error.message);
    }
  };
}

module.exports = new UserService();
