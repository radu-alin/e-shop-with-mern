import { connect } from 'react-redux';

import {
  cartTotalValueSelector,
  cartShippingCostSelector,
} from '../../../redux/selectors/cartSelector';

import CartDropdownProducts from '../../CartDropdown/CartDropdownProducts/CartDropdownProducts';
import Button from '../../UI/Button/Button';

import './CheckoutOrder.scss';

const CheckoutOrder = ({
  address,
  city,
  postalCode,
  country,
  paymentMethod,
  cartTotalValue,
  cartShippingCost,
}) => (
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
          <CartDropdownProducts />
        </div>
      </div>
      <div className="checkout-order-summary">
        <h1>Summary</h1>
        <p>
          <span>Items:</span>
          <span>
            <strong> ${cartTotalValue}</strong>
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
            <strong> ${cartTotalValue + cartShippingCost}</strong>
          </span>
        </p>
        <hr></hr>
        <Button
          type="btn-gray-dark"
          disabled={paymentMethod.length === 0 || !address}
        >
          Place Order
        </Button>
      </div>
    </div>
  </section>
);

const mapStateToProps = (state) => ({
  address: state.cart.shippingAddress.address,
  city: state.cart.shippingAddress.city,
  postalCode: state.cart.shippingAddress.postalCode,
  country: state.cart.shippingAddress.country,
  paymentMethod: state.cart.paymentMethod,
  cartTotalValue: cartTotalValueSelector(state),
  cartShippingCost: cartShippingCostSelector(state),
});

export default connect(mapStateToProps)(CheckoutOrder);
