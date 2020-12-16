import express from 'express';

const router = express.Router();

import {
  postUserAuth,
  getUserProfile,
  postUserRegister,
} from '../controllers/userController.js';
import { authProtectMiddleware } from '../middleware/authMiddleware.js';

router.route('/').post(postUserRegister);
router.route('/login').post(postUserAuth);
router.route('/profile').get(authProtectMiddleware, getUserProfile);

export default router;
