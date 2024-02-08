const {
  getAllOrderDb,
  getOrderByIdDb,
  getOrderByUserIdDb,
  getOrderByStatusDb,
  createOrderDb,
  updateOrderStatusByIdDb,
  deleteOrderByID,
} = require("../db/order.db");
const { ErrorHandler } = require("../helper/error");

class OrderService {
  getAllOrders = async () => {
    try {
      return await getAllOrderDb();
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  createOrder = async (order) => {
    try {
      return await createOrderDb(order);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  getOrderById = async (id) => {
    try {
      const order = await getOrderByIdDb(id);
      return order;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  getOrderByUserId = async (id) => {
    try {
      const order = await getOrderByUserIdDb(id);
      return order;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  getOrderByStatus = async (id) => {
    try {
      const order = await getOrderByStatusDb(id);
      return order;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  updateOrderStatusById = async (id) => {
    try {
      const order = await updateOrderStatusByIdDb(id);
      console.log(order);
      return order;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  deleteOrderById = async (id) => {
    try {
      const order = await deleteOrderByID(id);
      return order;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
}

module.exports = new OrderService();
