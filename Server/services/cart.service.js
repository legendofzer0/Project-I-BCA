const {
  getAllCartDb,
  getCartByIdDb,
  getCartByUserIdDb,
  createCartDb,
  updateCartQuantityByIdDb,
  deleteCartByID,
} = require("../db/cart.db");

class CartService {
  getAllCarts = async () => {
    try {
      return await getAllCartDb();
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  createCart = async (cart) => {
    try {
      return await createCartDb(cart);
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  getCartById = async (id) => {
    try {
      const cart = await getCartByIdDb(id);
      return cart;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  getCartByUserId = async (user_id) => {
    try {
      const cart = await getCartByUserIdDb(user_id);
      return cart;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  updateCartQuantityById = async (id) => {
    try {
      const cart = await updateCartQuantityByIdDb(id);
      return cart;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  deleteCartById = async (id) => {
    try {
      const cart = await deleteCartByID(id);
      return cart;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  changeCartImage = async (id) => {
    try {
      const cart = await changeCartImageDB(id);
      return cart;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
}

module.exports = new CartService();
