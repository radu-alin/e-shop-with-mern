import express from 'express';
const router = express.Router();

import {
  getProductList,
  getProductById,
  postProduct,
  putProductById,
  deleteProductById,
  postProductReview,
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
  .put(authProtectMiddleware, authAdminProtectMiddleware, putProductById)
  .delete(authProtectMiddleware, authAdminProtectMiddleware, deleteProductById);
router.route('/:id/reviews').post(authProtectMiddleware, postProductReview);

export default router;
