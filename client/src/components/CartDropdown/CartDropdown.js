import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { cartToggleHidden as onCartToggleHidden } from '../../redux/actions/index';

import CartDropdownProducts from './CartDropdownProducts/CartDropdownProducts';
import Button from '../UI/Button/Button';

import './CartDropdown.scss';

const CartDropdown = ({ history, dispatch }) => (
  <section id="CartDropdown">
    <div className="cart-dropdown">
      <CartDropdownProducts />
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
  </section>
);

export default withRouter(connect(null)(CartDropdown));
