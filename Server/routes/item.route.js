const {
  getAllItem,
  createItem,
  getItemByID,
  updateItemByID,
  deleteItemByID,
  changeItemImage,
} = require("../controller/item.controller");

const router = require("express").Router();
// const verifyAdmin = require("../middleware/verifyAdmin");
// const verifyToken = require("../middleware/verifyToken");

// router.use(verifyToken);
router.route("/item").get(getAllItem).post(createItem);
router
  .route("/item/:id")
  .get(getItemByID)
  .put(updateItemByID)
  .delete(deleteItemByID);
router.route("/item/img/:id").put(changeItemImage);
module.exports = router;
