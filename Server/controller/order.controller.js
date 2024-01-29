const orderService = require("../services/order.service");
const { ErrorHandler } = require("../helper/error");

const getAllOrder = async (req, res) => {
  const result = await orderService.getAllOrders();
  res.status(200).json(result);
};

const createOrder = async (req, res) => {
  const { f_item_id, f_user_id, delivery_address, quantity } = req.body;
  console.log(req.body);
  // try {
  const order = await orderService.createOrder({
    f_item_id,
    f_user_id,
    delivery_address,
    quantity,
  });
  res.status(201).json({
    status: "success",
    order,
  });
  // } catch (error) {
  // throw new ErrorHandler(error.statusCode, "create error");
  // }
};

const getOrderByID = async (req, res) => {
  const { id } = req.params;
  // if (req.order.role.includes("admin")) {
  try {
    const order = await orderService.getOrderById(id);
    return res.status(200).json(order);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, "order Not Found");
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};
const getOrderByUserID = async (req, res) => {
  const { id } = req.params;
  // if (req.order.role.includes("admin")) {
  try {
    const order = await orderService.getOrderByUserId(id);
    return res.status(200).json(order);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, "order Not Found");
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};
const getOrderByStatus = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (id === "0") {
    stat = "pending";
    console.log(stat);
  } else if (id === "1") {
    stat = "cooking";
    console.log(stat);
  } else if (id === "2") {
    stat = "on-route";
    console.log(stat);
  } else if (id === "3") {
    stat = "delivered";
    console.log(stat);
  } else {
    throw new ErrorHandler(error.statusCode, "status does not exist");
  }
  // if (req.order.role.includes("admin")) {
  try {
    const order = await orderService.getOrderByStatus(stat);
    return res.status(200).json(order);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, "order Not Found");
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

const updateOrderStatusByID = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  // if (req.order.role.includes("admin")) {
  try {
    const order = await orderService.updateOrderStatusById({
      id,
      status,
    });

    return res.status(200).json(order);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, "order Not Found");
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

const deleteOrderByID = async (req, res) => {
  const { id } = req.params;
  // if (req.order.role.includes("admin")) {
  try {
    const order = await orderService.deleteOrderById(id);
    return res.status(200).json(order);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, "order Not Found");
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

module.exports = {
  getAllOrder,
  createOrder,
  getOrderByID,
  getOrderByUserID,
  getOrderByStatus,
  updateOrderStatusByID,
  deleteOrderByID,
};
