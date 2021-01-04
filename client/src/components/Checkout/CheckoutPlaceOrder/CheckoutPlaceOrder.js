import { useEffect } from 'react';
import { connect } from 'react-redux';

import { orderCreate, orderSuccessReset } from '../../../redux/actions/index';

import {
  cartItemsDetailAndCartQuantitySelector,
  cartProductsTotalValueSelector,
  cartShippingCostSelector,
  cartCheckoutTotalValueSelector,
} from '../../../redux/selectors/cartSelector';

import CartDropdownItems from '../../CartDropdown/CartDropdownItems/CartDropdownItems';
import Spinner from '../../UI/Spinner/Spinner';
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
  isLoading,
  onOrderCreate,
  onOrderSuccessReset,
}) => {
  useEffect(() => {
    return () => onOrderSuccessReset();
  }, [onOrderSuccessReset]);

  const placeOrderButtonClickHandler = () => {
    const orderData = {
      orderItems: cartItems,
      shippingAddress,
      paymentMethod,
      itemsPrice: cartProductsTotalValue,
      shippingPrice: cartShippingCost,
      totalPrice: cartCheckoutTotalValue,
    };
    if (paymentMethod === 'CashOnDelivery') {
      return onOrderCreate(userToken, orderData);
    } else {
      console.log('credit card pay');
    }
  };

  const { address, city, postalCode, country } = shippingAddress;

  return (
    <section id="CheckoutPlaceOrder">
      <div className="checkout-place-order ">
        <div className="checkout-place-order-content">
          <div className="checkout-place-order-content-section">
            <h1>Shipping</h1>
            <p>
              {address && city && postalCode && country
                ? `Address: ${address}, City: ${city}, ZipCode: ${postalCode}, Country:
            ${country}.`
                : 'Please enter delivery details.'}
            </p>
            <hr></hr>
          </div>
          <div className="checkout-place-order-content-section">
            <h1>Payment method</h1>
            <p>
              {paymentMethod.length === 0
                ? 'Please choose a payment method.'
                : `Method: ${paymentMethod}.`}
            </p>
            <hr></hr>
          </div>
          <div className="checkout-place-order-content-section">
            <h1>Order items</h1>
            <CartDropdownItems />
          </div>
        </div>
        <div className="checkout-place-order-subtotal">
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
          <div className="checkout-place-order-subtotal-spinner">
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
});

const mapDispatchToProps = (dispatch) => ({
  onOrderCreate: (userToken, orderData) =>
    dispatch(orderCreate(userToken, orderData)),
  onOrderSuccessReset: () => dispatch(orderSuccessReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPlaceOrder);
