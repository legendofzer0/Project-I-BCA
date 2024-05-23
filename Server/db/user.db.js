// const express = require(`express`);
const pool = require(`./conn.db`);

const getAllUserNameDb = async () => {
  const { rows: users } = await pool.query(`SELECT * from users `);
  return users;
};
const getUserByIdDb = async (id) => {
  const { rows: users } = await pool.query(
    `SELECT * FROM users WHERE user_id = ${id}`
  );
  return users;
};

const getUserByEmailDb = async (email) => {
  // console.log(email + "testD");
  const { rows: users } = await pool.query(
    `SELECT * FROM users WHERE email = $1`,
    [email]
  );
  return users;
};

const getUserByPhoneDb = async (phone_number) => {
  const { rows: users } = await pool.query(
    `SELECT * FROM users WHERE phone_number = $1`,
    [phone_number]
  );
  return users;
};

const getUserByUsernameDb = async (username) => {
  console.log(username);
  const { rows: users } = await pool.query(
    `SELECT  * FROM users WHERE username = '${username}'`
  );
  return users;
};

const createUserDb = async ({
  username,
  email,
  password,
  phone_number,
  full_name,
}) => {
  console.log(username, password, email, phone_number, full_name);
  const { rows: users } = await pool.query(
    `
    INSERT INTO USERS(username,email,password,phone_number,full_name) 
    VALUES ('${username}','${email}','${password}',${phone_number},'${full_name}')
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

const updateUserRoleByID = async ({
  id,
  username,
  email,
  phone_number,
  role,
  full_name,
}) => {
  const { rows: users } = await pool.query(
    `UPDATE users SET username='${username}',email='${email}',phone_number=${phone_number},full_name='${full_name}', role='${role}' WHERE user_id =${id}`
  );
  return users[0];
};

const changeUserPasswordDB = async ({ id, password }) => {
  console.log(id, password);
  return await pool.query(
    `UPDATE users set password ='${password}' where user_id=${id}`
  );
};

const deleteUserByID = async (ID) => {
console.log(ID);
  const { rows: users } = await pool.query(
    `DELETE FROM users where user_id = $1 returning *`,
    [ID]
  );
  return users[0];
};

module.exports = {
  getAllUserNameDb,
  getUserByIdDb,
  getUserByEmailDb,
  getUserByPhoneDb,
  getAllUserNameDb,
  createUserDb,
  updateUserByID,
  updateUserRoleByID,
  getUserByUsernameDb,
  deleteUserByID,
  changeUserPasswordDB,
};
