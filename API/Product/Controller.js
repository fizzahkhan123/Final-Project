const products = require("./Model");
const { connect } = require("mongoose");
require("dotenv").config();

const createProduct = async (req, res) => {
  const { ProductName, ProductImage, ProductCategory, ProductPrice, ProductDescription } = req.body;
  
  try {
    await connect(process.env.MONGO_URI);
    // console.log("DB CONNECTED")

    const checkExist = await products.exists({ ProductName });

    if (checkExist) {
      res.status(208).json({
        message: "Product Already Exist",
      });
    } else {
      await products.create({
        ProductName,
        ProductImage,
        ProductCategory,
        ProductPrice,
        ProductDescription
      });

      res.status(201).json({
        message: "Done",
      });
    }
  } catch (error) {
    res.json({
      message: "error " + error.message,
    });
  }
};

//api/getAllProducts/products

const getAllProducts = async (req, res) => {
  try {
    await connect(process.env.MONGO_URI);
    const Product = await products.find();

    res.json({
      products: Product,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};
//api/getProductByName/product

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    console.log("param got", id);
    await connect(process.env.MONGO_URI);
    const Product = await products.find({ _id: id });
    console.log('product', Product);
    res.json({
      Product: Product,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  const {Id} = req.body;
console.log("ran")
  try {
    await connect(process.env.MONGO_URI);
    const deletedProduct = await products.findByIdAndDelete(Id);

    if (!deletedProduct) {
       res.status(404).json({
        message: `Product with ID '${Id}' not found`,
      });
    }

    res.json({
      message: `Product with ID '${Id}' has been deleted`,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  const update = { ProductName, ProductImage, ProductCategory, ProductPrice } = req.body;
  
  console.log(
    "function update product",
    ProductName,
    ProductImage,
    ProductPrice,
    ProductCategory
  );
  try {
    await connect(process.env.MONGO_URI);
    // console.log("DB CONNECTED")

    const updateProduct = await products.exists({ update });

    if (!updateProduct) {
      res.status(404).json({
        message: "Product not Found",
      });
    } else {
      await products.update({
        ProductName,
        ProductImage,
        ProductCategory,
        ProductPrice,
      });

      res.status(201).json({
        message: "Done",
      });
    }
  } catch (error) {
    res.json({
      message: "error " + error.message,
    });
  }
}; 

//const postProducts = (req, res) => {
//res.json({
//message: "Product Added Successfully",
//});
//};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct,
};
