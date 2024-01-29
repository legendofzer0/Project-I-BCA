const itemService = require("../services/item.service");
const { ErrorHandler } = require("../helper/error");

const getAllItem = async (req, res) => {
  const result = await itemService.getAllItems();
  res.status(200).json(result);
};

const createItem = async (req, res) => {
  const { item_name, tags, price, image } = req.body;
  console.log(req.body);
  // try {
  const item = await itemService.createItem({
    item_name,
    tags,
    price,
    image,
  });
  res.status(201).json({
    status: "success",
    item,
  });
  // } catch (error) {
  // throw new ErrorHandler(error.statusCode, "create error");
  // }
};

const getItemByID = async (req, res) => {
  const { id } = req.params;
  // if (req.item.role.includes("admin")) {
  try {
    const item = await itemService.getItemById(id);
    return res.status(200).json(item);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, "item Not Found");
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

const updateItemByID = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { item_name, tags, price } = req.body;
  // if (req.item.role.includes("admin")) {
  try {
    const item = await itemService.updateItemById({
      id,
      item_name,
      tags,
      price,
    });

    return res.status(200).json(item);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, "item Not Found");
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

const deleteItemByID = async (req, res) => {
  const { id } = req.params;
  // if (req.item.role.includes("admin")) {
  try {
    const item = await itemService.deleteItemByID(id);
    return res.status(200).json(item);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, "item Not Found");
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

const changeItemImage = async (req, res) => {
  const { id } = req.params;
  const { image } = req.body;
  // if (req.item.role.includes("admin")) {
  try {
    const item = await itemService.changeItemImage({ id, image });
    return res.status(200).json(item);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, "item Not Found");
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

module.exports = {
  getAllItem,
  createItem,
  getItemByID,
  updateItemByID,
  deleteItemByID,
  changeItemImage,
};
