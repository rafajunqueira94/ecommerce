const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.send("Error get" + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.send("Error get" + err);
  }
});

router.post("/", async (req, res) => {
  const user = new User({
    login: req.body.login,
    name: req.body.name,
    gender: req.body.gender,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    registered: req.body.registered,
  });

  try {
    const a1 = await user.save();
    res.json(a1);
  } catch (err) {
    res.send("Error post" + err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    res.json(user);
  } catch (err) {
    res.send("Error delete " + err + " ID = " + req.params.id);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
    );
    res.json(user);
  } catch (err) {
    console.log(err);
    res.send(`Server error on update user`);
  }
});

module.exports = router;
