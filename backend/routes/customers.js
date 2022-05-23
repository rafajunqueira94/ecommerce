const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");

router.get("/", async (req, res) => {
  try {
    const customer = await Customer.find();
    res.json(customer);
  } catch (err) {
    res.send("Error get customer" + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.json(customer);
  } catch (err) {
    res.send("Error get customer" + err);
  }
});

router.post("/", async (req, res) => {
  const customer = new Customer({
    isActive: req.body.isActive,
    picture: req.body.picture,
    name: req.body.name,
    gender: req.body.gender,
    birthDate: req.body.birthDate,
    email: req.body.email,
    phone: req.body.phone,
    cep: req.body.cep,
    address: req.body.address,
    registered: req.body.registered,
  });

  try {
    const a1 = await customer.save();
    res.json(a1);
  } catch (err) {
    res.send("Error post customer" + err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const customer = await Customer.findByIdAndRemove(req.params.id);
    res.json(customer);
  } catch (err) {
    res.send("Error delete customer " + err + " ID = " + req.params.id);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.json(customer);
  } catch (err) {
    console.log(err);
    res.send(`Server error on update user`);
  }
});

module.exports = router;
