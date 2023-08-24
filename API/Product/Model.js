const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  ProductName: {
    type: String,
    required: true,
    unique: true
  },
  ProductDescription: {
    type: String,
    required: false,
    unique: false
  },
  ProductImage: {
    type: String,
    unique: false,
    default: "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg"
  },
  ProductCategory: {
    type: String,
    unique: false,
    required: true
  },
  ProductPrice: {
    type: String,
    unique: false,
    required: true
  }
});

const products = model('products', ProductSchema)
module.exports = products;
