const {
  getAllUser,
  createUser,
  getUserByID,
  getUserByUsername,
  updateUserByID,
  updateUserRoleByID,
  deleteUserByID,
  changeUserPassword,
} = require("../controller/user.controller");

const router = require("express").Router();
// const verifyAdmin = require("../middleware/verifyAdmin");
// const verifyToken = require("../middleware/verifyToken");

// router.use(verifyToken);
router.route("/user").get(getAllUser).post(createUser);
router.route("/user/search").get(getUserByUsername);
router
  .route("/user/:id")
  .get(getUserByID)
  .put(updateUserByID)
  .delete(deleteUserByID);
router.route("/user/role/:id").put(updateUserRoleByID);
router.route("/user/pass/:id").put(changeUserPassword);
module.exports = router;
