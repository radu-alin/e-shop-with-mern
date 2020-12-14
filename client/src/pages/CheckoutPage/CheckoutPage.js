import { connect } from 'react-redux';

import CheckoutProducts from '../../components/Checkout/CheckoutProducts/CheckoutProducts';

import './CheckoutPage.scss';

import {
  cartProductsSelector,
  cartTotalValueSelector,
} from '../../redux/selectors/cartSelector';

const CheckoutPage = ({ cartProducts, cartTotalValue }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-page-header py-1">
        <div className="checkout-page-header-block">
          <span>
            <strong>Product</strong>
          </span>
        </div>
        <div className="checkout-page-header-block">
          <span>
            <strong>Name</strong>
          </span>
        </div>
        <div className="checkout-page-header-block">
          <span>
            <strong>Quantity</strong>
          </span>
        </div>
        <div className="checkout-page-header-block">
          <span>
            <strong>Price</strong>
          </span>
        </div>
        <div className="checkout-page-header-block">
          <span>
            <strong>Remove</strong>
          </span>
        </div>
      </div>
      {cartProducts.length ? (
        <CheckoutProducts cartProducts={cartProducts} />
      ) : (
        <h1 className="py-1">Please Add Products for Checkout</h1>
      )}

      <div className="checkout-page-total">
        <span>
          <strong>TOTAL: ${cartTotalValue.toFixed(2)}</strong>
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartProducts: cartProductsSelector(state),
  cartTotalValue: cartTotalValueSelector(state),
});

export default connect(mapStateToProps)(CheckoutPage);
