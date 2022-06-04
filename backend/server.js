const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const apiPort = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

// const userController = require("./api/controllers/userControllers");
// const customerController = require("./api/controllers/customerControllers");
// const productController = require("./api/controllers/productController");
const userRoutes = require("./api/routes/userRoutes");
const productRoutes = require("./api/routes/productRoutes");
const customerRoutes = require("./api/routes/customerRoutes");

mongoose.connect(
  "mongodb+srv://dbUser:Bf7C2Cs0x8NEfaSP@cluster0.br4dq.mongodb.net/briandaPratas?retryWrites=true&w=majority"
);

// ***
// app.use("/", productRoutes);

app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/customer", customerRoutes);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
