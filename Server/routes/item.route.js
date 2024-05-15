const {
  getAllItem,
  createItem,
  getItemByID,
  getItemInfoByID,
  updateItemByID,
  deleteItemByID,
  changeItemImage,
} = require("../controller/item.controller");

const router = require("express").Router();
const { upload, loggingMiddleware } = require("../middleware/multer");

// const verifyAdmin = require("../middleware/verifyAdmin");
// const verifyToken = require("../middleware/verifyToken");

// router.use(verifyToken);

router.route("/item").get(getAllItem).post(createItem);
router
  .route("/item/:id")
  .get(getItemByID)
  .put(updateItemByID)
  .delete(deleteItemByID);
router.route("/item/info/:id").get(getItemInfoByID);
router.route("/item/img/:id").put(upload.single("filename"), loggingMiddleware, changeItemImage);
module.exports = router;
