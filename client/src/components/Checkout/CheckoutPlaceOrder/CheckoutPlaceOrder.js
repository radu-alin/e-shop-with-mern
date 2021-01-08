import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';

import {
  orderCreate,
  orderCreateReset,
  orderPay,
  orderPayReset,
  ordersListFetchReset,
  cartReset,
} from '../../../redux/actions/index';

import {
  cartItemsDetailAndCartQuantitySelector,
  cartShippingCostSelector,
  cartCheckoutTotalValueSelector,
} from '../../../redux/selectors/cartSelector';

import CheckoutOrderView from '../CheckoutOrderView/CheckoutOrderView';

import Button from '../../UI/Button/Button';

const CheckoutPlaceOrder = ({
  userToken,
  shippingAddress,
  paymentMethod,
  shippingPrice,
  totalPrice,
  cartItems,
  isLoadingOrderCreate,
  orderCreated,
  isLoadingOrderPay,
  isSuccessOrderPay,
  history,
  onOrderCreate,
  onOrderCreateReset,
  onOrderPay,
  onOrderPayReset,
  onCartReset,
  onOrdersListFetchReset,
}) => {
  const [sdkReady, setSdkReady] = useState(false);
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
      orderCreated &&
      !window.paypal &&
      addPayPalScript();
  }, [paymentMethod, orderCreated, sdkReady, onOrderCreateReset]);

  useEffect(() => orderCreated && history.push('/checkout/pay-order'), [
    orderCreated,
    history,
  ]);

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
    onOrderPay(userToken, orderCreated._id, paymentResult);
  };

  const placeOrderButtonClickHandler = () => {
    const orderData = {
      orderItems: cartItems,
      shippingAddress,
      paymentMethod,
      shippingPrice,
      totalPrice,
    };
    onOrderCreate(userToken, orderData);
  };

  const buttonOrderPayView = () => {
    let buttonView = null;
    if (isSuccessOrderPay) return null;
    if (paymentMethod === 'CashOnDelivery') {
      buttonView = !orderCreated ? (
        <Button
          type="btn-gray-dark"
          disabled={paymentMethod.length === 0 || !shippingAddress.address}
          onClickAction={placeOrderButtonClickHandler}
        >
          Place Order
        </Button>
      ) : null;
    }
    if (paymentMethod === 'PayPal') {
      buttonView = !orderCreated ? (
        <Button
          type="btn-gray-dark"
          disabled={paymentMethod.length === 0 || !!shippingAddress.address}
          onClickAction={placeOrderButtonClickHandler}
        >
          Place Order
        </Button>
      ) : sdkReady ? (
        <PayPalButton
          amount={orderCreated.totalPrice}
          onSuccess={successPaymentHandler}
        />
      ) : null;
    }
    return buttonView;
  };

  const isLoadingSummary =
    isLoadingOrderCreate ||
    isLoadingOrderPay ||
    (orderCreated && !window.paypal && paymentMethod === 'PayPal');

  const orderDetails = { shippingAddress, paymentMethod, totalPrice, shippingPrice };

  return (
    <section id="CheckoutPlaceOrder">
      <CheckoutOrderView orderDetails={orderDetails} isLoading={isLoadingSummary}>
        {buttonOrderPayView()}
      </CheckoutOrderView>
    </section>
  );
};

const mapStateToProps = (state) => ({
  userToken: state.user.userToken,
  shippingAddress: state.cartCheckoutDetails.shippingAddress,
  paymentMethod: state.cartCheckoutDetails.paymentMethod,
  shippingPrice: cartShippingCostSelector(state),
  totalPrice: cartCheckoutTotalValueSelector(state),
  cartItems: cartItemsDetailAndCartQuantitySelector(state),
  isSuccessOrderCreate: !!state.orderCreate,
  isLoadingOrderCreate: state.orderCreate.isLoading,
  orderCreated: state.orderCreate.orderCreated,
  isLoadingOrderPay: state.orderPay.isLoading,
  isSuccessOrderPay: state.orderPay.isSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  onOrderCreate: (userToken, orderData) =>
    dispatch(orderCreate(userToken, orderData)),
  onOrderCreateReset: () => dispatch(orderCreateReset()),
  onOrderPay: (userToken, orderId, paymentResult) =>
    dispatch(orderPay(userToken, orderId, paymentResult)),
  onOrderPayReset: () => dispatch(orderPayReset()),
  onCartReset: () => dispatch(cartReset()),
  onOrdersListFetchReset: () => dispatch(ordersListFetchReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPlaceOrder);
