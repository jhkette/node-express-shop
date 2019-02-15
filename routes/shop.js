const express = require('express');
const path = require('path');
const rootDir = require('../util/path')
const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res)=>{
    const products = adminData.products;
    res.render('shop', {prods: products, docTitle: 'Shop', pageTitle: 'Shop',  path: '/'});
});

module.exports = router;