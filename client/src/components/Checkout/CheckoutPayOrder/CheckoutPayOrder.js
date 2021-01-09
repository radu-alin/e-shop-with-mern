import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {
  orderDetailsFetch,
  orderCreateReset,
  orderPay,
  orderPayReset,
  ordersListFetchReset,
  cartReset,
} from '../../../redux/actions/index.js';

import OrderDetailsView from '../../Order/OrderDetails/OrderDetailsView/OrderDetailsView';
import { PayPalButton } from 'react-paypal-button-v2';
import Message from '../../UI/Message/Message';
import Spinner from '../../UI/Spinner/Spinner';

const CheckoutPayOrder = ({
  userToken,
  match,
  orderDetails,
  paymentMethod,
  totalPrice,
  isErrorOrderFetch,
  isLoadingOrderPay,
  isSuccessOrderPay,
  onOrderDetailsFetch,
  onOrderCreateReset,
  onOrderPay,
  onOrderPayReset,
  onCartReset,
  onOrdersListFetchReset,
}) => {
  const orderSelectedId = match.params.id;

  useEffect(
    () =>
      orderSelectedId &&
      userToken &&
      onOrderDetailsFetch(userToken, orderSelectedId),
    [userToken, orderSelectedId, onOrderDetailsFetch]
  );
  const [sdkReady, setSdkReady] = useState(false);
  console.log('sdkReady - ', sdkReady);
  console.log('orderDetails - ', orderDetails);

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    paymentMethod === 'PayPal' &&
      orderDetails &&
      !window.paypal &&
      addPayPalScript();
  }, [paymentMethod, orderDetails, sdkReady]);

  useEffect(() => {
    return () => {
      window.paypal &&
        Object.keys(window).forEach((key) => {
          if (/paypal|zoid|post_robot/.test(key)) {
            delete window[key];
          }
        });
      onOrdersListFetchReset();
      onOrderPayReset();
      onOrderCreateReset();
      onCartReset();
    };
  }, [onOrderCreateReset, onOrderPayReset, onCartReset, onOrdersListFetchReset]);

  const successPaymentHandler = (paymentResult) => {
    onOrderPay(userToken, orderDetails._id, paymentResult);
  };

  const isLoadingSummary =
    isLoadingOrderPay ||
    (orderDetails && !window.paypal && paymentMethod === 'PayPal');

  const buttonPayOrderView = (() => {
    if (isSuccessOrderPay) {
      return null;
    }
    if (paymentMethod === 'CashOnDelivery') {
      return null;
    }
    if (paymentMethod === 'PayPal') {
      if (!sdkReady) {
        return null;
      }
      return <PayPalButton amount={totalPrice} onSuccess={successPaymentHandler} />;
    }
  })();

  const orderItems = orderDetails?.orderItems;

  const checkoutPayOrderView = () => {
    if (isErrorOrderFetch) {
      return <Message type="danger" message={isErrorOrderFetch} />;
    }
    if (!orderDetails) {
      return <Spinner />;
    }
    return (
      <OrderDetailsView
        orderDetails={orderDetails}
        orderItems={orderItems}
        isLoading={isLoadingSummary}
      >
        {buttonPayOrderView}
      </OrderDetailsView>
    );
  };

  return <section id="CheckoutPayOrder">{checkoutPayOrderView()}</section>;
};

const mapStateToProps = ({ user: { userToken }, orderDetails, orderPay }) => ({
  userToken,
  orderDetails: orderDetails?.orderDetails,
  paymentMethod: orderDetails?.orderDetails?.paymentMethod,
  totalPrice: orderDetails?.orderDetails?.totalPrice,
  isErrorOrderFetch: orderDetails?.isError,
  isLoadingOrderPay: orderPay.isLoading,
  isSuccessOrderPay: orderPay.isSuccess,
});
const mapDispatchToProps = (dispatch) => ({
  onOrderDetailsFetch: (userToken, orderId) =>
    dispatch(orderDetailsFetch(userToken, orderId)),
  onOrderCreateReset: () => dispatch(orderCreateReset()),
  onOrderPay: (userToken, orderId, paymentResult) =>
    dispatch(orderPay(userToken, orderId, paymentResult)),
  onOrderPayReset: () => dispatch(orderPayReset()),
  onCartReset: () => dispatch(cartReset()),
  onOrdersListFetchReset: () => dispatch(ordersListFetchReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPayOrder);

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
