// import { useEffect } from 'react';
import { connect } from 'react-redux';

import { orderCreate } from '../../../redux/actions/index';

import {
  cartItemsDetailAndCartQuantitySelector,
  cartProductsTotalValueSelector,
  cartShippingCostSelector,
  cartCheckoutTotalValueSelector,
} from '../../../redux/selectors/cartSelector';

import CartDropdownItems from '../../CartDropdown/CartDropdownItems/CartDropdownItems';
import Spinner from '../../UI/Spinner/Spinner';
import Button from '../../UI/Button/Button';

import './CheckoutOrder.scss';

const CheckoutOrder = ({
  shippingAddress,
  paymentMethod,
  cartProductsTotalValue,
  cartShippingCost,
  cartCheckoutTotalValue,
  userToken,
  cartItems,
  onOrderCreate,
  isLoading,
  isError,
  isSuccess,
  order,
  history,
}) => {
  // useEffect(() => isSuccess && order._id && history.push(`/order/${order._id}`), [
  //   history,
  //   isSuccess,
  //   order._id,
  // ]);
  console.log('cartItems - ', cartItems);
  console.log('order - ', order);

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

  return (
    <section id="CheckoutOrder">
      <div className="checkout-order ">
        <div className="checkout-order-content">
          <div className="checkout-order-content-section py-1">
            <h1>Shipping</h1>
            <p>
              {address && city && postalCode && country
                ? `Address: ${address}, City: ${city}, ZipCode: ${postalCode}, Country:
            ${country}.`
                : 'Please enter delivery details.'}
            </p>
            <hr></hr>
          </div>
          <div className="checkout-order-content-section py-1">
            <h1>Payment method</h1>
            <p>
              {paymentMethod.length === 0
                ? 'Please choose a payment method.'
                : `Method: ${paymentMethod}.`}
            </p>
            <hr></hr>
          </div>
          <div className="checkout-order-content-section py-1">
            <h1>Order items</h1>
            <CartDropdownItems />
          </div>
        </div>
        <div className="checkout-order-summary">
          <h1>Summary</h1>
          <p>
            <span>Items:</span>
            <span>
              <strong> ${cartProductsTotalValue}</strong>
            </span>
          </p>
          <hr></hr>
          <p>
            <span>Shipping:</span>
            <span>
              <strong> ${cartShippingCost}</strong>
            </span>
          </p>
          <hr></hr>
          <p>
            <span>TOTAL:</span>
            <span>
              <strong> {cartCheckoutTotalValue}</strong>
            </span>
          </p>
          <hr></hr>
          <div className="checkout-order-summary-spinner">
            {isLoading && <Spinner type="small" />}
          </div>
          <Button
            type="btn-gray-dark"
            disabled={paymentMethod.length === 0 || !address}
            onClickAction={placeOrderButtonClickHandler}
          >
            Place Order
          </Button>
        </div>
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
  isLoading: state.orderCreate.isLoading,
  isError: state.orderCreate.isError,
  isSuccess: state.orderCreate.isSuccess,
  order: state.orderCreate.order,
});

const mapDispatchToProps = (dispatch) => ({
  onOrderCreate: (userToken, orderData) =>
    dispatch(orderCreate(userToken, orderData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutOrder);
