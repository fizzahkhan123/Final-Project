const app = require("express");
const router = app.Router();
const { createProduct, getAllProducts, getProductById, deleteProduct, updateProduct } = require("./Controller");

router.get("/products", getAllProducts);
router.post("/product", createProduct);
router.get("/product-by-id/:id", getProductById);
router.delete("/product",deleteProduct);
router.put("/product" ,updateProduct);
module.exports = router;
