const express = require("express");
const customerRoutes = express.Router();
const controller = require("../controllers/customerControllers");

customerRoutes.get("/", controller.customersGetAll);

customerRoutes.get("/:id", controller.customerGetById);

customerRoutes.post("/new", controller.customerCreateNew);

customerRoutes.put("/update/:id", controller.customerUpdateById);

customerRoutes.delete("/delete/:id", controller.customerDeleteById);


module.exports = customerRoutes;
// export default customerRoutes

