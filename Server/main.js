const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
// const dbConnection = require("./db/conn.db");

// //Connect to DB
// const dbConnInstance = new dbConnection();

app.use(express.json());

//route for user
const userRoutes = require("./routes/user.route");
app.use("/", userRoutes);

//route for item
const itemRoutes = require("./routes/item.route");
app.use("/", itemRoutes);

//route for order
const orderRoutes = require("./routes/order.route");
app.use("/", orderRoutes);

//route for cart
const cartRoutes = require("./routes/cart.route");
app.use("/", cartRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

// app.get("/", async (req, res) => {
//   const pool = dbConnInstance.getPool();
//   const { rows: users } = await pool.query(`SELECT * from users`);
//   console.log(users);
// });
