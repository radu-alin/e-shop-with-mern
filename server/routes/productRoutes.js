import express from 'express';
const router = express.Router();

import { getProductList, getProductById } from '../controllers/productController.js';

router.get('/', getProductList);
router.get('/:id', getProductById);

export default router;
