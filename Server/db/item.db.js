// const express = require(`express`);
const pool = require(`./conn.db`);

const getAllItemDb = async () => {
  const { rows: items } = await pool.query(`SELECT item_name from items`);
  return items;
};
const getItemByIdDb = async (id) => {
  const { rows: items } = await pool.query(
    `SELECT item_name,tags,price FROM items WHERE item_id = ${id}`
  );
  return items;
};

const createItemDb = async ({ item_name, tags, price, image }) => {
  const { rows: items } = await pool.query(
    `
    INSERT INTO items(item_name,tags,price,) 
    VALUES ('${item_name}','${tags}',${price},'${image}')`
  );
  return items[0];
};

const updateItemByIdDb = async ({ id, item_name, tags, price }) => {
  const { rows: items } = await pool.query(
    `UPDATE items SET item_name='${item_name}',tags='${tags}',price=${price} WHERE item_id =${id}`
  );
  return items[0];
};

const changeItemImageDB = async ({ id, image }) => {
  return await pool.query(
    `UPDATE items set image ='${image}' where item_id=${id}`
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
  createItemDb,
  updateItemByIdDb,
  changeItemImageDB,
  deleteItemByID,
};
