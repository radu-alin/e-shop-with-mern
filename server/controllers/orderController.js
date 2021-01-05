import asyncHandler from 'express-async-handler';

import Order from '../models/orderModel.js';

//@desc Create new order
//@route POST /api/orders
//@access Private
export const postOrderItems = asyncHandler(async (req, res) => {
  console.log('controllers-postOrderItems - ');
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
    return;
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

//@desc Get order by ID
//@route GET /api/orders/:id
//@access Private
export const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user', 'name email');

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

//@desc Put update order to paid
//@route GET /api/orders/:id/pay
//@access Private
export const putOrderToPaid = asyncHandler(async (req, res) => {
  console.log('controllers-putOrderToPay - ');

  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

//@desc GET logged in user orders
//@route GET /api/orders/my-orders
//@access Private
export const getOrdersUserLoggedIn = asyncHandler(async (req, res) => {
  console.log('controllers-getOrdersUserLoggedIn - ');
  console.log('req.user._id', req.user._id);
  const orders = await Order.find({ user: req.user._id });

  res.json(orders);
});
