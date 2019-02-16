const path = require('path');
const express = require('express');
const adminData = require('./admin');
const productsController = require('../controllers/products')

const router = express.Router();

router.get('/products', productsController.getProducts)

module.exports = router;