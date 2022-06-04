const express = require("express");
const productRoutes = express.Router();
const controller = require("../controllers/productController");

productRoutes.get("/", controller.productsGetAll);

productRoutes.get("/:id", controller.productGetById);

productRoutes.post("/new", controller.productCreateNew);

productRoutes.put("/update/:id", controller.productUpdateById);

productRoutes.delete("/delete/:id", controller.productDeleteById);

module.exports = productRoutes;
