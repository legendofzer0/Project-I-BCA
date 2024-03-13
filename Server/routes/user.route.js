const {
  getAllUser,
  createUser,
  getUserByID,
  getUserByEmail,
  getUserByUsername,
  getUserByPhone,
  updateUserByID,
  updateUserRoleByID,
  deleteUserByID,
  changeUserPassword,
} = require("../controller/user.controller");
const genToken = require("../middleware/genToken");
const verifyToken = require("../middleware/verifyToken");
const cookieGet = require("../middleware/cookieGet");

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
router.route("/user/email").post(getUserByEmail);
router.route("/user/phone").post(getUserByPhone);
router.route("/user/role/:id").put(updateUserRoleByID);
router.route("/user/pass/:id").put(changeUserPassword);
router.route("/user/genToken").post(genToken);
router.route("/user/verifyToken").post(verifyToken);

module.exports = router;
