const {
  getAllItemDb,
  getItemByIdDb,
  createItemDb,
  updateItemByIdDb,
  changeItemImageDB,
  deleteItemByID,
} = require("../db/item.db");
const { ErrorHandler } = require("../helper/error");

class ItemService {
  getAllItems = async () => {
    try {
      return await getAllItemDb();
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  createItem = async (item) => {
    try {
      return await createItemDb(item);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  getItemById = async (id) => {
    try {
      const item = await getItemByIdDb(id);
      return item;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  updateItemById = async (id) => {
    try {
      const item = await updateItemByIdDb(id);
      console.log(item);
      return item;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  deleteItemById = async (id) => {
    try {
      const item = await deleteItemByID(id);
      return item;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
  changeItemImage = async (id) => {
    try {
      const item = await changeItemImageDB(id);
      return item;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
}

module.exports = new ItemService();
