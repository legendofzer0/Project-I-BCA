const {
  getAllCart,
  createCart,
  getCartByID,
  getCartUserByID,
  updateCartQuantityByID,
  deleteCartByID,
} = require("../controller/cart.controller");

const router = require("express").Router();
// const verifyAdmin = require("../middleware/verifyAdmin");
// const verifyToken = require("../middleware/verifyToken");

// router.use(verifyToken);
router.route("/cart").get(getAllCart).post(createCart);
router
  .route("/cart/:id")
  .get(getCartByID)
  .put(updateCartQuantityByID)
  .delete(deleteCartByID);
router.route("/cart/user/:f_user_id").get(getCartUserByID);

module.exports = router;
