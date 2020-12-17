import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

export const authProtectMiddleware = asyncHandler(async (req, res, next) => {
  let tokenWithBearer = req.headers.authorization;
  let token = tokenWithBearer.split(' ')[1];

  if (tokenWithBearer && tokenWithBearer.startsWith('Bearer')) {
    try {
      const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = await User.findById(tokenDecoded.id).select('-password');
      next();
    } catch (err) {
      console.error(err);
      res.status(401);
      throw new Error('Not authorized, token verification failed.');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized.');
  }
});