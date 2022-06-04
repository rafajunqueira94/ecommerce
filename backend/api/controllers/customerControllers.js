const Customer = require("../models/customerModels");

customersGetAll = async (req, res) => {
  console.group("Listar todos os clientes");
  try {
    const customer = await Customer.find({});
    res.json(customer);
  } catch (err) {
    res.send("Error get customer" + err);
  }
};

customerGetById = async (req, res) => {
  console.group("Listar cliente por ID");
  try {
    const customer = await Customer.findById({ _id: req.params.id });
    res.json(customer);
  } catch (err) {
    res.send("Error get customer" + err);
  }
};

customerCreateNew = async (req, res) => {
  console.group("Criar produto");
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
};

customerDeleteById = async (req, res) => {
  console.group("Deletar cliente por ID");
  try {
    const customer = await Customer.findOneAndDelete({ _id: req.params.id });
    res.json(customer);
  } catch (err) {
    res.send("Error delete customer " + err + " ID = " + req.params.id);
  }
};

customerUpdateById = async (req, res) => {
  console.group("Atualizar cliente por ID");
  try {
    const customer = await Customer.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    res.json(customer);
  } catch (err) {
    console.log(err);
    res.send(`Server error on update customer`);
  }
};

module.exports = {
  customersGetAll,
  customerGetById,
  customerCreateNew,
  customerDeleteById,
  customerUpdateById,
};
