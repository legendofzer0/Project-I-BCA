const pool = require("./conn.db");

const getAllItemNameDb = async () => {
  const { rows: items } = await pool.query("SELECT itemname from item");
  return items;
};
const createItemDb = async ({ item_name, tags }) => {
  const { rows: items } = await pool.query(
    `
  INSERT INTO USERS(item_name, tags) 
  VALUES ($1,$2)
  returning item_id,item_name, tags)`[(item_name, tags)]
  );
  return items[0];
};

const updateItemByID = async ({ item_id, itemname, ingrediant, tags }) => {
  const { rows: items } = await pool.query(
    "UPDATE items SET itemname=$1,tags=$2 WHERE user_id =$3",
    [itemname, tags, item_id]
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
