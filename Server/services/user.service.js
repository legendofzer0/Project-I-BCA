const {
  getAllUserNameDb,
  getUserByIdDb,
  getUserByUsernameDb,
  getUserByEmailDb,
  getUserByPhoneDb,
  createUserDb,
  updateUserByID,
  updateUserRoleByID,
  deleteUserByID,
  changeUserPasswordDB,
} = require("../db/user.db.js");

class UserService {
  getAllUser = async () => {
    try {
      return await getAllUserNameDb();
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  createUser = async (user) => {
    try {
      return await createUserDb(user);
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  getUserById = async (id) => {
    try {
      const user = await getUserByIdDb(id);
      console.log(user);
      return user;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  getUserByEmail = async (email) => {
    try {
      // console.log(email + "testS");
      const user = await getUserByEmailDb(email);
      console.log(user);
      return user;
    } catch (error) {
      console.log(error.message);
      return error;
    }
  };
  getUserByPhone = async (phone_number) => {
    try {
      const user = await getUserByPhoneDb(phone_number);
      console.log(user);
      return user;
    } catch (error) {
      console.log(error.message);
      return error;
    }
  };
  getUserByUsername = async (username) => {
    try {
      const user = await getUserByUsernameDb(username);
      return user;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  updateUserByID = async (id) => {
    try {
      const user = await updateUserByID(id);
      console.log(user);
      return user;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  updateUserRoleByID = async (id) => {
    try {
      const user = await updateUserRoleByID(id);
      console.log(user);
      return user;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  deleteUserByID = async (ID) => {
    try {
      const user = await deleteUserByID(ID);
      return user;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  changeUserPassword = async (id) => {
    try {
      const user = await changeUserPasswordDB(id);
      return user;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
}

module.exports = new UserService();
