import asyncHandler from 'express-async-handler';

import Product from '../models/productModel.js';

//@desc GET all products
//@route GET /api/products
//@access Public
export const getProductList = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@desc GET single product
//@route GET /api/products/:id
//@access Public
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});
