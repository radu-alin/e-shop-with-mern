import express from 'express';

const router = express.Router();

import {
  postOrderItems,
  getOrderById,
  putOrderToPaid,
  getOrdersUserLoggedIn,
} from '../controllers/orderController.js';
import { authProtectMiddleware } from '../middleware/authMiddleware.js';

router.route('/').post(authProtectMiddleware, postOrderItems);

router.route('/my-orders').get(authProtectMiddleware, getOrdersUserLoggedIn);

router.route('/:id').get(authProtectMiddleware, getOrderById);

router.route('/:id/pay').put(authProtectMiddleware, putOrderToPaid);

export default router;
