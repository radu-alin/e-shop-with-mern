import express from 'express';

const router = express.Router();

import { postOrderItems, getOrderById } from '../controllers/orderController.js';
import { authProtectMiddleware } from '../middleware/authMiddleware.js';

router.route('/').post(authProtectMiddleware, postOrderItems);
router.route('/:id').get(authProtectMiddleware, getOrderById);

export default router;
