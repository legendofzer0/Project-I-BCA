const pool = require("./conn.db");

const getAllUserNameDb = async () => {
  const { rows: users } = await pool.query("SELECT username from users");
  return users;
};
const getUserByEmailDb = async (email) => {
  const { rows: users } = await pool.query(
    `SELECT username from users WHERE email=$1`[email]
  );
  return users;
};
const getUserByIdDb = async (ID) => {
  const { rows: users } = await pool.query(
    `SELECT username from users WHERE user_id =$1`[ID]
  );
  return users;
};
const createUserDb = async ({ username, password, email, phone_number,Full_Name}) => {
  const { rows: users } = await pool.query(
    `
    INSERT INTO USERS(username,email,password,phone_number,Full_Name) 
    VALUES ($1,$2,$3,$4,$5)
  returning username,email,phone_number,created_at)`[
      (username, password, email, phone_number, Full_Name)
    ]
  );
  return user[0];
};

const updateUserByID = async ({ user_id, username, email, phone_number }) => {
  const { rows: users } = await pool.query(
    "UPDATE users SET username=$1,email=$2,phone_number=$3,Full_Name=$4 WHERE user_id =$5",
    [username, email, phone_number, Full_Name, user_id]
  );
  return users[0];
};

const changeUserPasswordDB = async ({ email, password }) => {
  return await pool.query("UPDATE users set password =$1 where email=$2", [
    password,
    email,
  ]);
};

const deleteUserByID = async (user_id) => {
  const { rows: users } = await pool.query(
    "DELETE FROM users where user_id = $1 returning *",
    [user_id]
  );
  return users[0];
};

module.exports = {
  getAllUserNameDb,
  getUserByEmailDb,
  getUserByIdDb,
  createUserDb,
  updateUserByID,
  deleteUserByID,
  changeUserPasswordDB,
};
