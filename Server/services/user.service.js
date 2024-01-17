const {
  getUserByEmailDb,
  getUserByIdDb,
  createUserDb,
  updateUserByID,
  deleteUserByID,
  changeUserPasswordDB,
} = require("../db/user.db.js");
const { EventHandler } = require("../helper/error");

class UserService {
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
}
