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

//@desc CREATE product
//@route POST /api/products
//@access Private/Admin
export const postProduct = asyncHandler(async (req, res) => {
  const {
    brand,
    name,
    category,
    description,
    price,
    countInStock,
    image,
  } = req.body;
  const product = new Product({
    user: req.user._id,
    numReviews: 0,
    brand,
    name,
    category,
    description,
    price,
    countInStock,
    image,
  });

  const createdProduct = await product.save();
  res.status(201).json('Product created.');
});
//@desc UPDATE single product
//@route PUT /api/products/:id
//@access Private/Admin
export const putProductById = asyncHandler(async (req, res) => {
  const {
    brand,
    name,
    category,
    description,
    price,
    countInStock,
    image,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.brand = brand || product.brand;
    product.name = name || product.name;
    product.category = category || product.category;
    product.description = description || product.description;
    product.price = price || product.price;
    product.countInStock = countInStock || product.countInStock;
    product.image = image || product.image;

    const updatedProduct = await product.save();
    updatedProduct && res.status(201).json('Product updated.');
  } else {
    res.status(404);
    throw new Error('Product not found.');
  }
});

//@desc DELETE single product
//@route DELETE /api/products/:id
//@access Private/Admin
export const deleteProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: 'Product removed.', productId: product._id });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});
