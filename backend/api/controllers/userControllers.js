const User = require("../models/userModels");

usersGetAll = async (req, res) => {
  console.group("Listar todos os usuários");
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.send("Error get " + err);
  }
};

userGetById = async (req, res) => {
  console.group("Listar usuário por ID");
  try {
    const user = await User.findById({ _id: req.params.id });
    res.json(user);
  } catch (err) {
    res.send("Error get users " + err);
  }
};

userCreateNew = async (req, res) => {
  console.group("Criar usuário");
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
    res.send("Error post users " + err);
  }
};

userDeleteById = async (req, res) => {
  console.group("Deletar usuário por ID");
  if (!movie) {
    return res.status(404).json({ success: false, error: `Movie not found` });
  }
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    res.json(user);
  } catch (err) {
    res.status(400).json({ success: false, error: err });
  }
};

userUpdateById = async (req, res) => {
  console.group("Atualizar usuário por ID");
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    res.json(user);
  } catch (err) {
    console.log(err);
    res.send(`Error update user ${err}`);
  }
};

module.exports = {
  usersGetAll,
  userGetById,
  userCreateNew,
  userDeleteById,
  userUpdateById,
};
