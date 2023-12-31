const pool = require("./conn.db");

const getAllUserNameDb = async () => {
  const { rows: users } = await pool.query("SELECT username from users");
  return users;
};
const createUserDb = async ({ username, password, email, phone_number }) => {
  const { rows: users } = await pool.query(
    `
  INSERT INTO USERS(username,email,password) 
  VALUES ($1,$2,$3,$4,$5)
  returning username,email,phone_number,created_at)`[
      (username, password, email, phone_number)
    ]
  );
  return user[0];
};

const updateUserByID = async ({ user_id, username, email, phone_number }) => {
  const { rows: users } = await pool.query(
    "UPDATE users SET username=$1,email=$2,phone_number=$3 WHERE user_id =$5",
    [username, email, phone_number, user_id]
  );
  return users[0];
};

const changeUserPasswordDB = async ({ user_id, password }) => {
  return await pool.query("UPDATE users set password =$1 where user_id=$2", [
    password,
    user_id,
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
  createUserDb,
  updateUserByID,
  deleteUserByID,
  changeUserPasswordDB,
};
