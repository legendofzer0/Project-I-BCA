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
  createOrder = async (item) => {
    try {
      return await createOrderDb(item);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  getOrderById = async (id) => {
    try {
      const item = await getOrderByIdDb(id);
      return item;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  getOrderByUserId = async (id) => {
    try {
      const item = await getOrderByUserIdDb(id);
      return item;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  getOrderByStatus = async (id) => {
    try {
      const item = await getOrderByStatusDb(id);
      return item;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  updateOrderStatusById = async (id) => {
    try {
      const item = await updateOrderStatusByIdDb(id);
      console.log(item);
      return item;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  deleteOrderById = async (id) => {
    try {
      const item = await deleteOrderByID(id);
      return item;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
}

module.exports = new OrderService();
