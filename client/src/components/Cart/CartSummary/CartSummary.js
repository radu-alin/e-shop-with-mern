import { connect } from 'react-redux';

import { cartProductsTotalValueSelector } from '../../../redux/selectors/cartSelector';

import Button from '../../UI/Button/Button';

import './CartSummary.scss';

const CartSummary = ({ cartItemsValue, checkoutButtonClickHandler }) => (
  <div className="cart-summary">
    <div className="cart-summary-total">
      <span>
        <strong>TOTAL:</strong>
      </span>
      <span>
        <strong>${cartItemsValue ? cartItemsValue.toFixed(2) : 0}</strong>
      </span>
    </div>
    <Button
      type="btn-gray-dark"
      onClickAction={checkoutButtonClickHandler}
      disabled={cartItemsValue === 0}
    >
      Checkout
    </Button>
    <hr></hr>
  </div>
);

const mapStateToProps = (state) => ({
  cartItemsValue: cartProductsTotalValueSelector(state),
});

export default connect(mapStateToProps)(CartSummary);
