const app = require("express");
const router = app.Router();
const { createProduct, getAllProducts, getProductByName, deleteProduct, updateProduct } = require("./Controller");

router.get("/products", getAllProducts);
router.post("/product", createProduct);
router.post("/product-by-name", getProductByName);
router.delete("/product",deleteProduct);
router.put("/product" ,updateProduct);
module.exports = router;
