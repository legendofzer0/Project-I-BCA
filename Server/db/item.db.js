// const express = require(`express`);
const pool = require(`./conn.db`);

const getAllItemDb = async () => {
  const { rows: items } = await pool.query(`SELECT * from items`);
  return items;
};
const getItemByIdDb = async (id) => {
  const { rows: items } = await pool.query(
    `SELECT item_name,tags,price FROM items WHERE item_id = ${id}`
  );
  return items;
};
const getItemInfoByIdDb = async (id) => {
  const { rows: items } = await pool.query(
    `SELECT item_name,tags,price,description FROM items WHERE item_id = ${id}`
  );
  return items;
};

const createItemDb = async ({ item_name, tags, price, description }) => {
  console.log(description);
  const { rows: items } = await pool.query(
    `
    INSERT INTO items(item_name,tags,price,description) 
    VALUES ('${item_name}','${tags}',${price},'${description}')`
  );
  return items[0];
};

const updateItemByIdDb = async ({
  id,
  item_name,
  tags,
  price,
  description,
}) => {
  const { rows: items } = await pool.query(
    `UPDATE items SET item_name='${item_name}',tags='${tags}',price=${price},description='${description}' WHERE item_id =${id}`
  );
  return items[0];
};

const changeItemImageDB = async ({ id, filename }) => {
  return await pool.query(
    `UPDATE items set image ='${filename}' where item_id=${id}`
  );
};

const deleteItemByID = async (id) => {
  const { rows: items } = await pool.query(
    `DELETE FROM items where item_id = ${id} returning *`
  );
  return items[0];
};

module.exports = {
  getAllItemDb,
  getItemByIdDb,
  getItemInfoByIdDb,
  createItemDb,
  updateItemByIdDb,
  changeItemImageDB,
  deleteItemByID,
};
