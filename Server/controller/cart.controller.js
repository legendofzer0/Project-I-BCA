const cartService = require("../services/cart.service");
const { ErrorHandler } = require("../helper/error");

const getAllCart = async (req, res) => {
  const result = await cartService.getAllCarts();
  res.status(200).json(result);
};

const createCart = async (req, res) => {
  const { c_user_id, c_item_id, quantity } = req.body;
  // try {
  const cart = await cartService.createCart({
    c_user_id,
    c_item_id,
    quantity,
  });
  res.status(201).json({
    status: "success",
    cart,
  });
  // } catch (error) {
  // throw new ErrorHandler(error.statusCode, "create error");
  // }
};

const getCartByID = async (req, res) => {
  const { id } = req.params;
  // if (req.cart.role.includes("admin")) {
  try {
    const cart = await cartService.getCartById(id);
    return res.status(200).json(cart);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, "cart Not Found");
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

const getCartUserByID = async (req, res) => {
  const { f_user_id } = req.params;
  // if (req.cart.role.includes("admin")) {
  try {
    const cart = await cartService.getCartByUserId(f_user_id);
    return res.status(200).json(cart);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, "cart Not Found");
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

const updateCartQuantityByID = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  // if (req.cart.role.includes("admin")) {
  try {
    const cart = await cartService.updateCartQuantityById({
      id,
      quantity,
    });

    return res.status(200).json(cart);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, "cart Not Found");
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

const deleteCartByID = async (req, res) => {
  const { id } = req.params;
  // if (req.cart.role.includes("admin")) {
  try {
    const cart = await cartService.deleteCartById(id);
    return res.status(200).json(cart);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, "cart Not Found");
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

module.exports = {
  getAllCart,
  createCart,
  getCartByID,
  getCartUserByID,
  updateCartQuantityByID,
  deleteCartByID,
};
