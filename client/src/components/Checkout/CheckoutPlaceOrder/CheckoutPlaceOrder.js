import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';

import {
  orderCreate,
  orderCreateReset,
  orderPay,
  orderPayReset,
  orderListUserFetchReset,
  cartReset,
} from '../../../redux/actions/index';

import {
  cartItemsDetailAndCartQuantitySelector,
  cartProductsTotalValueSelector,
  cartShippingCostSelector,
  cartCheckoutTotalValueSelector,
} from '../../../redux/selectors/cartSelector';

import CartDropdownItems from '../../CartDropdown/CartDropdownItems/CartDropdownItems';
import OrderSection from '../../Section/OrderSection/OrderSection';
import OrderSummary from '../../Summary/OrderSummary/OrderSummary';
import Message from '../../UI/Message/Message';
import Button from '../../UI/Button/Button';

import './CheckoutPlaceOrder.scss';

const CheckoutPlaceOrder = ({
  shippingAddress,
  paymentMethod,
  cartProductsTotalValue,
  cartShippingCost,
  cartCheckoutTotalValue,
  userToken,
  cartItems,
  isLoadingOrderCreate,
  orderCreated,
  isLoadingOrderPay,
  isSuccessOrderPay,
  onOrderCreate,
  onOrderCreateReset,
  onOrderPay,
  onOrderPayReset,
  onCartReset,
  onOrderListUserFetchReset,
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

  useEffect(() => {
    return () => {
      window.paypal &&
        Object.keys(window).forEach((key) => {
          if (/paypal|zoid|post_robot/.test(key)) {
            delete window[key];
          }
        });
      onOrderListUserFetchReset();
      onOrderPayReset();
      onOrderCreateReset();
      onCartReset();
    };
  }, [onOrderCreateReset, onOrderPayReset, onCartReset, onOrderListUserFetchReset]);

  const successPaymentHandler = (paymentResult) => {
    onOrderPay(userToken, orderCreated._id, paymentResult);
  };

  const placeOrderButtonClickHandler = () => {
    const orderData = {
      orderItems: cartItems,
      shippingAddress,
      paymentMethod,
      itemsPrice: cartProductsTotalValue,
      shippingPrice: cartShippingCost,
      totalPrice: cartCheckoutTotalValue,
    };
    onOrderCreate(userToken, orderData);
  };

  const { address, city, postalCode, country } = shippingAddress;

  const buttonOrderPayView = () => {
    let buttonView = null;
    if (isSuccessOrderPay) return null;
    if (paymentMethod === 'CashOnDelivery') {
      buttonView = !orderCreated ? (
        <Button
          type="btn-gray-dark"
          disabled={paymentMethod.length === 0 || !address}
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
          disabled={paymentMethod.length === 0 || !address}
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

  return (
    <section id="CheckoutPlaceOrder">
      <div className="checkout-place-order ">
        <div className="checkout-place-order-content">
          <OrderSection title="Shipping">
            {address && city && postalCode && country ? (
              `Address: ${address}, City: ${city}, ZipCode: ${postalCode}, Country:
            ${country}.`
            ) : (
              <Message type="danger" message="Please enter shipping details." />
            )}
          </OrderSection>
          <OrderSection title="Payment Method">
            {paymentMethod.length === 0 ? (
              <Message type="danger" message="Please choose a payment method." />
            ) : (
              `Method: ${paymentMethod}.`
            )}
          </OrderSection>
          <OrderSection title="Order Items">
            <CartDropdownItems />
          </OrderSection>
        </div>
        <OrderSummary
          cartProductsTotalValue={cartProductsTotalValue}
          cartShippingCost={cartShippingCost}
          cartCheckoutTotalValue={cartCheckoutTotalValue}
          isLoading={
            isLoadingOrderCreate ||
            isLoadingOrderPay ||
            (orderCreated && !window.paypal && paymentMethod === 'PayPal')
          }
        >
          {buttonOrderPayView()}
        </OrderSummary>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  userToken: state.user.userToken,
  shippingAddress: state.cartCheckoutDetails.shippingAddress,
  paymentMethod: state.cartCheckoutDetails.paymentMethod,
  cartProductsTotalValue: cartProductsTotalValueSelector(state),
  cartShippingCost: cartShippingCostSelector(state),
  cartCheckoutTotalValue: cartCheckoutTotalValueSelector(state),
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
  onOrderListUserFetchReset: () => dispatch(orderListUserFetchReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPlaceOrder);
