const router = require("express").Router();
const { createProduct, getProducts, getProduct, updateProduct, deleteProduct } = require("../controllers/create-product.controller");

router.post("/create/product", createProduct);
router.get("/get/products", getProducts);
router.get("/get/product/:id", getProduct);
router.put("/update/product/:id", updateProduct);
router.delete("/delete/product/:id", deleteProduct);

module.exports = router;