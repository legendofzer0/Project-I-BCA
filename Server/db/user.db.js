// const express = require(`express`);
const pool = require(`./conn.db`);

const getAllUserNameDb = async () => {
  const { rows: users } = await pool.query(`SELECT username from users`);
  return users;
};
const getUserByIdDb = async (id) => {
  const { rows: users } = await pool.query(
    `SELECT user_id, username, email, full_name FROM users WHERE user_id = ${id}`
  );
  return users;
};

const createUserDb = async ({
  username,
  password,
  email,
  phone_number,
  full_name,
}) => {
  const { rows: users } = await pool.query(
    `
    INSERT INTO USERS(username,email,password,phone_number,full_name) 
    VALUES ('${username}','${password}','${email}',${phone_number},'${full_name}')
  returning username,email,phone_number`
  );
  return users[0];
};

const updateUserByID = async ({
  id,
  username,
  email,
  phone_number,
  full_name,
}) => {
  const { rows: users } = await pool.query(
    `UPDATE users SET username='${username}',email='${email}',phone_number=${phone_number},full_name='${full_name}' WHERE user_id =${id}`
  );
  return users[0];
};

const changeUserPasswordDB = async ({ email, password }) => {
  return await pool.query(
    `UPDATE users set password =${password} where email=${email}`
  );
};

const deleteUserByID = async (user_id) => {
  const { rows: users } = await pool.query(
    `DELETE FROM users where user_id = $1 returning *`,
    [user_id]
  );
  return users[0];
};

module.exports = {
  getAllUserNameDb,
  getUserByIdDb,
  createUserDb,
  updateUserByID,
  deleteUserByID,
  changeUserPasswordDB,
};
