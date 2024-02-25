const {
  getAllOrderDb,
  getOrderByIdDb,
  getOrderByUserIdDb,
  getOrderByStatusDb,
  createOrderDb,
  updateOrderStatusByIdDb,
  deleteOrderByID,
} = require("../db/order.db");

class OrderService {
  getAllOrders = async () => {
    try {
      return await getAllOrderDb();
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  createOrder = async (order) => {
    try {
      return await createOrderDb(order);
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  getOrderById = async (id) => {
    try {
      const order = await getOrderByIdDb(id);
      return order;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  getOrderByUserId = async (id) => {
    try {
      const order = await getOrderByUserIdDb(id);
      return order;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  getOrderByStatus = async (id) => {
    try {
      const order = await getOrderByStatusDb(id);
      return order;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  updateOrderStatusById = async (id) => {
    try {
      const order = await updateOrderStatusByIdDb(id);
      console.log(order);
      return order;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  deleteOrderById = async (id) => {
    try {
      const order = await deleteOrderByID(id);
      return order;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
}

module.exports = new OrderService();
