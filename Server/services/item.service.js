const {
  getAllItemNameDb,
  createItemDb,
  updateItemByID,
  deleteItemByID,
} = require("../db/item.db");
const { EventHandler } = require("../helper/error");

class itemService {
  createUser = async (item) => {
    try {
      return await createItemDb(item);
    } catch (error) {
      throw new EventHandler(error.statusCode, error.message);
    }
  };
}
