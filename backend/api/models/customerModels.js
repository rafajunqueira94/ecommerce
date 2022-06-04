const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  isActive: Boolean,
  picture: { data: Buffer, contentType: String },
  name: String,
  gender: { type: String, enum: ["Masculino", "Feminino", "Outro"] },
  birthDate: Date,
  email: { type: String, unique: true },
  phone: String,
  cep: String,
  address: String,
  registered: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Customer", customerSchema);
