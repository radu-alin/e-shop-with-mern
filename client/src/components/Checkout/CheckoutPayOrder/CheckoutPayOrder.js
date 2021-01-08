import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {
  orderCreateReset,
  orderPay,
  orderPayReset,
  ordersListFetchReset,
  cartReset,
} from '../../../redux/actions/index.js';

import { PayPalButton } from 'react-paypal-button-v2';

import Button from '../../UI/Button/Button';

const CheckoutPayOrder = ({
  userToken,
  orderDetails,
  isLoadingOrderCreate,
  isLoadingOrderPay,
  isSuccessOrderPay,
  history,
  onOrderCreateReset,
  onOrderPay,
  onOrderPayReset,
  onCartReset,
  onOrdersListFetchReset,
}) => {
  // const [sdkReady, setSdkReady] = useState(false);

  // useEffect(() => {
  //   const addPayPalScript = async () => {
  //     const { data: clientId } = await axios.get('/api/config/paypal');
  //     const script = document.createElement('script');
  //     script.type = 'text/javascript';
  //     script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
  //     script.async = true;
  //     script.onload = () => {
  //       setSdkReady(true);
  //     };
  //     document.body.appendChild(script);
  //   };
  //   paymentMethod === 'PayPal' &&
  //     orderCreated &&
  //     !window.paypal &&
  //     addPayPalScript();
  // }, [paymentMethod, orderCreated, sdkReady, onOrderCreateReset]);

  // useEffect(() => {
  //   return () => {
  //     window.paypal &&
  //       Object.keys(window).forEach((key) => {
  //         if (/paypal|zoid|post_robot/.test(key)) {
  //           delete window[key];
  //         }
  //       });
  //     onOrdersListFetchReset();
  //     onOrderPayReset();
  //     onOrderCreateReset();
  //     onCartReset();
  //   };
  // }, [onOrderCreateReset, onOrderPayReset, onCartReset, onOrdersListFetchReset]);

  // const successPaymentHandler = (paymentResult) => {
  //   onOrderPay(userToken, orderCreated._id, paymentResult);
  // };

  // const isLoadingSummary =
  //   isLoadingOrderCreate ||
  //   isLoadingOrderPay ||
  //   (orderCreated && !window.paypal && paymentMethod === 'PayPal');

  // const buttonPayOrderView = () => {
  //   let buttonView = null;
  //   if (isSuccessOrderPay) return null;
  //   if (paymentMethod === 'CashOnDelivery') {
  //     buttonView = !orderCreated ? (
  //       <Button
  //         type="btn-gray-dark"
  //         disabled={paymentMethod.length === 0 || !shippingAddress.address}
  //         onClickAction={placeOrderButtonClickHandler}
  //       >
  //         Place Order
  //       </Button>
  //     ) : null;
  //   }
  //   if (paymentMethod === 'PayPal') {
  //     buttonView = !orderCreated ? (
  //       <Button
  //         type="btn-gray-dark"
  //         disabled={paymentMethod.length === 0 || !!shippingAddress.address}
  //         onClickAction={placeOrderButtonClickHandler}
  //       >
  //         Place Order
  //       </Button>
  //     ) : sdkReady ? (
  //       <PayPalButton
  //         amount={orderCreated.totalPrice}
  //         onSuccess={successPaymentHandler}
  //       />
  //     ) : null;
  //   }
  //   return buttonView;
  // };

  return <h1>CheckoutPayOrder</h1>;
};

const mapStateToProps = ({
  user: { userToken },
  orderDetails: { orderDetails },
  orderPay,
}) => ({
  userToken,
  orderDetails,
  isLoadingOrderPay: orderPay.isLoading,
  isSuccessOrderPay: orderPay.isSuccess,
});
const mapDispatchToProps = (dispatch) => ({
  onOrderCreateReset: () => dispatch(orderCreateReset()),
  onOrderPay: (userToken, orderId, paymentResult) =>
    dispatch(orderPay(userToken, orderId, paymentResult)),
  onOrderPayReset: () => dispatch(orderPayReset()),
  onCartReset: () => dispatch(cartReset()),
  onOrdersListFetchReset: () => dispatch(ordersListFetchReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPayOrder);
