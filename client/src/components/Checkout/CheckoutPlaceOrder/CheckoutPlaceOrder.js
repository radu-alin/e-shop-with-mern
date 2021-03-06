import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { orderCreate } from '../../../redux/actions/index';

import {
  cartItemsDetailAndCartQuantitySelector,
  cartShippingCostSelector,
  cartCheckoutTotalValueSelector,
} from '../../../redux/selectors/cartSelector';

import OrderDetailsView from '../../Order/OrderDetails/OrderDetailsView/OrderDetailsView';

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
  onOrderCreate,
}) => {
  let history = useHistory();

  useEffect(
    () => orderCreated && history.push(`/checkout/pay-order/${orderCreated?._id}`),
    [orderCreated, history]
  );

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

  const buttonPlaceOrderView = (() => (
    <Button
      type='btn-gray-dark'
      disabled={paymentMethod.length === 0 || !shippingAddress.address}
      onClickAction={placeOrderButtonClickHandler}>
      Place Order
    </Button>
  ))();

  const isLoadingSummary = isLoadingOrderCreate;
  const orderDetails = { shippingAddress, paymentMethod, totalPrice, shippingPrice };

  return (
    <section id='CheckoutPlaceOrder'>
      <OrderDetailsView
        orderDetails={orderDetails}
        orderItems={false}
        isPaid={false}
        isLoading={isLoadingSummary}>
        {buttonPlaceOrderView}
      </OrderDetailsView>
      {paymentMethod === 'PayPal' && (
        <>
          <hr></hr>
          PayPal test credentials:{' '}
          <strong>username: sb-yvxrp4651694@personal.example.com</strong> , password:
          <strong> 4"Itn/aa</strong>
        </>
      )}
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
  orderCreated: state.orderCreate.orderCreated,
  isLoadingOrderCreate: state.orderCreate.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onOrderCreate: (userToken, orderData) =>
    dispatch(orderCreate(userToken, orderData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPlaceOrder);
