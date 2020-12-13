import Button from '../../UI/Button /Button';

import './CartDropdown.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-dropdown-items"></div>
    <Button type="btn-gray-dark">GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;
