const {
  getAllCartDb,
  getCartByIdDb,
  getCartByUserIdDb,
  createCartDb,
  updateCartQuantityByIdDb,
  deleteCartByID,
} = require("../db/cart.db");
const { ErrorHandler } = require("../helper/error");

class CartService {
  getAllCarts = async () => {
    try {
      return await getAllCartDb();
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  createCart = async (cart) => {
    try {
      return await createCartDb(cart);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  getCartById = async (id) => {
    try {
      const cart = await getCartByIdDb(id);
      return cart;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  getCartByUserId = async (user_id) => {
    try {
      const cart = await getCartByUserIdDb(user_id);
      return cart;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  updateCartQuantityById = async (id) => {
    try {
      const cart = await updateCartQuantityByIdDb(id);
      return cart;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  deleteCartById = async (id) => {
    try {
      const cart = await deleteCartByID(id);
      return cart;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  changeCartImage = async (id) => {
    try {
      const cart = await changeCartImageDB(id);
      return cart;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
}

module.exports = new CartService();
