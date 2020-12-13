import CartProducts from '../CartProducts/CartProducts';
import Button from '../../UI/Button /Button';

import './CartDropdown.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <CartProducts />
    <Button type="btn-gray-dark">GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;
