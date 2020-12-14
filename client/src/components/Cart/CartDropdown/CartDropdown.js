import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { cartToggleHidden as onCartToggleHidden } from '../../../redux/actions/index';

import CartProducts from '../CartProducts/CartProducts';
import Button from '../../UI/Button /Button';

import './CartDropdown.scss';

const CartDropdown = ({ history, dispatch }) => (
  <div className="cart-dropdown">
    <CartProducts />
    <Button
      type="btn-gray-dark"
      onClickAction={() => {
        history.push('/checkout');
        dispatch(onCartToggleHidden());
      }}
    >
      GO TO CHECKOUT
    </Button>
  </div>
);

export default withRouter(connect(null)(CartDropdown));
