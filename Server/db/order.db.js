const pool = require("./conn.db");

const getAllOrderDb = async () => {
  const { rows: orders } = await pool.query("SELECT * from orders");
  return orders;
};
const createItemDb = async ({ itemname, ingrediant, tags }) => {
  const { rows: items } = await pool.query(
    `
  INSERT INTO USERS(itemname, ingrediant, tags) 
  VALUES ($1,$2,$3)
  returning itemname, ingrediant, tags)`[(itemname, ingrediant, tags)]
  );
  return items[0];
};

const updateItemByID = async ({ item_id, itemname, ingrediant, tags }) => {
  const { rows: items } = await pool.query(
    "UPDATE items SET itemname=$1,ingrediants=$2,tags=$3 WHERE user_id =$5",
    [itemname, ingrediant, tags, item_id]
  );
  return items[0];
};
const updateTrackByID = async ({ item_id, order_status }) => {
  const { rows: items } = await pool.query(
    "UPDATE items SET itemname=$1,ingrediants=$2,tags=$3 WHERE user_id =$5",
    [itemname, ingrediant, tags, item_id]
  );
  return items[0];
};

const deleteItemByID = async (item_id) => {
  const { rows: items } = await pool.query(
    "DELETE FROM items where item_id = $1 returning *",
    [item_id]
  );
  return items[0];
};

module.exports = {
  getAllItemNameDb,
  createItemDb,
  updateItemByID,
  deleteItemByID,
};
