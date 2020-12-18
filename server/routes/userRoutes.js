import express from 'express';

const router = express.Router();

import {
  postUserRegister,
  postUserLogin,
  getUserProfile,
  putUserProfile,
} from '../controllers/userController.js';
import { authProtectMiddleware } from '../middleware/authMiddleware.js';

router.route('/').post(postUserRegister);
router.route('/login').post(postUserLogin);
router
  .route('/profile')
  .get(authProtectMiddleware, getUserProfile)
  .put(authProtectMiddleware, putUserProfile);

export default router;
