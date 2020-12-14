import { withRouter } from 'react-router-dom';

import CartProducts from '../CartProducts/CartProducts';
import Button from '../../UI/Button /Button';

import './CartDropdown.scss';

const CartDropdown = ({ history }) => (
  <div className="cart-dropdown">
    <CartProducts />
    <Button type="btn-gray-dark" onClickAction={() => history.push('/checkout')}>
      GO TO CHECKOUT
    </Button>
  </div>
);

export default withRouter(CartDropdown);
