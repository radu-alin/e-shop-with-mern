import express from 'express';

const router = express.Router();

import { postOrderItems } from '../controllers/orderController.js';
import { authProtectMiddleware } from '../middleware/authMiddleware.js';

router.route('/').post(authProtectMiddleware, postOrderItems);

export default router;
