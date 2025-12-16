const express = require('express');
const router = express.Router();
const { createProduct, 
        getAllProducts, 
        getProductById,
         updateProductById, 
        deleteProductById ,
        searchProductByName } = require('../Controller/productController');

// Create a new product
router.post('/', createProduct);
// Get all products
router.get('/', getAllProducts);
// Get a product by ID
router.get('/:id', getProductById);
// Update a product by ID   
router.put('/:id', updateProductById);
// Delete a product by ID
router.delete('/:id', deleteProductById);
// Search products by name
router.get('/search/:name', searchProductByName);
module.exports = router;