// const express = require(`express`);
const pool = require(`./conn.db`);

const getAllCartDb = async () => {
  const { rows: carts } = await pool.query(`SELECT 
      c.cart_id,
      c.c_user_id,
      u.username,
      c.c_item_id,
      i.item_name,
      c.quantity
    FROM 
      cart c
    JOIN 
      users u ON c.c_user_id = u.user_id
    JOIN 
      items i ON c.c_item_id = i.item_id`);
  return carts;
};

const getCartByIdDb = async (id) => {
  const { rows: carts } = await pool.query(
    `SELECT 
      c.cart_id,
      c.c_user_id,
      u.username,
      c.c_item_id,
      i.item_name,
      c.quantity
    FROM 
      cart c
    JOIN 
      users u ON c.c_user_id = u.user_id
    JOIN 
      items i ON c.c_item_id = i.item_id
    WHERE 
      c.cart_id = ${id}`
  );
  return carts;
};

const getCartByUserIdDb = async (user_id) => {
  const { rows: carts } = await pool.query(
    ` SELECT 
      c.cart_id,
      c.c_user_id,
      c.c_item_id,
      i.item_name,
      c.quantity
    FROM 
      cart c
    JOIN 
      items i ON c.c_item_id = i.item_id
    WHERE 
      c.c_user_id = ${user_id}`
  );
  return carts;
};

const createCartDb = async ({ c_user_id, c_item_id, quantity }) => {
  const { rows: carts } = await pool.query(
    `
    INSERT INTO carts(c_user_id, c_item_id, quantity) 
    VALUES (${c_user_id},${c_item_id},${quantity})`
  );
  return carts;
};

const updateCartQuantityByIdDb = async ({ id, quantity }) => {
  const { rows: carts } = await pool.query(
    `UPDATE carts SET quantity=${quantity} WHERE cart_id =${id}`
  );
  return carts[0];
};

const deleteCartByID = async (id) => {
  const { rows: carts } = await pool.query(
    `DELETE FROM carts where cart_id = ${id} returning *`
  );
  return carts[0];
};

module.exports = {
  getAllCartDb,
  getCartByIdDb,
  getCartByUserIdDb,
  createCartDb,
  updateCartQuantityByIdDb,
  deleteCartByID,
};
