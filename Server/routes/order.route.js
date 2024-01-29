const {
  getAllOrder,
  createOrder,
  getOrderByID,
  getOrderByUserID,
  getOrderByStatus,
  updateOrderStatusByID,
  deleteOrderByID,
} = require("../controller/order.controller");

const router = require("express").Router();
// const verifyAdmin = require("../middleware/verifyAdmin");
// const verifyToken = require("../middleware/verifyToken");

// router.use(verifyToken);
router.route("/order").get(getAllOrder).post(createOrder);
router
  .route("/order/:id")
  .get(getOrderByID)
  .put(updateOrderStatusByID)
  .delete(deleteOrderByID);
router.route("/order/user/:id").get(getOrderByUserID);
router.route("/order/status/:id").get(getOrderByStatus);
module.exports = router;
