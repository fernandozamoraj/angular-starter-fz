const express = require('express');
const product_controller = require('../controller/product_controller');

const router = express.Router();

// Get all products
router.get('/api/products', product_controller.getAll);

// Create a new product
router.post('/api/products', product_controller.addOne);

// Update a product by code
router.put('/api/products/:code', product_controller.updateOne);

// Get a product by id
router.get('/api/products/:code', product_controller.getOne);

module.exports = router;
