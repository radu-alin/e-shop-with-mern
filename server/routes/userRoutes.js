import express from 'express';

const router = express.Router();

import {
  postUserRegister,
  postUserLogin,
  getUserProfile,
  putUserProfile,
  getUsers,
  deleteUser,
  putUserAsAdmin,
} from '../controllers/userController.js';
import {
  authProtectMiddleware,
  authAdminProtectMiddleware,
} from '../middleware/authMiddleware.js';

router
  .route('/')
  .get(authProtectMiddleware, authAdminProtectMiddleware, getUsers)
  .post(postUserRegister);

router
  .route('/:id')
  .delete(authProtectMiddleware, authAdminProtectMiddleware, deleteUser)
  .put(authProtectMiddleware, authAdminProtectMiddleware, putUserAsAdmin);

router.route('/login').post(postUserLogin);

router
  .route('/profile')
  .get(authProtectMiddleware, getUserProfile)
  .put(authProtectMiddleware, putUserProfile);

export default router;
