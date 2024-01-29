const {
  getAllUser,
  createUser,
  getUserByID,
  updateUserByID,
  deleteUserByID,
  getUserByProfile,
} = require("../controller/user.controller");

const router = require("express").Router();
// const verifyAdmin = require("../middleware/verifyAdmin");
// const verifyToken = require("../middleware/verifyToken");

// router.use(verifyToken);
router.route("/user").get(getAllUser).post(createUser);
router
  .route("/user/:id")
  .get(getUserByID)
  .put(updateUserByID)
  .delete(deleteUserByID);

module.exports = router;
