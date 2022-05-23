const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (err) {
    res.send("Error get product" + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.send("Error get product" + err);
  }
});

router.post("/", async (req, res) => {
  const product = new Product({
    img: req.body.img,
    name1: req.body.name1,
    name2: req.body.name2,
    description: req.body.description,
    type: req.body.type,
    price1: req.body.price1,
    rating: req.body.rating,
    hasDiscount: req.body.hasDiscount,
    category: req.body.category,
    stockCount: req.body.stockCount,
    ratingCount: req.body.ratingCount,
  });

  try {
    const a1 = await product.save();
    res.json(a1);
  } catch (err) {
    res.send("Error post product" + err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    res.json(product);
  } catch (err) {
    res.send("Error delete product " + err + " ID = " + req.params.id);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.json(product);
  } catch (err) {
    console.log(err);
    res.send(`Server error on update user`);
  }
});

module.exports = router;
