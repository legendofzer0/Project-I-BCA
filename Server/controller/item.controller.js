const itemService = require("../services/item.service");

const getAllItem = async (req, res) => {
  const result = await itemService.getAllItems();
  res.status(200).json(result);
};

const createItem = async (req, res) => {
  const { item_name, tags, price, description } = req.body;
  console.log(req.body);
  // try {
  const item = await itemService.createItem({
    item_name,
    tags,
    price,
    description,
  });
  res.status(201).json({
    status: "success",
    item,
  });
  // } catch (error) {
  // console.log( "create error");
  // }
};

const getItemByID = async (req, res) => {
  const { id } = req.params;
  // if (req.item.role.includes("admin")) {
  try {
    const item = await itemService.getItemById(id);
    return res.status(200).json(item);
  } catch (error) {
    console.log("item Not Found");
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

const getItemInfoByID = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await itemService.getItemInfoById(id);
    return res.status(200).json(item);
  } catch (error) {
    console.log("item Not Found");
  }
};

const updateItemByID = async (req, res) => {
  const { id } = req.params;
  const { item_name, tags, price, description } = req.body;
  // if (req.item.role.includes("admin")) {
  try {
    const item = await itemService.updateItemById({
      id,
      item_name,
      tags,
      price,
      description,
    });

    return res.status(200).json(item);
  } catch (error) {
    console.log("item Not Found");
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

const deleteItemByID = async (req, res) => {
  const { id } = req.params;
  // if (req.item.role.includes("admin")) {
  try {
    const item = await itemService.deleteItemById(id);
    return res.status(200).json(item);
  } catch (error) {
    console.log("item Not Found");
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

const changeItemImage = async (req, res) => {
  const { id } = req.params;
  const { filename } = req.file;
  // console.log(id);
  // console.log(filename);
  // if (req.item.role.includes("admin")) {

  try {
    const item = await itemService.changeItemImage({ id, filename });
    return res.status(200).json(item);
  } catch (error) {
    console.log("item Not Found or image not uploaded");
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

module.exports = {
  getAllItem,
  createItem,
  getItemInfoByID,
  getItemByID,
  updateItemByID,
  deleteItemByID,
  changeItemImage,
};
