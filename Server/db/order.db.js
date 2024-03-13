// const express = require(`express`);
const pool = require(`./conn.db`);

const getAllOrderDb = async () => {
  const { rows: orders } = await pool.query(` SELECT 
      o.order_id,
      u.username,
      u.phone_number,
      i.item_name,
      o.delivery_address,
      o.quantity,
      o.status
    FROM 
      orders o
    JOIN 
      users u ON o.f_user_id = u.user_id
    JOIN 
      items i ON o.f_item_id = i.item_id`);
  return orders;
};
const getOrderByIdDb = async (id) => {
  const { rows: orders } = await pool.query(
    `  
    Select
    o.order_id,
      u.username,
      i.item_name,
      o.delivery_address,
      o.quantity,
      o.status
    FROM 
      orders o
    JOIN 
      users u ON o.f_user_id = u.user_id
    JOIN 
      items i ON o.f_item_id = i.item_id
    WHERE 
      o.order_id = ${id}`
  );
  return orders;
};
const getOrderByUserIdDb = async (id) => {
  const { rows: orders } = await pool.query(
    `SELECT 
      o.order_id,
      i.item_name,
      i.price,
      i.image,
      o.delivery_address,
      o.quantity,
      o.status
    FROM 
      orders o
    JOIN 
      items i ON o.f_item_id = i.item_id
    WHERE 
      o.f_user_id = ${id}`
  );
  return orders;
};
const getOrderByStatusDb = async (stat) => {
  const { rows: orders } = await pool.query(
    `SELECT 
      o.order_id,
      u.username,
      i.item_name,
      o.delivery_address,
      o.quantity,
      o.status
    FROM 
      orders o
    JOIN 
      users u ON o.f_user_id = u.user_id
    JOIN 
      items i ON o.f_item_id = i.item_id
    WHERE 
      o.status = '${stat}'
  `
  );
  return orders;
};

const createOrderDb = async ({
  f_item_id,
  f_user_id,
  delivery_address,
  quantity,
}) => {
  const { rows: orders } = await pool.query(
    `
    INSERT INTO orders(f_item_id,f_user_id,delivery_address,quantity) 
    VALUES (${f_item_id},${f_user_id},'${delivery_address}',${quantity})`
  );
  return orders[0];
};

const updateOrderStatusByIdDb = async ({ id, status }) => {
  const { rows: orders } = await pool.query(
    `UPDATE orders SET status='${status}' WHERE order_id =${id}`
  );
  return orders[0];
};

const deleteOrderByID = async (id) => {
  const { rows: orders } = await pool.query(
    `DELETE FROM orders where order_id = ${id} returning *`
  );
  return orders[0];
};

module.exports = {
  getAllOrderDb,
  getOrderByIdDb,
  getOrderByUserIdDb,
  getOrderByStatusDb,
  createOrderDb,
  updateOrderStatusByIdDb,
  deleteOrderByID,
};
