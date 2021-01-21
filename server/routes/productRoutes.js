import express from 'express';
const router = express.Router();

import {
  getProductList,
  getProductById,
  postProduct,
  deleteProductById,
} from '../controllers/productController.js';

import {
  authProtectMiddleware,
  authAdminProtectMiddleware,
} from '../middleware/authMiddleware.js';

router
  .route('/')
  .get(getProductList)
  .post(authProtectMiddleware, authAdminProtectMiddleware, postProduct);
router
  .route('/:id')
  .get(getProductById)
  .delete(authProtectMiddleware, authAdminProtectMiddleware, deleteProductById);

export default router;
