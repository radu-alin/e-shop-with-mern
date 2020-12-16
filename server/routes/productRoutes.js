import express from 'express';
const router = express.Router();

import { getProductsAll, getProductById } from '../controllers/productController.js';

router.get('/', getProductsAll);
router.get('/:id', getProductById);

export default router;
