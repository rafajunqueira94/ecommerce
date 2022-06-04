const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  img: { data: Buffer, contentType: String },
  name1: String,
  name2: String,
  description: String,
  type: { type: String, enu: ["promo", "trending"] },
  price1: {
    type: Number,
    min: [1, "Preços de 0.05 - 999999"],
    max: [999999, "Preços de 0.05 - 999999"],
  },
  rating: {
    type: Number,
    min: [0, "Avalie com uma nota de 0-5"],
    max: [5, "Avalie com uma nota de 0-5"],
  },
  hasDiscount: {
    type: Number,
    min: [0, "Descontos de 0-90%"],
    max: [90, "Descontos de 0-90%"],
  },
  category: String,
  stockCount: Number,
  ratingCount: Number,
});

module.exports = mongoose.model("Product", productSchema);
