const express = require("express");
const userRoutes = express.Router();
const controller = require("../controllers/userControllers");

userRoutes.get("/", controller.usersGetAll);

userRoutes.get("/:id", controller.userGetById);

userRoutes.post("/new", controller.userCreateNew);

userRoutes.put("/update/:id", controller.userUpdateById);

userRoutes.delete("/delete/:id", controller.userDeleteById);


module.exports = userRoutes;
