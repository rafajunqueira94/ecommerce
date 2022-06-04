const Product = require("../models/productModels");

productsGetAll = async (req, res) => {
  console.group("Listar todos os produtos");
  try {
    const product = await Product.find();
    res.json(product);
  } catch (err) {
    res.send("Error get product" + err);
  }
};

productGetById = async (req, res) => {
  console.group("Listar produto por ID");
  try {
    const product = await Product.findById({ _id: req.params.id });
    res.json(product);
  } catch (err) {
    res.send("Error get product" + err);
  }
};

productCreateNew = async (req, res) => {
  console.group("Criar produto");
  const body = req.body;
  const product = new Product(body);
  try {
    const newProduct = await product.save();
    res.json(newProduct);
  } catch (err) {
    res.send("Error post product " + err);
  }
};

productDeleteById = async (req, res) => {
  console.group("Deletar produto por ID");
  try {
    const product = await Product.findOneAndDelete({ _id: req.params.id });
    res.json(product);
  } catch (err) {
    res.send("Error get product " + err);
  }
};

productUpdateById = async (req, res) => {
  console.group("Atualizar produto por ID");
  try {
    const product = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    res.json(product);
  } catch (err) {
    console.log(err);
    res.send(`Server error on update user`);
  }
};
module.exports = {
  productsGetAll,
  productGetById,
  productCreateNew,
  productDeleteById,
  productUpdateById,
};
