const {
  getAllItemDb,
  getItemByIdDb,
  getItemInfoByIdDb,
  createItemDb,
  updateItemByIdDb,
  changeItemImageDB,
  deleteItemByID,
} = require("../db/item.db");

class ItemService {
  getAllItems = async () => {
    try {
      return await getAllItemDb();
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  createItem = async (item) => {
    try {
      return await createItemDb(item);
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  getItemById = async (id) => {
    try {
      const item = await getItemByIdDb(id);
      return item;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };

  getItemInfoById = async (id) => {
    try {
      const item = await getItemInfoByIdDb(id);
      return item;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  updateItemById = async (id) => {
    try {
      const item = await updateItemByIdDb(id);
      console.log(item);
      return item;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  deleteItemById = async (id) => {
    try {
      const item = await deleteItemByID(id);
      return item;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
  changeItemImage = async (id, file) => {
    try {
      return await changeItemImageDB(id, file);
    } catch (error) {
      console.log(error.message);
      return;
    }
  };
}

module.exports = new ItemService();
