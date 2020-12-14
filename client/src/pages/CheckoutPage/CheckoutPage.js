import './CheckoutPage.scss';
import { connect } from 'react-redux';

import {
  cartProductsSelector,
  cartTotalValueSelector,
} from '../../redux/selectors/cartSelector';

const CheckoutPage = ({ cartProducts, cartTotalValue }) => {
  console.log('cartProducts - ', cartProducts);
  const renderCartProducts = () => cartProducts.map((cartProduct) => <h1>Hello</h1>);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Name</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {renderCartProducts()}
      <div className="checkout-total">
        <span>TOTAL: $ {cartTotalValue}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartProducts: cartProductsSelector(state),
  cartTotalValue: cartTotalValueSelector(state),
});

export default connect(mapStateToProps)(CheckoutPage);
