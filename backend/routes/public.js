// backend/routes/public.js
const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const Product = require('../models/Product');

// Public services
router.get('/services', async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

// Public products
router.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;